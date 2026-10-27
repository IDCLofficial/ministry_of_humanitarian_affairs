import ProjectHeroSection from "./ProjectHeroSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import ProjectsSection from "./ProjectsSection";
import { getProject } from "./projects";
import { Project } from "../../../lib/types";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Projects and programmes of the Ministry of Humanitarian Affairs, Imo State Government.",
  path: "/projects",
});


export default async function ProjectsPage() {
  const projects = await getProject()

  return (
    <div className="bg-white">
      <ProjectHeroSection />
      <ProjectsSection projects={projects as unknown as Project[]} />
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