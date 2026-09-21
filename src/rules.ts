export interface BaseRule {
  word: string;
  category: string;
  level: "HIGH" | "MEDIUM" | "LOW";
  suggestion: string;
}

export const OPEN_RULES: Record<string, BaseRule[]> = {
  goofish: [
    { word: "微信", category: "第三方脱媒引流", level: "HIGH", suggestion: "看图二暗号 / 主页背景墙" },
    { word: "微信号", category: "第三方脱媒引流", level: "HIGH", suggestion: "图二留痕" },
    { word: "加微", category: "第三方脱媒引流", level: "HIGH", suggestion: "看图二获取指引" },
    { word: "加v", category: "第三方脱媒引流", level: "HIGH", suggestion: "看图二说明" },
    { word: "加V", category: "第三方脱媒引流", level: "HIGH", suggestion: "看图二说明" },
    { word: "vx", category: "第三方脱媒引流", level: "HIGH", suggestion: "看图二右下角" },
    { word: "电话", category: "第三方脱媒引流", level: "HIGH", suggestion: "电联看头像" },
    { word: "淘宝", category: "第三方脱媒引流", level: "HIGH", suggestion: "某宝同源" },
    { word: "转账", category: "第三方脱媒引流", level: "HIGH", suggestion: "平台直接下单" },
    { word: "自提", category: "第三方脱媒引流", level: "MEDIUM", suggestion: "同城当面验货" },
    { word: "谷歌账号", category: "违规交易", level: "HIGH", suggestion: "海外自媒体多开配置资料" },
    { word: "翻墙", category: "平台敏感", level: "HIGH", suggestion: "跨境网络配置" },
    { word: "梯子", category: "平台敏感", level: "HIGH", suggestion: "网络加速环境" },
    { word: "永久防封", category: "绝对化词汇", level: "HIGH", suggestion: "高权重长效稳定" },
  ],
  xiaohongshu: [
    { word: "最强", category: "广告法极限词", level: "HIGH", suggestion: "实力过硬 / 表现亮眼" },
    { word: "第一", category: "广告法极限词", level: "HIGH", suggestion: "首选方案 / 体验出众" },
    { word: "顶级", category: "广告法极限词", level: "HIGH", suggestion: "高规格 / 旗舰级" },
    { word: "加微信", category: "第三方引流", level: "HIGH", suggestion: "评论区打【防封】自取" },
    { word: "加V", category: "第三方引流", level: "HIGH", suggestion: "看主页合集 / 评论区回复" },
    { word: "私信我", category: "第三方引流", level: "MEDIUM", suggestion: "评论区交流" },
    { word: "二维码", category: "第三方引流", level: "HIGH", suggestion: "主页图文指引" },
    { word: "暴利", category: "平台敏感", level: "HIGH", suggestion: "高毛利 / 正向现金流" },
    { word: "躺赚", category: "平台敏感", level: "HIGH", suggestion: "被动收益" },
  ],
  reddit: [
    { word: "buy now", category: "hard_promo", level: "HIGH", suggestion: "check it out if interested" },
    { word: "cheap price", category: "hard_promo", level: "HIGH", suggestion: "budget-friendly option" },
    { word: "dm me", category: "off_platform", level: "HIGH", suggestion: "happy to answer in comments" },
    { word: "whatsapp", category: "off_platform", level: "HIGH", suggestion: "community discussions" },
    { word: "100% guarantee", category: "unrealistic_promise", level: "HIGH", suggestion: "tested thoroughly" },
  ]
};
