const dressCodeColors = [
  { name: "Пудрово-блакитний", value: "#c8d9ef" },
  { name: "Пилова троянда", value: "#d8c1c4" },
  { name: "Теплий беж", value: "#d9ccb9" },
  { name: "Ніжний шавлієвий", value: "#bcc8ba" },
] as const

export function DressCodeSection() {
  return (
    <section
      aria-labelledby="dress-code-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#eff5fb_0%,#eef4fb_100%)] px-4 pt-[clamp(4.5rem,10vw,7rem)] pb-[clamp(5rem,12vw,8rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(184,203,228,0.22),transparent_22%),radial-gradient(circle_at_86%_72%,rgba(221,228,237,0.52),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0))]" />

      <div className="relative z-[1] mx-auto max-w-[46rem] rounded-[2rem] bg-[#fffdfa]/90 px-4 pt-9 pb-10 text-center shadow-[0_24px_70px_rgba(134,154,188,0.14)] ring-1 ring-white/80 md:px-8 md:pt-12 md:pb-14">
        <h2
          id="dress-code-title"
          className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-light italic tracking-[-0.03em] text-[#88a9d2]"
        >
          Дрес-код
        </h2>

        <p className="mx-auto mt-4 max-w-[28rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.12rem)] leading-[1.8] text-[#6e7f98]">
          Нам буде дуже приємно бачити гостей у ніжній, елегантній кольоровій
          палітрі.
        </p>

        <div className="mt-8 flex flex-nowrap items-start justify-center gap-3 md:mt-10 md:gap-5">
          {dressCodeColors.map((color) => (
            <div
              key={color.name}
              className="grid w-16 justify-items-center gap-2 md:w-20"
            >
              <span
                title={color.name}
                className="block size-14 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_14px_30px_rgba(122,142,174,0.16)] ring-1 ring-white/80 md:size-16"
                style={{ backgroundColor: color.value }}
              />
              <span className="text-center font-sans text-[0.58rem] font-medium uppercase tracking-[0.14em] text-[#8a9ebd] md:text-[0.65rem]">
                {color.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
