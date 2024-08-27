import Main from "@/components/Main";
import NewsCard from "@/components/news/NewsCard";
import NewsHeroCard from "@/components/news/NewsHeroCard";
import { getAllNews } from "./api/route";

export default async function Page() {
  const data = await getAllNews();
  return (
    <Main>
      <div className="flex z-50 flex-col lg:flex-row min-h-screen md:h-screen w-full items-start gap-4 p-1 sm:p-4 justify-start">
          <NewsHeroCard details data={data.results[0]} />
        <ul className="flex flex-col w-full h-full lg:w-4/12 gap-4 md:overflow-auto scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-track-zinc-600 lg:px-4">
          {data.results.slice(4).map((article) => (
            <NewsCard key={article.title} data={article} />
          ))}
        </ul>
      </div>
    </Main>
  );
}
