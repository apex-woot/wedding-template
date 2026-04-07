"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useMemo, useRef } from "react"
import { PiHeartFill } from "react-icons/pi"

const AmbientParticles = dynamic(
  () => import("./ambient-particles").then((m) => m.AmbientParticles),
  { ssr: false }
)

const easeOutExpo = [0.16, 1, 0.3, 1] as const

type Glint = {
  left: number
  delay: number
  duration: number
  drift: number
  size: number
  opacity: number
}

function useGlints(count: number): Glint[] {
  return useMemo(() => {
    const seeds = [0.12, 0.28, 0.41, 0.56, 0.69, 0.82, 0.94, 0.07, 0.34, 0.62, 0.78]
    return Array.from({ length: count }, (_, i) => {
      const s = seeds[i % seeds.length]
      return {
        left: (s * 100 + i * 7.3) % 100,
        delay: (i * 0.85) % 6,
        duration: 9 + ((i * 1.7) % 7),
        drift: i % 2 === 0 ? 18 : -18,
        size: 3 + ((i * 1.3) % 4),
        opacity: 0.35 + ((i * 0.13) % 0.45),
      }
    })
  }, [count])
}

export function FooterSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.14])

  const glints = useGlints(11)

  return (
    <footer ref={ref} className="relative min-h-svh overflow-hidden md:min-h-screen">
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 will-change-transform">
        <Image
          src="/e2-mobile.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#F7F6F2_0%,rgba(247,246,242,0.45)_18%,rgba(247,246,242,0.05)_38%,transparent_60%,rgba(42,37,32,0.18)_80%,rgba(42,37,32,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,transparent_40%,rgba(42,37,32,0.35)_100%)]" />
      </motion.div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
        {glints.map((g, i) => (
          <motion.span
            key={i}
            initial={{ y: "10vh", x: 0, opacity: 0 }}
            animate={{
              y: ["10vh", "-110vh"],
              x: [0, g.drift, -g.drift / 1.6, g.drift / 2, 0],
              opacity: [0, g.opacity, g.opacity, g.opacity, 0],
            }}
            transition={{
              duration: g.duration,
              delay: g.delay,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.15, 0.5, 0.85, 1],
            }}
            style={{
              left: `${g.left}%`,
              width: g.size,
              height: g.size,
              boxShadow: `0 0 ${g.size * 4}px ${g.size}px rgba(255,255,255,0.45)`,
            }}
            className="absolute bottom-0 rounded-full bg-white/85 will-change-transform"
          />
        ))}
      </div>

      <AmbientParticles
        className="absolute inset-0 z-[1] pointer-events-none"
        count={42}
        size={9}
        spread={26}
        speed={0.45}
        colors={["#FFFFFF", "#F7F6F2", "#E8DFCB", "#D8DED5"]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
        className="relative z-[1] mx-auto max-w-[36rem] text-center pt-12 pb-[clamp(16rem,45svh,28rem)]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: easeOutExpo }}
          viewport={{ once: true }}
          className="mb-6 flex items-center justify-center gap-4"
        >
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/40" />
          <motion.span
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/65"
          >
            <PiHeartFill aria-hidden="true" className="inline-block h-3 w-3" />
          </motion.span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.3, ease: easeOutExpo }}
          viewport={{ once: true }}
          className="font-display text-[clamp(1.9rem,5vw,2.8rem)] leading-[1] font-medium tracking-[-0.022em] text-white [text-shadow:0_4px_30px_rgba(0,0,0,0.3)]"
        >
          Віталій <span className="italic font-light text-white/80">&amp;</span> Тетяна
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-3 font-sans text-[0.66rem] font-medium uppercase tracking-[0.4em] text-white/55"
        >
          11 липня 2026 &middot; Львів
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-7 font-display italic text-[clamp(1rem,3vw,1.2rem)] font-normal text-white/55"
        >
          З любов&rsquo;ю та вдячністю
        </motion.p>
      </motion.div>
    </footer>
  )
}
