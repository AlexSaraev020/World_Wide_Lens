import Link from 'next/link'
import SearchField from './SearchField'
import StoryRow from './StoryRow'
import { searchStories, suggestions } from '../../data/stories'
import { getWire } from '../../data/wire'

/* The query is the headline of this screen. Results are rows, not cards: the
   matched term carries the emphasis, inverted as ink. */
const MAX_ROWS = 40

export default async function SearchResults({ query }: { query?: string }) {
  const { stories } = await getWire()
  const q = (query ?? '').trim()
  const results = q ? searchStories(stories, q) : stories
  const shown = results.length
  const tries = suggestions(stories)

  return (
    <section className="px-[var(--gutter)] pt-6">
      <p className="folio-micro">
        Search <span aria-hidden="true">·</span> {stories.length} items indexed
      </p>

      <h1 className="type-display mt-1 break-words">
        {q ? `"${q}"` : 'Search the wire'}
      </h1>
      <div className="rule-double wipe mt-4" aria-hidden="true" />

      <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:items-end">
        <SearchField id="search-q" q={q} />
        <p className="folio-micro lg:text-right">
          Try{' '}
          {tries.map((s, n) => (
            <span key={s}>
              {n > 0 ? <span aria-hidden="true"> · </span> : null}
              <Link
                href={`/search?q=${encodeURIComponent(s)}`}
                className="text-[var(--fg)] underline underline-offset-4"
              >
                {s}
              </Link>
            </span>
          ))}
        </p>
      </div>

      <div className="mt-8">
        <p className="font-folio" role="status">
          {q
            ? `${shown} ${shown === 1 ? 'item' : 'items'} matched`
            : `${shown} items, newest first`}
          {shown > MAX_ROWS ? ` · showing the first ${MAX_ROWS}` : ''}
        </p>

        {shown === 0 ? (
          <div className="mt-4 border-t-[3px] border-[var(--slug)] pt-4">
            <h2 className="type-sub font-print">
              Nothing on the wire matches &ldquo;{q}&rdquo;
            </h2>
            <p className="standfirst mt-2">
              The wire carries the last few days of filings. Pick a desk above,
              or search a shorter phrase &mdash; one word is usually enough.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {tries.map((s) => (
                <li key={s}>
                  <Link
                    href={`/search?q=${encodeURIComponent(s)}`}
                    className="font-folio flex min-h-11 items-center border border-[var(--rule-strong)] px-3 text-[var(--fg)] no-underline hover:bg-[var(--scrim)]"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className="mt-3 border-t-[3px] border-[var(--slug)]">
            {results.slice(0, MAX_ROWS).map((story, n) => (
              <StoryRow key={story.slug} story={story} index={n + 1} query={q || undefined} />
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
