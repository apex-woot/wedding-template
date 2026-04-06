"use client"

export function SectionDivider({ from, to }: { variant?: string; from?: string; to?: string }) {
  const f = from ?? "#F7F6F2"
  const t = to ?? "#F7F6F2"

  return (
    <div
      className="h-[clamp(4rem,8svh,8rem)]"
      style={{ background: `linear-gradient(180deg, ${f} 0%, ${t} 100%)` }}
    />
  )
}
