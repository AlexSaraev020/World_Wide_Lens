import { Suspense } from 'react'
import Link from 'next/link'
import Nav from './Nav'
import Clock from './Clock'

/* Running head. Sticky by design: it is the printed masthead strip that keeps
   the section vocabulary on screen while the columns scroll under it. */
export default function Header() {
  return (
    <div className="running-head">
      <div className="flex flex-wrap items-center gap-x-4 px-[var(--gutter)]">
        <Link
          href="/"
          className="font-print min-h-11 flex items-center text-[1.05rem] font-extrabold tracking-[-0.02em] text-[var(--ink-max)] no-underline"
          aria-label="World Wide Lens, front page"
        >
          WWL
        </Link>
        <div className="rule-side min-w-0 flex-1 py-1 pl-3">
          {/* Nav reads the query string for the active desk, so it needs a
             boundary or Next falls back to rendering the whole layout dynamic. */}
          <Suspense fallback={<span className="font-folio">Sections</span>}>
            <Nav />
          </Suspense>
        </div>
        <Clock className="font-folio hidden whitespace-nowrap md:block" />
      </div>
    </div>
  )
}
