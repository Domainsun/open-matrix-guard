import { OPEN_RULES, BaseRule } from "./rules.js";

export interface MatchResult {
  word: string;
  startIndex: number;
  endIndex: number;
  category: string;
  level: "HIGH" | "MEDIUM" | "LOW";
  suggestion: string;
}

export class DFAEngine {
  private root: Map<string, any> = new Map();
  private ruleMap: Map<string, BaseRule> = new Map();

  constructor(rules: BaseRule[]) {
    for (const rule of rules) {
      const w = rule.word.toLowerCase();
      this.ruleMap.set(w, rule);
      let curr = this.root;
      for (let i = 0; i < w.length; i++) {
        const char = w[i];
        if (!curr.has(char)) curr.set(char, new Map());
        curr = curr.get(char);
      }
      curr.set("isEnd", true);
      curr.set("key", w);
    }
  }

  public search(text: string): MatchResult[] {
    const results: MatchResult[] = [];
    const lower = text.toLowerCase();
    const len = text.length;

    for (let i = 0; i < len; i++) {
      let curr = this.root;
      let matchedWord = "";

      for (let j = i; j < len; j++) {
        const c = lower[j];
        if (curr.has(c)) {
          matchedWord += text[j];
          curr = curr.get(c);
          if (curr.get("isEnd")) {
            const rule = this.ruleMap.get(curr.get("key"));
            if (rule) {
              results.push({
                word: matchedWord,
                startIndex: i,
                endIndex: j + 1,
                category: rule.category,
                level: rule.level,
                suggestion: rule.suggestion
              });
            }
          }
        } else {
          break;
        }
      }
    }
    return results;
  }
}

export function localInspect(text: string, platform: "goofish" | "xiaohongshu" | "reddit" | "general" = "goofish") {
  const rules = OPEN_RULES[platform] || [...OPEN_RULES.goofish, ...OPEN_RULES.xiaohongshu];
  const engine = new DFAEngine(rules);
  const matches = engine.search(text);

  let score = 0;
  for (const m of matches) {
    score += m.level === "HIGH" ? 35 : m.level === "MEDIUM" ? 20 : 10;
  }
  score = Math.min(100, score);

  return {
    riskScore: score,
    riskLevel: score >= 60 ? "HIGH" : score >= 30 ? "MEDIUM" : score > 0 ? "LOW" : "SAFE",
    matches,
    tip: score > 0 ? `Detected ${matches.length} risky phrases. See suggestion replacements.` : "Clean! No obvious prohibited words found."
  };
}
