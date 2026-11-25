import Link from 'next/link'
import Masthead from './Masthead'
import StoryCard from './StoryCard'
import StoryRow from './StoryRow'
import { SECTIONS, stamp } from '../../data/stories'
import { getWire } from '../../data/wire'

/* Front-page spans. Deliberately uneven, and the third row starts one column
   in from the edge so the grid visibly breaks against the rows above it. */
const SPANS = [
  'md:col-span-7',
  'md:col-span-5',
  'md:col-span-4',
  'md:col-span-4',
  'md:col-span-4',
  'md:col-span-8 md:col-start-2',
  'md:col-span-3 md:col-start-10',
]

export default async function Home({ section }: { section?: string }) {
  const { stories, lead, front, briefs } = await getWire()
  const desk = SECTIONS.find((s) => s.slug === section)
  const cards = desk ? stories.filter((s) => s.section === desk.slug) : front

  return (
    <>
      <Masthead section={desk?.slug} count={stories.length} />

      {desk ? null : (
        <section className="field-ink border-b-[3px] border-[var(--slug)] px-[var(--gutter)] py-6">
          <Link
            href={`/story/${lead.slug}`}
            className="ink grid no-underline md:grid-cols-12 md:gap-x-[var(--gutter)]"
          >
            {lead.image ? (
              <figure className="md:col-span-5">
                <img
                  src={lead.image.src}
                  alt={lead.image.alt}
                  width={lead.image.width}
                  height={lead.image.height}
                  className="photo"
                />
                <figcaption className="folio-micro mt-1">
                  Illustrative photograph
                </figcaption>
              </figure>
            ) : null}

            {/* A wire filing arrives without a photograph, so the lead takes the
                whole measure instead of leaving a hole where the plate was. */}
            <div className={`mt-4 md:mt-0 ${lead.image ? 'md:col-span-7' : 'md:col-span-12'}`}>
              <p className="folio-micro">
                Lead <span aria-hidden="true">·</span> {lead.sectionName}{' '}
                <span aria-hidden="true">·</span> {stamp(lead.published)}
              </p>
              <h2 className="type-lead font-print mt-2">{lead.headline}</h2>
              <p className="standfirst mt-3">{lead.standfirst}</p>
              <p className="font-folio mt-4">
                {lead.source} <span aria-hidden="true">·</span> {lead.bureau}{' '}
                <span aria-hidden="true">·</span> {lead.readMinutes} min
              </p>
            </div>
          </Link>
        </section>
      )}

      <section className="px-[var(--gutter)] pt-8">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="section-mark">{desk ? `Desk — ${desk.name}` : 'On the wire'}</h2>
          <p className="folio-micro">
            {cards.length} {cards.length === 1 ? 'item' : 'items'}
            {desk ? (
              <>
                {' '}
                <span aria-hidden="true">·</span>{' '}
                <Link href="/" className="text-[var(--fg)] underline underline-offset-4">
                  Clear desk
                </Link>
              </>
            ) : null}
          </p>
        </div>

        <ul className="mt-4 grid grid-cols-1 gap-y-3 md:grid-cols-12 md:gap-x-[var(--gutter)] md:gap-y-0">
          {cards.map((story, n) => (
            <StoryCard
              key={story.slug}
              story={story}
              i={n}
              className={desk ? 'md:col-span-4' : SPANS[n]}
            />
          ))}
        </ul>
      </section>

      <section className="mt-10 px-[var(--gutter)]">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="section-mark">Latest filing</h2>
            <ul className="rail mt-3">
              {stories.slice(0, 6).map((story, n) => (
                <StoryRow key={story.slug} story={story} index={n + 1} />
              ))}
            </ul>
          </div>
          <div className="md:col-span-5">
            <h2 className="section-mark">In brief</h2>
            <ul className="mt-3">
              {briefs.map((story, n) => (
                <StoryRow key={story.slug} story={story} index={n + 1} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {desk ? null : (
        <div className="mt-10 px-[var(--gutter)]">
          {SECTIONS.slice(1).map((s) => {
            const rail = stories.filter((story) => story.section === s.slug).slice(0, 6)
            return (
              <section key={s.slug} className="mb-8">
                <h2 className="section-mark">
                  <Link
                    href={`/?section=${s.slug}`}
                    className="text-[var(--fg)] no-underline"
                  >
                    {s.name} desk
                  </Link>
                </h2>
                <ul className="rail mt-3">
                  {rail.map((story, n) => (
                    <StoryRow key={story.slug} story={story} index={n + 1} />
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      )}
    </>
  )
}
