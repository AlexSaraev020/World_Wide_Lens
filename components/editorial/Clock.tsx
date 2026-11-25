'use client'

import { useEffect, useState } from 'react'

/* Live dateline. Printed in UTC so the server render and the client render
   cannot disagree, and the string reads as a letterpress folio line. */
export function dateline(d: Date) {
  const [date, time] = d.toUTCString().split(' ')
  return `${date.replace(',', '')} ${time.slice(0, 5)} UTC`
}

export default function Clock({ className }: { className?: string }) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <time dateTime={now.toISOString()} className={className} suppressHydrationWarning>
      {dateline(now)}
    </time>
  )
}
