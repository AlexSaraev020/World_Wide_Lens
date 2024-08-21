import { getNewsByQuery } from '@/app/api/route'
import Main from '@/components/Main'
import Image from 'next/image'
import React from 'react'

interface Props {
  params: {
    newsId: string
  }
}

export default async function Page({ params }: Props) {
  const data = await getNewsByQuery(params.newsId)
  const myArticle = data.articles[0]
  return (
    <Main>
      <div className='h-fit w-full flex flex-col p-0 md:p-4'>
        <div className='flex flex-col h-screen md:h-[45rem] border-2 p-2 gap-2 bg-zinc-400 text-black border-black md:flex-row w-full'>
          {myArticle.urlToImage &&
            <Image
              src={myArticle.urlToImage}
              alt={myArticle.urlToImage}
              width={400}
              height={300}
              className='w-full object-cover'
            />
          }
          <div className='flex relative flex-col'>
            <h1 className='text-5xl sm:text-6xl md:text-7xl font-medium'>{myArticle.title}</h1>
            <h2 className='text-md sm:text-lg md:text-xl font-extrabold italic'>{myArticle.author}</h2>
            <h3 className='text-sm font-medium'>{myArticle.description}</h3>
            <p>{myArticle.content}</p>
            <h3 className='absolute bottom-2 right-2'>{new Date(myArticle.publishedAt).toLocaleDateString()}</h3>
          </div>
        </div>
      </div>
    </Main>
  )
}
