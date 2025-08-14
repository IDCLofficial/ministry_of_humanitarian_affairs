"use client";
import NewsHeroSection from "./NewsHeroSection";
import NewsSidebar from "./NewsSidebar";
import NewsGrid from "./NewsGrid";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { useMemo, useState } from "react";
import newsList from "./newsList";

export default function NewsPage() {
  type CategoryValue = "latest" | "policies" | "trending";

  const [selected, setSelected] = useState<CategoryValue>("latest");

  const categories = useMemo(() => {
    const counts = newsList.reduce(
      (acc, item) => {
        acc[item.category as CategoryValue] = (acc[item.category as CategoryValue] || 0) + 1;
        return acc;
      },
      { latest: 0, policies: 0, trending: 0 } as Record<CategoryValue, number>
    );
    return [
      { name: "Latest Updates", value: "latest" as const, count: counts.latest },
      { name: "Policies", value: "policies" as const, count: counts.policies },
      { name: "Trending", value: "trending" as const, count: counts.trending },
    ];
  }, []);

  const filtered = useMemo(() => newsList.filter(n => n.category === selected), [selected]);

  return (
    <div className="bg-white">
      <NewsHeroSection />
      <div className="w-full max-w-[100%] mx-auto flex flex-col max-lg:items-center lg:flex-row gap-4 md:gap-8 px-2 md:px-8 py-8 md:py-20">
        <NewsSidebar categories={categories} selected={selected} onSelect={setSelected} />
        <div className="flex-1">
          <NewsGrid items={filtered} />
        </div>
      </div>
      <CTASection 
        heading="Partner with Us Today!"
        subtext="Join us as we bring hope to all helpless imolites In every community and on every street." 
        buttonLabel="Contact Us" 
        buttonHref="/contact-us"/>
      <Footer />
    </div>
  );
}
