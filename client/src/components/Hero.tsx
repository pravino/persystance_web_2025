import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, DollarSign, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-chart-2/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-chart-2/10 border border-primary/20 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                20+ Years of Excellence
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight">
              Ship Your MVP in{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-chart-1 bg-clip-text text-transparent animate-pulse-glow">
                2 Weeks
              </span>
              <br />
              Launch in{" "}
              <span className="bg-gradient-to-r from-chart-2 via-chart-2 to-primary bg-clip-text text-transparent">
                30 Days
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed">
              Turn your startup idea into reality with our rapid MVP development. 
              <span className="text-foreground font-medium"> Expert team, proven process, and 50% cost optimization</span> guaranteed.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                onClick={scrollToContact}
                data-testid="button-get-quote"
              >
                Get Your MVP Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-7 backdrop-blur-sm border-2"
                onClick={scrollToProcess}
                data-testid="button-view-process"
              >
                View Our Process
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-10 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-chart-2/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-chart-2" />
                </div>
                <div>
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm text-muted-foreground">MVPs Launched</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-chart-2/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-chart-2" />
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:pl-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-3xl blur-3xl" />
            <div className="relative space-y-6">
              <TimelineStep 
                phase="Discovery"
                days="Days 1-3"
                icon={<Zap className="w-5 h-5" />}
                delay={0}
              />
              <TimelineStep 
                phase="Build"
                days="Days 4-10"
                icon={<DollarSign className="w-5 h-5" />}
                delay={200}
              />
              <TimelineStep 
                phase="Polish"
                days="Days 11-14"
                icon={<CheckCircle2 className="w-5 h-5" />}
                delay={400}
              />
              <TimelineStep 
                phase="Launch"
                days="Days 15-30"
                icon={<ArrowRight className="w-5 h-5" />}
                delay={600}
                isLast
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineStepProps {
  phase: string;
  days: string;
  icon: React.ReactNode;
  delay: number;
  isLast?: boolean;
}

function TimelineStep({ phase, days, icon, delay, isLast }: TimelineStepProps) {
  return (
    <div className="flex items-center gap-6 group hover-elevate rounded-2xl p-6 bg-card/50 backdrop-blur-xl border border-card-border shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-chart-1 flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all duration-300">
          {icon}
        </div>
        {!isLast && (
          <div className="absolute left-8 top-16 w-0.5 h-10 bg-gradient-to-b from-primary to-chart-2" />
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-xl mb-1">{phase}</h3>
        <p className="text-sm text-muted-foreground font-medium">{days}</p>
      </div>
    </div>
  );
}
