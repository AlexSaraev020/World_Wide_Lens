import React from 'react'
import LinkButton from './Link'
import { Lobster } from 'next/font/google';
const lobster = Lobster({ subsets: ["latin"], weight: "400" });
export default function Nav() {
    const navLinks = [
        { id: 1, title: "Home", link: "/" },
        { id: 2, title: "Search", link: "/search" },
        { id: 3, title: "Filter", link: "/filtered" },
    ]

    return (
        <nav className='w-full flex flex-col bg-black items-center justify-center'>
            <h1 className={'text-white text-4xl sm:text-5xl md:text-6xl p-4 ' + lobster.className}>
                World Wide Lens
            </h1>
            <ul className='w-full flex items-center justify-center text-white gap-4'>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <LinkButton nav href={link.link}>
                            {link.title}
                        </LinkButton>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
