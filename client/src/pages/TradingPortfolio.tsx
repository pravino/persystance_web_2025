import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Building2, 
  Shield, 
  Zap, 
  LineChart, 
  Lock, 
  Globe, 
  CheckCircle2,
  ArrowRightLeft,
  PieChart,
  Target,
  Activity,
  DollarSign,
  Coins
} from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";

export default function TradingPortfolio() {
  const { trackButtonClick } = useAnalytics();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const exchangeFeatures = [
    {
      icon: Coins,
      title: "Multi-Asset Support",
      description: "Trade crypto, FIAT, and commodities on a single platform",
      features: [
        "Cryptocurrency spot & derivatives",
        "FIAT currency pairs (forex)",
        "Commodity futures (gold, silver, oil)",
        "Configurable leverage options",
        "Advanced margin management",
        "Real-time price feeds"
      ]
    },
    {
      icon: Lock,
      title: "Institutional Custody",
      description: "Enterprise-grade asset custody with Fireblocks integration",
      features: [
        "Fireblocks MPC wallet technology",
        "Multi-signature authorization",
        "Cold & hot wallet management",
        "Insurance coverage for digital assets",
        "BitGo integration support",
        "Regulated custodian connectivity"
      ]
    },
    {
      icon: Zap,
      title: "Matching Engine",
      description: "High-performance order matching for institutional trading",
      features: [
        "High-throughput order processing",
        "Price-time priority algorithm",
        "Market, limit, stop orders",
        "Smart order routing",
        "Liquidity aggregation",
        "Fair price calculation"
      ]
    },
    {
      icon: ArrowRightLeft,
      title: "B2B Exchange Connectivity",
      description: "Seamless integration with major exchanges for best execution",
      features: [
        "B2B connectivity to major exchanges",
        "Multi-exchange routing",
        "Best price discovery",
        "Automated arbitrage capabilities",
        "Cross-exchange settlement",
        "API & FIX protocol support"
      ]
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Multi-jurisdictional regulatory compliance built-in",
      features: [
        "KYC/AML workflows",
        "Transaction monitoring",
        "Sanctions screening",
        "Audit trail & reporting",
        "GDPR compliance",
        "SOC 2 Type II ready"
      ]
    },
    {
      icon: Activity,
      title: "Real-Time Ledger",
      description: "Complete visibility into positions, balances, and P&L",
      features: [
        "Real-time position tracking",
        "Multi-currency accounting",
        "Instant settlement",
        "Reconciliation automation",
        "Double-entry bookkeeping",
        "Financial reporting"
      ]
    }
  ];

  const portfolioConstruction = [
    {
      title: "Systematic Strategies",
      description: "Build and implement algorithmic investment strategies",
      capabilities: [
        "Quantitative research tools",
        "Backtesting framework",
        "Signal generation",
        "Strategy optimization",
        "Performance attribution",
        "Risk-adjusted returns"
      ]
    },
    {
      title: "Asset Allocation",
      description: "Intelligent portfolio construction and optimization",
      capabilities: [
        "Mean-variance optimization",
        "Risk parity strategies",
        "Factor-based allocation",
        "Custom constraints",
        "Multi-asset class support",
        "Rebalancing triggers"
      ]
    },
    {
      title: "Index & Benchmark",
      description: "Create custom indices and benchmark portfolios",
      capabilities: [
        "Custom index creation",
        "Benchmark tracking",
        "Passive index replication",
        "Smart beta strategies",
        "ESG integration",
        "Thematic portfolios"
      ]
    }
  ];

  const riskManagement = [
    {
      title: "Real-Time Monitoring",
      description: "Live tracking of portfolio positions and exposures",
      capabilities: [
        "Multi-asset portfolio view",
        "Real-time P&L calculation",
        "Position concentration alerts",
        "Margin utilization tracking",
        "Cross-portfolio aggregation",
        "Intraday risk metrics"
      ]
    },
    {
      title: "Risk Analytics",
      description: "Comprehensive risk measurement and analysis",
      capabilities: [
        "Value at Risk (VaR)",
        "Conditional VaR (CVaR)",
        "Stress testing scenarios",
        "Correlation analysis",
        "Greeks calculation (options)",
        "Sensitivity analysis"
      ]
    },
    {
      title: "Compliance Controls",
      description: "Pre-trade and post-trade compliance enforcement",
      capabilities: [
        "Pre-trade risk checks",
        "Position limits enforcement",
        "Exposure constraints",
        "Regulatory reporting",
        "Best execution analysis",
        "Transaction cost analysis (TCA)"
      ]
    }
  ];

  const caseStudy = {
    name: "Nexus Trading",
    description: "Institutional trading platform built for asset management operations in Liechtenstein",
    achievements: [
      "Integrated Fireblocks custody infrastructure for institutional-grade security",
      "Developed high-performance matching engine for efficient order execution",
      "Established B2B connectivity with major exchange networks",
      "Implemented real-time ledger system for transparent position tracking",
      "Deployed multi-jurisdictional KYC/AML compliance workflows (Europe, USA, Middle East, Asia)",
      "Built smart order routing system for optimal execution across venues"
    ],
    technologies: [
      "Fireblocks MPC Custody",
      "Custom Matching Engine",
      "Real-Time Ledger",
      "B2B Exchange APIs",
      "Multi-Exchange Routing",
      "KYC/AML Workflows"
    ]
  };

  return (
    <>
      <SEO
        title="Trading & Portfolio Management Platform Development"
        description="White-label exchange development for crypto, FIAT, and commodity trading. Portfolio construction and risk management systems with institutional custody integration."
        canonicalUrl="https://persystance.com/trading-portfolio"
        keywords="white label exchange, crypto exchange development, commodity trading platform, portfolio management system, Fireblocks integration, institutional trading, matching engine, order book, B2B exchange"
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-6" variant="outline">
              <TrendingUp className="w-3 h-3 mr-1" />
              Institutional Trading Infrastructure
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Trading & Portfolio Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Build institutional-grade trading platforms with white-label exchanges, portfolio construction 
              tools, and comprehensive risk management systems.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Building2 className="w-4 h-4 mr-2" />
                White-Label Exchanges
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Lock className="w-4 h-4 mr-2" />
                Fireblocks Custody
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Globe className="w-4 h-4 mr-2" />
                Multi-Asset Support
              </Badge>
            </div>
          </div>
        </section>

        {/* Exchange White-Label Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                White-Label Exchange Development
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Launch your own branded trading platform for crypto, FIAT, and commodities with 
                institutional-grade infrastructure, custody integration, and regulatory compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {exchangeFeatures.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            {/* Asset Types */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-accent/5">
                <Coins className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-xl mb-2">Cryptocurrency</h3>
                <p className="text-muted-foreground mb-4">Spot, derivatives, perpetuals, futures</p>
                <Badge variant="secondary">Flexible Leverage</Badge>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-accent/5 to-primary/5">
                <DollarSign className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="font-bold text-xl mb-2">FIAT Currency</h3>
                <p className="text-muted-foreground mb-4">Forex pairs, currency derivatives</p>
                <Badge variant="secondary">Advanced Margin</Badge>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-accent/5">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-xl mb-2">Commodities</h3>
                <p className="text-muted-foreground mb-4">Gold, silver, oil, agricultural</p>
                <Badge variant="secondary">Futures & Forwards</Badge>
              </Card>
            </div>
          </div>
        </section>

        {/* Nexus Trading Case Study */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="outline">
                Case Study
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {caseStudy.name}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                {caseStudy.description}
              </p>
              <Button 
                size="lg"
                onClick={() => window.location.href = '/nexus-trading'}
                className="gap-2"
              >
                <Activity className="w-4 h-4" />
                View Live Demo
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
                <ul className="space-y-4">
                  {caseStudy.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-base">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Technology Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {caseStudy.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-muted">
                      <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="font-semibold">B2B Integration</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Connected to major exchange networks for optimal order execution and liquidity aggregation
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Construction */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Portfolio Construction
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Systematic investment tools for building, implementing, and managing customized portfolios 
                with precision and at scale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {portfolioConstruction.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <PieChart className="w-10 h-10 text-primary mb-3" />
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {item.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio & Risk Management */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Portfolio & Risk Management
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Gain unified, real-time visibility across your entire portfolio with comprehensive 
                risk analytics and compliance controls.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {riskManagement.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <Target className="w-10 h-10 text-accent mb-3" />
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {item.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Trading Platform?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Launch your white-label exchange or portfolio management system in weeks, not years. 
              Get institutional-grade infrastructure with regulatory compliance built-in.
            </p>
            <Button 
              size="lg"
              onClick={() => {
                trackButtonClick('trading-portfolio-cta');
                scrollToContact();
              }}
            >
              Get Started
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
