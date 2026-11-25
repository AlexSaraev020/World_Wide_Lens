/* One search field, two homes: the nameplate and the search screen. Plain GET
   form — Next reads it, no client state needed. */
export default function SearchField({
  id,
  q,
  hint = 'one word is usually enough',
}: {
  id: string
  q?: string
  hint?: string
}) {
  return (
    <form action="/search" method="get" className="min-w-0">
      <label htmlFor={id} className="folio-micro mb-1 block">
        Search the wire
      </label>
      <div className="flex items-stretch border-b-2 border-[var(--slug)]">
        <input
          id={id}
          name="q"
          type="search"
          defaultValue={q ?? ''}
          autoComplete="off"
          placeholder={hint}
          className="font-folio min-w-0 w-full bg-transparent py-3 pr-3 text-[1rem] text-[var(--fg)] placeholder:text-[var(--ink-4)]"
        />
        <button
          type="submit"
          className="font-folio min-h-11 shrink-0 bg-[var(--ink-max)] px-4 text-[var(--paper)] hover:bg-[var(--ink-2)] focus-visible:bg-[var(--ink-2)]"
        >
          Search
        </button>
      </div>
    </form>
  )
}
