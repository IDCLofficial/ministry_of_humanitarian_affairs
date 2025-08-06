import ProjectHeroSection from "./ProjectHeroSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import ProjectsSection from "./ProjectsSection";

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <ProjectHeroSection />
      <ProjectsSection />
      <CTASection 
        heading="Partner with Us Today!"
        subtext="Join us as we bring hope to all helpless imolites In every community and on every street."
        buttonLabel="Contact Us"
        buttonHref="/contact-us" 
      />
      <Footer />
    </div>
  );
}