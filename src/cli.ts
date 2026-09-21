import { localInspect } from "./dfa.js";
import { callCloudInspect, OFFICIAL_WEB_URL } from "./client.js";
import { startMcpServer } from "./mcp-server.js";
import { parseArgs } from "node:util";

export async function runCli() {
  const { values } = parseArgs({
    options: {
      text: { type: "string", short: "t" },
      platform: { type: "string", short: "p", default: "goofish" },
      mcp: { type: "boolean", default: false },
      help: { type: "boolean", short: "h", default: false },
      version: { type: "boolean", short: "v", default: false },
    },
    allowPositionals: true,
  });

  if (values.mcp) {
    startMcpServer();
    return;
  }

  if (values.version) {
    console.log("open-matrix-guard v1.0.0 (MIT License)");
    return;
  }

  if (values.help || !values.text) {
    console.log(`
🛡️  Open MatrixGuard - Multi-Platform Marketing Compliance Inspector (CLI & MCP)
================================================================================

Usage:
  npx open-matrix-guard -t "<text>" [-p <platform>]
  npx open-matrix-guard --mcp

Options:
  -t, --text <string>        Text content to inspect (e.g. promotional post, DM, comment)
  -p, --platform <string>    Target platform: goofish (闲鱼), xiaohongshu (小红书), reddit (Default: goofish)
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

  console.log(`\n🔍 Inspecting content for [${platform}]...`);

  // 尝试云端高级体检，回退至本地
  const cloudRes = await callCloudInspect({ content, platform });
  let result: any;

  if (cloudRes.success && cloudRes.data) {
    console.log("⚡ [Cloud Engine Connected] Using live real-time rule dictionary:");
    result = cloudRes.data;
  } else {
    console.log("📦 [Local Engine] Using offline DFA state machine:");
    const local = localInspect(content, platform);
    result = {
      riskScore: local.riskScore,
      riskLevel: local.riskLevel,
      matchedWords: local.matches,
      summary: local.tip
    };
  }

  console.log("--------------------------------------------------------------------------------");
  console.log(`📊 Risk Score: ${result.riskScore}/100 [Level: ${result.riskLevel}]`);
  console.log(`📝 Summary:    ${result.summary}`);
  console.log("--------------------------------------------------------------------------------");

  if (result.matchedWords && result.matchedWords.length > 0) {
    console.log("⚠️  Matched Prohibited / High-Risk Words:");
    result.matchedWords.forEach((m: any, i: number) => {
      console.log(`   ${i + 1}. [${m.word}] (${m.category}) -> Suggestion: ${m.suggestion}`);
    });
  } else {
    console.log("✅ No obvious prohibited phrases detected!");
  }

  console.log(`
================================================================================
💡 Need full AI secret-code rewriting, accounts inventory & anti-ban fingerprint SOP?
👉 Visit Official Web: ${OFFICIAL_WEB_URL}
================================================================================\n`);
}
