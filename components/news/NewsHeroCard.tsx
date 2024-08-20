import React from 'react';
import Image from 'next/image';
import LinkButton from '../LinkButton';
import { NewsItem } from '@/app/types/news';
import NewsCard from './NewsCard';

interface Props {
  data: NewsItem;
  details?: boolean;
  allAricles?: NewsItem[];
}

export default function NewsHeroCard({ data , details , allAricles }: Props) {
  return (
    <div className="flex-1 flex  flex-col items-center justify-center gap-4 mx-auto">
      <div className='flex flex-col gap-4 border-2 border-black p-1 sm:p-4 bg-zinc-400'>
        <div className="w-full">
          <Image
            src={data.urlToImage}
            height={500}
            width={200}
            alt={data.title}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold text-center md:text-left">
            {data.title}
          </h1>
          {details &&
                    <p className="w-full line-clamp-3">
                        {data.description}
                    </p>
                }
          <h2 className="font-bold italic">
            {data.author} - {new Date(data.publishedAt).toLocaleDateString()}
          </h2>
          <LinkButton href={`/news/${data.title.replaceAll(/\s+/g , '-').toLocaleLowerCase()}`}>
            Read more
          </LinkButton>
        </div>
      </div>
      <div className='flex-1 flex flex-col md:flex-row gap-4 w-full'>
      {allAricles?.slice(1,4).map((article: NewsItem) => (
        <NewsCard key={article.title} data={article} />
      ))}
      </div>
    </div>
  );
}
