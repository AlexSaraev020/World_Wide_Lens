---
name: World Wide Lens
subtitle: A world news wire set as a newspaper — four desks, two outlets, one filing per item
description: A front page over live RSS: The Guardian and BBC News, filed to four desks and printed as each outlet wrote it — headline, standfirst, opening paragraphs, its own photograph and credit, and a link back. No accounts, no feed, no commentary.
category: Web platform
stack:
  - Next.js
  - React
  - TypeScript
  - Tailwind CSS
  - RSS
  - Node
status: live
year: 2026 — present
role: Solo — interface, wire parser, typographic system, deployment
cover: docs/portfolio/wwl-front.jpg
gallery:
  - docs/portfolio/wwl-wire.jpg
  - docs/portfolio/wwl-filing.jpg
  - docs/portfolio/wwl-search.jpg
  - docs/portfolio/wwl-desk.jpg
live: https://world-wide-lens.vercel.app
repo: https://github.com/AlexSaraev020/World_Wide_Lens
tags:
  - news
  - rss
  - editorial
  - typography
  - monochrome
updated: 2026-11-25
---

## Overview

World Wide Lens is a world news wire laid out as a newspaper. Four desks — World, Climate, Economy,
Europe — carry everything two outlets filed, newest first. One item is one filing: the headline, the
standfirst, the opening paragraphs, the photograph the outlet filed with it and its credit, the time it
was filed, and a link back to the full text.

There is no account, no favourites, no infinite feed and no ranking. The only editorial act is which
filing gets the top of the page and which gets a small card.

## Problem

The first version was a NewsAPI demo: a list of articles with a search box, which is what every news
aggregator already is. The interesting question was not how to fetch more articles but how to make a
screen of news that behaves like a printed page — fixed hierarchy, a dateline, a credit line, columns,
and an end.

Two constraints came with that. A personal project has to read the wire from somewhere free, with no
key and no quota. And a printed page has to survive the wire being short: most of what an RSS feed
carries is a headline and one sentence, not an article.

## Solution

`data/wire.ts` reads eight RSS feeds — The Guardian and BBC News, four desks each — and maps every item
into one `Story` shape. Guardian's `<description>` carries the article's opening paragraphs as escaped
HTML, so those filings arrive with a body and take the front page and the desk rails. BBC's carry one
sentence, so they arrive as briefs and take the **In brief** rail. The layout sorts them without being
told to.

The look is one stylesheet, `styles/editorial.css`, of CSS custom properties: an ink scale, a type
scale, rules, folio apparatus and motion timings. Every component is Tailwind utilities reading those
tokens. No colour is used anywhere — a hover changes ink density, never hue.

`data/stories.ts` is a fixture: twelve invented filings with CC-licensed photographs. It is what the
screens render when a feed cannot be read, so the layout never comes back empty, and it is labelled as
placeholder copy wherever it appears.

## Key features

- Live wire from eight RSS feeds, no API key, cached 15 minutes server-side
- Two outlets, two shapes: filings with paragraphs go to the front page, one-liners go to In brief
- The lead is chosen, not hardcoded — the longest filing among the twelve newest on the world desk
- A filing that lands in two of its own feeds prints once, on the first desk it reaches
- Each item carries the photograph its outlet filed with it, in grayscale, with the credit under it
- The plate is capped at the width the outlet filed, so it is never scaled up
- Four desks with a running head that keeps the desk vocabulary on screen while the columns scroll
- Search over the whole wire with the query as the page's headline and matched terms inverted as ink
- Search suggestions derived from the topics the wire actually filed most, not a fixed list
- Filing pages set as a page: headline full width, plate left, standfirst and source block in the
  margin with the related filings, then the text across the whole measure in three columns
- A brief says it is a brief instead of repeating its standfirst as if it were an article
- Live UTC dateline, issue number, colophon — and everything printed in monochrome
- The fixture keeps the screens rendering when a feed is unreachable

## Architecture

Next.js 14 App Router, all screens server components except the clock, the nameplate and the desk nav.
`getWire()` fetches the eight feeds in parallel with `next: { revalidate: 900 }`, dedupes by slug, sorts
by publish time and returns `{ stories, lead, front, briefs }`. Search, related filings and the desk
split are pure functions over that list, so they run identically on the live wire and on the fixture.

The parser is regex over the item blocks rather than an XML library: `decode` un-escapes entities and
CDATA, `paragraphs` splits the description on `<p>` blocks when the outlet escaped them and falls back
to the whole string when it did not, and `imageOf` takes the largest picture the item offers. BBC's
image host serves any width under `/standard/<n>/`, so its 240-wide thumbnail is asked at 768; Guardian
signs every width, so the largest one in the item is taken and its height is read from the crop box the
host names in the URL.

Two self-checks run without a network: `data/stories.check.ts` guards the fixture and the column counts
the front grid is written against, `data/wire.check.ts` parses two real feed items captured off the wire
and asserts both come out as the same `Story`.

## Challenges

The wire is messier than a demo. Guardian files the same story into two of its own feeds, so the front
page printed it twice until items were deduped by slug — 280 items became 236. Guardian's `<description>`
holds escaped `<p>` tags while BBC's holds plain text, so the paragraph splitter has to handle both
without an XML parser. Guardian's image URLs carry `&amp;` inside them and are signed per width, so the
largest variant has to be selected from the item rather than requested.

Three layout defects were found by measuring twelve live filings rather than by looking at one:

- `figcaption` was the second cell of the same grid row as the image, so the credit printed **beside**
  the photograph on 12 of 12 pages.
- `.photo { width: 100% }` in a 792px column rendered a 700px picture at 792px — a 1.13× upscale, on
  12 of 12. The plate is now capped at the width the outlet filed.
- `.ink:hover` re-assigns `--fg-soft` from `--ink-2`, which the dark-mode block never inverted, so on a
  dark page the standfirst and the folio line went to `#18181b` on `#09090b` — 1.12:1, i.e. the text
  vanished on hover.

Grid rows were also the quiet problem: a row is as tall as its tallest card, so a card with two lines of
standfirst was stretched to the height of one with eight, and the filing page's margin column came up
hundreds of pixels shorter than the plate beside it. Both now carry content down to the same line.

## Future

Filings from different outlets that describe the same event are still printed as two separate items —
clustering them into one event with its differing leads is the next real feature. Desk pages print every
item the desk received, which at 53 filings makes a 13,000px column; the desk needs a page count. The
old NewsAPI layer is still in the repository and wired to nothing. The two image hosts the wire asks for
should replace the wildcard in `next.config.mjs`.
