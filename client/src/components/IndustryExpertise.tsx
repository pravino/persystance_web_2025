import { Card } from "@/components/ui/card";
import { Smartphone, Wallet, Hotel, Heart, Car, Wrench, Gamepad2, ArrowRightLeft, Database, FileKey } from "lucide-react";

export default function IndustryExpertise() {
  const industries = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Telecommunications",
      description: "Mobile networks, GSM services, and digital communication platforms for leading telecom providers.",
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Fintech & Payments",
      description: "Mobile wallets, payment gateways, wealth management, cryptocurrency, and instant loan platforms.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Asset Management Systems",
      description: "GDPR-compliant portfolio management, real-time tracking, regulatory reporting (MiFID II, AIFMD) for Europe, USA, and Middle East.",
    },
    {
      icon: <FileKey className="w-8 h-8" />,
      title: "Secure Data Rooms",
      description: "Enterprise-grade virtual data rooms for M&A due diligence, encrypted file storage, granular access controls, and compliance tracking.",
    },
    {
      icon: <ArrowRightLeft className="w-8 h-8" />,
      title: "Trading & Exchanges",
      description: "Mid-market value matching engines, decentralized exchange platforms, bot attack prevention, and secure trading systems.",
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Web3 Games",
      description: "Telegram mini apps, tap-to-earn games, blockchain gaming, NFT integration, and viral game mechanics.",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Transportation & Logistics",
      description: "Ride-hailing, taxi booking, food delivery platforms with real-time tracking and fleet management.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare & Wellness",
      description: "Health community platforms, beauty salon booking, appointment scheduling, and patient engagement systems.",
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "Hospitality & Travel",
      description: "Hotel booking systems, reservation management, and guest experience platforms for the travel industry.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Service Marketplaces",
      description: "Home repair, automotive services, uniform solutions, and on-demand service provider platforms.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-foreground">
            Industry Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep domain knowledge across the most demanding verticals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="p-8 bg-background border-border hover-elevate"
              data-testid={`card-industry-${index}`}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <div className="text-primary">{industry.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {industry.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
