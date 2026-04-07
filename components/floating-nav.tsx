"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const sections = [
  { id: "hero", label: "Головна" },
  { id: "invitation", label: "Запрошення" },
  { id: "date", label: "Дата" },
  { id: "location", label: "Локація" },
  { id: "program", label: "Програма" },
  { id: "dress-code", label: "Дрес-код" },
  { id: "rsvp", label: "RSVP" },
] as const

type SectionId = (typeof sections)[number]["id"]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero")
  const [isVisible, setIsVisible] = useState(false)
  const [draggingId, setDraggingId] = useState<SectionId | null>(null)
  const lastTriggeredRef = useRef<SectionId | null>(null)
  const pointerMovedRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8)

      const sectionElements = sections
        .map(({ id }) => ({ id, el: document.getElementById(id) }))
        .filter((s): s is { id: SectionId; el: HTMLElement } => s.el !== null)

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

  function navigateTo(id: SectionId, smooth: boolean) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" })
  }

  function sectionIdAtPoint(x: number, y: number): SectionId | null {
    const el = document.elementFromPoint(x, y)
    if (!el) return null
    const target = (el as HTMLElement).closest<HTMLElement>("[data-section-id]")
    const id = target?.dataset.sectionId as SectionId | undefined
    return id ?? null
  }

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const id = sectionIdAtPoint(e.clientX, e.clientY)
    if (!id) return
    e.preventDefault()
    e.currentTarget.setPointerCapture(e.pointerId)
    pointerMovedRef.current = false
    lastTriggeredRef.current = id
    setDraggingId(id)
    navigateTo(id, true)
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (draggingId === null) return
    const id = sectionIdAtPoint(e.clientX, e.clientY)
    if (!id || id === lastTriggeredRef.current) return
    pointerMovedRef.current = true
    lastTriggeredRef.current = id
    setDraggingId(id)
    navigateTo(id, false)
  }

  function handlePointerEnd(e: React.PointerEvent<HTMLDivElement>) {
    if (draggingId === null) return
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
    if (pointerMovedRef.current) navigateTo(draggingId, true)
    setDraggingId(null)
    lastTriggeredRef.current = null
    pointerMovedRef.current = false
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          aria-label="Навігація по сторінці"
          className="fixed right-4 top-1/2 z-50 -translate-y-1/2 md:right-7"
        >
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            className="relative flex touch-none select-none flex-col items-end gap-3.5 rounded-full bg-white/35 px-2.5 py-4 backdrop-blur-md ring-1 ring-white/55 shadow-[0_18px_50px_-15px_rgba(88,60,42,0.22)]"
          >
            {sections.map(({ id, label }) => {
              const active = activeSection === id
              const dragging = draggingId === id
              const highlight = active || dragging
              return (
                <button
                  key={id}
                  type="button"
                  data-section-id={id}
                  onClick={(e) => {
                    if (pointerMovedRef.current) e.preventDefault()
                  }}
                  className="group relative flex items-center gap-3 py-1.5 pl-3 -my-1.5 -ml-3"
                  aria-label={`Перейти до ${label}`}
                >
                  <span
                    className={`pointer-events-none absolute right-7 top-1/2 -translate-y-1/2 whitespace-nowrap overflow-hidden rounded-full bg-[#FCFBF8]/95 font-sans text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#364274] backdrop-blur-md ring-1 ring-[#D8DED5]/60 transition-all duration-500 ${
                      dragging
                        ? "max-w-[10rem] py-1 px-3 opacity-100"
                        : "max-w-0 py-1 px-0 opacity-0 group-hover:max-w-[10rem] group-hover:px-3 group-hover:opacity-100"
                    }`}
                  >
                    {label}
                  </span>
                  <motion.span
                    layout
                    transition={{ duration: 0.45, ease: easeOutExpo }}
                    className={`pointer-events-none block rounded-full transition-colors duration-500 ${
                      highlight
                        ? "h-7 w-[3px] bg-gradient-to-b from-[#6B4A33] to-[#583C2A]"
                        : "h-[4px] w-[4px] bg-[#583C2A]/35 group-hover:scale-150 group-hover:bg-[#583C2A]/75"
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
