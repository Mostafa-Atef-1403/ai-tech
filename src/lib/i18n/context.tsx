"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import en, { Translations } from "./en";
import ar from "./ar";

type Locale = "en" | "ar";

interface I18nContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ar");

  const toggleLocale = () => {
    setLocale((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = locale === "en" ? en : ar;
  const isRTL = locale === "ar";

  return (
    <I18nContext.Provider value={{ locale, t, toggleLocale, isRTL }}>
      <div dir={isRTL ? "rtl" : "ltr"} lang={locale}>
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
