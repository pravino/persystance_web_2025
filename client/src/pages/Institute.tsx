import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Rocket, Shield, Lightbulb, Target } from "lucide-react";

export default function Institute() {
  const services = [
    {
      icon: Lightbulb,
      title: "Technology Consulting",
      description: "Strategic guidance for digital transformation, technology stack selection, and architecture design.",
      benefits: ["Technology Roadmapping", "Architecture Review", "Stack Modernization"]
    },
    {
      icon: Rocket,
      title: "Innovation Workshops",
      description: "Hands-on workshops to accelerate your team's capabilities in Web3, AI, and spatial computing.",
      benefits: ["Team Training", "POC Development", "Best Practices"]
    },
    {
      icon: Shield,
      title: "Enterprise Solutions",
      description: "Custom enterprise-grade solutions with security, scalability, and compliance built-in.",
      benefits: ["Enterprise Security", "Scalable Architecture", "Compliance Support"]
    },
    {
      icon: Target,
      title: "Strategic Partnerships",
      description: "Long-term partnerships for ongoing innovation, development, and technical leadership.",
      benefits: ["Dedicated Team", "Continuous Innovation", "Technical Leadership"]
    },
  ];

  const expertise = [
    {
      area: "Web3 & Blockchain",
      capabilities: ["Smart Contract Development", "DeFi Platforms", "NFT Marketplaces", "DAO Governance", "Blockchain Integration"]
    },
    {
      area: "Artificial Intelligence",
      capabilities: ["AI-Powered Automation", "Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      area: "Spatial Computing",
      capabilities: ["AR/VR Applications", "3D Model Development", "WebXR Experiences", "Immersive Environments", "Spatial Data Visualization"]
    },
    {
      area: "Enterprise Systems",
      capabilities: ["Trading Platforms", "Matching Engines", "Payment Systems", "Compliance Systems", "Data Infrastructure"]
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Persystance Institute - Enterprise Technology Consulting"
        description="Strategic technology consulting and enterprise solutions. Specializing in Web3, AI, spatial computing, and digital transformation for forward-thinking organizations."
        canonicalUrl="https://persystance.com/institute"
        ogImage="https://persystance.com/og-image.jpg"
      />
      <StructuredData type="service" />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-gradient-to-br from-background via-background to-muted">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Enterprise Solutions</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Persystance Institute
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Strategic technology consulting for enterprises ready to lead in Web3, AI, and next-generation digital experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/94778005567?text=I'm%20interested%20in%20enterprise%20consulting%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 rounded-md bg-primary text-primary-foreground font-medium hover-elevate active-elevate-2"
                  data-testid="button-contact-enterprise"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Institute */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  13+ Years of Innovation
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Since 2012, Persystance has been at the forefront of technology innovation, evolving from rapid MVP development into a comprehensive institute for enterprise digital transformation.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We combine deep technical expertise with strategic vision to help organizations navigate complex technology landscapes and build competitive advantages through cutting-edge solutions.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">13+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 hover-elevate">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">Seasoned engineers and consultants</p>
                </Card>
                <Card className="p-6 hover-elevate">
                  <Shield className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Enterprise Grade</h3>
                  <p className="text-sm text-muted-foreground">Security and compliance first</p>
                </Card>
                <Card className="p-6 hover-elevate">
                  <Rocket className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Innovation Focus</h3>
                  <p className="text-sm text-muted-foreground">Leading-edge technologies</p>
                </Card>
                <Card className="p-6 hover-elevate">
                  <Target className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Strategic Impact</h3>
                  <p className="text-sm text-muted-foreground">Business-aligned solutions</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Consulting Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive technology consulting and strategic partnerships for enterprise innovation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-8 hover-elevate" data-testid={`card-service-${index}`}>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technical Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep capabilities across emerging and enterprise technologies
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {expertise.map((area, index) => (
                <Card key={index} className="p-8 hover-elevate" data-testid={`card-expertise-${index}`}>
                  <h3 className="text-xl font-semibold mb-4">{area.area}</h3>
                  <div className="flex flex-wrap gap-2">
                    {area.capabilities.map((capability, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {capability}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how Persystance Institute can accelerate your digital transformation and innovation goals.
            </p>
            <a
              href="https://wa.me/94778005567?text=I'd%20like%20to%20discuss%20enterprise%20consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-md bg-primary text-primary-foreground font-medium hover-elevate active-elevate-2"
              data-testid="button-schedule-call"
            >
              Schedule a Strategy Call
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
