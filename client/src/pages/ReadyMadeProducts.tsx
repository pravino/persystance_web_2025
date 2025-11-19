import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Zap, Code2, Rocket } from "lucide-react";
import { products } from "@/data/products";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ReadyMadeProducts() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Production-Ready Platforms - Deploy in Days"
        description="Production-ready platforms with professional deployment: Taxi Apps, Crypto Exchanges, KYC Modules, Property Management, Appointment Systems. Launch in days, not months."
        canonicalUrl="https://www.persystance.com/ready-made-products"
        keywords="production-ready platforms, white-label apps, turnkey solutions, taxi app, crypto exchange, KYC module, property management system, appointment booking, professional deployment"
      />
      <Navigation />
      <main className="py-20">
        <div className="container px-4 mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <Badge className="mb-4" variant="outline">
              <Rocket className="w-3 h-3 mr-1" />
              Professional Deployment Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Don't Have 2-4 Months?
              <br />
              <span className="text-primary">We'll Deploy Your Platform in Days</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Production-ready software + professional deployment service. 
              We handle setup, customization, and handover. You get a running business, not just code.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm">
                <Rocket className="w-4 h-4 text-primary" />
                <span>Professional deployment included</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span>10-30 hours customization</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Code2 className="w-4 h-4 text-primary" />
                <span>Full source code ownership</span>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product) => {
              const Icon = product.icon;
              const mvpTier = product.tiers.find(t => t.name === "MVP");
              const fullTier = product.tiers.find(t => t.name === "Full");
              const mvpPrice = mvpTier?.price || 0;
              const fullPrice = fullTier?.price || 0;
              
              return (
                <Card key={product.id} className="p-6 glass hover:border-primary/50 transition-all group">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge className="mb-3" variant="secondary">
                      <Rocket className="w-3 h-3 mr-1" />
                      Includes Deployment
                    </Badge>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.tagline}
                    </p>
                  </div>

                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">MVP + Deploy:</span>
                      <span className="font-bold">${mvpPrice.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-muted-foreground pl-4">
                      + {mvpTier?.serviceIncludes.customizationHours}hr customization
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-muted-foreground">Full + Deploy:</span>
                      <span className="font-bold">${fullPrice.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-muted-foreground pl-4">
                      + {fullTier?.serviceIncludes.customizationHours}hr customization
                    </div>
                  </div>

                  <div className="mb-4">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>

                  <Link href={`/products/${product.id}`}>
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <Card className="p-8 glass text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Need Something Custom?
            </h2>
            <p className="text-muted-foreground mb-6">
              Don't see what you need? We also build custom MVPs from scratch. 
              Get transparent pricing with our instant calculator.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#calculator">
                <Button size="lg">
                  Try Pricing Calculator
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/94702426268">
                <Button size="lg" variant="outline">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
