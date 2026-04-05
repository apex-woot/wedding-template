"use client"

import { motion } from "framer-motion"

function BotanicalSprig() {
  return (
    <svg
      viewBox="0 0 80 24"
      aria-hidden="true"
      className="h-auto w-20 text-current"
      fill="none"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8">
        <path d="M40 12H8" />
        <path d="M40 12h32" />
        <path d="M28 12c-4-6-10-8-14-7" />
        <path d="M28 12c-4 6-10 8-14 7" />
        <path d="M52 12c4-6 10-8 14-7" />
        <path d="M52 12c4 6 10 8 14 7" />
        <circle cx="40" cy="12" r="2" strokeWidth="0.6" />
      </g>
    </svg>
  )
}

export function SectionDivider({ variant = "linen" }: { variant?: "linen" | "cream" }) {
  const color = variant === "cream" ? "text-[#C8BBA8]/35" : "text-[#C8BBA8]/30"
  const bg = variant === "cream" ? "bg-[#F5F0E8]" : "bg-[#EDE8E0]"

  return (
    <div className={`relative ${bg} flex items-center justify-center py-2 overflow-hidden`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className={color}
      >
        <BotanicalSprig />
      </motion.div>
    </div>
  )
}
