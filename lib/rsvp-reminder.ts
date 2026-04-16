// RSVP deadline: 4 weeks before the wedding on 2026-07-11 → 2026-06-13.
const REMINDER_DATE_START = "20260613"
const REMINDER_DATE_END = "20260614"
const REMINDER_UID = "rsvp-reminder-kohut-wedding-2026@kohut-wedding"

export type ReminderCopy = {
  title: string
  details: string
}

export function buildGoogleCalendarUrl({
  title,
  details,
}: ReminderCopy): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${REMINDER_DATE_START}/${REMINDER_DATE_END}`,
    details,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

function escapeIcsText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;")
}

function formatUtcStamp(date: Date): string {
  const pad = (n: number) => n.toString().padStart(2, "0")
  return (
    date.getUTCFullYear().toString() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    "T" +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    "Z"
  )
}

export function buildIcsContent({ title, details }: ReminderCopy): string {
  const stamp = formatUtcStamp(new Date())
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Kohut Wedding//RSVP Reminder//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${REMINDER_UID}`,
    `DTSTAMP:${stamp}`,
    `DTSTART;VALUE=DATE:${REMINDER_DATE_START}`,
    `DTEND;VALUE=DATE:${REMINDER_DATE_END}`,
    `SUMMARY:${escapeIcsText(title)}`,
    `DESCRIPTION:${escapeIcsText(details)}`,
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    "TRIGGER:PT9H",
    `DESCRIPTION:${escapeIcsText(title)}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ]
  return lines.join("\r\n")
}

export function downloadIcsFile(
  copy: ReminderCopy,
  filename = "rsvp-reminder.ics"
) {
  const content = buildIcsContent(copy)
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
