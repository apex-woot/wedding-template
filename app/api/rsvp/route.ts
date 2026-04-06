import { createClient } from "@supabase/supabase-js"
import { type NextRequest, NextResponse } from "next/server"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
)

function sanitize(value: string): string {
  return value.trim().slice(0, 100)
}

function isValidSurname(value: string): boolean {
  if (value.length < 2 || value.length > 100) return false
  if (/[<>"';]/.test(value)) return false
  return true
}

function clampInt(value: unknown, min: number, max: number, fallback: number): number {
  const n = Number(value)
  if (!Number.isFinite(n)) return fallback
  return Math.max(min, Math.min(max, Math.round(n)))
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"

    const surname = sanitize(String(body.familySurname ?? ""))
    if (!isValidSurname(surname))
      return NextResponse.json({ error: "Некоректне прізвище." }, { status: 400 })

    const { data, error } = await supabase.rpc("submit_rsvp", {
      p_family_surname: surname,
      p_adults_count: clampInt(body.adultsCount, 1, 20, 2),
      p_children_count: clampInt(body.childrenCount, 0, 20, 0),
      p_attending: Boolean(body.attending),
      p_hotel_booking: Boolean(body.hotelBooking),
      p_transfer_needed: Boolean(body.transferNeeded),
      p_attending_church: Boolean(body.attendingChurch),
      p_ip: ip,
    })

    if (error) {
      console.error("rsvp rpc error:", error)
      return NextResponse.json({ error: "Щось пішло не так. Спробуйте ще раз." }, { status: 500 })
    }

    if (data === "duplicate")
      return NextResponse.json({ error: "Відповідь від цієї сім'ї вже була надіслана." }, { status: 409 })
    if (data === "rate_limit")
      return NextResponse.json({ error: "Забагато запитів. Зачекайте хвилину та спробуйте знову." }, { status: 429 })
    if (data === "validation")
      return NextResponse.json({ error: "Некоректні дані." }, { status: 400 })
    if (data === "error")
      return NextResponse.json({ error: "Щось пішло не так. Спробуйте ще раз." }, { status: 500 })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Щось пішло не так. Спробуйте ще раз." }, { status: 500 })
  }
}
