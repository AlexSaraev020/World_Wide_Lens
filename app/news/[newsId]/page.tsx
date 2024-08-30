import { getNewsById } from '@/app/api/route'
import LinkButton from '@/components/buttons/LinkButton'
import Main from '@/components/Main'
import Image from 'next/image'
import React from 'react'

interface Props {
  params: {
    newsId: string
  }
}

export default async function Page({ params }: Props) {
  const data = await getNewsById(params.newsId)
  if (!data.results[0]) {
    return (
      <Main>
        <div className='flex-1 flex flex-col w-full items-center justify-center'>
          <h1 className='text-3xl font-bold'>Article Not Found</h1>
          <h2 className='text-3xl font-bold'>An error occured</h2>
          <LinkButton href='/'>
            Back to homepage
          </LinkButton>
        </div>
      </Main>
    )
  }
  return (
    <Main>
      <div className='border-l-2 w-11/12 md:w-11/12 border-r-2 bg-zinc-400 text-black border-black min-h-screen flex justify-center'>
        <div className='flex  h-fit items-center justify-center flex-col p-1 md:p-2 py-10 gap-2 '>
          {data.results[0]?.image_url &&
            <Image
              src={data.results[0]?.image_url}
              alt={data.results[0]?.image_url}
              width={400}
              height={300}
              className='w-full md:w-8/12 md:h-screen object-cover'
            />
          }
          <div className='flex relative flex-col gap-2 w-full md:w-9/12'>
            <h1 className='text-2xl sm:text-5xl md:text-6xl font-semibold md:font-medium'>{data.results[0]?.title}</h1>
            <h2 className='text-md sm:text-lg md:text-xl font-extrabold italic'>{data.results[0]?.creator}</h2>
            <h3 className='text-md sm:text-md md:text-3xl font-medium italic'>{data.results[0]?.description}</h3>
            <p className='text-sm md:text-xl font-medium'>{data.results[0]?.content}</p>
            <a href={data.results[0]?.source_url}
              target='_blank'
              className='border-2 border-black p-1 text-sm md:text-xl focus:outline-none text-white bg-zinc-700 font-bold w-fit'>
              Read entire article
            </a>
            <h3 className='absolute bottom-0 right-2 font-bold italic text-xl'>{new Date(data.results[0]?.pubDate).toLocaleDateString()}</h3>
          </div>
        </div>
      </div>

    </Main>
  )
}
