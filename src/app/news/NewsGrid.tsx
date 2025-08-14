import NewsCard from "./NewsCard";

type News = (typeof import("./newsList").default)[number];

export default function NewsGrid({ items }: { items: News[] }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item, idx) => (
        <NewsCard news={item} key={idx} />
      ))}
    </div>
  );
}