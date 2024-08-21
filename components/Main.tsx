import React from 'react'
import Image from 'next/image'
import background from '../public/images/background.jpg'
interface MainProps {
    children: JSX.Element | JSX.Element[]
}
export default function Main(props: MainProps) {
    const { children } = props
    return (
        <main className="relative">
            {children}
        </main>
    )
}
