"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "@/components/i18n-provider"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export function BackgroundMusic({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation()
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [phase, setPhase] = useState<"idle" | "exiting" | "done">("idle")

  useEffect(() => {
    const audio = new Audio("/birds-of-a-feather.mp3")
    audio.loop = true
    audio.volume = 0.3
    audio.preload = "none"
    audioRef.current = audio

    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [])

  const enter = () => {
    if (phase !== "idle") return
    setPhase("exiting")
    audioRef.current?.play().then(() => setPlaying(true)).catch(() => {})
    setTimeout(() => setPhase("done"), 1800)
  }

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      {phase !== "idle" && children}

      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easeOutExpo }}
            className="fixed inset-0 z-[9999] overflow-hidden bg-[#F7F6F2]"
          >
            {/* decorative line accents */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.6, delay: 0.6, ease: easeOutExpo }}
              className="absolute left-[15%] top-0 h-full w-px origin-top bg-[#2A2520]/[0.04]"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.6, delay: 0.8, ease: easeOutExpo }}
              className="absolute right-[15%] top-0 h-full w-px origin-top bg-[#2A2520]/[0.04]"
            />

            {/* content container */}
            <div className="relative flex h-full flex-col items-center justify-center px-6">
              {/* top ornament */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={phase === "idle"
                  ? { opacity: 1, scaleX: 1 }
                  : { opacity: 0, scaleX: 0.5, y: -30 }}
                transition={{ duration: phase === "idle" ? 1.2 : 0.6, delay: phase === "idle" ? 0.4 : 0, ease: easeOutExpo }}
                className="mb-8 flex items-center gap-4"
              >
                <span className="block h-px w-12 bg-gradient-to-r from-transparent to-[#2A2520]/20" />
                <span className="block h-1.5 w-1.5 rotate-45 border border-[#2A2520]/20" />
                <span className="block h-px w-12 bg-gradient-to-l from-transparent to-[#2A2520]/20" />
              </motion.div>

              {/* subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={phase === "idle"
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -40, filter: "blur(4px)" }}
                transition={{ duration: phase === "idle" ? 1 : 0.5, delay: phase === "idle" ? 0.5 : 0, ease: easeOutExpo }}
                className="font-display text-[clamp(0.65rem,1.6vw,0.8rem)] font-light tracking-[0.5em] uppercase text-[#2A2520]/35"
              >
                {t.splash.subtitle}
              </motion.p>

              {/* names — split and fly apart on exit */}
              <div className="my-6 flex flex-col items-center gap-1">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={phase === "idle"
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: -60, scale: 1.1, filter: "blur(6px)" }}
                  transition={{
                    duration: phase === "idle" ? 1.4 : 0.7,
                    delay: phase === "idle" ? 0.7 : 0,
                    ease: easeOutExpo,
                  }}
                  className="font-display text-[clamp(2.8rem,9vw,5rem)] leading-[0.95] font-light tracking-[-0.02em] text-[#2A2520]"
                >
                  {t.hero.name1}
                </motion.h1>

                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={phase === "idle"
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.4 }}
                  transition={{
                    duration: phase === "idle" ? 1 : 0.4,
                    delay: phase === "idle" ? 1.1 : 0,
                    ease: easeOutExpo,
                  }}
                  className="font-display text-[clamp(0.9rem,2.2vw,1.15rem)] font-light italic text-[#2A2520]/40"
                >
                  {t.common.and}
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={phase === "idle"
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 60, scale: 1.1, filter: "blur(6px)" }}
                  transition={{
                    duration: phase === "idle" ? 1.4 : 0.7,
                    delay: phase === "idle" ? 0.85 : 0.05,
                    ease: easeOutExpo,
                  }}
                  className="font-display text-[clamp(2.8rem,9vw,5rem)] leading-[0.95] font-light tracking-[-0.02em] text-[#2A2520]"
                >
                  {t.hero.name2}
                </motion.h1>
              </div>

              {/* date */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={phase === "idle"
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40, filter: "blur(4px)" }}
                transition={{ duration: phase === "idle" ? 1 : 0.5, delay: phase === "idle" ? 1.2 : 0.1, ease: easeOutExpo }}
                className="font-display text-[clamp(0.72rem,1.8vw,0.88rem)] font-light tracking-[0.35em] text-[#2A2520]/40"
              >
                11 · 07 · 2026
              </motion.p>

              {/* bottom ornament */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={phase === "idle"
                  ? { opacity: 1, scaleX: 1 }
                  : { opacity: 0, scaleX: 0.5, y: 30 }}
                transition={{ duration: phase === "idle" ? 1.2 : 0.6, delay: phase === "idle" ? 1 : 0, ease: easeOutExpo }}
                className="mt-8 flex items-center gap-4"
              >
                <span className="block h-px w-12 bg-gradient-to-r from-transparent to-[#2A2520]/20" />
                <span className="block h-1.5 w-1.5 rotate-45 border border-[#2A2520]/20" />
                <span className="block h-px w-12 bg-gradient-to-l from-transparent to-[#2A2520]/20" />
              </motion.div>

              {/* CTA button */}
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={phase === "idle"
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: phase === "idle" ? 1 : 0.4, delay: phase === "idle" ? 1.5 : 0, ease: easeOutExpo }}
                onClick={enter}
                className="mt-12 rounded-full border border-[#2A2520]/15 px-8 py-3 font-display text-[clamp(0.65rem,1.5vw,0.78rem)] font-light tracking-[0.3em] uppercase text-[#2A2520]/60 transition-all hover:border-[#2A2520]/30 hover:text-[#2A2520] hover:shadow-[0_0_30px_rgba(42,37,32,0.06)]"
              >
                {t.splash.open}
              </motion.button>
            </div>

            {/* radial glow on exit */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={phase === "exiting" ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {phase === "done" && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={toggle}
            aria-label={playing ? t.splash.musicOn : t.splash.musicOff}
            className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur-sm transition-colors hover:bg-white/90 dark:bg-neutral-900/80 dark:hover:bg-neutral-900/90"
          >
            {playing ? <MusicBarsIcon /> : <MusicMutedIcon />}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

function MusicBarsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-neutral-700 dark:text-neutral-300">
      <rect x="2" y="8" width="2" height="8" rx="1" fill="currentColor">
        <animate attributeName="height" values="8;14;8" dur="0.8s" repeatCount="indefinite" />
        <animate attributeName="y" values="8;5;8" dur="0.8s" repeatCount="indefinite" />
      </rect>
      <rect x="6" y="5" width="2" height="11" rx="1" fill="currentColor">
        <animate attributeName="height" values="11;6;11" dur="0.6s" repeatCount="indefinite" />
        <animate attributeName="y" values="5;9;5" dur="0.6s" repeatCount="indefinite" />
      </rect>
      <rect x="10" y="7" width="2" height="9" rx="1" fill="currentColor">
        <animate attributeName="height" values="9;14;9" dur="0.7s" repeatCount="indefinite" />
        <animate attributeName="y" values="7;4;7" dur="0.7s" repeatCount="indefinite" />
      </rect>
      <rect x="14" y="6" width="2" height="10" rx="1" fill="currentColor">
        <animate attributeName="height" values="10;5;10" dur="0.9s" repeatCount="indefinite" />
        <animate attributeName="y" values="6;9;6" dur="0.9s" repeatCount="indefinite" />
      </rect>
    </svg>
  )
}

function MusicMutedIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-neutral-400 dark:text-neutral-500">
      <rect x="2" y="12" width="2" height="4" rx="1" fill="currentColor" />
      <rect x="6" y="11" width="2" height="5" rx="1" fill="currentColor" />
      <rect x="10" y="12" width="2" height="4" rx="1" fill="currentColor" />
      <rect x="14" y="11" width="2" height="5" rx="1" fill="currentColor" />
      <line x1="1" y1="2" x2="17" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
