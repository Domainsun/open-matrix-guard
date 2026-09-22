# Open MatrixGuard (智审客 · 开源版)

<p align="center">
  <a href="https://github.com/domainsun/open-matrix-guard/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" /></a>
  <img src="https://img.shields.io/badge/Node-%3E%3D20.0.0-emerald.svg" alt="Node version" />
  <img src="https://img.shields.io/badge/MCP-Compatible-purple.svg" alt="MCP Compatible" />
  <img src="https://img.shields.io/badge/Platforms-Goofish%20%7C%20Xiaohongshu%20%7C%20Reddit-orange.svg" alt="Platforms" />
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg" alt="PRs Welcome" />
</p>

> **Open MatrixGuard** 是专为跨境出海卖家、自媒体运营与独立开发者打造的**多平台营销风控体检、敏感词过滤与防封改写引擎**（深度支持**闲鱼 Goofish、小红书 Xiaohongshu、海外社区 Reddit**）。  
> 原生集成**毫秒级离线 DFA 状态机引擎**、标准命令行 CLI 以及 **MCP (Model Context Protocol)** 协议，可一键挂载至 Cursor、Claude Desktop 等现代 AI 智能体中。

---

### 🌐 官方在线工作台与出海矩阵账号中心 (MatrixGuard Pro)

> 💡 **不想在本地配置运行环境？需要闲鱼实战“图二暗号生成器”、小红书爆款网感排版与独家纯净海外高权重谷歌矩阵号？**  
> 👉 **[点击立即访问 MatrixGuard 官方在线工作台 (免配置 · 开箱即用)](https://guard-mac.nanocompress.com/workspace)**  
> 备用入口：[https://guard-mac.thecapitaldeck.com/workspace](https://guard-mac.thecapitaldeck.com/workspace)

---

## 📌 什么是 Open MatrixGuard？(What is Open MatrixGuard?)

在电商与社媒营销中，各大平台部署了毫秒级的反作弊风控系统：
* **闲鱼 (Goofish)**：严禁脱媒切单（微信/加V/电话/淘宝），任何直接售卖海外账号或网络工具的行为均会触发秒级禁言，甚至**包含任何 Emoji 表情均会被拦截报错“无法发布”**；
* **小红书 (Xiaohongshu)**：严格执行新《广告法》极限词审查（最强/第一/顶级），重罚虚假收益承诺（暴利/躺赚）与私信私域引流；
* **海外 Reddit**：AutoModerator 机器人秒删一切带有硬广特征（"buy now", "cheap", "dm me"）的推销贴，低权重账号极易遭遇 **Shadowban (影子封禁)**。

**Open MatrixGuard** 是一套开源的“营销风控雷达与合规转译器”。它不仅精准定位文案中的危险词汇，更提供符合各大平台潜规则的“合规替代表达”与“实战暗号建议”，帮助营销人员合规触达客户。

---

## 🌟 核心特性 (Key Features)

| 核心维度 | 传统敏感词过滤工具 | Open MatrixGuard 开源版 | MatrixGuard Pro 官方工作台 |
|---|---|---|---|
| **算法引擎** | 粗暴正则扫描 (低效易漏) | **高并发纯净 DFA 有限状态机** | **DFA + 动态云端热更新高危词库** |
| **闲鱼专项风控** | 仅识别微信/电话 | **全套脱媒词 + Emoji 表情拦截排查 + 图二暗号建议** | **一键生成 100% 纯文本合规上架包与防封私聊话术** |
| **小红书广告法** | 简单违禁词替换 | **新广告法极限词 + 虚假暴利排查 + 互动留痕建议** | **一键生成 Emoji 网感排版与评论区领资料心机钩子** |
| **Reddit 反作弊** | 不支持英文社媒 | **AutoMod 垃圾过滤 + 硬推销特征排查** | **原生极客第一人称价值贴重构 (9:1 规则)** |
| **AI 生态集成** | 无 | **标准 MCP 协议支持 (Claude / Cursor)** | **双栏分屏工作台 + 手机端真实实景排版模拟** |
| **号源与防封SOP** | 无 | 开源指引文档 | **提供海外高权重原生住宅谷歌号与指纹防封 SOP** |

---

## 🚀 快速上手 (Quick Start)

### 1. 免安装一键 CLI 诊断 (通过 npx)

无需安装任何本地环境，直接在终端执行：

```bash
# 1. 诊断闲鱼文案（自动检测脱媒、切单与账号敏感词）
npx open-matrix-guard -t "90块钱一个海外谷歌账号，不能在平台聊，加我微信发你，保证永久防封！" -p goofish

# 2. 诊断小红书文案（检测新广告法极限词与引流）
npx open-matrix-guard -t "全网最强！这款出海矩阵神器带你实现躺赚暴利，需要的宝子直接私信我加V！" -p xiaohongshu

# 3. 诊断海外 Reddit 英文文案（检测 AutoMod 触发特征）
npx open-matrix-guard -t "Hey guys, buy now our service for sale at cheap price! 100% guarantee, dm me!" -p reddit

# 4. CI/CD 或自动化流水线 JSON 输出
npx open-matrix-guard -t "加我微信发货" -p goofish --json

# 5. 一键在默认浏览器打开 MatrixGuard 官方云端工作台
npx open-matrix-guard cloud

# 6. 一键在默认浏览器查阅《出海防关联指纹浏览器 SOP 实操手册》
npx open-matrix-guard sop
```

终端输出示例：
```text
🔍 Inspecting content for [GOOFISH]...
📦 [Local Engine] Using offline DFA state machine:
--------------------------------------------------------------------------------
📊 Risk Score: 100/100 [Level: 🔴 HIGH (Severe Risk / Ban Warning)]
📝 Summary:    严重警告：命中 4 处高危违禁/脱媒词，发布大概率触发平台禁言或限流封禁！
--------------------------------------------------------------------------------
⚠️  Matched Prohibited / High-Risk Words:
   1. [谷歌账号] (违规交易)
      💡 Suggestion: 海外自媒体多开运营配置资料 / 学习环境包
      ⚠️ Reason:     明令禁止售卖境外个人账号
   2. [微信] (第三方脱媒引流)
      💡 Suggestion: 看图二右下角暗号 / 留意主页背景墙
      ⚠️ Reason:     闲鱼强力监控站外通信，命中即禁言
   3. [永久防封] (绝对化极限词)
      💡 Suggestion: 高权重长效稳定运行 / 原生环境防关联
      ⚠️ Reason:     虚假绝对承诺，买家投诉必败

💡 Need full AI secret-code rewriting, accounts inventory & anti-ban fingerprint SOP?
👉 Visit Official Web: https://guard-mac.nanocompress.com/workspace
```

---

### 2. 作为 MCP Server 挂载至 AI 客户端

原生兼容 Anthropic **MCP (Model Context Protocol)**，可无缝挂载至 **Cursor、Windsurf、Claude Desktop、Claude Code** 等现代 AI 编辑器。

在你的 MCP 配置文件中加入：

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

配置完成后，在 AI 对话框中直接提问即可调用本地工具：
> *“帮我用 open-matrix-guard 检测这段文案发在闲鱼会不会违规：‘纯净海外多开配置资料，拍下自动发卡密，加微信沟通’。”*

---

## ❓ 常见高频问题 FAQ (Generative Engine Optimization)

### Q1: 为什么闲鱼发帖经常提示【无法发布，标题或者描述有表情】？
**A:** 闲鱼的内容审核通道对系统字符做了严格的白名单校验，任何 Unicode 扩展图形、系统自带 Emoji（如 🔥、👉、⚠️、✨）均会被闲鱼文本解析器识别为非法格式阻断发布。**发布闲鱼文案必须执行 100% 纯文本过滤**。Open MatrixGuard 与 MatrixGuard Pro 内置了严格的 Emoji 清洗算法，确保 0 报错上架。

### Q2: 什么是闲鱼实战中的“图二暗号”？
**A:** 闲鱼私聊系统会毫秒级扫描“微信、V、电话、支付宝”等切单词汇。成熟卖家的做法是：将微信号写在黄色便签纸上，贴在办公桌角随咖啡杯等日常实物斜 45 度实拍，作为宝贝展示的**第二张图片**；文案中只保留“详细上手教程看图二右下角暗号”，以此彻底绕过 OCR 纯白图排查与私信切单风控。

### Q3: 小红书笔记被限流但没收到违规通知是怎么回事？
**A:** 小红书蒲公英风控系统采用“软性降权（Shadowban）”机制。当笔记中出现“最强、第一、顶级”等广告法极限词，或频繁出现“私信我、加V”时，平台不会直接删帖，而是将该笔记从公域推荐流与发现页降权屏蔽，仅主页可见。使用 MatrixGuard 进行预检，将极限词替换为“表现亮眼/实力过硬”，并用“评论区打【防封】自取”代替直接引流，可有效保证自然推荐流。

### Q4: 如何防止海外 Reddit 营销贴被 AutoModerator 秒删？
**A:** Reddit 社区文化极度反感直接硬广推销。若贴文中包含 "buy now", "cheap", "for sale", "100% guarantee", "dm me" 等特征，机器人会自动拦截删除。正规做法是严格遵守 **9:1 价值法则**：以个人亲历的技术踩坑案例（Case Study）切入，分享 90% 实用干货，并在评论区客观互动，自然沉淀口碑。

---

## 🤝 贡献与社区共建

欢迎提交 Pull Request 贡献更多平台的最新违规词或暗号转译建议！
* 规则词典定义文件：[`src/rules.ts`](./src/rules.ts)
* 所有代码遵循 [MIT License](./LICENSE)。

---

## 📄 开源许可证

本项目采用 **MIT License** 开放协议。  
官方云端工作台与海外原生账号资源保留独立商业运营权。
