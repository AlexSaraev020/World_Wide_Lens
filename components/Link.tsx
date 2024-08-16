import React from 'react'
import Link from 'next/link'

interface LinkProps {
    children: string;
    href: string;
}
export default function LinkButton(props: LinkProps) {
    const { children } = props
    return (
        <Link href={props.href} className='text-md sm:text-lg md:text-xl'>
            {children}
        </Link>
    )
}
