/* Run: node --experimental-strip-types data/wire.check.ts
   Guards the feed parser against two real items, captured from the feeds on
   2026-11-25: The Guardian files escaped <p> blocks and a byline, BBC files one
   plain sentence and no byline. Both must come out as the same Story shape. */
import assert from 'node:assert/strict'
import { toStory, type Feed } from './wire.ts'

const GUARDIAN: Feed = {
  section: 'world',
  source: 'The Guardian',
  bureau: 'World',
  url: 'https://www.theguardian.com/world/rss',
}

const BBC: Feed = {
  section: 'europe',
  source: 'BBC News',
  bureau: 'Europe',
  url: 'https://feeds.bbci.co.uk/news/world/europe/rss.xml',
}

const guardian = `
  <title>More than 300 Russians killed as Moscow props up Mali&rsquo;s junta, leaked data reveals</title>
  <link>https://www.theguardian.com/world/2026/nov/24/russian-fighters-killed-in-mali-africa-leaked-data</link>
  <description>&lt;p&gt;Exclusive: Records list 349 deaths in three years in Mali.&lt;/p&gt;&lt;p&gt;When the attack on Kidal began before dawn on 25 April this year, the Russian fighters were caught off guard.&lt;/p&gt; &lt;a href="https://www.theguardian.com/world/2026/nov/24/russian-fighters-killed-in-mali-africa-leaked-data"&gt;Continue reading...&lt;/a&gt;</description>
  <category domain="https://www.theguardian.com/world/mali">Mali</category>
  <category domain="https://www.theguardian.com/world/world">World news</category>
  <pubDate>Tue, 24 Nov 2026 16:00:50 GMT</pubDate>
  <guid>https://www.theguardian.com/world/2026/nov/24/russian-fighters-killed-in-mali-africa-leaked-data</guid>
  <media:content width="140" url="https://i.guim.co.uk/img/media/10e1/1_0_4998_4000/master/4998.jpg?width=140&amp;quality=85&amp;auto=format&amp;fit=max&amp;s=aaa">
    <media:credit scheme="urn:ebu">Composite: Getty Images / AP / Reuters / Guardian design</media:credit>
  </media:content>
  <media:content width="700" url="https://i.guim.co.uk/img/media/10e1/1_0_4998_4000/master/4998.jpg?width=700&amp;quality=85&amp;auto=format&amp;fit=max&amp;s=bbb"/>
  <dc:creator>Pjotr Sauer and Michael Goodier</dc:creator>
`

const bbc = `
  <title><![CDATA[Russia's own figures show almost 500,000 deaths in war in Ukraine]]></title>
  <description><![CDATA[Leaked data reveal how the invasion has changed mortality patterns in Russia.]]></description>
  <link>https://www.bbc.co.uk/news/articles/cmx27g533zwyo?at_medium=RSS&amp;at_campaign=rss</link>
  <guid isPermaLink="false">https://www.bbc.co.uk/news/articles/cmx27g533zwyo#0</guid>
  <pubDate>Wed, 25 Nov 2026 00:56:51 GMT</pubDate>
  <media:thumbnail width="240" height="135" url="https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9e47/live/6a03aa70.jpg"/>
`

const g = toStory(guardian, GUARDIAN)!
assert.equal(g.slug, 'russian-fighters-killed-in-mali-africa-leaked-data')
assert.equal(g.brief, false, 'a filing with paragraphs is not a brief')
assert.equal(g.body.length, 1)
assert.ok(g.standfirst.startsWith('Exclusive:'))
assert.ok(!/Continue reading/.test(g.body.join(' ')), 'the trailer must not print')
assert.equal(g.kicker, 'Mali')
assert.equal(g.byline, 'Pjotr Sauer and Michael Goodier')
assert.equal(g.published, '2026-11-24T16:00:50.000Z')
assert.equal(g.section, 'world')
assert.ok(g.readMinutes >= 1)
const gi = g.image!
assert.equal(gi.width, 700, 'the largest width the feed offers')
assert.equal(gi.height, 560, 'the height the crop box implies at 700 wide')
assert.ok(gi.src.includes('width=700') && !gi.src.includes('&amp;'), 'the url must be decoded')
assert.equal(gi.caption, 'Composite: Getty Images / AP / Reuters / Guardian design')
assert.equal(gi.alt, g.headline, 'no description in the feed, so the headline carries it')

const b = toStory(bbc, BBC)!
assert.equal(b.slug, 'cmx27g533zwyo', 'the guid beats the tracked link')
assert.equal(b.brief, true, 'one sentence is a brief')
assert.equal(b.body.length, 0)
assert.equal(b.kicker, 'Filing')
assert.equal(b.byline, 'BBC News wire')
assert.equal(b.headline, "Russia's own figures show almost 500,000 deaths in war in Ukraine")
assert.equal(b.section, 'europe')
const bi = b.image!
assert.equal(bi.width, 768, 'the 240 thumbnail is asked at plate width')
assert.equal(bi.height, 432)
assert.ok(bi.src.includes('/standard/768/'), bi.src)
assert.equal(bi.caption, 'BBC News')

assert.equal(toStory('<title>No date</title><pubDate>not a date</pubDate>', GUARDIAN), null)
assert.equal(toStory('<pubDate>Tue, 24 Nov 2026 16:00:50 GMT</pubDate>', GUARDIAN), null)

console.log('ok — both feed shapes parse into one Story shape')
