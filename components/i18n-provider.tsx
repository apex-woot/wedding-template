"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { type Dict, type Locale, LOCALES, translations } from "@/lib/i18n"

const STORAGE_KEY = "wedding-locale"
const DEFAULT_LOCALE: Locale = "uk"

type LocaleContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  t: Dict
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function isLocale(value: string | null): value is Locale {
  return value !== null && (LOCALES as string[]).includes(value)
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (isLocale(stored)) setLocaleState(stored)
    } catch {}
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {}
  }, [])

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error("useTranslation must be used within I18nProvider")
  return ctx
}
