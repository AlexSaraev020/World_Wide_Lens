import Link from 'next/link'
import { SECTIONS } from '../../data/stories'
import Clock from './Clock'

/* Colophon, not a marketing footer: what the wire carries, who files it,
   and what the page is set in. */
export default function Footer() {
  return (
    <footer className="mt-14 border-t-[3px] border-[var(--slug)] px-[var(--gutter)] pt-6 pb-10">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="section-mark inline-block">Colophon</h2>
          <p className="font-print mt-3 max-w-[34ch] text-[1rem] leading-[1.6] text-[var(--fg-soft)]">
            World Wide Lens prints one story per item, in the order it was
            filed, across {SECTIONS.length} desks.
          </p>
        </div>

        <nav aria-label="Sections" className="md:col-span-4">
          <h2 className="section-mark inline-block">Desks</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-4">
            {SECTIONS.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/?section=${s.slug}`}
                  className="font-folio flex min-h-11 items-center text-[var(--fg)] no-underline hover:bg-[var(--scrim)]"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/search"
                className="font-folio flex min-h-11 items-center text-[var(--fg)] no-underline hover:bg-[var(--scrim)]"
              >
                Search
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="section-mark inline-block">Set in</h2>
          <p className="folio-micro mt-3 leading-[1.9]">
            Newsreader, IBM Plex Mono
            <br />
            Rendered monochrome, 0 accents
            <br />
            Compiled <Clock />
          </p>
        </div>
      </div>

      <p className="folio-micro mt-8 border-t border-[var(--rule-now)] pt-3">
        Headlines, standfirsts, opening paragraphs and bylines are reprinted from
        the wire as the outlets filed them; each item links back to its own page
        and the full text belongs to the outlet that reported it.
      </p>
    </footer>
  )
}
