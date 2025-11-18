import { Shield, Globe, Lock, FileCheck, Server } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      standard: "ISO 27001",
      title: "Information Security",
      description: "Compliant"
    },
    {
      icon: Server,
      standard: "ISO 27017",
      title: "Cloud Security",
      description: "Compliant"
    },
    {
      icon: Lock,
      standard: "ISO 27018",
      title: "Cloud Privacy",
      description: "Compliant"
    },
    {
      icon: Globe,
      standard: "GDPR",
      title: "Data Protection",
      description: "Certified"
    },
    {
      icon: FileCheck,
      standard: "SOC 2",
      title: "Service Controls",
      description: "Ready"
    }
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Worldwide Compliance
          </h2>
          <p className="text-muted-foreground">
            Trusted by enterprises across Europe, USA, and Middle East
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {badges.map((badge, index) => (
            <Link key={index} href="/compliance">
              <span className="block">
                <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <badge.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm font-semibold">{badge.standard}</div>
                    <div className="text-xs text-muted-foreground">{badge.description}</div>
                  </div>
                </Card>
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/compliance">
            <span className="text-sm text-primary hover:underline inline-flex items-center gap-1 cursor-pointer">
              Learn more about our compliance standards
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
