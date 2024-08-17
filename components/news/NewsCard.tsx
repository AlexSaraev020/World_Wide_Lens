import Image, { StaticImageData } from 'next/image'
import React from 'react'
import LinkButton from '../Link'
interface NewsCardProps {
    News: StaticImageData
    data: any[]
}
export default function NewsCard(props: NewsCardProps) {
    const { News, data } = props
    return (
        <li className="relative flex flex-col w-full gap-4 bg-zinc-400 p-4 border-2 border-black">
            <Image src={News} alt={"News"} className="w-full h-60 object-cover" />
            <div className='w-fit'>
                <h1 className="text-4xl sm:text-5xl md:text-3xl text-center md:text-left">{data[0].category}</h1>
                <h2 className="font-bold italic">{data[0].headline}. {data[0].author}</h2>
                <p className="w-full line-clamp-3">
                    {data[0].content}
                </p>
                <LinkButton href={`/news/${data[0].author}`}>
                    Read more
                </LinkButton>
            </div>
        </li>
    )
}
