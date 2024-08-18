"use client"
import React, { useState, useRef, useEffect } from 'react'
import LinkButton from './LinkButton'
import Image from 'next/image';
import { Lobster } from 'next/font/google';
import SearchButton from '@/public/assets/search.svg'
import { useRouter } from 'next/navigation';


const lobster = Lobster({ subsets: ["latin"], weight: "400" });

export default function Nav() {
    const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [searchText , setSearchText] = useState<string>("")
    const router = useRouter();
    
    useEffect(() => {
        if (isSearchActive && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchActive]);

    const handleMouseDown = (e:React.MouseEvent) => {
        e.preventDefault();
        if(searchInputRef.current){
            searchInputRef.current.focus()
        }
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            if (searchText) {
                router.push(`/news/search/${searchText.toLocaleLowerCase()}`);
            } else {
                alert('Enter text');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <nav className='w-full h-fit flex flex-col bg-black items-center justify-center'>
            <h1 className={'text-white text-4xl sm:text-5xl md:text-6xl p-4 ' + lobster.className}>
                World Wide Lens
            </h1>
            <ul className='w-full flex items-center justify-center text-white gap-4'>
                <li>
                    <LinkButton nav href={'/'}>
                        Home
                    </LinkButton>
                </li>
                <li>
                    {isSearchActive ? (
                        <form className='relative' onSubmit={handleSubmit}>
                            <input
                                onChange={(e) => setSearchText(e.target.value)}
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search..."
                                className="p-1 focus:outline-none bg-zinc-400 placeholder-zinc-900 text-black font-semibold "
                                onBlur={() => setIsSearchActive(false)}
                            />
                            <button  className='text-black absolute right-0' onMouseDown={handleMouseDown}>
                                <Image src={SearchButton} alt="Search" className='w-8' />
                            </button>
                        </form>
                    ) : (
                        <button onClick={() => setIsSearchActive(true)}>
                            Search
                        </button>
                    )}
                </li>
                <li>
                    <LinkButton nav href={'/categories'}>
                        Filter
                    </LinkButton>
                </li>
            </ul>
        </nav>
    );
}
