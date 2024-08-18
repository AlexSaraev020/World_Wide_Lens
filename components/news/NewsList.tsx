import React from 'react'
import News from '@/public/images/news.jpg'
import NewsCard from './NewsCard'
interface NewsListProps {
    data: any[]
    newsSearch?: string
}
export default function NewsList(props: NewsListProps) {
    const { data, newsSearch } = props
    return (
        <ul className='flex flex-col gap-4 w-full md:w-8/12 lg:w-6/12'>
            <NewsCard data={data} News={News} />
            <NewsCard data={data} News={News} />
            <NewsCard data={data} News={News} />
            <NewsCard data={data} News={News} />
            <NewsCard data={data} News={News} />
        </ul>
    )
}
