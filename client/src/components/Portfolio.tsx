import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "SupremeX Crypto Exchange",
      description: "White-label cryptocurrency trading platform with real-time analytics",
      timeline: "12 days",
      result: "10K+ users in month 1",
      tech: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    },
    {
      title: "Chattle Messenger",
      description: "End-to-end encrypted messaging app for enterprise",
      timeline: "14 days",
      result: "5 enterprise clients",
      tech: ["React Native", "Firebase", "WebRTC"],
    },
    {
      title: "Evender eCommerce",
      description: "Multi-vendor marketplace with payment integration",
      timeline: "13 days",
      result: "$50K GMV month 1",
      tech: ["Next.js", "Stripe", "MongoDB"],
    },
    {
      title: "HealthTrack SaaS",
      description: "AI-powered health monitoring dashboard",
      timeline: "11 days",
      result: "2K beta signups",
      tech: ["Vue.js", "Python", "TensorFlow"],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real MVPs we've built and launched for startups worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate active-elevate-2 cursor-default transition-all duration-300"
              data-testid={`card-project-${index}`}
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-medium">{project.timeline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-chart-2" />
                  <span className="font-medium">{project.result}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
