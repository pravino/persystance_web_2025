import { Badge } from "@/components/ui/badge";

export default function ClientLogos() {
  const enterpriseClients = [
    { name: "Supreme Global", highlight: true },
    { name: "Prime Global", highlight: true },
    { name: "Work Wear Uniform Group", highlight: true, url: "https://wwugl.com" }
  ];

  const otherClients = [
    "Dialog GSM", "Mobitel", "InspiraWealth",
    "Kangaroo Cabs", "SupremePay", "SupremeCrypx", 
    "Diabetes Community"
  ];

  return (
    <section className="py-16 border-y border-border bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Trusted By Leading Enterprises & Innovative Companies
          </p>
        </div>
        
        <div className="mb-10">
          <p className="text-center text-xs text-muted-foreground mb-6 uppercase tracking-wider">
            Enterprise Managed Services Clients
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 mb-8">
            {enterpriseClients.map((client, index) => (
              client.url ? (
                <a
                  key={index}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                  data-testid={`enterprise-client-logo-${index}`}
                >
                  {client.name} →
                </a>
              ) : (
                <div
                  key={index}
                  className="text-2xl font-bold text-foreground"
                  data-testid={`enterprise-client-logo-${index}`}
                >
                  {client.name}
                </div>
              )
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-10">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {otherClients.map((client, index) => (
              <div
                key={index}
                className="text-xl font-semibold text-muted-foreground/50 hover:text-foreground/70 transition-colors"
                data-testid={`client-logo-${index}`}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          <Badge variant="outline" className="px-4 py-2 text-xs">
            ISO 27001 Ready
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-xs">
            SOC 2 Compliant
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-xs">
            GDPR Compliant
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
