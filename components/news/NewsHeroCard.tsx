import React from 'react'
import Image, { StaticImageData } from 'next/image'
import LinkButton from '../LinkButton'
import NewsCard from './NewsCard'

interface NewsHeroCardProps {
  News: StaticImageData
  data: any[]
}
export default function NewsHeroCard(props: NewsHeroCardProps) {
  const { News, data } = props
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 mx-auto">
      <div className='flex flex-col gap-4 border-2 border-black p-1 sm:p-4 bg-zinc-400'>
        <div className="w-full">
          <Image placeholder='blur' src={News} alt={"NewsImage"} className="w-full h-80 object-cover" />
        </div>
        <div className="w-full">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold text-center md:text-left">{data[0].category}</h1>
          <h2 className="font-bold italic">{data[0].headline}. {data[0].author}</h2>
          <p className="w-full line-clamp-3">
            {data[0].content}
          </p>
          <LinkButton href={`/news/${data[0].headline}`}>
            Read more
          </LinkButton>
        </div>
      </div>
      <div className='flex-1 flex flex-col md:flex-row gap-4 w-full'>
        <NewsCard News={News} data={data} />
        <NewsCard News={News} data={data} />
        <NewsCard News={News} data={data} />
      </div>
    </div>
  )
}
