import NewsHeroSection from "./NewsHeroSection";
import NewsSidebar from "./NewsSidebar";
import NewsGrid from "./NewsGrid";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export default function NewsPage() {
  return (
    <div className="bg-white">
      <NewsHeroSection />
      <div className="w-full max-w-[100%] mx-auto flex flex-col max-lg:items-center lg:flex-row gap-4 md:gap-8 px-2 md:px-8 py-8 md:py-20">
        <NewsSidebar />
        <div className="flex-1">
          <NewsGrid />
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
