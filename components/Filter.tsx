import React, { useState } from 'react'

export default function Filter() {
    const [activeFilter, setActiveFilter] = useState<number | null>(null);
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
                { id: 1, value: 'fr', language: 'French' },
                { id: 2, value: 'en', language: 'English' },
                { id: 3, value: 'fr', language: 'French' },
                { id: 4, value: 'de', language: 'German' },
                { id: 5, value: 'it', language: 'Italian' },
                { id: 6, value: 'zh', language: 'Chinese' },
                { id: 7, value: 'ro', language: 'Romanian' },
                { id: 8, value: 'es', language: 'Spanish' },
                { id: 9, value: 'ru', language: 'Russian' },
                { id: 10, value: 'ja', language: 'Japanese' },
                { id: 11, value: 'ko', language: 'Korean' },
                { id: 12, value: 'ar', language: 'Arabic' },
                { id: 13, value: 'hi', language: 'Hindi' },
                { id: 14, value: 'pt', language: 'Portuguese' },
                { id: 15, value: 'tr', language: 'Turkish' },
                { id: 16, value: 'pl', language: 'Polish' },
                { id: 17, value: 'nl', language: 'Dutch' },
                { id: 18, value: 'uk', language: 'Ukrainian' },
            ]
        },
    ]
    const handleFilterClick = (id: number) => {
        setActiveFilter(activeFilter === id ? null : id);
    };

    return (
        <ul className='flex text-white gap-4'>
            {filters.map((filter) => (
                <li key={filter.id} className='p-2 font-semibold text-xl animate-fade'>
                    <button onClick={() => handleFilterClick(filter.id)}>
                        {filter.name}
                    </button>
                    {activeFilter === filter.id &&
                        <ul className='flex flex-col w-fit h-40 overflow-y-auto scrollbar-thumb-purple-100 scrollbar-thin'>
                            {activeFilter === filter.id && filter.languages?.map((language) => (
                                <li key={language.id}>
                                    <button className='px-4 py-1'>
                                        {language.language}
                                    </button>
                                </li>
                            ))}
                            {activeFilter === filter.id && filter.countries?.map((country) => (
                                <li key={country.id}>
                                    <button>
                                        {country.name}
                                    </button>
                                </li>
                            ))}
                            {activeFilter === filter.id && filter.categories?.map((category) => (
                                <li key={category.id}>
                                    <button>
                                        {category.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    }
                </li>
            ))}
            <li>
                <button>

                </button>
            </li>
        </ul>
    )
}
