import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import ProcessTimeline from "@/components/ProcessTimeline";
import TechnologyStack from "@/components/TechnologyStack";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ValueProposition />
        <ProcessTimeline />
        <TechnologyStack />
        <div id="portfolio">
          <Portfolio />
        </div>
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
