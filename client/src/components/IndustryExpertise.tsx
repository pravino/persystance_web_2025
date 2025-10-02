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
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Industry Expertise
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Deep domain knowledge across the most demanding verticals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate transition-all duration-500 hover:scale-105 bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border-2 shadow-xl hover:shadow-2xl"
              data-testid={`card-industry-${index}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center mb-6">
                <div className="text-primary">{industry.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
