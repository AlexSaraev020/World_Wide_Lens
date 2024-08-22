import { AllNews } from '../types/news';
export async function getAllNews() {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL
        const key = process.env.PRIVATE_KEY
        const response = await fetch(`${url}${key}`);
        const data = await response.json();
        return data as AllNews
    } catch (error:any) {
        console.error(error.message);
        return { articles: [] };
    }
}

export async function getStaticProps() {
    const news = await getAllNews();

    return {
        props: {
            news,
        },
        revalidate: 3600, // revalidare la fiecare ora
    };
}

export async function getNewsByQuery(query: string) {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL_ROOT
        const key = process.env.PRIVATE_KEY
        const response = await fetch(`${url}?q=${query}&apiKey=${key}`);
        const data = await response.json();
        return data as AllNews
    } catch (error:any) {
        console.error(error.message);
        return { articles: [] };
    }
}
