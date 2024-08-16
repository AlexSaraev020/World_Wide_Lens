import React from 'react'
interface NewsCardProps {
    children: JSX.Element | JSX.Element[]
}
export default function NewsCard(props: NewsCardProps) {
    const { children } = props
    return (
        <div>
            {children}
        </div>
    )
}
