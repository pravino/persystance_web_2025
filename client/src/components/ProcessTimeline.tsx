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
    <section id="process" className="py-24 scroll-mt-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-foreground">
            Our Proven Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A structured 4-phase approach that guarantees quality and speed
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((item, index) => (
            <div 
              key={index} 
              className="relative"
              data-testid={`timeline-phase-${index}`}
            >
              <div className="bg-muted/30 border border-border rounded-xl p-6 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg">
                    {index + 1}
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {item.days}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-5 text-foreground">
                  {item.phase}
                </h3>
                
                <ul className="space-y-3">
                  {item.deliverables.map((deliverable, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
