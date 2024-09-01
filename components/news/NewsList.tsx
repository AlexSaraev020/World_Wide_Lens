'use client'
import React, { useState } from 'react'
import NewsCard from './NewsCard'
import { AllNews, NewsItem } from '@/app/types/news'
import Button from '../buttons/Button'
interface NewsListProps {
    data: AllNews
}
export default function NewsList(props: NewsListProps) {
    const [showMore, setShowMore] = useState<number>(5)

    return (
        <ul className='flex flex-col z-10 gap-4 w-full justify-center items-center'>
            {props.data.results.slice(0, showMore).map((article: NewsItem) => (
                <NewsCard key={article.article_id} data={article} />
            ))}
            {props.data.results.length > 0 && showMore < props.data.results.length && <div className='w-full flex items-center justify-end'>
                <Button method={() => setShowMore(showMore + 5)}>
                    Load More
                </Button>
            </div>}
        </ul>
    )
}
