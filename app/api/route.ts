import { AllNews } from '../types/news';


export async function getAllNews() {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL
        const key = process.env.PRIVATE_KEY
        const response = await fetch(`${url}${key}`, {
            next: {
                revalidate: 3600
            }
        });
        const data = await response.json();
        return data as AllNews
    } catch (error:any) {
        console.error(error.message);
        return { articles: [] };
    }
}

export async function getNewsByQuery(query: string) {
    const encodedQuery = encodeURIComponent(query)
    try {
        const url = process.env.NEXT_PUBLIC_API_URL_ROOT
        const key = process.env.PRIVATE_KEY
        const response = await fetch(`${url}?q=${encodedQuery}&apiKey=${key}`,{
            next:{
                revalidate: 30
            }
        });
        const data = await response.json();
        return data as AllNews
    } catch (error:any) {
        console.error(error.message);
        return { articles: [] };
    }
}
