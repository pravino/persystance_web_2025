import { Card } from "@/components/ui/card";
import { Smartphone, Hotel, Scissors, Car, Wrench, Building2 } from "lucide-react";

export default function IndustryExpertise() {
  const industries = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "On-Demand Services",
      description: "Taxi, ride-sharing, and delivery platforms with real-time tracking and matching algorithms.",
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "Hospitality & Travel",
      description: "Hotel booking systems, reservation management, and guest experience platforms.",
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Beauty & Wellness",
      description: "Salon booking apps, stylist management, and appointment scheduling systems.",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Automotive Services",
      description: "Car service booking, mechanic scheduling, and maintenance tracking platforms.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Home Services",
      description: "Handyman marketplaces, AC repair, electrical, pool maintenance, and household repairs.",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Property Management",
      description: "Office and household repair booking with talent matching and service tracking.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-foreground">
            Industry Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep domain knowledge across the most demanding verticals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="p-8 bg-background border-border hover-elevate"
              data-testid={`card-industry-${index}`}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <div className="text-primary">{industry.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {industry.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
