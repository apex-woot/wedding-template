"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import dynamic from "next/dynamic"

const AmbientParticles = dynamic(
  () => import("./ambient-particles").then((m) => m.AmbientParticles),
  { ssr: false }
)

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      aria-label="Головний екран весільного запрошення"
      className="relative min-h-svh overflow-hidden bg-[#8FACC2]"
    >
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 will-change-transform"
      >
        <motion.div
          initial={{ scale: 1.18, opacity: 0, filter: "blur(14px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{
            scale: { duration: 3.4, ease: easeOutExpo },
            opacity: { duration: 2.6, ease: "easeOut" },
            filter: { duration: 2.2, ease: "easeOut" },
          }}
          className="absolute inset-0"
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4, delay: 0.3, ease: "easeOut" }}
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.32)_0%,rgba(0,0,0,0.05)_22%,transparent_55%,rgba(247,246,242,0.55)_85%,#F7F6F2_100%)]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4, delay: 0.5, ease: "easeOut" }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,transparent_40%,rgba(0,0,0,0.22)_100%)]"
        />
      </motion.div>

      <AmbientParticles
        className="absolute inset-0 z-[1] pointer-events-none"
        count={70}
        size={11}
        spread={22}
        speed={0.8}
        colors={["#FFFFFF", "#F7F6F2", "#D8DED5", "#A8BCA1"]}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-[2] flex min-h-svh flex-col items-center justify-between px-[clamp(1.5rem,5vw,4rem)] md:px-[clamp(3rem,6vw,6rem)] will-change-transform"
      >
        <div className="pt-[clamp(2.5rem,5svh,4rem)] text-center">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.8, delay: 1.1, ease: easeOutExpo }}
              className="font-display text-[clamp(2.6rem,9vw,5rem)] leading-[0.95] font-light tracking-[-0.02em] text-white [text-shadow:0_4px_40px_rgba(0,0,0,0.25)] md:text-[clamp(3.8rem,7vw,6rem)]"
            >
              Віталій
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.7, ease: "easeOut" }}
            className="my-[clamp(0.5rem,1.6vw,0.9rem)] flex items-center justify-center gap-4 md:gap-6"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, delay: 1.8, ease: easeOutExpo }}
              style={{ transformOrigin: "right center" }}
              className="h-[1px] w-[clamp(3rem,8vw,6rem)] origin-right bg-gradient-to-r from-transparent via-white/45 to-white/55"
            />
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 2.05, ease: easeOutExpo }}
              className="shrink-0 font-display italic text-[clamp(0.95rem,2.5vw,1.25rem)] font-light text-white/65"
            >
              та
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, delay: 1.8, ease: easeOutExpo }}
              style={{ transformOrigin: "left center" }}
              className="h-[1px] w-[clamp(3rem,8vw,6rem)] origin-left bg-gradient-to-l from-transparent via-white/45 to-white/55"
            />
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.8, delay: 1.35, ease: easeOutExpo }}
              className="font-display text-[clamp(2.6rem,9vw,5rem)] leading-[0.95] font-light tracking-[-0.02em] text-white [text-shadow:0_4px_40px_rgba(0,0,0,0.25)] md:text-[clamp(3.8rem,7vw,6rem)]"
            >
              Тетяна
            </motion.h1>
          </div>
        </div>

        <div className="flex-1" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 2.3, ease: easeOutExpo }}
          className="pb-[clamp(2.5rem,5svh,4rem)] flex flex-col items-center gap-[clamp(1.2rem,3svh,2rem)]"
        >
          <p className="font-display text-[clamp(0.78rem,2vw,0.95rem)] font-light tracking-[0.4em] text-[#2A2520]/55">
            11 · 07 · 2026 &nbsp;·&nbsp; ЛЬВІВ
          </p>
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1.4, delay: 2.8, ease: easeOutExpo }}
            style={{ transformOrigin: "top center" }}
            className="relative h-[2.6rem] w-[1px] overflow-hidden"
            aria-hidden="true"
          >
            <motion.span
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 3.2 }}
              className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent via-[#583C2A]/60 to-transparent"
            />
            <span className="absolute inset-0 bg-[#583C2A]/15" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
