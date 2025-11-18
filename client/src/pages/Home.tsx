import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import LiveMetrics from "@/components/LiveMetrics";
import ClientLogos from "@/components/ClientLogos";
import AboutUs from "@/components/AboutUs";
import ValueProposition from "@/components/ValueProposition";
import ProcessTimeline from "@/components/ProcessTimeline";
import TechnologyStack from "@/components/TechnologyStack";
import Portfolio from "@/components/Portfolio";
import IndustryExpertise from "@/components/IndustryExpertise";
import InteractiveDemos from "@/components/InteractiveDemos";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SEO, { seoConfig } from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEO {...seoConfig.home} />
      <StructuredData type="all" />
      <Navigation />
      <main>
        <Hero />
        <TrustBadges />
        <LiveMetrics />
        <ClientLogos />
        <AboutUs />
        <ValueProposition />
        <ProcessTimeline />
        <TechnologyStack />
        <div id="portfolio">
          <Portfolio />
        </div>
        <CaseStudies />
        <IndustryExpertise />
        <InteractiveDemos />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
