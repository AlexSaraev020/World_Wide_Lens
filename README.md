# World Wide Lens

A world news wire set as a newspaper: one item per filing, in the order it was filed, across four
desks. No colour, no commentary, no ranking — the headline, the standfirst and the opening paragraphs
as the outlet wrote them, with the time it was filed and a link back to its own page.

## What it is made of

`data/wire.ts` reads eight RSS feeds — The Guardian and BBC News, four desks each — and maps every
item into one `Story` shape. No API key, no quota, no cost: both outlets publish RSS.

The two outlets arrive differently and the layout uses that. The Guardian's `<description>` carries the
article's opening paragraphs, so those filings arrive with a body and go to the front page and the desk
rails. BBC's carry one sentence, so they arrive as briefs and go to the **In brief** rail. A filing
that lands in two of its own feeds is printed once, on the first desk it reaches.

The lead is chosen, not hardcoded: the longest filing among the twelve newest on the world desk.

`data/stories.ts` is the fixture — twelve invented filings with licensed photographs. It is what the
screens render when a feed cannot be read, so the layout never comes back empty. It is labelled as
placeholder copy wherever it appears.

Each filing carries the photograph the outlet filed with it, printed in grayscale with its own credit
line under it. BBC puts a 240-wide thumbnail in the feed and its host serves any width under
`/standard/<n>/`, so the same picture is asked at 768. Guardian signs every width it offers, so the
largest one in the item is taken and its height comes from the crop box the host names in the path.
The fixture's photographs are CC-licensed and credited in `public/assets/news/credits.json`, and are
labelled *Illustrative photograph* because they illustrate invented copy.

## Run it

```powershell
npm install
npm run dev
```

<http://localhost:3000>. Nothing to configure.

## Screens

| | |
|---|---|
| Front page | nameplate, the lead filing, the front grid (seven cards, deliberately uneven spans), Latest filing, In brief, one rail per desk |
| Desk | `/?section=world` — the same nameplate, then that desk's filings as cards |
| Filing | `/story/<slug>` — headline, standfirst, byline, the opening paragraphs set in columns, the desk and source line, the link to the full text, three related filings |
| Search | `/search?q=` — the query as the page's headline, results as rows, matched terms inverted as ink |

## Desks

World, Climate, Economy, Europe. Named after the desks the two outlets actually file to; the feeds are
listed at the top of `data/wire.ts`.

## Checks

```powershell
node --experimental-strip-types data/stories.check.ts
node --experimental-strip-types data/wire.check.ts
```

The first guards the fixture the screens fall back to and the column counts the front grid is written
against. The second parses two real feed items — one Guardian, one BBC — captured off the wire, and
asserts both come out as the same `Story`.

## Known gaps

The old NewsAPI layer (`app/actions`, `app/news/*`, `components/news/*`) is still in the repository and
is not wired to anything: it needs a key that is not in the tree, and its screens are not the ones the
site renders.

The photographs are hotlinked from the outlets' own image hosts, with their credits printed. That is
what an RSS reader does; it is not a licence to redistribute pictures at scale, and the two hosts
(`i.guim.co.uk`, `ichef.bbci.co.uk`) are the only ones the wire asks for. `next.config.mjs` still allows
every remote host — it should be narrowed to those two.

Reprinted text belongs to the outlets that filed it. This is a personal project that links back to every
item; it is not licensed to redistribute news at scale.
