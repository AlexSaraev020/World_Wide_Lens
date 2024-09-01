import { getNewsById } from '@/app/actions/route'
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
  <div className='border-l-2 border-r-2 border-black bg-zinc-400 text-black min-h-screen flex justify-center'>
    <div className='flex flex-col p-4 md:p-8 py-10 gap-4 w-full max-w-screen-lg'>
      {data.results[0]?.image_url &&
        <Image
          src={data.results[0]?.image_url}
          alt={data.results[0]?.image_url}
          width={800}  // Adjusted for better responsiveness
          height={600}
          className='w-full object-cover rounded-lg shadow-lg'
        />
      }
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl font-semibold text-center'>{data.results[0]?.title}</h1>
        <h2 className='text-lg sm:text-xl md:text-2xl font-extrabold italic text-center'>{data.results[0]?.creator}</h2>
        <h3 className='text-md sm:text-lg md:text-xl font-medium italic text-center'>{data.results[0]?.description}</h3>
        <p className='text-base sm:text-lg md:text-xl font-medium text-center'>{data.results[0]?.content}</p>
        <a href={data.results[0]?.source_url}
          target='_blank'
          rel='noopener noreferrer'
          className='block border-2 border-black p-2 text-base sm:text-lg md:text-xl text-white bg-zinc-700 font-bold text-center rounded-lg'>
          Read entire article
        </a>
        <h3 className='font-bold italic text-base sm:text-lg md:text-xl text-right'>{new Date(data.results[0]?.pubDate).toLocaleDateString()}</h3>
      </div>
    </div>
  </div>
</Main>

  )
}
