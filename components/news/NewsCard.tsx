'use client'
import React from 'react'
import { NewsItem } from '@/app/types/news'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '../buttons/Button'
interface Props {
    details?: boolean;
    data: NewsItem;
}
export default function NewsCard({ data, details }: Props) {
    const router = useRouter()
    return (
        <li className="relative flex flex-col w-full gap-4 bg-zinc-400 p-1 sm:p-2 border-2 border-black">
            {data.urlToImage &&
                <Image src={data.urlToImage} alt={data.title} width={400} height={300} className="w-full h-full object-cover" />
            }
            <div className='w-fit'>
                <h1 className="text-xl font-bold sm:text-lg md:text-xl text-center md:text-left">{data.title}</h1>
                <h2 className="font-bold italic">{data.author}</h2>
                {details &&
                    <p className="w-full line-clamp-3">
                        {data.description}
                    </p>
                }
                <Button method={() => router.push(`/news/${data.title}`)}>
                    Read more
                </Button>
            </div>
        </li>
    )
}
