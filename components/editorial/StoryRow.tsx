import Link from 'next/link'
import { splitMatch, stamp, type Story } from '../../data/stories'

/* Compact row: section rails, related stories, search results. Matched terms
   come out as inverted ink, never as a highlight colour. */
export default function StoryRow({
  story,
  index,
  query,
  className = '',
}: {
  story: Story
  index: number
  query?: string
  className?: string
}) {
  const parts = (text: string) =>
    query
      ? splitMatch(text, query).map((c, n) =>
          c.hit ? (
            <mark key={n} className="match">
              {c.t}
            </mark>
          ) : (
            <span key={n}>{c.t}</span>
          ),
        )
      : text

  return (
    <li className={`ink ${className}`}>
      <Link
        href={`/story/${story.slug}`}
        className="flex min-h-11 items-start gap-3 border-b border-[var(--rule-hair)] px-3 py-3 no-underline"
      >
        <span className="folio-micro shrink-0 pt-1 tabular-nums" aria-hidden="true">
          {String(index).padStart(2, '0')}
        </span>
        <span className="min-w-0">
          <span className="font-print block text-[1.1rem] leading-[1.18] font-semibold tracking-[-0.015em] text-[var(--fg)]">
            {parts(story.headline)}
          </span>
          <span className="mt-1 block text-[0.95rem] leading-[1.45] text-[var(--fg-soft)]">
            {parts(story.standfirst)}
          </span>
          <span className="font-folio mt-1 block">
            {story.sectionName} <span aria-hidden="true">·</span> {story.source}{' '}
            <span aria-hidden="true">·</span> {stamp(story.published)}
          </span>
        </span>
      </Link>
    </li>
  )
}
