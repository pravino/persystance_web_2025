import { Badge } from "@/components/ui/badge";

export default function ClientLogos() {
  const clients = [
    "Dialog GSM", "Mobitel", "Supreme Global", "InspiraWealth",
    "Kangaroo Cabs", "SupremePay", "SupremeCrypx", 
    "Workwear Uniform Group", "Diabetes Community"
  ];

  return (
    <section className="py-16 border-y border-border bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Trusted By Leading Companies
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-xl font-semibold text-muted-foreground/50 hover:text-foreground/70 transition-colors"
              data-testid={`client-logo-${index}`}
            >
              {client}
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          <Badge variant="outline" className="px-4 py-2 text-xs">
            ISO 9001:2015 Certified
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-xs">
            13+ Years Experience
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-xs">
            98% Client Satisfaction
          </Badge>
        </div>
      </div>
    </section>
  );
}
