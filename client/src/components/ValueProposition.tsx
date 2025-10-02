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
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Persystance Networks?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Speed, quality, and cost-efficiency—the trifecta every startup needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate active-elevate-2 cursor-default transition-all duration-300"
              data-testid={`card-value-${index}`}
            >
              <div className="text-primary mb-4">{value.icon}</div>
              <div className="text-4xl font-bold font-mono text-chart-2 mb-2">
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
