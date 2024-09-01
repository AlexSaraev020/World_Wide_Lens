import React from 'react';
import Image from 'next/image';
import LinkButton from '../buttons/LinkButton';
import { NewsItem } from '@/app/types/news';
import Placeholder from '@/public/images/placeholder.png'

interface Props {
  data: NewsItem;
  details?: boolean;
}

export default function NewsHeroCard({ data, details }: Props) {
  return (
    <div className='flex relative flex-col w-full md:w-9/12 h-screen gap-4 border-2 border-black rounded-lg shadow-md p-1 sm:p-4 bg-zinc-400'>
      <Image
        src={data.image_url ? data.image_url : Placeholder}
        height={500}
        width={200}
        alt={data.title ? data.title : 'no photo available'}
        className="w-full h-3/6 md:h-4/6 object-cover rounded-t-lg"
      />

      <div className="w-full">
        <h1 className="text-2xl sm:text-4xl md:text-4xl font-semibold text-center md:text-left">
          {data.title}
        </h1>
        {details &&
          <p className="w-full line-clamp-3">
            {data.description}
          </p>
        }
        <h2 className="font-bold italic">
          {data.creator} - {new Date(data.pubDate).toLocaleDateString()}
        </h2>
        <div className='flex justify-center md:justify-start mt-4'>
          <LinkButton href={`/news/${data.article_id}`}>
            Read more
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
