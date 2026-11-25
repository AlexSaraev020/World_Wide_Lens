import Link from 'next/link'
import StoryRow from './StoryRow'
import { stamp, type Story } from '../../data/stories'

/* A brief arrives with a standfirst and nothing else, so the standfirst is the
   filing. Related filings arrive from the page, which already holds the wire. */
export default function StoryPage({ story, also }: { story: Story; also: Story[] }) {
  const paras = story.body.length ? story.body : [story.standfirst]

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

      <div className="mt-3 grid gap-x-[var(--gutter)] gap-y-4 md:grid-cols-12">
        <h1 className="type-lead font-print break-words md:col-span-9">{story.headline}</h1>
        <p className="standfirst md:col-span-3 md:pt-2">{story.standfirst}</p>
      </div>

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

      {story.image ? (
        <figure className="mt-6 grid gap-x-[var(--gutter)] gap-y-2 md:grid-cols-12">
          <img
            src={story.image.src}
            alt={story.image.alt}
            width={story.image.width}
            height={story.image.height}
            className="photo md:col-span-8"
          />
          <figcaption className="folio-micro md:col-span-4 md:pt-1">
            Illustrative photograph — not a depiction of this filing.
            <span className="mt-2 block text-[var(--fg)]">{story.image.caption}</span>
          </figcaption>
        </figure>
      ) : null}

      <div className="mt-8 grid gap-x-[var(--gutter)] gap-y-8 md:grid-cols-12">
        <div className="body-print print-columns md:col-span-8">
          {paras.map((p, n) => (
            <p key={n} className={n === 0 ? 'drop-cap' : undefined}>
              {p}
            </p>
          ))}
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          {story.pull ? (
            <blockquote className="pull font-print">{story.pull}</blockquote>
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
        </aside>
      </div>

      <section className="mt-12 border-t-[3px] border-[var(--slug)] pt-5">
        <h2 className="section-mark">Related filing</h2>
        <ul className="mt-3 grid grid-cols-1 gap-x-[var(--gutter)] md:grid-cols-12">
          {also.map((s, n) => (
            <StoryRow
              key={s.slug}
              story={s}
              index={n + 1}
              className="md:col-span-4"
            />
          ))}
        </ul>
      </section>
    </article>
  )
}
