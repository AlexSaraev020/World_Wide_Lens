/* THE LIVE WIRE — four desks, two outlets, no key and no quota, because both
   publish RSS. The Guardian's <description> carries the article's opening
   paragraphs, so those filings arrive with a body and go to the front page;
   BBC's carry one sentence, so they arrive as briefs and go to the In brief
   rail. Nothing here rewrites anything: the headline, the standfirst, the
   paragraphs and the byline are what the outlet filed, and every item keeps
   its own link back to the full text.

   Photographs are deliberately not pulled from the feeds — the outlets license
   their pictures to themselves. The wire is type and rules.

   When a feed cannot be read the screens fall back to the example wire in
   data/stories.ts, so the layout never renders empty. */

import { BRIEFS, FRONT, LEAD, SECTIONS, STORIES, type Section, type Story } from './stories.ts'

export type Feed = { section: Section; source: string; bureau: string; url: string }

const FEEDS: Feed[] = [
  { section: 'world',   source: 'The Guardian', bureau: 'World',       url: 'https://www.theguardian.com/world/rss' },
  { section: 'world',   source: 'BBC News',     bureau: 'World',       url: 'https://feeds.bbci.co.uk/news/world/rss.xml' },
  { section: 'climate', source: 'The Guardian', bureau: 'Environment', url: 'https://www.theguardian.com/environment/rss' },
  { section: 'climate', source: 'BBC News',     bureau: 'Science',     url: 'https://feeds.bbci.co.uk/news/science_and_environment/rss.xml' },
  { section: 'economy', source: 'The Guardian', bureau: 'Business',    url: 'https://www.theguardian.com/business/rss' },
  { section: 'economy', source: 'BBC News',     bureau: 'Business',    url: 'https://feeds.bbci.co.uk/news/business/rss.xml' },
  { section: 'europe',  source: 'The Guardian', bureau: 'Europe',      url: 'https://www.theguardian.com/world/europe-news/rss' },
  { section: 'europe',  source: 'BBC News',     bureau: 'Europe',      url: 'https://feeds.bbci.co.uk/news/world/europe/rss.xml' },
]

/* 15 minutes: the wire moves on that scale, and the free hosts do not like
   being asked harder than that. */
const REVALIDATE = 900

const decode = (raw: string) =>
  raw
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&hellip;/g, '…')
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&lsquo;|&rsquo;/g, "'")
    .replace(/&amp;/g, '&')

const plain = (raw: string) => decode(raw).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()

const field = (item: string, name: string) => {
  const m = item.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`))
  return m ? m[1] : ''
}

/* Guardian escapes its <p> blocks inside the description; BBC sends one plain
   sentence. Both shapes come out as a list of paragraphs. */
const paragraphs = (description: string): string[] => {
  const decoded = decode(description)
  const blocks = [...decoded.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => plain(m[1]))
  return (blocks.length ? blocks : [plain(decoded)])
    .filter((p) => p && !/^continue reading/i.test(p))
}

const slugOf = (url: string) =>
  url.split('#')[0].split('?')[0].replace(/\/+$/, '').split('/').pop() ?? ''

export function toStory(item: string, feed: Feed): Story | null {
  const published = new Date(field(item, 'pubDate'))
  if (Number.isNaN(published.getTime())) return null

  const headline = plain(field(item, 'title'))
  if (!headline) return null

  const link = plain(field(item, 'guid')) || plain(field(item, 'link'))
  const slug = slugOf(link)
  if (!slug) return null

  const paras = paragraphs(field(item, 'description'))
  const standfirst = paras[0] ?? headline
  const body = paras.slice(1)
  const words = paras.join(' ').split(/\s+/).filter(Boolean).length

  const topics = [...item.matchAll(/<category[^>]*>([\s\S]*?)<\/category>/g)].map((m) => plain(m[1]))

  return {
    slug,
    section: feed.section,
    sectionName: '',
    kicker: topics[0] || 'Filing',
    headline,
    standfirst,
    source: feed.source,
    bureau: feed.bureau,
    byline: plain(field(item, 'dc:creator')) || `${feed.source} wire`,
    published: published.toISOString(),
    readMinutes: Math.max(1, Math.round(words / 220)),
    brief: body.length === 0,
    body,
    link,
  }
}

async function fetchFeed(feed: Feed): Promise<Story[]> {
  try {
    const res = await fetch(feed.url, { next: { revalidate: REVALIDATE } })
    if (!res.ok) return []
    const xml = await res.text()
    return xml
      .split(/<item>/)
      .slice(1)
      .map((chunk) => toStory(chunk.split('</item>')[0], feed))
      .filter((s): s is Story => s !== null)
  } catch {
    return []
  }
}

const NAME = new Map(SECTIONS.map((s) => [s.slug, s.name]))

export type Wire = { stories: Story[]; lead: Story; front: Story[]; briefs: Story[] }

/* The front-page grid has seven spans, so the front page carries seven cards.
   The lead is the most substantial filing among the twelve newest — a filing
   with paragraphs, not the freshest one-liner. */
export async function getWire(): Promise<Wire> {
  const fetched = await Promise.all(FEEDS.map(fetchFeed))
  /* One outlet files the same story into two of its own feeds — the energy-bills
     filing arrived on both world and business. Keep the first desk it lands on. */
  const bySlug = new Map<string, Story>()
  for (const s of fetched.flat()) if (!bySlug.has(s.slug)) bySlug.set(s.slug, s)

  const stories = [...bySlug.values()]
    .map((s) => ({ ...s, sectionName: NAME.get(s.section) ?? s.section }))
    .sort((a, b) => b.published.localeCompare(a.published))

  const deep = stories.filter((s) => !s.brief)
  if (deep.length < 8) return { stories: STORIES, lead: LEAD, front: FRONT, briefs: BRIEFS }

  /* The lead comes off the world desk when that desk has filings: a paper leads
     with what happened, not with whichever filing happens to have the most
     paragraphs. */
  const world = deep.filter((s) => s.section === 'world')
  const pool = (world.length ? world : deep).slice(0, 12)
  const lead = pool.reduce((best, s) => (s.readMinutes > best.readMinutes ? s : best), pool[0])

  return {
    stories,
    lead,
    front: deep.filter((s) => s.slug !== lead.slug).slice(0, 7),
    briefs: stories.filter((s) => s.brief).slice(0, 8),
  }
}
