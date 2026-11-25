'use client'

import Clock from './Clock'
import SearchField from './SearchField'
import { SECTIONS } from '../../data/stories'

/* Nameplate: the wordmark is the largest thing on the site, and the only
   decoration it gets is the double rule under it. The item count arrives as a
   prop because it is the live wire's count, not a constant. */
export default function Masthead({ section, count }: { section?: string; count: number }) {
  const now = new Date()
  const issue = Math.floor((now.getTime() - Date.UTC(now.getUTCFullYear(), 0, 0)) / 86_400_000)
  const active = SECTIONS.find((s) => s.slug === section)

  return (
    <header className="border-b-[3px] border-[var(--slug)] px-[var(--gutter)] pt-5 pb-5">
      <div className="font-folio flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span>
          World desk
          <span aria-hidden="true"> / </span>
          <span className="text-[var(--ink-max)] font-medium">
            {active ? active.name : 'Front page'}
          </span>
        </span>
        <span>
          Issue {String(issue).padStart(3, '0')} <span aria-hidden="true">·</span>{' '}
          <Clock />
        </span>
      </div>

      <h1 className="type-display font-print mt-2 text-[var(--ink-max)]">World Wide Lens</h1>

      <div className="rule-double wipe mt-4" aria-hidden="true" />

      <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:items-end">
        <p className="standfirst">
          {count} items on the wire, newest first. No colour, no commentary
          &mdash; only what was filed, and when.
        </p>
        <SearchField id="masthead-q" />
      </div>
    </header>
  )
}
