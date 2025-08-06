import NewsCard from "./NewsCard";
import newsList from "./newsList";

export default function NewsGrid() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
      {newsList.map((item, idx) => (
        <NewsCard news={item} key={idx} />
      ))}
    </div>
  );
} 