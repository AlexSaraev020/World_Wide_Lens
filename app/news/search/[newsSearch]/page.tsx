import { getNewsByQuery } from '@/app/api/route'
import Main from '@/components/Main';
import NewsList from '@/components/news/NewsList'
import React from 'react'

interface Props {
    params: {
        newsSearch: string;
    }
}

export default async function Page(props: Props) {
    const data = await getNewsByQuery(props.params.newsSearch)
    if (!data) {
        return (
           <p>Too many api request, please try again later</p>
        )
    }
    return (
        <Main>
            <div className='flex-1 flex flex-col max-w-full w-full items-center justify-center p-4'>
                <h1 className='text-xl break-words w-full flex items-center justify-center sm:text-2xl md:text-3xl font-bold'>Search Results for &quot;{props.params.newsSearch.replaceAll('%20', ' ')}&quot;</h1>
                <NewsList data={data} />    
            </div>
        </Main>
    )
}
