"use client";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import ja from "@/data/i18n/ja.json";
import en from "@/data/i18n/en.json";

type Lang = "ja" | "en";
type Dictionary = typeof ja;

const dictionaries: Record<Lang, Dictionary> = { ja, en };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string;
};

const LangContext = createContext<Ctx | null>(null);

function get(obj: unknown, path: string): unknown {
  return path.split(".").reduce((acc: unknown, k: string) => {
    if (acc && typeof acc === "object" && k in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[k];
    }
    return undefined;
  }, obj);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ja");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "ja" || saved === "en") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const dict = useMemo(() => dictionaries[lang], [lang]);
  const t = useCallback((path: string) => {
    const v = get(dict, path);
    return typeof v === "string" ? v : path;
  }, [dict]);
  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export type LocalizedText = string | { ja: string; en: string };
