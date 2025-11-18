import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Clock, DollarSign } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      company: "Work Wear Uniform Group",
      website: "https://wwugl.com",
      industry: "Manufacturing & Supply Chain",
      challenge: "Needed a comprehensive ERP system to manage entire manufacturing workflow from raw material procurement to final product shipment to clients.",
      solution: "Built custom end-to-end ERP system with procurement management, inventory tracking, production planning, quality control, shipment logistics, and client management. Integrated with cloud infrastructure for real-time visibility across all operations.",
      results: [
        "Complete digital transformation of manufacturing operations",
        "Real-time tracking from raw materials to final delivery",
        "40% reduction in order processing time",
        "99.9% system uptime with 24/7 managed services",
        "Seamless integration with supplier and client systems"
      ],
      metrics: {
        timeToMarket: "12 weeks",
        roi: "300%",
        uptime: "99.9%",
        costSavings: "45%"
      },
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      services: ["Custom ERP Development", "Cloud Infrastructure", "24/7 Managed Services"]
    },
    {
      company: "Supreme Global",
      industry: "Enterprise Solutions",
      challenge: "Required robust cloud infrastructure management and enterprise application development with high availability and scalability requirements.",
      solution: "Implemented enterprise-grade cloud infrastructure with automated scaling, comprehensive monitoring, disaster recovery, and custom business applications tailored to their specific workflows.",
      results: [
        "Enterprise-grade infrastructure with auto-scaling",
        "Zero downtime deployments achieved",
        "Proactive monitoring preventing 15+ incidents",
        "50% reduction in infrastructure costs",
        "24/7 managed services with 30-minute incident response"
      ],
      metrics: {
        timeToMarket: "8 weeks",
        roi: "250%",
        uptime: "99.99%",
        costSavings: "50%"
      },
      technologies: ["AWS", "Kubernetes", "PostgreSQL", "Redis", "CloudWatch"],
      services: ["Cloud Infrastructure Management", "Application Development", "DevOps & Monitoring"]
    },
    {
      company: "Prime Global",
      industry: "Business Services",
      challenge: "Needed scalable infrastructure and custom application development to support rapid business growth and expansion into new markets.",
      solution: "Developed scalable application architecture with multi-region deployment capabilities, automated CI/CD pipelines, comprehensive security implementation, and managed cloud infrastructure.",
      results: [
        "Successful multi-region deployment across 3 continents",
        "Automated deployment reducing release time by 70%",
        "Enterprise security with SOC2 compliance readiness",
        "Infrastructure scaling supporting 10x user growth",
        "Continuous monitoring with proactive optimization"
      ],
      metrics: {
        timeToMarket: "10 weeks",
        roi: "280%",
        uptime: "99.95%",
        costSavings: "40%"
      },
      technologies: ["Azure", "React", "Node.js", "MongoDB", "Terraform"],
      services: ["Application Development", "Multi-Region Infrastructure", "Managed Services"]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-foreground">
            Enterprise Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading enterprises for ERP development, cloud infrastructure management, and mission-critical applications
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="p-8 lg:p-12 bg-background border-border">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {study.company}
                      </h3>
                      {study.website && (
                        <a
                          href={study.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          Visit Website →
                        </a>
                      )}
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {study.industry}
                    </Badge>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">Challenge</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">Solution</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-foreground">Key Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h4 className="font-semibold mb-4 text-foreground">Impact Metrics</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm text-muted-foreground">Time to Market</div>
                          <div className="text-xl font-bold text-foreground">{study.metrics.timeToMarket}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm text-muted-foreground">ROI</div>
                          <div className="text-xl font-bold text-foreground">{study.metrics.roi}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm text-muted-foreground">Uptime</div>
                          <div className="text-xl font-bold text-foreground">{study.metrics.uptime}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm text-muted-foreground">Cost Savings</div>
                          <div className="text-xl font-bold text-foreground">{study.metrics.costSavings}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-foreground">Services Provided</h4>
                    <ul className="space-y-2">
                      {study.services.map((service, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
