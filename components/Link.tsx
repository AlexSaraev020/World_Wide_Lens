import React from 'react'
import Link from 'next/link'

interface LinkProps {
    children: string;
    href: string;
    nav?: boolean
}
export default function LinkButton(props: LinkProps) {
    const { children } = props
    return (
        <Link href={props.href} className={props.nav? 'text-md sm:text-lg md:text-xl' : 'border-2 border-black p-1 text-xl focus:outline-none text-white bg-zinc-700 font-bold'}>
            {children}
        </Link>
    )
}
