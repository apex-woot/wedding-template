"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Головний екран весільного запрошення"
      className="relative min-h-svh overflow-hidden bg-[#8FACC2]"
    >
      {/* Background photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
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

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25)_0%,transparent_20%,transparent_88%,#EEEAE4_100%)]" />
      </motion.div>

      {/* Content layout */}
      <div className="relative z-[2] flex min-h-svh flex-col items-center justify-between px-[clamp(1.5rem,5vw,4rem)] md:px-[clamp(3rem,6vw,6rem)]">

        {/* Top — thin white title */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="pt-[clamp(2.5rem,5svh,4rem)] text-center"
        >
          <h1 className="font-display text-[clamp(2.6rem,9vw,5rem)] leading-[0.85] font-light tracking-[-0.02em] text-white [text-shadow:0_4px_40px_rgba(0,0,0,0.25)] md:text-[clamp(3.8rem,7vw,6rem)]">
            Віталій
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 my-[clamp(0.4rem,1.5vw,0.8rem)] md:gap-6"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] max-w-[4rem] bg-white/20 md:max-w-[6rem]"
            />
            <span className="shrink-0 font-display text-[clamp(0.9rem,2.5vw,1.2rem)] font-light text-white/40">
              та
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] max-w-[4rem] bg-white/20 md:max-w-[6rem]"
            />
          </motion.div>
          <h1 className="font-display text-[clamp(2.6rem,9vw,5rem)] leading-[0.85] font-light tracking-[-0.02em] text-white [text-shadow:0_4px_40px_rgba(0,0,0,0.25)] md:text-[clamp(3.8rem,7vw,6rem)]">
            Тетяна
          </h1>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom — date and location */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6, ease: "easeOut" }}
          className="pb-[clamp(2.5rem,5svh,4rem)] text-center"
        >
          <p className="font-display text-[clamp(0.75rem,2vw,0.9rem)] font-light tracking-[0.35em] text-[#2A2520]/40">
            11.07.2026, Львів
          </p>
        </motion.div>
      </div>
    </section>
  )
}
