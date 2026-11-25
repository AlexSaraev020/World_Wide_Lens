'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { SECTIONS } from '../../data/stories'

/* Running navigation: the section list is always the same set, in the same
   order, on every screen. The current desk is shown by inversion, not colour. */
export default function Nav() {
  const pathname = usePathname()
  const params = useSearchParams()
  const activeSection = params.get('section')

  return (
    <nav aria-label="Sections" className="rail items-center gap-0">
      {SECTIONS.map((s, i) => {
        const href = `/?section=${s.slug}`
        const current = pathname === '/' && activeSection === s.slug
        return (
          <Link
            key={s.slug}
            href={href}
            aria-current={current ? 'true' : undefined}
            className={`font-folio flex min-h-11 items-center whitespace-nowrap px-3 no-underline ${
              current
                ? 'bg-[var(--ink-max)] text-[var(--paper)]'
                : 'text-[var(--fg)] hover:bg-[var(--scrim)]'
            }`}
          >
            <span aria-hidden="true" className="mr-2 text-[var(--ink-4)]">
              {String(i + 1).padStart(2, '0')}
            </span>
            {s.name}
          </Link>
        )
      })}
      <Link
        href="/search"
        aria-current={pathname === '/search' ? 'true' : undefined}
        className={`font-folio flex min-h-11 items-center whitespace-nowrap px-3 no-underline ${
          pathname === '/search'
            ? 'bg-[var(--ink-max)] text-[var(--paper)]'
            : 'text-[var(--fg)] hover:bg-[var(--scrim)]'
        }`}
      >
        <span aria-hidden="true" className="mr-2 text-[var(--ink-4)]">
          99
        </span>
        Search
      </Link>
    </nav>
  )
}
