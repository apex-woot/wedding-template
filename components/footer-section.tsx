"use client"

import { motion } from "framer-motion"

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="inline-block h-3 w-3" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#F5F0E8] pb-12 pt-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(107,83,57,0.03),transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative z-[1] mx-auto max-w-[36rem] text-center"
      >
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-[#E8DCCB]/60" />
          <span className="text-[#583C2A]/40">
            <HeartIcon />
          </span>
          <div className="h-[1px] w-12 bg-[#E8DCCB]/60" />
        </div>

        <p className="font-display text-[clamp(1.8rem,5vw,2.6rem)] leading-[1] font-medium tracking-[-0.02em] text-[#8FACC2]">
          Віталій &amp; Тетяна
        </p>

        <p className="mt-3 font-sans text-[0.68rem] font-medium uppercase tracking-[0.35em] text-[#A09483]/60">
          11 липня 2026 &middot; Львів
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 font-display text-[clamp(1rem,3vw,1.2rem)] font-normal italic text-[#583C2A]/35"
        >
          З любов&rsquo;ю та вдячністю
        </motion.p>
      </motion.div>
    </footer>
  )
}
