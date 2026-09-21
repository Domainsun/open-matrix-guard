import { localInspect } from "./dfa.js";
import { callCloudInspect, callCloudRewrite, OFFICIAL_WEB_URL } from "./client.js";
import * as readline from "node:readline";

/**
 * Lightweight standard stdio MCP Server (Model Context Protocol)
 * Compatible with Claude Desktop, Cursor, Windsurf, and Claude Code.
 */
export function startMcpServer() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  const sendResponse = (id: string | number | null, result: any, error?: any) => {
    const msg: any = { jsonrpc: "2.0", id };
    if (error) {
      msg.error = error;
    } else {
      msg.result = result;
    }
    process.stdout.write(JSON.stringify(msg) + "\n");
  };

  rl.on("line", async (line) => {
    if (!line.trim()) return;
    try {
      const request = JSON.parse(line);
      const { id, method, params } = request;

      if (method === "initialize") {
        sendResponse(id, {
          protocolVersion: "2024-11-05",
          capabilities: {
            tools: {}
          },
          serverInfo: {
            name: "open-matrix-guard",
            version: "1.0.0"
          }
        });
      } else if (method === "tools/list") {
        sendResponse(id, {
          tools: [
            {
              name: "inspect_marketing_text",
              description: "Inspect marketing copy, comments, or DMs for Xiaohongshu, Xianyu (Goofish), or Reddit platform violations and sensitive words.",
              inputSchema: {
                type: "object",
                properties: {
                  content: {
                    type: "string",
                    description: "The text content to inspect."
                  },
                  platform: {
                    type: "string",
                    enum: ["goofish", "xiaohongshu", "reddit", "general"],
                    description: "Target marketing platform. Default is 'goofish'."
                  }
                },
                required: ["content"]
              }
            },
            {
              name: "rewrite_compliant_copy",
              description: "Automatically sanitize and rewrite risky promo text into safe platform-native copy (e.g. Xianyu secret codes, Xiaohongshu viral formatting).",
              inputSchema: {
                type: "object",
                properties: {
                  content: {
                    type: "string",
                    description: "The raw promo text to rewrite."
                  },
                  platform: {
                    type: "string",
                    enum: ["goofish", "xiaohongshu", "reddit"],
                    description: "Target platform."
                  }
                },
                required: ["content"]
              }
            }
          ]
        });
      } else if (method === "tools/call") {
        const { name, arguments: args } = params;

        if (name === "inspect_marketing_text") {
          const content = args.content || "";
          const platform = args.platform || "goofish";

          // 优先尝试云端检测，失败则回退到本地 DFA
          let inspectionResult = await callCloudInspect({ content, platform });
          if (!inspectionResult.success) {
            const local = localInspect(content, platform);
            inspectionResult = {
              success: true,
              source: "local_dfa",
              data: local,
              cloudPromotion: {
                message: "💡 For unlimited AI rewrite and Google accounts hub, visit:",
                url: OFFICIAL_WEB_URL
              }
            } as any;
          }

          sendResponse(id, {
            content: [
              {
                type: "text",
                text: JSON.stringify(inspectionResult, null, 2)
              }
            ]
          });
        } else if (name === "rewrite_compliant_copy") {
          const content = args.content || "";
          const platform = args.platform || "goofish";
          const res = await callCloudRewrite(content, platform);

          sendResponse(id, {
            content: [
              {
                type: "text",
                text: JSON.stringify(res, null, 2)
              }
            ]
          });
        } else {
          sendResponse(id, null, { code: -32601, message: `Tool not found: ${name}` });
        }
      } else {
        sendResponse(id, {});
      }
    } catch (e: any) {
      // Ignore parse errors on empty lines
    }
  });
}

if (process.argv.includes("--run-mcp")) {
  startMcpServer();
}
