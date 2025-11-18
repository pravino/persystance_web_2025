import { useCountUp } from "@/hooks/use-count-up";
import { TrendingUp, Users, Globe, Zap } from "lucide-react";

export default function LiveMetrics() {
  const mvps = useCountUp({ end: 137, duration: 2500 });
  const countries = useCountUp({ end: 16, duration: 2000 });
  const retention = useCountUp({ end: 98, duration: 2500 });
  const speed = useCountUp({ end: 14, duration: 2000 });

  const metrics = [
    {
      icon: TrendingUp,
      value: mvps.count,
      suffix: "+",
      label: "MVPs Delivered",
      description: "Production-ready products launched",
      ref: mvps.ref,
    },
    {
      icon: Globe,
      value: countries.count,
      suffix: "",
      label: "Countries Served",
      description: "Global reach across continents",
      ref: countries.ref,
    },
    {
      icon: Users,
      value: retention.count,
      suffix: "%",
      label: "Client Retention",
      description: "Long-term partnerships",
      ref: retention.ref,
    },
    {
      icon: Zap,
      value: speed.count,
      suffix: " days",
      label: "Average Delivery",
      description: "From concept to launch",
      ref: speed.ref,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
            Proven Track Record
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real projects. Our metrics speak for themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              ref={metric.ref}
              className="group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-border p-8 hover:shadow-2xl hover:border-primary/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="mb-2">
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-1">
                    {metric.value}
                    <span className="text-primary">{metric.suffix}</span>
                  </div>
                  <div className="text-sm font-semibold text-foreground/80 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.description}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
