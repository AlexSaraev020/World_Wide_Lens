import { GetStaticProps } from "next";
import Main from "@/components/Main";
import NewsCard from "@/components/news/NewsCard";
import NewsHeroCard from "@/components/news/NewsHeroCard";
import News from "@/public/images/news.jpg"
import getAllNews from "./api/route";
import { AllNews } from "./types/news";


export default async function Page() {
  const data = await getAllNews()

  return (
    <Main >
      <div className="flex flex-col lg:flex-row h-full items-start gap-4 p-1 sm:p-4 justify-start">
        <NewsHeroCard details data={data.articles[0]} />
        <ul className="flex flex-col w-full lg:w-4/12 gap-4 overflow-y-scroll max-h-screen scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-track-zinc-600 lg:px-4 ">
          {data.articles.map((article , index) => (
            <NewsCard key={article.title} data={article} index={index+4}/>
          ))}
        </ul>
      </div>
    </Main>
  );
}
