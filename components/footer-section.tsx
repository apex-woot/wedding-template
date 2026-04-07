"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { PiHeartFill } from "react-icons/pi"

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden md:min-h-screen">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/e2.JPG"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#F7F6F2_0%,rgba(247,246,242,0.4)_20%,rgba(247,246,242,0.05)_40%,transparent_60%,rgba(42,37,32,0.15)_80%,rgba(42,37,32,0.5)_100%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative z-[1] mx-auto max-w-[36rem] text-center pt-12 pb-[clamp(16rem,45svh,28rem)]"
      >
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-white/30" />
          <span className="text-white/50">
            <PiHeartFill aria-hidden="true" className="inline-block h-3 w-3" />
          </span>
          <div className="h-[1px] w-12 bg-white/30" />
        </div>

        <p className="font-display text-[clamp(1.8rem,5vw,2.6rem)] leading-[1] font-medium tracking-[-0.02em] text-white">
          Віталій &amp; Тетяна
        </p>

        <p className="mt-3 font-sans text-[0.68rem] font-medium uppercase tracking-[0.35em] text-white/50">
          11 липня 2026 &middot; Львів
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 font-display text-[clamp(1rem,3vw,1.2rem)] font-normal text-white/40"
        >
          З любов&rsquo;ю та вдячністю
        </motion.p>
      </motion.div>
    </footer>
  )
}
