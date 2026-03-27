"use client"

import Image from "next/image"
import { motion } from "framer-motion"

function BotanicalAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 280"
      aria-hidden="true"
      className={`h-auto w-full ${className}`}
      fill="none"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M59 274C51 234 55 191 63 148C69 117 72 92 61 54C55 34 47 20 35 6"
          strokeWidth="1.4"
        />
        <path d="M63 152C81 136 93 119 98 96" strokeWidth="1" />
        <path d="M60 131C42 118 30 105 25 86" strokeWidth="1" />
        <path d="M72 94C85 85 95 72 100 58" strokeWidth="1" />
        <path d="M53 82C40 74 31 63 26 48" strokeWidth="1" />
        <path d="M98 94C85 90 75 93 67 103" strokeWidth="0.9" />
        <path d="M24 85C36 82 47 86 56 95" strokeWidth="0.9" />
        <path d="M99 57C88 54 80 57 73 66" strokeWidth="0.9" />
        <path d="M27 47C37 45 45 49 51 57" strokeWidth="0.9" />
      </g>
    </svg>
  )
}

export function HeroSection() {
  return (
    <section
      aria-label="Головний екран весільного запрошення"
      className="relative min-h-svh overflow-hidden bg-[#b6cdea]"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
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

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(80,101,132,0.18)_0%,rgba(99,122,154,0.15)_28%,rgba(244,241,236,0.15)_54%,rgba(245,243,238,0.85)_100%),radial-gradient(90%_80%_at_50%_46%,rgba(255,255,255,0)_34%,rgba(137,164,198,0.25)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[clamp(14rem,35svh,24rem)] bg-[linear-gradient(180deg,rgba(253,251,247,0)_0%,rgba(253,251,247,0.2)_24%,rgba(253,251,247,0.6)_50%,rgba(253,251,247,0.92)_76%,#fdfbf7_100%)]" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-[clamp(5rem,10svh,8rem)] left-[clamp(1rem,4vw,3rem)] z-[1] w-[min(22vw,12rem)] text-[#8a9db5]/30"
      >
        <BotanicalAccent />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-[clamp(5rem,10svh,8rem)] right-[clamp(1rem,4vw,3rem)] z-[1] w-[min(22vw,12rem)] scale-x-[-1] text-[#8a9db5]/30"
      >
        <BotanicalAccent />
      </motion.div>

      <div className="relative z-[2] flex min-h-svh flex-col justify-between px-4 pt-[1.3rem] pb-8 text-center text-[#f7f4ee] md:px-8 md:pt-8 md:pb-[2.6rem]">
        <div className="grid gap-2 pt-[clamp(5.4rem,16svh,10rem)] md:pt-[clamp(6.4rem,15svh,12rem)]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="m-0 flex flex-col items-center justify-center font-display text-[clamp(4.2rem,16vw,7rem)] leading-[0.8] font-normal italic tracking-[-0.03em] text-[#fcfaf5] [text-shadow:0_12px_30px_rgba(0,0,0,0.4)] md:text-[clamp(6rem,12vw,9.5rem)]"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="mr-[1.5ch]"
            >
              Vitalii
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="z-10 -my-[0.3em] font-sans text-[clamp(1.5rem,6vw,2.5rem)] font-light text-[#bcd4f0]"
            >
              &amp;
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="ml-[1.5ch]"
            >
              Tetiana
            </motion.span>
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="relative z-[1] grid gap-3"
        >
          <p className="m-0 font-sans text-[clamp(0.85rem,3.7vw,1.05rem)] font-medium tracking-[0.35em] text-[#4a5f7e] [text-shadow:0_1px_12px_rgba(255,255,255,0.8)] md:text-[clamp(0.95rem,1.4vw,1.15rem)] uppercase">
            11 07 2026<span className="mx-3 opacity-50">·</span>Lviv
          </p>
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "40px" }}
            transition={{ duration: 1, delay: 1.8, ease: "easeInOut" }}
            className="mx-auto w-[1px] bg-[#4a5f7e]/40 mt-2"
          />
        </motion.div>
      </div>
    </section>
  )
}
