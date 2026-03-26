"use client"

import Image from "next/image"

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
      <div className="absolute inset-0 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000">
        <Image
          src="/IMG_8529.jpg"
          alt=""
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-[56%_center] will-change-transform md:object-center motion-safe:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(80,101,132,0.14)_0%,rgba(99,122,154,0.12)_28%,rgba(244,241,236,0.2)_54%,rgba(235,239,246,0.82)_100%),radial-gradient(90%_80%_at_50%_46%,rgba(255,255,255,0)_34%,rgba(137,164,198,0.2)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[clamp(11rem,28svh,20rem)] bg-[linear-gradient(180deg,rgba(239,243,249,0)_0%,rgba(239,243,249,0.14)_24%,rgba(239,243,249,0.46)_50%,rgba(239,243,249,0.84)_76%,#edf3fb_100%)]" />
      </div>

      <div className="pointer-events-none absolute bottom-[clamp(5rem,10svh,8rem)] left-[clamp(1rem,4vw,3rem)] z-[1] w-[min(22vw,12rem)] text-[#f6f3ee]/25">
        <BotanicalAccent />
      </div>
      <div className="pointer-events-none absolute bottom-[clamp(5rem,10svh,8rem)] right-[clamp(1rem,4vw,3rem)] z-[1] w-[min(22vw,12rem)] scale-x-[-1] text-[#f6f3ee]/25">
        <BotanicalAccent />
      </div>

      <div className="relative z-[2] flex min-h-svh flex-col justify-between px-4 pt-[1.3rem] pb-8 text-center text-[#f7f4ee] md:px-8 md:pt-8 md:pb-[2.6rem]">
        <div className="grid gap-2 pt-[clamp(5.4rem,16svh,10rem)] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 md:pt-[clamp(6.4rem,15svh,12rem)]">
          <h1 className="m-0 inline-flex items-baseline justify-center gap-[0.45rem] font-display text-[clamp(3.4rem,15.8vw,6.2rem)] leading-[0.96] font-normal italic tracking-[-0.02em] text-[#fdfbf7] [text-shadow:0_10px_28px_rgba(0,0,0,0.58)] md:gap-[0.7rem] md:text-[clamp(5rem,10.5vw,8.2rem)]">
            <span>Vitalii</span>
            <span className="inline-block translate-y-[-0.04em] text-[clamp(1.2rem,5vw,1.75rem)] leading-none text-[#a8c4e8]">
              &amp;
            </span>
            <span>Tetiana</span>
          </h1>
        </div>

        <div className="relative z-[1] grid gap-2 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 motion-safe:delay-200">
          <p className="m-0 font-sans text-[clamp(0.82rem,3.7vw,1rem)] font-medium tracking-[0.22em] text-[#f9f7f2] [text-shadow:0_2px_18px_rgba(86,109,140,0.28)] md:text-[clamp(0.95rem,1.4vw,1.15rem)]">
            11 07 2026 · LVIV
          </p>
        </div>
      </div>
    </section>
  )
}
