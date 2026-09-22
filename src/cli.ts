import { localInspect } from "./dfa.js";
import { callCloudInspect, OFFICIAL_WEB_URL } from "./client.js";
import { startMcpServer } from "./mcp-server.js";
import { parseArgs } from "node:util";

export async function runCli() {
  const { values, positionals } = parseArgs({
    options: {
      text: { type: "string", short: "t" },
      platform: { type: "string", short: "p", default: "goofish" },
      mcp: { type: "boolean", default: false },
      json: { type: "boolean", default: false },
      help: { type: "boolean", short: "h", default: false },
      version: { type: "boolean", short: "v", default: false },
    },
    allowPositionals: true,
  });

  const cmd = positionals[0]?.toLowerCase();
  if (cmd === "cloud" || cmd === "web") {
    console.log(`🚀 Opening MatrixGuard Cloud Workbench: ${OFFICIAL_WEB_URL}`);
    const { exec } = await import("node:child_process");
    exec(`open "${OFFICIAL_WEB_URL}" 2>/dev/null || xdg-open "${OFFICIAL_WEB_URL}" 2>/dev/null`);
    return;
  }

  if (cmd === "sop") {
    const sopUrl = "https://guard-mac.nanocompress.com/sop";
    console.log(`📖 Opening Anti-Ban Fingerprint SOP Guide: ${sopUrl}`);
    const { exec } = await import("node:child_process");
    exec(`open "${sopUrl}" 2>/dev/null || xdg-open "${sopUrl}" 2>/dev/null`);
    return;
  }

  if (values.mcp) {
    startMcpServer();
    return;
  }

  if (values.version) {
    console.log("open-matrix-guard v1.2.0 (MIT License)");
    return;
  }

  if (values.help || !values.text) {
    console.log(`
🛡️  Open MatrixGuard - Multi-Platform Marketing Compliance Inspector (CLI & MCP)
================================================================================

Usage:
  npx open-matrix-guard -t "<text>" [-p <platform>] [--json]
  npx open-matrix-guard --mcp
  npx open-matrix-guard cloud
  npx open-matrix-guard sop

Commands:
  cloud                      Open official Cloud Workbench in default browser
  sop                        Open anti-ban fingerprint SOP guide in default browser

Options:
  -t, --text <string>        Text content to inspect (e.g. promotional post, DM, comment)
  -p, --platform <string>    Target platform: goofish (闲鱼), xiaohongshu (小红书), reddit (Default: goofish)
      --json                 Output result in structured JSON format (for CI/CD pipelines)
      --mcp                  Start stdio MCP Server (for Claude Desktop / Cursor / Windsurf)
  -h, --help                 Show this help message
  -v, --version              Show version info

Official Web SaaS & Google Accounts Hub:
  👉 ${OFFICIAL_WEB_URL} (Hosted Web · Zero-Config · Real-Time Anti-Ban Secret Codes)
`);
    return;
  }

  const content = values.text;
  const platform = (values.platform as any) || "goofish";

  // 尝试云端高级体检，回退至本地
  const cloudRes = await callCloudInspect({ content, platform });
  let result: any;
  let source = "cloud";

  if (cloudRes.success && cloudRes.data) {
    result = cloudRes.data;
    source = "cloud";
  } else {
    const local = localInspect(content, platform);
    result = {
      riskScore: local.riskScore,
      riskLevel: local.riskLevel,
      matchedWords: local.matches,
      summary: local.tip,
    };
    source = "local_dfa";
  }

  if (values.json) {
    console.log(
      JSON.stringify(
        {
          platform,
          source,
          ...result,
          officialWebUrl: OFFICIAL_WEB_URL,
        },
        null,
        2
      )
    );
    return;
  }

  console.log(`\n🔍 Inspecting content for [${platform.toUpperCase()}]...`);
  if (source === "cloud") {
    console.log("⚡ [Cloud Engine Connected] Using live real-time rule dictionary:");
  } else {
    console.log("📦 [Local Engine] Using offline DFA state machine:");
  }

  console.log("--------------------------------------------------------------------------------");
  const levelBadge =
    result.riskLevel === "HIGH"
      ? "🔴 HIGH (Severe Risk / Ban Warning)"
      : result.riskLevel === "MEDIUM"
      ? "🟡 MEDIUM (Shadowban Warning)"
      : result.riskLevel === "LOW"
      ? "🔵 LOW (Optimization Advised)"
      : "🟢 SAFE (Compliant)";

  console.log(`📊 Risk Score: ${result.riskScore}/100 [Level: ${levelBadge}]`);
  console.log(`📝 Summary:    ${result.summary}`);
  console.log("--------------------------------------------------------------------------------");

  if (result.matchedWords && result.matchedWords.length > 0) {
    console.log("⚠️  Matched Prohibited / High-Risk Words:");
    result.matchedWords.forEach((m: any, i: number) => {
      console.log(`   ${i + 1}. [${m.word}] (${m.category})`);
      console.log(`      💡 Suggestion: ${m.suggestion}`);
      if (m.reason) {
        console.log(`      ⚠️ Reason:     ${m.reason}`);
      }
    });
  } else {
    console.log("✅ No prohibited phrases detected! Content meets standard platform guidelines.");
  }

  console.log(`
================================================================================
💡 Need full AI secret-code rewriting, accounts inventory & anti-ban fingerprint SOP?
👉 Cloud Workbench: https://guard-mac.nanocompress.com/workspace
👉 Anti-Ban SOP:   https://guard-mac.nanocompress.com/sop
👉 Shortcut:       Run 'npx open-matrix-guard cloud' to open workbench
================================================================================\n`);
}
