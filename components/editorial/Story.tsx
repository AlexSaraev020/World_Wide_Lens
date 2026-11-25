import Link from 'next/link'
import StoryRow from './StoryRow'
import { stamp, type Story } from '../../data/stories'

/* Set like a page of newsprint: the headline across the full measure, the
   photograph on the left with its credit under it, the standfirst and the
   source block beside it, then the filing across the whole width in columns.

   The plate is capped at the width the outlet actually filed, so it is never
   blown up — a 700-wide picture shown in a 792-wide column is a blurry picture. */
export default function StoryPage({ story, also }: { story: Story; also: Story[] }) {
  return (
    <article className="px-[var(--gutter)] pt-6">
      <p className="folio-micro">
        <Link
          href={`/?section=${story.section}`}
          className="text-[var(--fg)] underline underline-offset-4"
        >
          {story.sectionName} desk
        </Link>
        <span aria-hidden="true"> · </span>
        {story.kicker}
        <span aria-hidden="true"> · </span>
        Filed {stamp(story.published)}
      </p>

      <h1 className="type-lead font-print mt-3 break-words">{story.headline}</h1>

      <div className="rule-double mt-6 pt-3">
        <p className="font-folio flex flex-wrap items-baseline gap-x-2">
          <span className="text-[var(--fg)]">By {story.byline}</span>
          <span aria-hidden="true">·</span>
          <span>{story.source}</span>
          <span aria-hidden="true">·</span>
          <span>{story.bureau}</span>
          <span aria-hidden="true">·</span>
          <span>{stamp(story.published)}</span>
          <span aria-hidden="true">·</span>
          <span>{story.readMinutes} min</span>
        </p>
      </div>

      <div className="mt-6 grid gap-x-[var(--gutter)] gap-y-6 md:grid-cols-12">
        {story.image ? (
          <figure className="md:col-span-5">
            <img
              src={story.image.src}
              alt={story.image.alt}
              width={story.image.width}
              height={story.image.height}
              className="photo"
              style={{ maxWidth: story.image.width }}
            />
            <figcaption className="folio-micro mt-1">
              {story.link ? 'Photograph filed with this report' : 'Illustrative photograph — not a depiction of this filing.'}
              <span className="mt-1 block text-[var(--fg)]">{story.image.caption}</span>
            </figcaption>
          </figure>
        ) : null}

        {/* The margin column carries the standfirst, the source block and the
            related filings. Left with only the first two it came up hundreds of
            pixels shorter than the plate beside it and the page showed a hole
            beside every photograph. */}
        <aside className={story.image ? 'md:col-span-7' : 'md:col-span-12'}>
          <p className="standfirst">{story.standfirst}</p>
          {story.pull ? (
            <blockquote className="pull font-print mt-5">{story.pull}</blockquote>
          ) : null}
          <p className="folio-micro mt-5 border-t border-[var(--rule-now)] pt-3">
            Filed to the {story.sectionName} desk
            <br />
            Source: {story.source}
            <br />
            Reference {story.slug}
          </p>
          {story.link ? (
            <p className="folio-micro mt-4">
              This is the filing as it arrived on the wire. The full text is at{' '}
              <a
                href={story.link}
                className="text-[var(--fg)] underline underline-offset-4"
                rel="noopener noreferrer"
              >
                {story.source}
              </a>
              .
            </p>
          ) : null}

          <h2 className="section-mark inline-block mt-6">Also on the wire</h2>
          <ul className="mt-2">
            {also.map((s, n) => (
              <StoryRow key={s.slug} story={s} index={n + 1} />
            ))}
          </ul>
        </aside>
      </div>

      {story.body.length ? (
        <div className="body-print print-columns mt-8">
          {story.body.map((p, n) => (
            <p key={n} className={n === 0 ? 'drop-cap' : undefined}>
              {p}
            </p>
          ))}
        </div>
      ) : (
        /* A brief is one sentence and the wire sent nothing else. Saying so is
           truer than printing the standfirst a second time. */
        <p className="folio-micro mt-8 border-t-[3px] border-[var(--slug)] pt-3">
          Filed as a brief: {story.source} sent the headline and one line. The
          full text is at{' '}
          <a
            href={story.link}
            className="text-[var(--fg)] underline underline-offset-4"
            rel="noopener noreferrer"
          >
            {story.source}
          </a>
          .
        </p>
      )}

    </article>
  );
}
