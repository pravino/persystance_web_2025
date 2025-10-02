import { Badge } from "@/components/ui/badge";

export default function ClientLogos() {
  const clients = [
    "Mobitel", "Dilmah", "Sathosa", "SupremePay", 
    "Prime Residencies", "CRYPX", "TC Lanka"
  ];

  return (
    <section className="py-20 border-y border-border bg-card/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Trusted By Leading Companies
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-2xl font-bold text-muted-foreground/40 hover:text-foreground/60 transition-colors duration-300"
              data-testid={`client-logo-${index}`}
            >
              {client}
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
          <Badge variant="outline" className="px-6 py-3 text-sm font-semibold">
            ISO 9001:2015 Certified
          </Badge>
          <Badge variant="outline" className="px-6 py-3 text-sm font-semibold">
            20+ Years Experience
          </Badge>
          <Badge variant="outline" className="px-6 py-3 text-sm font-semibold">
            98% Client Satisfaction
          </Badge>
        </div>
      </div>
    </section>
  );
}
