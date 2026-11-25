/* EXAMPLE WIRE — the fixture. Every headline, desk, byline and timestamp below
   is invented placeholder copy, kept so the screens still render when a feed
   cannot be read. The live wire is data/wire.ts. Photographs are real, licensed,
   illustrative images and are labelled as such in the UI; see
   assets/news/credits.json. */

export type Section = 'world' | 'climate' | 'economy' | 'europe'

export type Story = {
  slug: string
  section: Section
  sectionName: string
  kicker: string
  headline: string
  standfirst: string
  source: string
  bureau: string
  byline: string
  published: string
  readMinutes: number
  brief: boolean
  image?: { src: string; alt: string; caption: string; width: number; height: number }
  body: string[]
  pull?: string
  link?: string           // the filing's own page, on the outlet that filed it
}

export const SECTIONS: { slug: Section; name: string }[] = [
  { slug: 'world', name: 'World' },
  { slug: 'climate', name: 'Climate' },
  { slug: 'economy', name: 'Economy' },
  { slug: 'europe', name: 'Europe' },
]

type RawStory = Omit<Story, 'sectionName'>

const RAW: RawStory[] = [
  {
    slug: 'barents-sea-ice-survey',
    section: 'climate',
    kicker: 'Lead filing',
    headline: 'Survey fleet reports an ice-free winter earlier than its own record allows',
    standfirst:
      'Six vessels logged open water at 74°N for most of October, where sea ice should have been closing. Two coastal stations have started planning for a season that no longer arrives on schedule.',
    source: 'Reuters',
    bureau: 'Tromsø bureau',
    byline: 'Ingrid Halvorsen',
    published: '2026-11-17T06:12:00Z',
    readMinutes: 8,
    brief: false,
    image: {
      src: '/assets/news/arctic-zodiac.jpg',
      alt: 'A landing craft working between sea-ice floes in high latitudes',
      caption: 'A Zodiac landing craft works between floes during a high-latitude survey.',
      width: 1024,
      height: 1024,
    },
    body: [
      'The fleet returned to port on Tuesday with a season nobody expected to have to write up. Six research vessels spent October in water that was open, at latitudes where the ice edge has historically closed by the middle of the month.',
      'Ship logs and two shore stations agree on the shape of it, if not on the cause. The ice that formed formed late, in the lee of the islands, and left again in the first warm week of November.',
      'What the survey crew describe is not a single warm year. It is a shift in the calendar: a narrower window for the winter crossings, and a longer window in which the harbours have to be maintained as though winter were not coming.',
      'The stations have begun to plan around that window. A resupply run that used to wait for the ice now has to fit between storms, and the fuel that used to arrive on a sled contract has to arrive on a boat.',
      'Fisheries officials have asked for the raw tracks, which the institute has released. The tracks are unedited, and they are the reason the two coastal councils have started talking about retreat rather than defence.',
      'Two of the villages concerned are small enough that the question is settled by a single road. When that road is unusable for eleven days, the school bus does not run, and the school closes.',
      'The institute says it will publish the season properly in February. Until then the record it holds is the one the ships wrote at sea, in pencil, in a log that has now been scanned and put online.',
    ],
    pull: 'The ice is not only thinner. It is later and shorter, and that is a different problem for a harbour.',
  },
  {
    slug: 'barrier-island-retreat',
    section: 'world',
    kicker: 'Dispatch',
    headline: 'Four barrier islands are given up for good as councils order managed retreat',
    standfirst:
      'The decision is not about the next storm. It is about a decade of them, and about who is moved first and paid second.',
    source: 'Agence France-Presse',
    bureau: 'Dakar bureau',
    byline: 'Mariam Ndiaye',
    published: '2026-11-17T07:05:00Z',
    readMinutes: 6,
    brief: false,
    image: {
      src: '/assets/news/coastal-flood.jpg',
      alt: 'Floodwater standing on an avenue beside low buildings',
      caption: 'Floodwater on a city avenue after a storm surge.',
      width: 1024,
      height: 680,
    },
    body: [
      'Four councils voted within a week of each other to stop defending the outer islands. The votes are not identical, and none of them describes the decision as a defence failure; each describes it as a cost calculation that stopped adding up.',
      'Under the plans, existing homes are kept until they can no longer be kept, and no new building is permitted on the seaward side of a line the councils have drawn on a map.',
      'Residents were consulted twice, which is more than the last programme offered. The complaints recorded are mostly about sequence rather than direction: who is moved in the first year, and who waits.',
      'The islands sit behind a ridge of sand that has moved inland by metres in three seasons. Engineers briefed the councils on a structure to hold the ridge, and on its cost over twenty years, and the councils compared that with the cost of the retreat.',
      'A regional fund will cover the first tranche. The second tranche has no source yet, and the councils know that the difference between the two is the difference between an orderly move and an emergency one.',
    ],
    pull: 'We are not deciding whether to move. We are deciding who moves first.',
  },
  {
    slug: 'canal-toll-schedules',
    section: 'economy',
    kicker: 'Markets',
    headline: 'Winter sailings are rebuilt from scratch as canal transit tolls double',
    standfirst:
      'Operators are trading slots they no longer want for slots they cannot get, and the timetable changes take effect with no transition window.',
    source: 'Bloomberg',
    bureau: 'Panama City bureau',
    byline: 'Andrés Cordova',
    published: '2026-11-17T05:48:00Z',
    readMinutes: 5,
    brief: false,
    image: {
      src: '/assets/news/container-port.jpg',
      alt: 'Gantry cranes working a container terminal',
      caption: 'Container handling at a deep-water terminal.',
      width: 1024,
      height: 713,
    },
    body: [
      'The authority published a revised tariff and a revised slot regime on the same day, which is how operators learned that the two were the same decision.',
      'Transits that used to be booked weeks ahead are now booked in a window measured in days, and the window is priced by auction. Three carriers have said plainly that they will not bid.',
      'Two of them are rerouting winter sailings around the southern passage instead, which adds days to a voyage and adds a second set of insurance terms to a contract.',
      'Terminal operators at both ends expect the arrival pattern to bunch. A schedule that arrives in clusters is cheaper to work in one berth and expensive to work in four, and the berth queues are already the constraint that matters.',
      'The authority says the tariff is a drought measure and will come down when the drafts recover. Carriers have asked for a written date. None has been given.',
    ],
  },
  {
    slug: 'northern-aid-corridor',
    section: 'europe',
    kicker: 'Wire',
    headline: 'Aid convoys return to the northern corridor after eleven days closed',
    standfirst:
      'The corridor reopened without a monitoring mission on it, which is the part both sides have described as temporary.',
    source: 'Associated Press',
    bureau: 'Ankara bureau',
    byline: 'Elena Voskresenskaya',
    published: '2026-11-17T08:20:00Z',
    readMinutes: 5,
    brief: false,
    image: {
      src: '/assets/news/freight-corridor.jpg',
      alt: 'A freight locomotive on a mainline at dusk',
      caption: 'A freight working on a mainline corridor.',
      width: 1024,
      height: 732,
    },
    body: [
      'Nine trucks crossed on the first morning, then a further fourteen. The convoy list is public, and the agencies running it have said the list is smaller than the need by a factor they have declined to print.',
      'The corridor had been closed since the start of the month after a shelling near a rail junction. Repairs took four days; the remaining seven were administrative.',
      'No observers are deployed on the route. Both parties have accepted an arrangement in which crossings are logged on one side and reported to the other, and neither has said who arbitrates a disagreement about a log.',
      'Aid coordinators have asked for the junction to be inspected before the winter fuel convoy moves. That inspection is scheduled, and its date is the only part of the arrangement that has been confirmed in writing.',
    ],
  },
  {
    slug: 'shinmoedake-ash-season',
    section: 'climate',
    kicker: 'Field note',
    headline: 'Two towns empty as the ash season at Shinmoedake deepens',
    standfirst:
      'Evacuation orders were widened twice in one night. The second widening covered a road that the first order depended on.',
    source: 'Nikkei',
    bureau: 'Kagoshima bureau',
    byline: 'Kenji Aoyama',
    published: '2026-11-17T04:35:00Z',
    readMinutes: 4,
    brief: false,
    image: {
      src: '/assets/news/volcano-plume.jpg',
      alt: 'An ash plume rising from a volcanic vent',
      caption: 'An ash plume seen from a distance.',
      width: 1024,
      height: 819,
    },
    body: [
      'The plume reached a height that put ash on the eastern approach rather than the western one, which is why the second order exists. Officials had been preparing for the western fall for two days.',
      'Both towns are small, and both are served by a single road in the direction that remained open. Evacuation was orderly and slow, and the shelters were filled to about a third of capacity.',
      'The observatory has raised its alert by one level and has been explicit that the level is not a forecast. It describes what the instruments are showing this morning.',
      'Ashfall is being cleared from the intake filters at three water works. The works are running, and the prefecture has published the filter schedule so residents can see how long that is expected to last.',
    ],
  },
  {
    slug: 'grain-export-bans',
    section: 'economy',
    kicker: 'Markets',
    headline: 'Three exporters halt shipments as the harvest shortfall widens',
    standfirst:
      'The bans were announced domestically and reached the traders by the same bulletin that set the floor price.',
    source: 'Financial Times',
    bureau: 'Vienna bureau',
    byline: 'Petra Lang',
    published: '2026-11-16T21:10:00Z',
    readMinutes: 6,
    brief: false,
    image: {
      src: '/assets/news/grain-harvest.jpg',
      alt: 'A combine harvester working a grain field',
      caption: 'Harvest in a grain belt.',
      width: 1023,
      height: 685,
    },
    body: [
      'The three export councils acted separately and within an hour of each other, which traders read as coordination rather than coincidence.',
      'Each measure is described as a stock safeguard and each carries a licence regime that existing contracts must satisfy. Contracts already signed are not cancelled; they are queued.',
      'Import buyers in two dependent markets have begun to bid for the same Brazilian surplus, which is the reason the reference price moved before the domestic announcements were finished.',
      'The floor price is the part with consequences. It was set to hold farm income and it also sets the price at which state buying becomes cheaper than private buying, and two of the three governments have now started buying.',
      'Traders expect the licensing regime to be relaxed before the end of the season. None of the three councils has offered a date, and one has said it will not.',
    ],
    pull: 'A ban that queues contracts instead of cancelling them moves the cost onto the buyer who was last in line.',
  },
  {
    slug: 'rail-yard-housing',
    section: 'world',
    kicker: 'Dispatch',
    headline: 'Four contested rail yards are cleared for nine thousand homes',
    standfirst:
      'The approval is a plan, not a permit, and the difference is the part the objectors intend to argue about.',
    source: 'The Guardian',
    bureau: 'Manchester bureau',
    byline: 'Fenella Doyle',
    published: '2026-11-17T07:52:00Z',
    readMinutes: 5,
    brief: false,
    image: {
      src: '/assets/news/city-blocks.jpg',
      alt: 'A city skyline with construction cranes above redevelopment',
      caption: 'Cranes above a redevelopment district.',
      width: 1024,
      height: 359,
    },
    body: [
      'The yards have been under a development review for three years, and the plan that survived it is smaller than the one that started the review by roughly a fifth.',
      'Freight operators withdrew their objection in exchange for a written commitment on the two junctions that remain in use. That commitment is the reason the approval passed at all.',
      'A third of the homes are designated affordable on a tenure the local council has not used before, and the council has published the model it expects developers to price against.',
      'Objectors have said they will challenge the transport assessment rather than the housing number. The assessment assumes a mode share the council has measured but has not yet committed to build.',
    ],
  },
  {
    slug: 'ceasefire-monitoring-mission',
    section: 'europe',
    kicker: 'Wire',
    headline: 'A monitoring mission gets its mandate, and still has no corridor',
    standfirst:
      'The vote authorises observers and a headquarters. It does not say how either reaches the line.',
    source: 'Al Jazeera',
    bureau: 'Geneva bureau',
    byline: 'Yusuf Halabi',
    published: '2026-11-16T19:44:00Z',
    readMinutes: 4,
    brief: false,
    body: [
      'The mandate runs for ninety days and covers ceasefire violations, movement of heavy equipment, and access for humanitarian convoys.',
      'Two of the parties have accepted the mission in principle and one has reserved its position on the inspection points, which is the part that determines whether the mission can see anything.',
      'The headquarters will sit outside the contact line, in a location agreed on Tuesday. Staff say the first observers can deploy within a fortnight if a route is confirmed; without one they will report from the headquarters.',
    ],
  },
  {
    slug: 'budget-session-delayed',
    section: 'world',
    kicker: 'In brief',
    headline: 'Budget session slips to Thursday after committee deadlock',
    standfirst: 'The votes that were expected on Wednesday are now expected on Thursday, and two of them are already whipped.',
    source: 'Reuters',
    bureau: 'Ottawa bureau',
    byline: 'Nadia Whitfield',
    published: '2026-11-17T08:41:00Z',
    readMinutes: 2,
    brief: true,
    body: [
      'The committee split along party lines on the transfer schedule, which is the item the rest of the session was built around.',
      'Officials say the delay does not change the filing deadline for the departments, only the date on which the departments learn what their envelopes are.',
    ],
  },
  {
    slug: 'shrimp-moratorium-extended',
    section: 'climate',
    kicker: 'In brief',
    headline: 'Shrimp moratorium extended for a second season',
    standfirst: 'The extension follows a stock survey that came in below the level the fishery was set at last year.',
    source: 'Associated Press',
    bureau: 'Lima bureau',
    byline: 'Camila Quispe',
    published: '2026-11-17T03:18:00Z',
    readMinutes: 2,
    brief: true,
    body: [
      'Cooperatives have been told a year in advance, which the ministry describes as the point of the measure.',
      'The survey will be repeated in February, and the ministry has said the February number decides whether the season after next opens.',
    ],
  },
  {
    slug: 'central-bank-rate-hold',
    section: 'economy',
    kicker: 'In brief',
    headline: 'Central bank holds rates on a split vote',
    standfirst: 'Two members wanted a cut. The statement changed by one sentence, and the change is being read as the direction of travel.',
    source: 'Bloomberg',
    bureau: 'Frankfurt bureau',
    byline: 'Jonas Meyer',
    published: '2026-11-17T09:02:00Z',
    readMinutes: 2,
    brief: true,
    body: [
      'The bank kept the deposit rate unchanged and removed a sentence about persistence in core inflation.',
      'Bond markets moved on the removal rather than on the hold, which is the third time this year the committee has surprised itself in the same direction.',
    ],
  },
  {
    slug: 'prisoner-swap-incomplete',
    section: 'europe',
    kicker: 'In brief',
    headline: 'Swap completed; monitors say the list is incomplete',
    standfirst: 'Forty-one people were released across two crossings. The manifest presented at the second crossing lists thirty-eight.',
    source: 'Agence France-Presse',
    bureau: 'Nicosia bureau',
    byline: 'Dana Khoury',
    published: '2026-11-16T22:30:00Z',
    readMinutes: 2,
    brief: true,
    body: [
      'The mission that verified the releases has asked for the names held at the second crossing and has been refused twice.',
      'Both sides have said the discrepancy is administrative. Families of three of the names have been told to wait for the next crossing rather than for an answer.',
    ],
  },
]

export const STORIES: Story[] = RAW.map((s) => ({
  ...s,
  sectionName: SECTIONS.find((x) => x.slug === s.section)!.name,
})).sort((a, b) => b.published.localeCompare(a.published))

export const LEAD: Story = STORIES.find((s) => s.slug === 'barents-sea-ice-survey')!
export const BRIEFS: Story[] = STORIES.filter((s) => s.brief)
export const FRONT: Story[] = STORIES.filter(
  (s) => !s.brief && s.slug !== LEAD.slug,
)
/* What to suggest on an empty search: the topics the wire actually filed most,
   taken from each item's own kicker. */
export function suggestions(all: Story[], n = 5): string[] {
  const count = new Map<string, number>()
  for (const s of all) {
    if (s.kicker === 'Filing') continue
    count.set(s.kicker, (count.get(s.kicker) ?? 0) + 1)
  }
  return Array.from(count.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, n)
    .map(([topic]) => topic)
}

export function stamp(iso: string) {
  const parts = new Date(iso).toUTCString().split(' ')
  return `${parts[1]} ${parts[2]} · ${parts[4].slice(0, 5)} UTC`
}

export function splitMatch(text: string, query: string): { t: string; hit: boolean }[] {
  const needle = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  if (!needle) return [{ t: text, hit: false }]
  const wanted = query.trim().toLowerCase()
  return text
    .split(new RegExp(`(${needle})`, 'gi'))
    .map((t) => ({ t, hit: t.toLowerCase() === wanted }))
}

function haystack(s: Story) {
  return [s.headline, s.standfirst, s.kicker, s.sectionName, s.source, s.body.join(' ')].join(' ')
}

function countMatches(s: Story, query: string) {
  const needle = query.trim().toLowerCase()
  if (!needle) return 0
  const hay = haystack(s).toLowerCase()
  let n = 0
  let at = hay.indexOf(needle)
  while (at !== -1) {
    n += 1
    at = hay.indexOf(needle, at + needle.length)
  }
  return n
}

export function searchStories(all: Story[], query: string): Story[] {
  const q = query.trim()
  return all.filter((s) => countMatches(s, q) > 0).sort(
    (a, b) => countMatches(b, q) - countMatches(a, q) || b.published.localeCompare(a.published),
  )
}

export function related(story: Story, all: Story[], n = 3): Story[] {
  const sameDesk = all.filter((s) => s.section === story.section && s.slug !== story.slug)
  const rest = all.filter((s) => s.section !== story.section && s.slug !== story.slug)
  return [...sameDesk, ...rest].slice(0, n)
}
