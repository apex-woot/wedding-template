"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const WEDDING_DATE = new Date("2026-07-11T15:00:00+03:00")

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    function calculate() {
      const now = new Date()
      const diff = Math.max(0, WEDDING_DATE.getTime() - now.getTime())
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [])

  return timeLeft
}

export function HeroSection() {
  const countdown = useCountdown()

  return (
    <section
      id="hero"
      aria-label="Головний екран весільного запрошення"
      className="relative min-h-svh overflow-hidden bg-[#8FACC2]"
    >
      {/* Background photo with slow zoom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{ scale: [1, 1.06] }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/IMG_8529.jpg"
            alt=""
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-[56%_center] md:object-center"
          />
        </motion.div>

        {/* Cinematic overlay — warm espresso tones */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(35,30,25,0.5)_0%,rgba(55,48,40,0.35)_20%,rgba(90,78,65,0.15)_45%,rgba(235,228,218,0.7)_72%,rgba(245,240,232,0.95)_88%,#F5F0E8_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_40%,rgba(35,30,25,0.12)_100%)]" />
      </motion.div>

      {/* Content layout */}
      <div className="relative z-[2] flex min-h-svh flex-col px-[clamp(1.5rem,5vw,4rem)] md:px-[clamp(3rem,6vw,6rem)]">

        {/* Top — wedding invitation label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="pt-[clamp(2.5rem,5svh,4rem)] text-center"
        >
          <p className="font-sans text-[0.6rem] font-medium uppercase tracking-[0.5em] text-white/45 md:text-[0.7rem]">
            запрошення на весілля
          </p>
        </motion.div>

        {/* Names — near the top */}
        <div className="w-full mt-[clamp(1rem,3svh,2.5rem)]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-[56rem]"
          >
            {/* First name — left-aligned */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-left"
            >
              <h1 className="font-display text-[clamp(4rem,15vw,9rem)] leading-[0.85] font-medium tracking-[-0.04em] text-white [text-shadow:0_4px_40px_rgba(0,0,0,0.35)] md:text-[clamp(6rem,11vw,10.5rem)]">
                Віталій
              </h1>
            </motion.div>

            {/* Connector — "та" with decorative lines */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              className="flex items-center justify-center gap-4 my-[clamp(0.6rem,2vw,1.2rem)] md:gap-6"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1px] max-w-[6rem] bg-white/20 md:max-w-[10rem]"
              />
              <span className="shrink-0 font-display text-[clamp(1.4rem,4vw,2.2rem)] italic font-normal text-white/50">
                та
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1px] max-w-[6rem] bg-white/20 md:max-w-[10rem]"
              />
            </motion.div>

            {/* Second name — right-aligned */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-right"
            >
              <h1 className="font-display text-[clamp(4rem,15vw,9rem)] leading-[0.85] font-medium tracking-[-0.04em] text-white [text-shadow:0_4px_40px_rgba(0,0,0,0.35)] md:text-[clamp(6rem,11vw,10.5rem)]">
                Тетяна
              </h1>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom — Date, countdown, scroll indicator */}
        <div className="mt-auto pb-[clamp(2rem,4svh,3.5rem)]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            {/* Date & location */}
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-6 bg-[#583C2A]/30" />
              <p className="font-sans text-[clamp(0.7rem,2vw,0.82rem)] font-medium uppercase tracking-[0.4em] text-[#364274] md:tracking-[0.5em]">
                11 липня 2026
                <span className="mx-[0.6em] text-[#583C2A]/40">/</span>
                Львів
              </p>
              <div className="h-[1px] w-6 bg-[#583C2A]/30" />
            </div>

            {/* Countdown — minimal horizontal strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2, ease: "easeOut" }}
              className="flex items-baseline gap-[clamp(0.8rem,2.5vw,1.5rem)]"
            >
              {[
                { value: countdown.days, label: "дн" },
                { value: countdown.hours, label: "год" },
                { value: countdown.minutes, label: "хв" },
                { value: countdown.seconds, label: "сек" },
              ].map((unit, i) => (
                <div key={unit.label} className="flex items-baseline gap-1">
                  {i > 0 && (
                    <span className="mr-[clamp(0.6rem,2vw,1.2rem)] text-[0.6rem] text-[#583C2A]/25 select-none">
                      :
                    </span>
                  )}
                  <span className="font-display text-[clamp(1.1rem,3.5vw,1.6rem)] leading-none font-normal tabular-nums text-[#364274]/75">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[0.5rem] font-medium uppercase tracking-[0.15em] text-[#8FACC2]/50">
                    {unit.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="flex flex-col items-center gap-2 mt-1"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 24 }}
                transition={{ duration: 1, delay: 2.8, ease: "easeInOut" }}
                className="w-[1px] bg-[#583C2A]/25"
              />
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-[#583C2A]/30">
                  <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
