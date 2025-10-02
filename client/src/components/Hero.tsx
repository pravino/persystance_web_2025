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
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/40">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                20+ Years of Excellence
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground">
              Ship Your MVP in{" "}
              <span className="text-primary">
                2 Weeks
              </span>
              <br />
              Launch in{" "}
              <span className="text-primary">
                30 Days
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed font-normal">
              Turn your startup idea into reality with our rapid MVP development. 
              Expert team, proven process, and 50% cost optimization guaranteed.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="text-base px-8"
                onClick={scrollToContact}
                data-testid="button-get-quote"
              >
                Get Your MVP Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8"
                onClick={scrollToProcess}
                data-testid="button-view-process"
              >
                View Our Process
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-12 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="text-2xl font-semibold">200+</div>
                  <div className="text-sm text-muted-foreground">MVPs Launched</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="text-2xl font-semibold">15+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="text-2xl font-semibold">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:pl-8">
            <div className="space-y-4">
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
    <div className="flex items-center gap-5 group">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
          {icon}
        </div>
        {!isLast && (
          <div className="absolute left-6 top-12 w-0.5 h-8 bg-border" />
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-lg mb-0.5">{phase}</h3>
        <p className="text-sm text-muted-foreground">{days}</p>
      </div>
    </div>
  );
}
