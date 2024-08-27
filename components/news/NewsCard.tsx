import React from 'react'
import { NewsItem } from '@/app/types/news'
import Image from 'next/image';
import LinkButton from '../buttons/LinkButton';
import Placeholder from '@/public/images/placeholder.png'
interface Props {
    details?: boolean;
    data: NewsItem;
}
export default function NewsCard({ data, details }: Props) {
    return (
        <li className="relative flex flex-col w-full gap-4 bg-zinc-400 p-1 sm:p-2 border-2 border-black">
            <Image
                src={data.image_url ? data.image_url : Placeholder}
                alt={data.title ? data.title : 'no photo available'}
                width={400}
                height={300}
                className="w-full h-full object-cover" />

            <div className='w-fit'>
                <h1 className="text-xl font-bold sm:text-lg md:text-xl text-center md:text-left">{data.title}</h1>
                <h2 className="font-bold italic">{data.creator}</h2>
                {details &&
                    <p className="w-full line-clamp-3">
                        {data.description}
                    </p>
                }
                <LinkButton href={{
                    pathname: `/news/${data.article_id}`
                }}>
                    Read more
                </LinkButton>
            </div>
        </li>
    )
}
