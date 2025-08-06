import { AboutUsHero } from "./AboutUsHero";
import { AboutSection } from "./AboutSection";
import { ObjectivesSection } from "./ObjectivesSection";
import { StructuresSection } from "./StructuresSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { MVSSection } from "./MVSSection";
import TeamGridSection from "./TeamGridSection";
import { teamMembers } from "./teamMembers";

export default function AboutUs() {
    return (
        <div className="h-screen">
            <AboutUsHero ministryName="Ministry of Humanitarian Affairs" />
            <AboutSection 
                aboutText="The Ministry of Humanitarian Affairs, Disaster Management and Social Development (MISM), Imo State, was established to provide institutional support and coordinated responses to the social and humanitarian needs of vulnerable citizens across the state. Since its formation, the ministry has played a vital role in addressing poverty, responding to emergencies, promoting social inclusion, and improving the quality of life for the disadvantaged through structured programs and partnerships. It serves as the government’s lead agency for managing disaster risk, implementing social protection strategies, and supporting displaced and marginalized communities."
                imgSrc="/images/heroImage.png" 
                altText="Ministry of Sports and Youth Development conference event" 
            />
            <MVSSection />   
            <TeamGridSection members={teamMembers} />
            <ObjectivesSection />
            <StructuresSection 
                imgSrc="/images/building.png"
            />
            <CTASection 
                heading="Partner with us to bring hope to Imolites."
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            <Footer />
        </div>
    )
}