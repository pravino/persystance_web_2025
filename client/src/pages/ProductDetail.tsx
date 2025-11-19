import { useRoute } from "wouter";
import { useState, useEffect } from "react";
import { getProductById } from "@/data/products";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle2, 
  ArrowLeft, 
  Calendar, 
  Code, 
  Package,
  Rocket,
  MessageCircle
} from "lucide-react";
import { Link } from "wouter";
import ProductInterestForm from "@/components/ProductInterestForm";
import * as analytics from "@/lib/analytics";

export default function ProductDetail() {
  const [, params] = useRoute("/products/:id");
  const product = getProductById(params?.id || "");
  const [showInterestForm, setShowInterestForm] = useState(false);

  // Track product page view (only once per product)
  useEffect(() => {
    if (product) {
      analytics.trackProductView(product.name, product.id, product.category);
    }
  }, [product?.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/ready-made-products">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Catalog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = product.icon;
  const mvpTier = product.tiers.find(t => t.name === "MVP");
  const fullTier = product.tiers.find(t => t.name === "Full");

  return (
    <>
      <SEO 
        title={product.name}
        description={`${product.description} Available as MVP ($${mvpTier?.price.toLocaleString()}) or Full version ($${fullTier?.price.toLocaleString()}). Deploy in ${mvpTier?.deploymentDays}-${fullTier?.deploymentDays} days.`}
        canonicalUrl={`https://www.persystance.com/products/${product.id}`}
        keywords={`${product.name.toLowerCase()}, ${product.category.toLowerCase()}, ready-made ${product.category.toLowerCase()} software, white-label ${product.name.toLowerCase()}`}
      />

      <div className="min-h-screen py-20">
        <div className="container px-4 mx-auto max-w-6xl">
          {/* Back Button */}
          <Link href="/ready-made-products">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Products
            </Button>
          </Link>

          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <Badge className="mb-3" variant="outline">
                  {product.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {product.tagline}
                </p>
                <p className="text-lg text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Deploy In</div>
                    <div className="font-bold">{mvpTier?.deploymentDays}-{fullTier?.deploymentDays} days</div>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Source Code</div>
                    <div className="font-bold">Included</div>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">White-Label</div>
                    <div className="font-bold">Ready</div>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Tech Stack</div>
                    <div className="font-bold">{product.techStack.length}+ tools</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Choose Your Edition</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.tiers.map((tier) => (
                <Card key={tier.name} className={`p-8 ${tier.name === "Full" ? "border-primary border-2" : ""}`}>
                  {tier.name === "Full" && (
                    <Badge className="mb-4">Recommended</Badge>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name} Edition</h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">
                      ${tier.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Includes deployment + {tier.serviceIncludes.customizationHours}hr customization
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Deploy in {tier.deploymentDays} days • {tier.serviceIncludes.supportDays} days support
                    </div>
                  </div>

                  {/* Service Includes */}
                  <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-sm mb-3">Service Includes:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {tier.serviceIncludes.deploymentHours}h professional deployment
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {tier.serviceIncludes.customizationHours}h customization (branding, config)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {tier.serviceIncludes.supportDays}-day support period
                      </li>
                      {tier.serviceIncludes.documentation && (
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Complete documentation
                        </li>
                      )}
                      {tier.serviceIncludes.training && (
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {tier.serviceIncludes.trainingHours}h training session
                        </li>
                      )}
                    </ul>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    variant={tier.name === "Full" ? "default" : "outline"}
                    onClick={() => {
                      analytics.trackButtonClick(`express_interest_${product.id}_${tier.name.toLowerCase()}`);
                      setShowInterestForm(true);
                    }}
                  >
                    Express Interest - {tier.name}
                    <MessageCircle className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <Tabs defaultValue="included" className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="included">What's Included</TabsTrigger>
              <TabsTrigger value="tech">Tech Stack</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="included" className="mt-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-4">Package Includes:</h4>
                    <ul className="space-y-3">
                      {product.whatsIncluded.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">Ideal For:</h4>
                    <ul className="space-y-3">
                      {product.idealFor.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="tech" className="mt-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {product.techStack.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-sm px-4 py-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="faq" className="mt-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {product.faq.map((item, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold mb-2">{item.question}</h4>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Available Add-Ons */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Optional Add-Ons</h2>
            
            {/* Deployment Tiers */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Professional Deployment Services</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {product.deploymentTiers.map((tier) => (
                  <Card key={tier.name} className="p-6">
                    <h4 className="font-bold mb-2">{tier.name}</h4>
                    <div className="text-2xl font-bold text-primary mb-2">
                      ${tier.price.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                    <ul className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Support Contracts */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Ongoing Support Contracts</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {product.supportContracts.map((contract) => (
                  <Card key={contract.name} className="p-6">
                    <h4 className="font-bold mb-2">{contract.name}</h4>
                    <div className="text-2xl font-bold text-primary mb-2">
                      ${contract.pricePerMonth}/mo
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{contract.description}</p>
                    <ul className="space-y-2">
                      {contract.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Customization Policy */}
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Customization Policy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Included Customization
                </h3>
                <ul className="space-y-2">
                  {product.scopeProtection.includedCustomization.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 text-xs">✕</span>
                  Not Included (Extra Charges)
                </h3>
                <ul className="space-y-2 mb-6">
                  {product.scopeProtection.notIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-4 h-4 flex items-center justify-center text-red-500 text-xs flex-shrink-0 mt-0.5">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="font-semibold text-sm mb-1">Additional Work Rates:</div>
                  <div className="text-sm text-muted-foreground">
                    ${product.scopeProtection.hourlyRate}/hour or ${product.scopeProtection.dailyRate}/day
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* CTA Section */}
          <Card className="p-8 glass text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Launch?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Express your interest and we'll send you detailed documentation, 
              demo access, and answer any technical questions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => {
                  analytics.trackButtonClick(`express_interest_${product.id}_cta`);
                  setShowInterestForm(true);
                }}
              >
                Express Interest
                <MessageCircle className="w-4 h-4 ml-2" />
              </Button>
              <a href="https://wa.me/94702426268">
                <Button size="lg" variant="outline">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>

      {/* Interest Form Modal */}
      {showInterestForm && (
        <ProductInterestForm 
          product={product}
          onClose={() => setShowInterestForm(false)}
        />
      )}
    </>
  );
}
