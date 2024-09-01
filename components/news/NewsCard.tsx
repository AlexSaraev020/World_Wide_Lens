import React from 'react'
import { NewsItem } from '@/app/types/news'
import Image from 'next/image';
import LinkButton from '../buttons/LinkButton';
import Placeholder from '@/public/images/placeholder.png'
interface Props {
    creator?: boolean;
    details?: boolean;
    data: NewsItem;
}
export default function NewsCard({ data, details, creator }: Props) {
    return (
        <li className="relative flex flex-col md:max-w-md w-full shrink-0 gap-4 bg-zinc-400 p-4 border-2 border-black rounded-lg shadow-md">
            <Image
                src={data.image_url || Placeholder}
                alt={data.title || 'No photo available'}
                width={400}
                height={300}
                className="w-full h-60 object-cover rounded-t-lg"
            />
            <div className="flex flex-col gap-2 p-4">
                <h1 className="text-xl font-bold sm:text-2xl md:text-3xl text-center md:text-left">{data.title}</h1>
                {creator && (
                    <h2 className="text-lg font-semibold italic text-center md:text-left">{data.creator}</h2>
                )}
                {details && (
                    <p className="text-base text-justify line-clamp-3">{data.description}</p>
                )}
                <div className="flex justify-center md:justify-start mt-4">
                    <LinkButton
                        href={`/news/${data.article_id}`}>
                        Read more
                    </LinkButton>
                </div>
            </div>
        </li>

    )
}
