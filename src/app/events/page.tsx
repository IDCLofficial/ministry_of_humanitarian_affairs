import EventsHeroSection from "./EventsHeroSection";
import EventsListSection from "./EventsListSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import PastEvents from "./PastEvents";

export default function EventsPage() {
  return (
    <div className="bg-white">
      <EventsHeroSection />
      <EventsListSection />
      <PastEvents />
      <CTASection 
        heading="Together we can Promote Humanitarian Efforts in Imo State"
        subtext="Join us as we bring hope to all helpless imolites In every community and on every street."
        buttonLabel="Contact Us" 
        buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
