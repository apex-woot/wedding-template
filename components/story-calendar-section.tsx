const daysOfWeek = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]

const calendarCells = [
  { key: "empty-start-1", day: null },
  { key: "empty-start-2", day: null },
  { key: "empty-start-3", day: null },
  { key: "day-1", day: 1 },
  { key: "day-2", day: 2 },
  { key: "day-3", day: 3 },
  { key: "day-4", day: 4 },
  { key: "day-5", day: 5 },
  { key: "day-6", day: 6 },
  { key: "day-7", day: 7 },
  { key: "day-8", day: 8 },
  { key: "day-9", day: 9 },
  { key: "day-10", day: 10 },
  { key: "day-11", day: 11 },
  { key: "day-12", day: 12 },
  { key: "day-13", day: 13 },
  { key: "day-14", day: 14 },
  { key: "day-15", day: 15 },
  { key: "day-16", day: 16 },
  { key: "day-17", day: 17 },
  { key: "day-18", day: 18 },
  { key: "day-19", day: 19 },
  { key: "day-20", day: 20 },
  { key: "day-21", day: 21 },
  { key: "day-22", day: 22 },
  { key: "day-23", day: 23 },
  { key: "day-24", day: 24 },
  { key: "day-25", day: 25 },
  { key: "day-26", day: 26 },
  { key: "day-27", day: 27 },
  { key: "day-28", day: 28 },
  { key: "day-29", day: 29 },
  { key: "day-30", day: 30 },
  { key: "day-31", day: 31 },
  { key: "empty-end-1", day: null },
]

function BotanicalStem({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 240"
      aria-hidden="true"
      className={`h-auto w-full ${className}`}
      fill="none"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M49 235C48 195 50 161 59 127C65 106 69 85 62 55C58 37 49 20 36 7"
          strokeWidth="1.3"
        />
        <path d="M58 123C74 112 85 98 90 82" strokeWidth="0.95" />
        <path d="M55 104C40 94 30 82 25 66" strokeWidth="0.95" />
        <path d="M89 82C79 79 69 82 61 91" strokeWidth="0.85" />
        <path d="M24 66C34 64 43 67 51 76" strokeWidth="0.85" />
      </g>
    </svg>
  )
}

export function StoryCalendarSection() {
  return (
    <section
      aria-labelledby="date-story-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fd_0%,#eef4fb_100%)] px-4 pt-[clamp(4rem,10vw,7rem)] pb-[clamp(5rem,10vw,8rem)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[clamp(8rem,18svh,13rem)] bg-[linear-gradient(180deg,rgba(247,249,253,0.92)_0%,rgba(247,249,253,0.7)_28%,rgba(247,249,253,0.28)_62%,rgba(247,249,253,0)_100%)]" />
      <div className="pointer-events-none absolute left-[clamp(0.75rem,4vw,3rem)] top-[20%] w-[min(20vw,9rem)] text-[#98b9e0]/15">
        <BotanicalStem />
      </div>
      <div className="pointer-events-none absolute right-[clamp(0.75rem,4vw,3rem)] bottom-[14%] w-[min(20vw,9rem)] scale-x-[-1] text-[#98b9e0]/15">
        <BotanicalStem />
      </div>

      <div className="relative z-[1] mx-auto max-w-[48rem]">
        <div className="overflow-hidden rounded-[2rem] bg-white/92 shadow-[0_24px_60px_rgba(110,138,176,0.12)] inset-shadow-[0_1px_0_rgba(255,255,255,0.8)] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700">
          <div className="relative bg-[linear-gradient(180deg,#a8c4e6_0%,#93b4dc_100%)] px-[1.8rem] pt-[clamp(3.4rem,10vw,4.8rem)] pb-[3.4rem] text-center text-[#fffdfb] md:px-12">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[18px] rotate-180 bg-[radial-gradient(circle_at_10px_-4px,transparent_12px,#93b4dc_13px),radial-gradient(circle_at_30px_-4px,transparent_12px,#93b4dc_13px)] [background-size:40px_18px] [background-repeat:repeat-x]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18px] bg-[radial-gradient(circle_at_10px_-4px,transparent_12px,#93b4dc_13px),radial-gradient(circle_at_30px_-4px,transparent_12px,#93b4dc_13px)] [background-size:40px_18px] [background-repeat:repeat-x]" />

            <p className="m-0 mb-4 font-sans text-[0.72rem] font-medium uppercase tracking-[0.3em] text-[#f8fbff]/80">
              11 липня 2026
            </p>
            <h2
              id="date-story-title"
              className="m-0 font-display text-[clamp(2.3rem,7vw,4rem)] leading-[1.04] font-semibold uppercase tracking-[0.03em]"
            >
              У цей день
              <br />
              починається наше назавжди
            </h2>
            <p className="m-0 mt-4 font-display text-[clamp(2.7rem,9vw,4.8rem)] leading-[0.95] font-light italic text-[#fff4ec]">
              з усією нашою любов'ю
            </p>
          </div>

          <div className="relative bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(248,251,255,0.98))] px-[1.35rem] pt-[clamp(2.8rem,7vw,4.2rem)] pb-[clamp(2.6rem,8vw,3.6rem)] text-center md:px-[2.6rem]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(170,190,220,0.16),transparent_22%),radial-gradient(circle_at_78%_72%,rgba(196,210,232,0.16),transparent_26%)]" />

            <p className="relative z-[1] m-0 font-display text-[clamp(3rem,10vw,5rem)] leading-[0.95] font-light italic text-[#89add8]">
              Липень
            </p>
            <p className="relative z-[1] mt-[0.35rem] mb-8 font-sans text-[0.78rem] uppercase tracking-[0.26em] text-[#7e9cc4]">
              Львів, Україна
            </p>

            <div
              role="img"
              aria-label="Календар на липень 2026 року, де 11 число виділено як день весілля"
              className="relative z-[1] mx-auto grid max-w-[25rem] grid-cols-7 items-center gap-y-[0.8rem] gap-x-[0.15rem] md:gap-y-4 md:gap-x-[0.35rem]"
            >
              {daysOfWeek.map((day) => (
                <span
                  key={day}
                  className="font-sans text-[0.67rem] font-semibold uppercase tracking-[0.18em] text-[#7a96be]/65"
                >
                  {day}
                </span>
              ))}

              {calendarCells.map(({ key, day }) => {
                if (day === null) {
                  return <span key={key} className="h-[2.55rem] opacity-0" />
                }

                const isWeddingDay = day === 11

                return (
                  <span
                    key={key}
                    className="grid min-h-[2.55rem] place-items-center font-sans text-[clamp(1.05rem,3.8vw,1.5rem)] font-light text-[#5b6f8c]"
                  >
                    {isWeddingDay ? (
                      <span
                        title="11 липня, день весілля"
                        className="relative inline-grid h-[2.35rem] w-[2.6rem] place-items-center text-[1.06rem] font-semibold leading-none text-[#fffdfb] md:h-[2.7rem] md:w-[2.95rem] md:text-[1.12rem]"
                      >
                        <span className="absolute inset-0 z-0 rotate-45 rounded-[0.2rem_0.2rem_0.9rem_0.9rem] bg-[#9ebde3] top-[0.48rem] scale-[0.92]" />
                        <span className="absolute inset-0 z-0 -rotate-45 rounded-[0.2rem_0.2rem_0.9rem_0.9rem] bg-[#9ebde3] top-[0.48rem] scale-[0.92]" />
                        <span className="relative z-[1]">{day}</span>
                        <span className="sr-only">11 липня, день весілля</span>
                      </span>
                    ) : (
                      day
                    )}
                  </span>
                )
              })}
            </div>

            <p className="relative z-[1] mt-[2.2rem] m-0 font-sans text-[0.8rem] font-medium uppercase tracking-[0.24em] text-[#92b4dd]">
              Субота, 11 липня 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
