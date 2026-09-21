# Open MatrixGuard (智审客 · 开源版)

<p align="center">
  <a href="https://github.com/domainsun/open-matrix-guard/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" /></a>
  <img src="https://img.shields.io/badge/Node-%3E%3D20.0.0-emerald.svg" alt="Node version" />
  <img src="https://img.shields.io/badge/MCP-Compatible-purple.svg" alt="MCP Compatible" />
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg" alt="PRs Welcome" />
</p>

> **多平台营销风控体检、敏感词过滤与防封改写开源工具（支持闲鱼、小红书、海外 Reddit），内置轻量命令行 CLI 与标准 MCP (Model Context Protocol) 协议服务。**

---

### 💡 官方免配置 Web 工作台与出海账号中心

> **不想在本地折腾 Node / Python 运行环境？需要闲鱼最新实战“图二暗号生成器”、小红书爆款网感排版与独家纯净海外原生谷歌矩阵号？**  
> 👉 **[点击立即访问 MatrixGuard 官方在线工作台 (免配置 · 开箱即用)](https://guard-mac.nanocompress.com/workspace)**

---

## 🌟 核心特性

- **多平台针对性规则**：
  - **闲鱼二手 (Goofish)**：专治切单脱媒（微信/vx/电话/转账/外网/翻墙拦截词），提供实战“看图二暗号”转译建议；
  - **小红书 (Xiaohongshu)**：针对蒲公英商业合作与新广告法，精准排查极限词与第三方私信引流敏感词；
  - **海外 Reddit 社区**：排查 AutoMod 垃圾邮件拦截规则，阻断硬广推销特征词。
- **双引擎架构**：
  - **本地离线 DFA 引擎**：纯 TypeScript 编写，毫秒级响应，零网络开销，完全保护本地隐私；
  - **云端动态规则接口**：可直连官方云端 API，享受每日热更新的高危规则库。
- **全生态 AI 接入**：
  - 原生支持 **MCP (Model Context Protocol)**，可一键挂载至 **Claude Desktop、Cursor、Windsurf、Claude Code** 等现代 AI 智能体中。

---

## 🚀 快速上手 (Quick Start)

### 方式 1：免安装一键 CLI 扫描 (通过 npx)

无需安装任何本地依赖，终端直接运行：

```bash
# 检测闲鱼文案草稿
npx open-matrix-guard -t "90块钱一个谷歌账号，不能在平台聊，加我微信发你" -p goofish

# 检测小红书违规引流
npx open-matrix-guard -t "全网最强神器，需要的宝子私信我加V" -p xiaohongshu

# 检测海外 Reddit 营销推销词
npx open-matrix-guard -t "Buy now our service at cheap price! 100% guarantee, dm me" -p reddit
```

终端输出示例：

```text
🔍 Inspecting content for [goofish]...
⚡ [Cloud Engine Connected] Using live real-time rule dictionary:
--------------------------------------------------------------------------------
📊 Risk Score: 100/100 [Level: HIGH]
📝 Summary:    严重警告：命中 2 处高危违禁/脱媒词，发布大概率触发平台禁言或限流封禁！
--------------------------------------------------------------------------------
⚠️  Matched Prohibited / High-Risk Words:
   1. [谷歌账号] (违规交易) -> Suggestion: 海外自媒体多开配置资料 / 学习环境包
   2. [微信] (第三方脱媒引流) -> Suggestion: 看图二暗号 / 留意主页背景墙

💡 Need full AI secret-code rewriting, accounts inventory & anti-ban fingerprint SOP?
👉 Visit Official Web: https://guard-mac.nanocompress.com/workspace
```

---

### 方式 2：作为 MCP Server 挂载至 AI 客户端

支持 Claude Desktop / Cursor / Windsurf。在你的 MCP 配置文件中添加：

```json
{
  "mcpServers": {
    "open-matrix-guard": {
      "command": "npx",
      "args": ["-y", "open-matrix-guard", "--mcp"]
    }
  }
}
```

挂载完成后，你可以在 AI 对话框中直接输入：
> *“帮我用 open-matrix-guard 检查一下这段文案发在闲鱼会不会触发风控：【加我微信发你卡密】”*

---

## 📊 开源版 vs 官方 Hosted Web 工作台对比

| 功能特性 | 开源版 (Open MatrixGuard) | 官方 Web SaaS 工作台 (MatrixGuard Pro) |
|---|---|---|
| **使用门槛** | 需熟悉命令行或具备 MCP 客户端 | **零门槛，网页打开即用，适配手机与电脑** |
| **检测引擎** | 本地基础离线 DFA 词库 | **云端全量动态风控词库 (每日热更新)** |
| **实战暗语改写** | 静态单词替换建议 | **AI 完整语义脱敏（一键生成图二暗号、背景墙暗号）** |
| **排版优化** | 无 | **小红书 Emoji 网感排版 / Reddit 原生人设重构** |
| **海外账号供应链** | ❌ 不提供 | **✅ 官方高权重海外原生谷歌账号库存与卡密直发** |
| **防关联指纹SOP** | ❌ 不提供 | **✅ 独家《3分钟指纹浏览器与原生住宅IP配置指南》** |
| **费用** | **永久免费 (MIT)** | **提供免费试用 · 尊享合辑 128 元起送海外号** |
| **体验地址** | [GitHub 仓库](https://github.com/domainsun/open-matrix-guard) | 👉 **[点击直达官方 Web 工作台](https://guard-mac.nanocompress.com/workspace)** |

---

## 🤝 贡献与社区参与

欢迎提交 Issue 与 Pull Request 贡献更多垂直平台的最新敏感词或黑话暗号！
- 敏感词字典位于 `src/rules.ts`；
- 所有提交代码遵循 [MIT 许可证](./LICENSE)。

---

## 📄 开源许可证

本项目基于 [MIT License](./LICENSE) 协议开源。
商业闭环与官方 Web 工作台保留所有商业运营与账号资产所有权。
