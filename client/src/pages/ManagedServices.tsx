import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock, TrendingUp, Server, Database, Lock, Zap, MessageCircle } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";

export default function ManagedServices() {
  const { trackWhatsAppClick, trackContactAttempt, trackLeadGeneration, trackButtonClick } = useAnalytics();
  
  const whatsappNumber = "94778005567";
  const message = "Hi! I'm interested in learning more about your Managed Services offerings for enterprise infrastructure.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  const handleContactClick = () => {
    trackWhatsAppClick();
    trackContactAttempt('whatsapp_managed_services');
    trackLeadGeneration('managed_services_page');
    trackButtonClick('managed_services_contact');
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      icon: Server,
      title: "Cloud Infrastructure Management",
      description: "Complete management of your cloud infrastructure across AWS, Azure, and Google Cloud with 24/7 monitoring, auto-scaling, and optimization.",
      features: [
        "24/7 infrastructure monitoring and alerts",
        "Auto-scaling and load balancing",
        "Performance optimization and tuning",
        "Cost optimization and resource management",
        "Multi-region deployment and management"
      ]
    },
    {
      icon: Database,
      title: "ERP System Maintenance",
      description: "End-to-end ERP system maintenance and support for manufacturing, supply chain, and enterprise resource planning systems.",
      features: [
        "Custom ERP system development and maintenance",
        "Integration with existing business systems",
        "Regular updates and feature enhancements",
        "Data migration and system upgrades",
        "User training and documentation"
      ]
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Enterprise-grade security implementation and compliance management ensuring your systems meet industry standards.",
      features: [
        "ISO 27001 and SOC 2 compliance readiness",
        "GDPR and data protection compliance",
        "Regular security audits and penetration testing",
        "Vulnerability scanning and patch management",
        "Incident response and disaster recovery"
      ]
    },
    {
      icon: Zap,
      title: "Performance Monitoring",
      description: "Proactive monitoring and performance optimization to ensure your applications run at peak efficiency.",
      features: [
        "Real-time application performance monitoring",
        "Database query optimization",
        "API response time monitoring",
        "Error tracking and automated alerts",
        "Capacity planning and forecasting"
      ]
    }
  ];

  const tiers = [
    {
      name: "Essential",
      price: "Custom",
      description: "Perfect for growing businesses needing reliable infrastructure management",
      features: [
        "Business hours support (9 AM - 6 PM)",
        "Infrastructure monitoring",
        "Monthly performance reports",
        "Email and chat support",
        "99.5% uptime SLA",
        "Basic security monitoring",
        "Quarterly system reviews"
      ],
      highlight: false
    },
    {
      name: "Professional",
      price: "Custom",
      description: "Ideal for established enterprises with mission-critical applications",
      features: [
        "24/7 monitoring and support",
        "Incident response within 1 hour",
        "Weekly performance reports",
        "Priority email, chat, and phone support",
        "99.9% uptime SLA",
        "Advanced security monitoring",
        "Monthly system optimization",
        "Dedicated account manager",
        "Proactive issue prevention"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Comprehensive managed services for large-scale enterprise operations",
      features: [
        "24/7 premium support with dedicated team",
        "Incident response within 30 minutes",
        "Daily performance reports and analytics",
        "Direct access to senior engineers",
        "99.99% uptime SLA",
        "Enterprise security and compliance",
        "Continuous optimization and tuning",
        "Strategic technology consultation",
        "Custom SLA agreements",
        "Multi-region infrastructure management"
      ],
      highlight: false
    }
  ];

  const caseStudyMetrics = [
    { label: "Average Uptime", value: "99.95%", icon: TrendingUp },
    { label: "Incident Response", value: "< 30 min", icon: Clock },
    { label: "Cost Savings", value: "45%", icon: TrendingUp },
    { label: "Client Satisfaction", value: "98%", icon: CheckCircle2 }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Enterprise Managed Services - Cloud Infrastructure & ERP Management"
        description="24/7 managed cloud infrastructure, ERP system maintenance, and enterprise support. Trusted by Supreme Global, Prime Global, and Work Wear Uniform Group for mission-critical operations."
        canonicalUrl="https://persystance.com/managed-services"
        keywords="managed services, cloud infrastructure management, ERP maintenance, 24/7 support, enterprise hosting, SOC 2 compliance, ISO 27001"
      />
      <StructuredData
        type="service"
        serviceName="Enterprise Managed Services"
        serviceDescription="Comprehensive managed cloud infrastructure, ERP system maintenance, and 24/7 enterprise support with guaranteed SLAs"
      />
      <Navigation />

      <main>
        <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-6">Enterprise Managed Services</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Focus on Your Business,<br />We'll Manage Your Infrastructure
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                24/7 managed cloud infrastructure, ERP system maintenance, and enterprise support. Trusted by leading enterprises for mission-critical operations.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  onClick={handleContactClick}
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Discuss Your Needs
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#pricing">View Pricing</a>
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {caseStudyMetrics.map((metric, index) => (
                <Card key={index} className="p-6 text-center bg-background border-border">
                  <metric.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-foreground">
                Comprehensive Managed Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                End-to-end infrastructure and application management for enterprise peace of mind
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 bg-muted/30 border-border">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-foreground">
                Flexible Service Tiers
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the level of support that matches your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`p-8 ${tier.highlight ? 'border-primary border-2 bg-background' : 'bg-background border-border'}`}
                >
                  {tier.highlight && (
                    <Badge className="mb-4">Most Popular</Badge>
                  )}
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{tier.name}</h3>
                  <div className="text-3xl font-bold mb-2 text-foreground">{tier.price}</div>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={tier.highlight ? "default" : "outline"}
                    onClick={handleContactClick}
                  >
                    Get Custom Quote
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Card className="p-12 bg-primary/5 border-primary/20 text-center">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                Trusted by Enterprise Leaders
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Supreme Global, Prime Global, and Work Wear Uniform Group trust us with their complete cloud infrastructure and ERP systems. Join them with enterprise-grade managed services.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  onClick={handleContactClick}
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Start a Conversation
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
