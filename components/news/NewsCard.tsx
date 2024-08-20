import Image from 'next/image'
import React from 'react'
import LinkButton from '../LinkButton'
import { NewsItem } from '@/app/types/news'
interface Props {
    details?: boolean;
    data: NewsItem;
}
export default function NewsCard({ data, details }: Props) {
    return (
        <li className="relative flex flex-col h w-full gap-4 bg-zinc-400 p-1 sm:p-2 border-2 border-black">
            {data.urlToImage &&
                <img src={data.urlToImage} alt={"NewsImage"} className="w-full h-auto object-cover" />
            }
            <div className='w-fit'>
                <h1 className="text-xl font-bold sm:text-lg md:text-xl text-center md:text-left">{data.title}</h1>
                <h2 className="font-bold italic">{data.author}</h2>
                {details &&
                    <p className="w-full line-clamp-3">
                        {data.description}
                    </p>
                }
                <LinkButton href={``}>
                    Read more
                </LinkButton>
            </div>
        </li>
    )
}
