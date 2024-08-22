import React from 'react'
interface MainProps {
    children: JSX.Element | JSX.Element[]
}
export default function Main(props: MainProps) {
    const { children } = props
    return (
        <main className='min-h-screen flex items-center justify-center'>
            {children}
        </main>
    )
}
