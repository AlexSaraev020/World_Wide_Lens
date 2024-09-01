import Main from "@/components/Main";
import NewsCard from "@/components/news/NewsCard";
import NewsHeroCard from "@/components/news/NewsHeroCard";
import { getAllNews } from "./actions/route";

export default async function Page() {
  const data = await getAllNews();
  return (
    <Main>
      <div className="flex z-10 flex-col min-h-screen w-full items-start gap-4 p-1 sm:p-4 justify-start">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <NewsHeroCard details data={data.results[0]} />
          <ul className="flex flex-col w-full md:h-screen md:w-5/12 lg:w-4/12 gap-4 md:overflow-auto scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-track-zinc-600 lg:px-4">
            {data.results.slice(1).map((article) => (
              <NewsCard key={article.title} creator data={article} />
            ))}
          </ul>
        </div>
        <ul className="flex flex-col md:flex-row w-full gap-4 md:overflow-x-scroll scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-track-zinc-600 py-2">
          {data.results.slice(4).map((article) => (
            <div key={article.title} className="w-full shrink-0 md:max-w-md">
              <NewsCard data={article} />
            </div>
          ))}
        </ul>
      </div>
    </Main>
  );
}
