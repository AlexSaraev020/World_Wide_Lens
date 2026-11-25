import SearchResults from '../../components/editorial/SearchResults'

export default async function Page({ searchParams }: { searchParams?: unknown }) {
  const params = (await (searchParams ?? {})) as Record<string, string | string[] | undefined>
  const q = typeof params.q === 'string' ? params.q : ''
  return <SearchResults query={q} />
}
