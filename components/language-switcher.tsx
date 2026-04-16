"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/components/i18n-provider"
import type { Locale } from "@/lib/i18n"

const options: { value: Locale; label: string }[] = [
  { value: "uk", label: "UA" },
  { value: "en", label: "EN" },
]

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation()

  return (
    <nav
      aria-label={t.languageSwitcher.aria}
      className="fixed top-4 right-4 z-50 flex items-center gap-0.5 rounded-full bg-white/65 px-1 py-1 backdrop-blur-md ring-1 ring-white/60 shadow-[0_10px_30px_-12px_rgba(88,60,42,0.22)] md:top-6 md:right-7"
    >
      {options.map((option) => {
        const active = locale === option.value
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLocale(option.value)}
            aria-pressed={active}
            className="relative px-3 py-1.5 font-sans text-[0.68rem] font-medium tracking-[0.22em] uppercase text-[#583C2A] transition-colors duration-300"
          >
            {active && (
              <motion.span
                layoutId="language-switcher-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6B4A33] to-[#4A3220] shadow-[0_8px_20px_-8px_rgba(88,60,42,0.55)]"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
            <span className={`relative z-[1] ${active ? "text-[#FAF9F6]" : "text-[#583C2A]/70"}`}>
              {option.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
