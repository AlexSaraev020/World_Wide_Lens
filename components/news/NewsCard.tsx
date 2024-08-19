import Image, { StaticImageData } from 'next/image'
import React from 'react'
import LinkButton from '../LinkButton'
import { NewsItem } from '@/app/types/news'
interface Props {
    details?:boolean;
    data:NewsItem;
    index: number;
}
export default function NewsCard({data , details , index}:Props) {
    return (
        <li key={index} className="relative flex flex-col w-full gap-4 bg-zinc-400 p-1 sm:p-4 border-2 border-black">
            <Image src={data.urlToImage} width={200} height={500} alt={"NewsImage"} className="w-full h-60 object-cover" />
            <div className='w-fit'>
                <h1 className="text-xl font-bold sm:text-lg md:text-xl text-center md:text-left">{data.title}</h1>
                <h2 className="font-bold italic">{data.author}</h2>
                {details &&
                    <p className="w-full line-clamp-3">
                        {data.description}
                    </p>
                }
                <LinkButton href={`/news/${data.title.replaceAll(/\s+/g , '-').toLocaleLowerCase()}`}>
                    Read more
                </LinkButton>
            </div>
        </li>
    )
}
