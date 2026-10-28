import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ServicesHeroSection from "./ServicesHeroSection";
import ServicesSection from "./ServicesSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Social Welfare, Emergency Relief and Disaster Management",
  description: "Social welfare and protection, humanitarian relief and emergency aid, vulnerable group empowerment, disaster preparedness and rehabilitation services in Imo State.",
  path: "/services",
});


export default function ServicesPage() {
    return (
        <div className="bg-white">
            <ServicesHeroSection />
            <ServicesSection />
            <CTASection heading="Partner with us to bring hope to Imolites" buttonLabel="Contact Us" buttonHref="/contact" />
            <Footer />
        </div>
    );
}