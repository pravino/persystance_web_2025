import { CheckCircle2 } from "lucide-react";

export default function ProcessTimeline() {
  const phases = [
    {
      phase: "Discovery",
      days: "Days 1-3",
      deliverables: [
        "Detailed requirements analysis",
        "Technical architecture planning",
        "User flow mapping",
        "Technology stack selection",
      ],
    },
    {
      phase: "Build",
      days: "Days 4-10",
      deliverables: [
        "Core feature development",
        "Database design & setup",
        "API development",
        "Frontend implementation",
      ],
    },
    {
      phase: "Polish",
      days: "Days 11-14",
      deliverables: [
        "Quality assurance testing",
        "UI/UX refinements",
        "Performance optimization",
        "Bug fixes & improvements",
      ],
    },
    {
      phase: "Launch",
      days: "Days 15-30",
      deliverables: [
        "Deployment to production",
        "Domain & SSL setup",
        "Monitoring & analytics",
        "User onboarding & support",
      ],
    },
  ];

  return (
    <section id="process" className="py-32 scroll-mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Our Proven Process
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A structured 4-phase approach that guarantees quality and speed
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((item, index) => (
            <div 
              key={index} 
              className="relative"
              data-testid={`timeline-phase-${index}`}
            >
              <div className="bg-gradient-to-br from-card to-card/30 backdrop-blur-xl border-2 border-card-border rounded-2xl p-8 h-full hover-elevate transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-chart-1 text-primary-foreground flex items-center justify-center font-black text-xl shadow-lg shadow-primary/30">
                    {index + 1}
                  </div>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-4 py-2 rounded-full">
                    {item.days}
                  </span>
                </div>
                
                <h3 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {item.phase}
                </h3>
                
                <ul className="space-y-4">
                  {item.deliverables.map((deliverable, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-chart-2/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-chart-2" />
                      </div>
                      <span className="text-base text-muted-foreground leading-relaxed">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
