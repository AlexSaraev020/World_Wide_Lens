import React from 'react'
import Image, { StaticImageData } from 'next/image'
import LinkButton from '../Link'

interface NewsHeroCardProps{
    News:StaticImageData
    data: any[]
}
export default function NewsHeroCard(props: NewsHeroCardProps) {
  const { News, data } = props
  return (
    <div className="flex-1 bg-zinc-400 border-2 border-black h-fit flex flex-col items-center justify-center gap-4 p-4 mx-auto">
          <div className="w-full h- ">
            <Image src={News} alt={"News"} className="w-full h-auto object-cover" />
          </div>
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl md:text-5xl text-center md:text-left">{data[0].category}</h1>
            <h2 className="font-bold italic">{data[0].headline}. {data[0].author}</h2>
            <p className="w-full line-clamp-3">
              {data[0].content}
            </p>
            <LinkButton href={`/news/${data[0].headline}`}>
              Read more
            </LinkButton>
          </div>
        </div>
  )
}
