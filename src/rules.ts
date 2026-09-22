export interface BaseRule {
  word: string;
  category: string;
  level: "HIGH" | "MEDIUM" | "LOW";
  suggestion: string;
  reason?: string;
}

export const OPEN_RULES: Record<string, BaseRule[]> = {
  goofish: [
    // --- 闲鱼第三方脱媒与切单敏感词 ---
    { word: "微信", category: "第三方脱媒引流", level: "HIGH", suggestion: "看图二右下角暗号 / 留意主页背景墙", reason: "闲鱼强力监控站外通信，命中即禁言" },
    { word: "微信号", category: "第三方脱媒引流", level: "HIGH", suggestion: "图二留痕暗号", reason: "切单词汇，毫秒级封禁" },
    { word: "加微", category: "第三方脱媒引流", level: "HIGH", suggestion: "看图二获取指引", reason: "引流敏感词" },
    { word: "加v", category: "第三方脱媒引流", level: "HIGH", suggestion: "留意主页说明", reason: "谐音引流同样在黑名单中" },
    { word: "加V", category: "第三方脱媒引流", level: "HIGH", suggestion: "看图二指引", reason: "谐音引流同样在黑名单中" },
    { word: "vx", category: "第三方脱媒引流", level: "HIGH", suggestion: "看图二右下角", reason: "常用拼音缩写已被系统识别" },
    { word: "VX", category: "第三方脱媒引流", level: "HIGH", suggestion: "看图二右下角", reason: "常用拼音缩写已被系统识别" },
    { word: "绿泡泡", category: "第三方脱媒引流", level: "MEDIUM", suggestion: "图二暗语", reason: "常见暗号已被闲鱼语义风控标记" },
    { word: "电话", category: "第三方脱媒引流", level: "HIGH", suggestion: "电联看头像介绍", reason: "禁止私下电话交易" },
    { word: "手机号", category: "第三方脱媒引流", level: "HIGH", suggestion: "看主页背景墙", reason: "严禁索要/提供手机号" },
    { word: "淘宝", category: "第三方脱媒引流", level: "HIGH", suggestion: "某宝同源", reason: "站外平台跳转违规" },
    { word: "某宝", category: "第三方脱媒引流", level: "MEDIUM", suggestion: "大厂同源渠道", reason: "规避友商平台比价与切单" },
    { word: "转转", category: "第三方脱媒引流", level: "HIGH", suggestion: "友商平台", reason: "严禁提及竞品二手平台" },
    { word: "拼多多", category: "第三方脱媒引流", level: "HIGH", suggestion: "主流电商渠道", reason: "严禁外链及其他电商词" },
    { word: "自提", category: "第三方脱媒引流", level: "MEDIUM", suggestion: "同城当面验货", reason: "纯自提易被判定脱离平台监管" },
    { word: "线下", category: "第三方脱媒引流", level: "HIGH", suggestion: "走平台担保流程", reason: "严禁脱离平台监管线下交易" },
    { word: "转账", category: "第三方脱媒引流", level: "HIGH", suggestion: "平台正常下单拍下", reason: "私下转账直接封禁" },
    { word: "走担保", category: "第三方脱媒引流", level: "MEDIUM", suggestion: "平台直接下单", reason: "容易被判定诱导第三方交易" },
    { word: "私下", category: "第三方脱媒引流", level: "HIGH", suggestion: "平台正规流程", reason: "私下切单零容忍" },
    { word: "二维码", category: "第三方脱媒引流", level: "HIGH", suggestion: "图二配置卡片", reason: "禁止在文本中引导扫码" },

    // --- 虚拟资产与出海限制类目 ---
    { word: "谷歌账号", category: "违规交易", level: "HIGH", suggestion: "海外自媒体多开运营配置资料 / 学习环境包", reason: "明令禁止售卖境外个人账号" },
    { word: "谷歌号", category: "违规交易", level: "HIGH", suggestion: "出海独立运营网络环境配置", reason: "账号买卖关键词" },
    { word: "谷歌邮箱", category: "违规交易", level: "HIGH", suggestion: "海外主流办公软件支持套件", reason: "邮箱账号销售违规" },
    { word: "Gmail", category: "违规交易", level: "HIGH", suggestion: "海外办公与测试配套指南", reason: "账号商品直写易下架" },
    { word: "gmail", category: "违规交易", level: "HIGH", suggestion: "海外测试配套资料", reason: "大小写英文均被排查" },
    { word: "买号", category: "违规交易", level: "HIGH", suggestion: "测试配置选型", reason: "账号交易红线" },
    { word: "卖号", category: "违规交易", level: "HIGH", suggestion: "环境与资料交付", reason: "账号交易红线" },
    { word: "出号", category: "违规交易", level: "HIGH", suggestion: "闲置资料转让", reason: "账号交易红线" },
    { word: "苹果ID", category: "违规交易", level: "HIGH", suggestion: "移动端开发者调试配置", reason: "虚拟账号类目严格管控" },
    { word: "AppleID", category: "违规交易", level: "HIGH", suggestion: "iOS独立测试证书资料", reason: "虚拟账号类目严格管控" },

    // --- 平台敏感词 (网络工具) ---
    { word: "外网", category: "平台敏感", level: "HIGH", suggestion: "跨境自媒体与电商独立环境", reason: "网络敏感词" },
    { word: "梯子", category: "平台敏感", level: "HIGH", suggestion: "网络加速与合规环境", reason: "违禁网络工具代称" },
    { word: "翻墙", category: "平台敏感", level: "HIGH", suggestion: "跨境网络合规配置", reason: "法律红线违禁词" },
    { word: "科学上网", category: "平台敏感", level: "HIGH", suggestion: "全球化自媒体运营网络", reason: "违规代理代称" },
    { word: "VPN", category: "平台敏感", level: "HIGH", suggestion: "独立原生环境住宅节点", reason: "敏感网络协议" },
    { word: "vpn", category: "平台敏感", level: "HIGH", suggestion: "独立原生节点", reason: "敏感网络协议" },
    { word: "机场", category: "平台敏感", level: "HIGH", suggestion: "网络服务方案", reason: "代理服务器代称" },

    // --- 绝对化承诺与欺诈 ---
    { word: "永久防封", category: "绝对化极限词", level: "HIGH", suggestion: "高权重长效稳定运行 / 原生环境防关联", reason: "虚假绝对承诺，买家投诉必败" },
    { word: "100%防封", category: "绝对化极限词", level: "HIGH", suggestion: "多重防护降低风险", reason: "绝对化描述" },
    { word: "绝不封号", category: "绝对化极限词", level: "HIGH", suggestion: "长效耐用且提供质保SOP", reason: "违背客观规律，触发风控" },
    { word: "全网第一", category: "绝对化极限词", level: "MEDIUM", suggestion: "口碑实力出众", reason: "新广告法极限词" },
    { word: "好评返现", category: "诱导好评/欺诈", level: "HIGH", suggestion: "感谢真实体验反馈", reason: "严查诱导虚假评价" },
    { word: "免费送", category: "诱导好评/欺诈", level: "MEDIUM", suggestion: "附赠专属配置SOP", reason: "引流诱饵词" }
  ],

  xiaohongshu: [
    // --- 广告法极限词 ---
    { word: "最强", category: "绝对化极限词", level: "HIGH", suggestion: "实力过硬 / 表现亮眼", reason: "新广告法明令禁止的最高级形容词" },
    { word: "第一", category: "绝对化极限词", level: "HIGH", suggestion: "首选方案 / 体验出众", reason: "绝对化排名词汇" },
    { word: "顶级", category: "绝对化极限词", level: "HIGH", suggestion: "高规格 / 旗舰级", reason: "极限词违规" },
    { word: "绝对", category: "绝对化极限词", level: "MEDIUM", suggestion: "确定性强 / 靠谱", reason: "绝对化口吻" },
    { word: "秒杀", category: "绝对化极限词", level: "MEDIUM", suggestion: "大幅领先 / 远超预期", reason: "过度营销浮夸词" },
    { word: "100%", category: "绝对化极限词", level: "HIGH", suggestion: "极高概率 / 大幅提升", reason: "绝对化数字保证" },
    { word: "首家", category: "绝对化极限词", level: "MEDIUM", suggestion: "率先推出 / 独树一帜", reason: "未经证明的首家宣称" },
    { word: "全网首发", category: "绝对化极限词", level: "HIGH", suggestion: "近期亲测整理", reason: "排他性虚假宣传" },
    { word: "唯一", category: "绝对化极限词", level: "HIGH", suggestion: "核心优势 / 独特方案", reason: "绝对化极限词" },
    { word: "独家", category: "绝对化极限词", level: "MEDIUM", suggestion: "私藏整理", reason: "版权与独家性敏感" },
    { word: "神器", category: "绝对化极限词", level: "LOW", suggestion: "实用利器 / 得力助手", reason: "高频浮夸词" },

    // --- 第三方引流 ---
    { word: "加微信", category: "第三方脱媒引流", level: "HIGH", suggestion: "在评论区打【防封】自取 / 看主页置顶合集", reason: "严打私信切单转入私域" },
    { word: "加V", category: "第三方脱媒引流", level: "HIGH", suggestion: "看主页简介 / 评论区回复", reason: "谐音引流同样被排查" },
    { word: "加v", category: "第三方脱媒引流", level: "HIGH", suggestion: "留个爪子私你 / 评论区打【666】", reason: "谐音引流" },
    { word: "私信我", category: "第三方脱媒引流", level: "MEDIUM", suggestion: "感兴趣的宝子可以看评论区置顶", reason: "频繁引导私信容易触发限流机制" },
    { word: "微信号", category: "第三方脱媒引流", level: "HIGH", suggestion: "绿泡泡暗号", reason: "联系方式敏感词" },
    { word: "公众号", category: "第三方脱媒引流", level: "HIGH", suggestion: "同名自媒体专栏", reason: "跨平台导流" },
    { word: "二维码", category: "第三方脱媒引流", level: "HIGH", suggestion: "主页背景图指引", reason: "严打外链二维码" },

    // --- 虚假致富与夸大收益 ---
    { word: "暴利", category: "平台敏感", level: "HIGH", suggestion: "高毛利 / 正向现金流", reason: "反诈风控拦截" },
    { word: "躺赚", category: "平台敏感", level: "HIGH", suggestion: "自动化被动收益", reason: "不劳而获导向，严重限流" },
    { word: "日入过万", category: "平台敏感", level: "HIGH", suggestion: "收益稳步增长", reason: "夸大收益数据" },
    { word: "月入十万", category: "平台敏感", level: "HIGH", suggestion: "实现规模化产出", reason: "夸大收益数据" },
    { word: "零成本", category: "绝对化极限词", level: "MEDIUM", suggestion: "轻资产极低起步", reason: "违背商业常识" }
  ],

  reddit: [
    // --- Hard Promotion ---
    { word: "buy now", category: "硬广推销", level: "HIGH", suggestion: "check it out if you're interested", reason: "Direct hard-selling triggers AutoMod" },
    { word: "order now", category: "硬广推销", level: "HIGH", suggestion: "learn more on the repo", reason: "Commercial call to action" },
    { word: "cheap price", category: "硬广推销", level: "HIGH", suggestion: "budget-friendly alternative", reason: "Low-effort marketing trigger" },
    { word: "for sale", category: "违规交易", level: "HIGH", suggestion: "released as an open-source kit", reason: "Selling in non-marketplace subs causes instant ban" },
    { word: "special offer", category: "硬广推销", level: "HIGH", suggestion: "recent community update", reason: "Sales jargon" },
    { word: "discount code", category: "硬广推销", level: "MEDIUM", suggestion: "free tier available for community", reason: "Promotional spam" },
    { word: "affiliate link", category: "平台敏感", level: "HIGH", suggestion: "direct documentation link", reason: "Affiliate links are strictly banned" },

    // --- Off-Platform Steering ---
    { word: "dm me", category: "第三方脱媒引流", level: "HIGH", suggestion: "feel free to ask in comments or check my bio", reason: "DM harvesting triggers spam filters" },
    { word: "pm me", category: "第三方脱媒引流", level: "HIGH", suggestion: "let's discuss in the thread", reason: "Spam bot phrasing" },
    { word: "whatsapp", category: "第三方脱媒引流", level: "HIGH", suggestion: "join our community discussion", reason: "External messaging service" },
    { word: "telegram", category: "第三方脱媒引流", level: "HIGH", suggestion: "open-source repo discussion", reason: "Often associated with scam channels" },
    { word: "wechat", category: "第三方脱媒引流", level: "HIGH", suggestion: "GitHub discussions", reason: "External messaging app" },

    // --- Overpromising ---
    { word: "100% guarantee", category: "绝对化极限词", level: "HIGH", suggestion: "tested thoroughly across multiple setups", reason: "Unrealistic guarantee leads to downvotes" },
    { word: "guaranteed results", category: "绝对化极限词", level: "HIGH", suggestion: "consistent outcomes in our benchmarks", reason: "Overselling penalized" },
    { word: "get rich", category: "平台敏感", level: "HIGH", suggestion: "sustainable revenue growth", reason: "Get-rich-quick trigger" },
    { word: "upvote for upvote", category: "平台敏感", level: "HIGH", suggestion: "feedback appreciated", reason: "Vote manipulation violation" }
  ]
};
