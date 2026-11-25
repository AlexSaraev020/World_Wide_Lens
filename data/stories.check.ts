/* Run: node --experimental-strip-types data/stories.check.ts
   Guards the fixture the screens fall back to: the search matcher, the card
   counts Home's column spans are written against, and the desk split. */
import assert from 'node:assert/strict'
import {
  BRIEFS,
  FRONT,
  LEAD,
  SECTIONS,
  STORIES,
  related,
  searchStories,
  splitMatch,
  stamp,
  suggestions,
} from './stories.ts'

assert.equal(STORIES.length, 12)
assert.equal(FRONT.length, 7, 'Home has exactly 7 column spans')
assert.equal(BRIEFS.length, 4)
assert.ok(LEAD.image, 'lead slab assumes a photograph')
for (const s of SECTIONS) {
  assert.equal(STORIES.filter((x) => x.section === s.slug).length, 3, s.slug)
}
for (const s of STORIES) assert.ok(STORIES.find((x) => x.slug === s.slug) === s)

// newest first
assert.ok(STORIES[0].published > STORIES[STORIES.length - 1].published)

assert.equal(searchStories(STORIES, 'sea ice').length, 1)
assert.equal(searchStories(STORIES, 'SEA ICE')[0].slug, 'barents-sea-ice-survey')
assert.equal(searchStories(STORIES, 'convoys')[0].slug, 'northern-aid-corridor')
assert.equal(searchStories(STORIES, 'tolls')[0].slug, 'canal-toll-schedules')
assert.equal(searchStories(STORIES, 'harvest')[0].slug, 'grain-export-bans')
assert.equal(searchStories(STORIES, 'housing')[0].slug, 'rail-yard-housing')
assert.equal(searchStories(STORIES, 'nothing matches this').length, 0)
for (const s of suggestions(STORIES)) assert.ok(searchStories(STORIES, s).length > 0, `suggestion "${s}" finds nothing`)

// a query that is also a regex fragment must be matched literally
assert.deepEqual(splitMatch('ice-free', 'e.'), [{ t: 'ice-free', hit: false }])
assert.deepEqual(splitMatch('convoys', ''), [{ t: 'convoys', hit: false }])

const parts = splitMatch('Aid convoys return', 'convoys')
assert.equal(parts.length, 3)
assert.equal(parts[1].hit, true)
assert.equal(parts[1].t, 'convoys')

assert.equal(LEAD.body.length, 7)
assert.equal(related(LEAD, STORIES).length, 3)
assert.ok(!related(LEAD, STORIES).some((s) => s.slug === LEAD.slug))
assert.match(stamp('2026-11-17T06:12:00Z'), /^17 Nov · 06:12 UTC$/)

console.log('ok — 12 fixture stories, 4 desks, search and spans consistent')
