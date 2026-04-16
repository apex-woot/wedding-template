import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

type RoomType = "double" | "triple" | "house"
type BookedRow = { room_type: RoomType; booked: number }

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  )
}

export async function GET() {
  const { data, error } = await getSupabase().rpc("get_room_availability")

  if (error) {
    console.error("rooms rpc error:", error)
    return NextResponse.json({ error: "failed" }, { status: 500 })
  }

  const booked: Record<RoomType, number> = { double: 0, triple: 0, house: 0 }
  for (const row of (data ?? []) as BookedRow[]) {
    if (row.room_type in booked) booked[row.room_type] = row.booked
  }

  return NextResponse.json(
    { booked },
    { headers: { "Cache-Control": "no-store" } }
  )
}
