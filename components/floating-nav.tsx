"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const sections = [
  { id: "hero", label: "Головна" },
  { id: "invitation", label: "Запрошення" },
  { id: "date", label: "Дата" },
  { id: "location", label: "Локація" },
  { id: "program", label: "Програма" },
  { id: "dress-code", label: "Дрес-код" },
  { id: "rsvp", label: "RSVP" },
] as const

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8)

      const sectionElements = sections
        .map(({ id }) => ({ id, el: document.getElementById(id) }))
        .filter((s): s is { id: (typeof sections)[number]["id"]; el: HTMLElement } => s.el !== null)

      const viewportCenter = window.innerHeight / 3

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const rect = sectionElements[i].el.getBoundingClientRect()
        if (rect.top <= viewportCenter) {
          setActiveSection(sectionElements[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Навігація по сторінці"
          className="fixed right-4 top-1/2 z-50 -translate-y-1/2 md:right-6"
        >
          <div className="flex flex-col items-end gap-3">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="group flex items-center gap-3"
                aria-label={`Перейти до ${label}`}
              >
                <span className="pointer-events-none max-w-0 overflow-hidden whitespace-nowrap font-sans text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#364274] opacity-0 transition-all duration-300 group-hover:max-w-[8rem] group-hover:opacity-100">
                  {label}
                </span>
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    activeSection === id
                      ? "h-6 w-[3px] bg-[#583C2A]"
                      : "h-[3px] w-[3px] bg-[#583C2A]/40 group-hover:bg-[#583C2A]/80 group-hover:scale-150"
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
