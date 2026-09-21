export interface CloudInspectOptions {
  content: string;
  platform?: "goofish" | "xiaohongshu" | "reddit" | "general";
  apiUrl?: string;
}

export const OFFICIAL_WEB_URL = "https://guard-mac.nanocompress.com/workspace";

export async function callCloudInspect(options: CloudInspectOptions) {
  const endpoint = options.apiUrl || process.env.MATRIXGUARD_API_URL || "https://guard-mac.nanocompress.com/api/inspect";
  
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: options.content,
        platform: options.platform || "goofish",
      }),
    });

    if (!res.ok) {
      throw new Error(`Cloud API returned ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    return {
      success: true,
      source: "cloud_api",
      data,
      cloudPromotion: {
        message: "💡 For advanced AI secret-code rewriting, Google accounts inventory, and live anti-ban updates, visit MatrixGuard Web:",
        url: OFFICIAL_WEB_URL
      }
    };
  } catch (err: any) {
    return {
      success: false,
      error: err.message,
      fallbackTip: "Cloud service unreachable. Falling back to local offline DFA engine."
    };
  }
}

export async function callCloudRewrite(content: string, platform: string = "goofish", apiUrl?: string) {
  const endpoint = apiUrl || process.env.MATRIXGUARD_API_URL || "https://guard-mac.nanocompress.com/api/rewrite";
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, platform }),
    });
    if (!res.ok) throw new Error(`Cloud Rewrite API failed: ${res.statusText}`);
    return await res.json();
  } catch (err: any) {
    return { error: err.message };
  }
}
