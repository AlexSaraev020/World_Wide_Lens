import { notFound } from 'next/navigation'
import StoryPage from '../../../components/editorial/Story'
import { related } from '../../../data/stories'
import { getWire } from '../../../data/wire'

export default async function Page({ params }: { params?: unknown }) {
  const { slug } = (await (params ?? {})) as { slug?: string }
  const { stories } = await getWire()
  const story = slug ? stories.find((s) => s.slug === slug) : undefined
  if (!story) notFound()
  return <StoryPage story={story} also={related(story, stories)} />
}
