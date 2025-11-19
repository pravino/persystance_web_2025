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
import ProjectCalculator from "@/components/ProjectCalculator";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SEO, { seoConfig } from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Package, Zap, ArrowRight } from "lucide-react";

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
        <section id="calculator" className="py-20 px-6 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="max-w-7xl mx-auto">
            <ProjectCalculator />
          </div>
        </section>
        
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <Card className="p-12 glass text-center bg-gradient-to-br from-primary/5 to-background">
              <Badge className="mb-4" variant="outline">
                <Package className="w-3 h-3 mr-1" />
                New: Ready-Made Products
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Don't Have 2-4 Weeks?
                <br />
                <span className="text-primary">Launch in Days with Ready-Made Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Production-ready software products available now. Complete source code, white-label ready. 
                Choose from Taxi Apps, Crypto Exchanges, KYC Modules, Property Management Systems, and more.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>Deploy in 2-30 days</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Package className="w-4 h-4 text-primary" />
                  <span>Full source code included</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>White-label ready</span>
                </div>
              </div>

              <Link href="/ready-made-products">
                <Button size="lg" className="text-lg px-8">
                  Browse Ready-Made Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </Card>
          </div>
        </section>
        
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
