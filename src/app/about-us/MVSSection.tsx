import { MVSCard } from "./MVSCard"

const mvs = [
    {
        title: "Our Mission",
        description: "To enhance social welfare and resilience in Imo State by delivering coordinated humanitarian aid, disaster response, and inclusive social development programs that empower vulnerable groups and promote dignity, security, and equity for all citizens."
    },
    {
        title: "Our Vision",
        description: "To build a socially inclusive and resilient Imo State where every citizen, especially the vulnerable, is protected, empowered, and given equal opportunity to thrive through effective humanitarian services and sustainable social development initiatives."
    }
]   

export const MVSSection = () => {
    return(
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-8 py-20 justify-center items-center w-full bg-[#F1F1F1]">
            {mvs.map((mvs, index) => (
                <MVSCard key={index} title={mvs.title} description={mvs.description} />
            ))}
        </div>
    )
}