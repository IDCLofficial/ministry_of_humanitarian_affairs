import UnitsHeroSection from "./UnitsHeroSection";
import UnitsTabsSection from "./UnitsTabsSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Departments",
  description: "Departments and units of the Ministry of Humanitarian Affairs, Imo State Government.",
  path: "/departments",
});


export default function DepartmentsPage() {
  return (
    <div className="bg-white">
      <UnitsHeroSection />
      <UnitsTabsSection />
      <CTASection heading="Partner with bring hope to Imolites." buttonLabel="Contact Us" buttonHref="/contact-us"/>
      <Footer />
    </div>
  );
}
