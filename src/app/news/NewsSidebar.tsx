import Image from "next/image";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import newsList from "./newsList";

type CategoryValue = "latest" | "policies" | "trending";

interface CategoryItem {
  name: string;
  value: CategoryValue;
  count?: number;
}

const popularNews = newsList.slice(0, 3).map(({ title, date, img }) => ({ title, date, img }));

export default function NewsSidebar({
  categories,
  selected,
  onSelect,
}: {
  categories: CategoryItem[];
  selected: CategoryValue;
  onSelect: (value: CategoryValue) => void;
}) {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0 bg-[#F9F9F9] p-2 md:p-4 mb-8 md:mb-0">
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <span className="font-medium text-base md:text-[18px]">Popular</span>
          <BiChevronDown className="text-gray-500 text-[18px] cursor-pointer" />
        </div>
        <div className="flex flex-col gap-2 mt-4" id="dropdown">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onSelect(cat.value)}
              className={`w-full flex justify-between items-center text-left px-2 py-2 rounded hover:bg-gray-100 ${
                selected === cat.value ? "bg-gray-200 font-medium" : ""
              }`}
            >
              <span>{cat.name}</span>
              {typeof cat.count === "number" && <span className="text-xs text-gray-500">{cat.count}</span>}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6 md:mb-8 max-md:hidden">
        <h3 className="font-medium text-base md:text-[18px] mb-2 md:mb-4">CATEGORIES</h3>
        <ul className="space-y-1 md:space-y-2">
          {categories.map((cat, idx) => (
            <li key={idx}>
              <button
                type="button"
                onClick={() => onSelect(cat.value)}
                className={`w-full flex justify-between items-center text-gray-700 text-xs md:text-[15px] px-2 py-1 rounded hover:bg-gray-100 ${
                  selected === cat.value ? "bg-gray-200 font-medium" : ""
                }`}
              >
                <span>{cat.name}</span>
                {typeof cat.count === "number" && <span>{cat.count}</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-lg:hidden">
        <h3 className="font-medium text-base md:text-[18px] mb-2 md:mb-4">POPULAR NEWS</h3>
        <ul className="space-y-2 md:space-y-4">
          {popularNews.map((news, idx) => (
            <li key={idx} className="flex gap-2 md:gap-3 items-center">
              <Link href={`/news/${news.title}`} className="flex gap-2 md:gap-3 items-center">
                <div className="w-[50px] h-[50px] relative rounded overflow-hidden flex-shrink-0">
                  <Image src={news.img} alt={news.title} width={100} height={100} className="object-cover w-full h-full" />
                </div>
                <div>
                <div className="text-xs md:text-[14px] font-medium leading-tight line-clamp-2">{news.title}</div>
                  <div className="text-[10px] text-gray-500 mt-1">{news.date}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}