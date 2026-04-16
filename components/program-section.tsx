"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, type ComponentType, type SVGProps } from "react"
import { LuCake, LuCamera, LuMapPin } from "react-icons/lu"
import { PiChampagne } from "react-icons/pi"
import { GiBigDiamondRing } from "react-icons/gi"
import { useTranslation } from "@/components/i18n-provider"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

type IconKind = "rings" | "pin" | "camera" | "glasses" | "cake"

const iconMap: Record<IconKind, ComponentType<SVGProps<SVGSVGElement>>> = {
  rings: GiBigDiamondRing,
  pin: LuMapPin,
  camera: LuCamera,
  glasses: PiChampagne,
  cake: LuCake,
}

const iconsByIndex: IconKind[] = ["rings", "pin", "camera", "glasses", "cake"]

function ProgramIcon({ icon }: { icon: IconKind }) {
  const Icon = iconMap[icon]
  return <Icon aria-hidden="true" className="h-auto w-[4.5rem]" strokeWidth={1.2} />
}

const timelineItemVariants = {
  hidden: { opacity: 0, x: -24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: easeOutExpo },
  },
}

export function ProgramSection() {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 80%", "end 60%"],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section
      ref={ref}
      id="program"
      aria-labelledby="program-title"
      className="min-h-[max(100svh,720px)] relative overflow-hidden bg-[#F7F6F2] px-4 py-[clamp(3.5rem,8vw,6rem)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[clamp(8rem,20svh,14rem)] bg-[linear-gradient(180deg,rgba(247,246,242,0.96)_0%,rgba(247,246,242,0.72)_30%,rgba(247,246,242,0.22)_66%,rgba(247,246,242,0)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(143,172,194,0.12),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(168,188,161,0.13),transparent_32%)]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: easeOutExpo }}
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-[1] mx-auto w-full max-w-[44rem] rounded-[2rem] bg-gradient-to-b from-white/95 to-[#FCFBF8]/80 backdrop-blur-md px-5 pt-10 pb-12 shadow-[0_30px_80px_-20px_rgba(88,60,42,0.16)] ring-1 ring-white/60 md:px-10 md:pt-14 md:pb-16"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center font-sans text-[0.62rem] md:text-[0.7rem] font-medium uppercase tracking-[0.5em] text-[#583C2A]/45 mb-3"
        >
          {t.program.kicker}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: easeOutExpo }}
          viewport={{ once: true }}
          id="program-title"
          className="m-0 text-center font-display text-[clamp(2.9rem,8vw,4.8rem)] uppercase tracking-[0.08em] text-[#364274]"
        >
          {t.program.title}
        </motion.h2>

        <div ref={lineRef} className="relative mt-10 md:mt-14 mx-auto w-fit">
          <div className="absolute top-2 bottom-6 left-[calc(5.25rem+0.625rem)] w-px bg-[#D8DED5] md:left-[calc(8rem+1.25rem)] md:translate-x-0" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-2 left-[calc(5.25rem+0.625rem)] w-px bg-gradient-to-b from-[#583C2A] via-[#583C2A]/60 to-transparent md:left-[calc(8rem+1.25rem)] md:translate-x-0"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
            className="grid gap-10 md:gap-12"
          >
            {t.program.items.map((item, index) => (
              <motion.article
                key={item.time}
                variants={timelineItemVariants}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.4, ease: easeOutExpo }}
                className="grid grid-cols-[5.25rem_1.25rem_1fr] items-center gap-x-4 md:grid-cols-[8rem_2.5rem_1fr] md:gap-x-8 group cursor-default"
              >
                <div className="flex justify-center text-[#8FACC2] transition-colors duration-500 group-hover:text-[#583C2A]">
                  <ProgramIcon icon={iconsByIndex[index] ?? "pin"} />
                </div>

                <div className="relative flex h-full justify-center">
                  <span className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#8FACC2] shadow-[0_0_0_8px_rgba(250,250,247,0.95),0_0_0_9px_rgba(216,222,213,0.6)] transition-all duration-500 group-hover:bg-[#583C2A] group-hover:scale-125 group-hover:shadow-[0_0_0_8px_rgba(88,60,42,0.08),0_0_24px_rgba(88,60,42,0.4)]" />
                </div>

                <div className="text-left">
                  <p className="m-0 font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-none font-normal italic text-[#583C2A]/55 transition-colors duration-500 group-hover:text-[#364274]">
                    {item.time}
                  </p>
                  <h3 className="mt-2 mb-0 font-sans text-[1.2rem] leading-[1.35] font-light text-[#364274] md:text-[1.45rem]">
                    {item.title}
                  </h3>
                  {item.details && (
                    <p className="mt-1 mb-0 max-w-[22ch] font-sans text-[0.95rem] leading-[1.5] text-[#8FACC2] md:text-[1rem]">
                      {item.details}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
