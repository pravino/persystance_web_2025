import { Clock, DollarSign, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ValueProposition() {
  const values = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "2-Week MVP Development",
      stat: "14 Days",
      description: "From concept to functional product in just two weeks with our agile sprint methodology.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "50% Cost Reduction",
      stat: "Save 50%",
      description: "Lean development approach eliminates waste and focuses on essential features first.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Production-Ready Launch",
      stat: "30 Days",
      description: "Fully tested, deployed, and ready to scale with real users in just one month.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-foreground">
            Why Persystance Networks?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Speed, quality, and cost-efficiency—the trifecta every startup needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="p-8 bg-background border-border hover-elevate"
              data-testid={`card-value-${index}`}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <div className="text-primary">{value.icon}</div>
              </div>
              <div className="text-4xl font-semibold text-primary mb-3">
                {value.stat}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
