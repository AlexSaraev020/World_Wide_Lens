import React from 'react'
import { AllNews } from '../types/news';
export default async function getAllNews() {
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
