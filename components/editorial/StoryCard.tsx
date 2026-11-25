import Link from 'next/link'
import { stamp, type Story } from '../../data/stories'

/* Grid card. One link over the whole block, no radius, no shadow: the
   hierarchy is carried by headline size and rules. The photograph keeps its
   own measured ratio — nothing here crops or stretches it. */
export default function StoryCard({
  story,
  lead = false,
  i = 0,
  className = '',
}: {
  story: Story
  lead?: boolean
  i?: number
  className?: string
}) {
  return (
    <li className={`rise ${className}`} style={{ ['--i' as string]: i }}>
      <Link
        href={`/story/${story.slug}`}
        className="ink block h-full border-t border-[var(--rule-now)] px-3 py-4 no-underline"
      >
        <span className="folio-micro flex items-baseline justify-between gap-3">
          <span>{story.sectionName}</span>
          <span>{stamp(story.published)}</span>
        </span>

        {story.image ? (
          <span className="photo-frame mt-3 block">
            <img
              src={story.image.src}
              alt={story.image.alt}
              width={story.image.width}
              height={story.image.height}
              loading={lead ? 'eager' : 'lazy'}
              className="photo"
            />
            <span className="folio-micro mt-1 block">Illustrative photograph</span>
          </span>
        ) : null}

        <h3
          className={`font-print mt-3 text-[var(--fg)] ${lead ? 'type-headline' : 'type-sub'}`}
        >
          {story.headline}
        </h3>

        <p className="standfirst mt-2 line-clamp-3">{story.standfirst}</p>

        <p className="font-folio mt-3 flex flex-wrap items-baseline gap-x-2">
          <span className="text-[var(--fg)]">{story.source}</span>
          <span aria-hidden="true">·</span>
          <span>{story.bureau}</span>
          <span aria-hidden="true">·</span>
          <span>{story.readMinutes} min</span>
        </p>
      </Link>
    </li>
  )
}
