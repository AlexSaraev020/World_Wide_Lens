'use client'
import React, { useState } from 'react'
import NewsCard from './NewsCard'
import { AllNews, NewsItem } from '@/app/types/news'
import Button from '../buttons/Button'
interface NewsListProps {
    data: AllNews
}
export default function NewsList(props: NewsListProps) {
    const [showMore, setShowMore] = useState<number>(10)
    
    return (
        <ul className='flex flex-col z-10 gap-4 w-full md:w-8/12 lg:w-6/12'>
            {props.data.articles.slice(0,showMore).map((article:NewsItem) => (
                <NewsCard key={article.title} data={article} />
            ))}
            {props.data.articles.length > 0 && <div className='w-full flex items-center justify-end'>
                <Button method={() => setShowMore(showMore + 20)}>
                    Load More
                </Button>
            </div>}
        </ul>
    )
}
