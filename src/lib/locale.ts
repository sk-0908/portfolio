export type Lang = "ja" | "en";
export type LocalizedText = string | { ja: string; en: string };

export function L(val: LocalizedText, lang: Lang) {
  if (typeof val === "string") return val;
  return val[lang] ?? val.ja ?? "";
}

