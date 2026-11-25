import Home from '../components/editorial/Home'

/* `await` on searchParams reads correctly whether your Next passes a Promise
   (15) or a plain object (14). */
export default async function Page({ searchParams }: { searchParams?: unknown }) {
  const params = (await (searchParams ?? {})) as Record<string, string | string[] | undefined>
  const section = typeof params.section === 'string' ? params.section : undefined
  return <Home section={section} />
}
