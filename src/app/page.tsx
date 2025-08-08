import { Hero } from "@/app/components/Hero";
import AboutSection from "@/app/components/AboutSection";
import AboutCommisioner from "@/app/components/AboutCommisioner";
import QuickLinks from "@/app/components/QuickLinks";
// import Stats from "@/app/components/Stats";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import FeaturedInitiatives from "./components/FeaturedInitiatives";
import FeaturedPartners from "./components/FeaturedPartners";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Hero
        title="Imo State Ministry of Humanitarian Affairs" 
        caption="Compassion in Action, Hope for Every Citizen" 
        subtitle="Our mission is to provide timely and effective humanitarian support, strengthen social protection systems, and uplift the most vulnerable members of our communities. Through collaboration and compassion, we aim to build a resilient, inclusive, and empowered society where no one is left behind."
      />
      <AboutSection 
        title="About Us"
        subtitle= "The Ministry of Humanitarian Affairs in Imo State was established to coordinate responses to emergencies, oversee social welfare programs, and champion the rights and dignity of all citizens. Since its inception, the ministry has evolved to address emerging humanitarian challenges, deliver targeted interventions, and implement people-centered policies that foster sustainable human development across the state."
        image1="/images/orphanageHelp.jpg"
        image2="/images/humanitarianActivities.jpg"
      />
      <AboutCommisioner 
        imgSrc="/images/commissioner.png" 
        title="About The Commissioner" 
        description="Honourable Chief Kenneth Okafor, a respected leader and native of Imo State, currently serves as the Commissioner for Humanitarian Affairs, Disaster Management and Social Development. Before his appointment to this role in March 2025 by Governor Hope Uzodimma, he served as the Special Adviser on Transport, where he contributed significantly to transport coordination and public service delivery in the state. As Commissioner for Humanitarian Affairs, Chief Okafor has demonstrated a strong commitment to supporting vulnerable populations and strengthening social safety nets across Imo State. Under his leadership, the ministry has expanded emergency response capacity, enhanced social protection programs, and initiated targeted interventions for internally displaced persons, women, and youth."
      />
      <section className="w-full flex flex-col gap-4">
        <FeaturedInitiatives />
        <FeaturedPartners />
        <QuickLinks />
        {/* <Advertisement /> */}
      </section>
      {/* <Stats /> */}
      {/* <FeaturedPartners /> */}
      <CTASection 
        heading="Partner with Us Today!"
        subtext="Join us as we bring hope to all helpless imolites In every community and on every street."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer/>
    </div>
  );
}
