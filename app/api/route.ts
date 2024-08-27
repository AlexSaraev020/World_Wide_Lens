import { AllNews, NewsItem } from '../types/news';
const url = process.env.NEXT_PUBLIC_API_URL
const key = process.env.PRIVATE_KEY

export async function getAllNews() {
    try {
        const response = await fetch(`${url}${key}&country=us`, {
            next: {
                revalidate: 3600
            }
        });
        const data = await response.json();
        return data as AllNews
    } catch (error:any) {
        console.error(error.message);
        return { results: [] };
    }
}

export async function getNewsByQuery(query: string) {
    const encodedQuery = encodeURIComponent(query)
    try {
        const response = await fetch(`${url}${key}&q=${encodedQuery}`,{
            next:{
                revalidate: 30
            }
        });
        const data = await response.json();
        return data as AllNews
    } catch (error:any) {
        console.error(error.message);
        return { results: [] };
    }
}

export async function getNewsById(id: string) {
    const encodedId = encodeURIComponent(id)
    try {
        const response = await fetch(`${url}${key}&id=${encodedId}`,{
            next:{
                revalidate: 30
            }
        });
        const data = await response.json();
        return data as AllNews
    } catch (error:any) {
        console.error(error.message);
        return {results: []};
    }
}