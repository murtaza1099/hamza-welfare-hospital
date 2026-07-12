import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "hwh-lang";

function getInitialLang() {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "ur" || saved === "en" ? saved : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  // Keep <html dir> and <html lang> in sync with the chosen language.
  useEffect(() => {
    const dir = translations[lang].dir;
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang === "ur" ? "ur" : "en");
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ur" : "en"));
  }, []);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, dir: t.dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
