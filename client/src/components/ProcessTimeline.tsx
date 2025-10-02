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
    <section id="process" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Proven Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
              <div className="bg-card border border-card-border rounded-lg p-6 h-full hover-elevate transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.days}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{item.phase}</h3>
                
                <ul className="space-y-3">
                  {item.deliverables.map((deliverable, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-chart-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{deliverable}</span>
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
