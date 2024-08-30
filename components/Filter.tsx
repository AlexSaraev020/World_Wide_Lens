"use client"
import React, { use, useState } from 'react'
import LinkButton from './buttons/LinkButton';

export default function Filter() {
    const [activeFilter, setActiveFilter] = useState<number | null>(null);
    const [category, setCategory] = useState<{ id: number; name: string; value: string } | null>(null);
    const [country, setCountry] = useState<{ id: number; name: string; value: string } | null>(null);
    const [language, setLanguage] = useState<{ id: number; name: string; value: string } | null>(null);

    const filters = [
        {
            id: 1, name: 'Country', countries: [
                { id: 1, name: 'Belgium', value: 'be' },
                { id: 2, name: 'Canada', value: 'ca' },
                { id: 3, name: 'France', value: 'fr' },
                { id: 4, name: 'Germany', value: 'de' },
                { id: 5, name: 'Italy', value: 'it' },
                { id: 6, name: 'Netherlands', value: 'nl' },
                { id: 7, name: 'United Kingdom', value: 'gb' },
                { id: 8, name: 'United States', value: 'us' },
                { id: 9, name: 'Spain', value: 'es' },
                { id: 10, name: 'Japan', value: 'jp' },
                { id: 11, name: 'China', value: 'cn' },
                { id: 12, name: 'India', value: 'in' },
                { id: 13, name: 'South Korea', value: 'kr' },
                { id: 14, name: 'Australia', value: 'au' },
                { id: 15, name: 'New Zealand', value: 'nz' },
                { id: 16, name: 'Mexico', value: 'mx' },
                { id: 17, name: 'Turkey', value: 'tr' },
                { id: 18, name: 'Russia', value: 'ru' },
                { id: 19, name: 'Brazil', value: 'br' },
                { id: 20, name: 'Argentina', value: 'ar' },
            ]
        },
        {
            id: 2, name: 'Category', categories: [
                { id: 1, name: 'Business', value: 'business' },
                { id: 2, name: 'Crime', value: 'crime' },
                { id: 3, name: 'Domestic', value: 'domestic' },
                { id: 4, name: 'Education', value: 'education' },
                { id: 5, name: 'Entertainment', value: 'entertainment' },
                { id: 6, name: 'Environment', value: 'environment' },
                { id: 7, name: 'Food', value: 'food' },
                { id: 8, name: 'Health', value: 'health' },
                { id: 9, name: 'Lifestyle', value: 'lifestyle' },
                { id: 10, name: 'Other', value: 'other' },
                { id: 11, name: 'Politics', value: 'politics' },
                { id: 12, name: 'Science', value: 'science' },
                { id: 13, name: 'Sports', value: 'sports' },
                { id: 14, name: 'Technology', value: 'technology' },
                { id: 15, name: 'Top', value: 'top' },
                { id: 16, name: 'Tourism', value: 'tourism' },
                { id: 17, name: 'World', value: 'world' },
            ]
        },
        {
            id: 3, name: 'Language', languages: [
                { id: 1, name: 'French', value: 'fr' },
                { id: 2, name: 'English', value: 'en' },
                { id: 3, name: 'French', value: 'fr' },
                { id: 4, name: 'German', value: 'de' },
                { id: 5, name: 'Italian', value: 'it' },
                { id: 6, name: 'Chinese', value: 'zh' },
                { id: 7, name: 'Romanian', value: 'ro' },
                { id: 8, name: 'Spanish', value: 'es' },
                { id: 9, name: 'Russian', value: 'ru' },
                { id: 10, name: 'Japanese', value: 'ja' },
                { id: 11, name: 'Korean', value: 'ko' },
                { id: 12, name: 'Arabic', value: 'ar' },
                { id: 13, name: 'Hindi', value: 'hi' },
                { id: 14, name: 'Portuguese', value: 'pt' },
                { id: 15, name: 'Turkish', value: 'tr' },
                { id: 16, name: 'Polish', value: 'pl' },
                { id: 17, name: 'Dutch', value: 'nl' },
                { id: 18, name: 'Ukrainian', value: 'uk' },
            ]
        },
    ]
    const handleFilterClick = (id: number) => {
        if (id === 1 && country) {
            setCountry(null);
            return
        }
        if (id === 2 && category) {
            setCategory(null);
            return
        }
        if (id === 3 && language) {
            setLanguage(null);
            return
        }

        setActiveFilter(activeFilter === id ? null : id);
    };


    const handleLanguageClick = (lang: { id: number; name: string; value: string }) => {
        setLanguage(lang);
        setActiveFilter(null);
    };

    const handleCategoryClick = (cat: { id: number; name: string; value: string }) => {
        setCategory(cat);
        setActiveFilter(null);
    };

    const handleCountryClick = (ctry: { id: number; name: string; value: string }) => {
        setCountry(ctry);
        setActiveFilter(null);
    };

    return (
        <ul className='flex text-white gap-1 sm:gap-4 p-2'>
            {filters.map((filter) => (
                <li key={filter.id} className='p-2 relative font-semibold text-md sm:text-lg md:text-xl animate-fade'>
                    <button onClick={() => handleFilterClick(filter.id)}>
                        {filter.id === 1 && country ? country.name :
                            filter.id === 2 && category ? category.name :
                                filter.id === 3 && language ? language.name :
                                    filter.name}
                    </button>
                    {activeFilter === filter.id &&
                        <ul className='flex top-12 left-0 absolute z-20 bg-black flex-col items-start w-auto text-nowrap h-40 overflow-y-scroll scrollbar-thumb-zinc-400 scrollbar-track-zinc-800 pr-4 scrollbar-thin p-2'>
                            {activeFilter === filter.id && filter.languages?.map((language) => (
                                <li key={language.id}>
                                    <button className='px-4 py-1' onClick={() => handleLanguageClick(language)}>
                                        {language.name}
                                    </button>
                                </li>
                            ))}
                            {activeFilter === filter.id && filter.countries?.map((country) => (
                                <li key={country.id}>
                                    <button onClick={() => handleCountryClick(country)}>
                                        {country.name}
                                    </button>
                                </li>
                            ))}
                            {activeFilter === filter.id && filter.categories?.map((category) => (
                                <li key={category.id}>
                                    <button onClick={() => handleCategoryClick(category)}>
                                        {category.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    }
                </li>
            ))}
            <li className='animate-fade flex items-center justify-center font-bold italic'>
                <LinkButton
                    nav
                    href={{
                        pathname: '/news/search/',
                        query: {
                            ...(country ? { country: country.value } : {}),
                            ...(category ? { category: category.value } : {}),
                            ...(language ? { language: language.value } : {}),
                        }
                    }}>
                    Results
                </LinkButton>

            </li>
        </ul>
    )
}
