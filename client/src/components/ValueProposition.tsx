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
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Why Persystance Networks?
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Speed, quality, and cost-efficiency—the trifecta every startup needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="p-10 hover-elevate active-elevate-2 cursor-default transition-all duration-500 hover:scale-105 bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border-2 shadow-xl hover:shadow-2xl"
              data-testid={`card-value-${index}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center mb-6">
                <div className="text-primary">{value.icon}</div>
              </div>
              <div className="text-6xl font-black font-mono bg-gradient-to-r from-chart-2 to-primary bg-clip-text text-transparent mb-4">
                {value.stat}
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
