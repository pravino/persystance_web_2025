import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, Gamepad2, Users, Zap, DollarSign, Shield, CheckCircle2, TrendingUp, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import SEO, { seoConfig } from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

export default function TelegramGames() {
  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = "94778005567";
    const message = "Hi! I'm interested in Telegram game development with Persystance Networks.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      <SEO {...seoConfig.telegramGames} />
      <StructuredData 
        type="service" 
        serviceName="Telegram & Web3 Game Development"
        serviceDescription="Build viral Telegram games and Web3 gaming platforms in 10-30 days. Tap-to-earn games, blockchain gaming, NFT integration for 900M+ Telegram users."
      />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/[0.03] via-background to-accent/50 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 -right-40 w-[700px] h-[700px] bg-primary/15 rounded-full blur-3xl animate-float-delayed" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl animate-float opacity-50" />
          </div>
          <div className="container mx-auto px-4 py-32 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/40">
                <Gamepad2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Telegram Game Development & Web3 Gaming MVPs
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground">
                Build Viral{" "}
                <span className="text-primary">Telegram Games</span>
                <br />
                Ready for Launch
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                White-label games or custom builds for creators, Web3 brands, and communities. Delivered in 10-30 days.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-base px-8"
                  onClick={handleWhatsAppClick}
                  data-testid="button-whatsapp-hero"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Start Your Game Project
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base px-8"
                  onClick={scrollToPackages}
                  data-testid="button-view-packages"
                >
                  View Packages
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Telegram Games Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6">Why Telegram Games</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Telegram has become the new launchpad for simple, viral Web3 experiences
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2">900M+ Users</h3>
                <p className="text-muted-foreground">
                  Access a massive, engaged global audience ready to play
                </p>
              </Card>
              
              <Card className="p-6">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Instant Onboarding</h3>
                <p className="text-muted-foreground">
                  No download required. Launch and play directly in Telegram
                </p>
              </Card>
              
              <Card className="p-6">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Built-in Virality</h3>
                <p className="text-muted-foreground">
                  Group play and invite links drive organic social growth
                </p>
              </Card>
              
              <Card className="p-6">
                <DollarSign className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Crypto-Ready</h3>
                <p className="text-muted-foreground">
                  TON, Telegram Stars, USDT integration out of the box
                </p>
              </Card>
              
              <Card className="p-6">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Community Focus</h3>
                <p className="text-muted-foreground">
                  Perfect for engaging and monetizing Web3 communities
                </p>
              </Card>
              
              <Card className="p-6">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Secure Platform</h3>
                <p className="text-muted-foreground">
                  Built on Telegram's trusted infrastructure and security
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-24 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6">What We Deliver</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                End-to-end game builds, production ready, with clean code and full handover
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 hover-elevate">
                <h3 className="text-xl font-semibold mb-3">Game MVP</h3>
                <div className="text-3xl font-bold text-primary mb-4">10-14 Days</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Core game loop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Leaderboard system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Player profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Production ready</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 hover-elevate">
                <h3 className="text-xl font-semibold mb-3">Growth Game</h3>
                <div className="text-3xl font-bold text-primary mb-4">21 Days</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Mission system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Referral mechanics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Viral growth tools</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 hover-elevate">
                <h3 className="text-xl font-semibold mb-3">Web3 Game Pack</h3>
                <div className="text-3xl font-bold text-primary mb-4">30 Days</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">TON integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Airdrop logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">NFT badges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Wallet connection</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 hover-elevate">
                <h3 className="text-xl font-semibold mb-3">Resell Rights</h3>
                <div className="text-3xl font-bold text-primary mb-4">Custom</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">White-label ready</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Full licensing docs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Admin panel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Resale rights</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Game Concepts Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6">Ready-to-Sell Game Concepts</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Pre-designed frameworks that can be skinned, themed, or extended to match any brand
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 hover-elevate">
                <h3 className="text-xl font-semibold mb-2">Mafia Minis</h3>
                <p className="text-sm text-muted-foreground mb-3">Social Deduction</p>
                <p className="text-sm">Perfect for Telegram communities with proven social mechanics</p>
              </Card>
              
              <Card className="p-6 hover-elevate">
                <h3 className="text-xl font-semibold mb-2">TapCrew</h3>
                <p className="text-sm text-muted-foreground mb-3">Tap Economy Game</p>
                <p className="text-sm">Proven viral mechanics with TapSwap-style gameplay</p>
              </Card>
              
              <Card className="p-6 hover-elevate">
                <h3 className="text-xl font-semibold mb-2">Quiz Rush</h3>
                <p className="text-sm text-muted-foreground mb-3">Trivia + Live Events</p>
                <p className="text-sm">Ideal for media brands and content creators</p>
              </Card>
              
              <Card className="p-6 hover-elevate">
                <h3 className="text-xl font-semibold mb-2">Pixel Heist</h3>
                <p className="text-sm text-muted-foreground mb-3">Team Puzzle Raids</p>
                <p className="text-sm">Collaborative gameplay with great engagement</p>
              </Card>
              
              <Card className="p-6 hover-elevate">
                <h3 className="text-xl font-semibold mb-2">Market Mayhem</h3>
                <p className="text-sm text-muted-foreground mb-3">Prediction Mini-Leagues</p>
                <p className="text-sm">Strong competitive loop for trading communities</p>
              </Card>
              
              <Card className="p-6 hover-elevate">
                <h3 className="text-xl font-semibold mb-2">Custom Concept</h3>
                <p className="text-sm text-muted-foreground mb-3">Your Unique Idea</p>
                <p className="text-sm">VIP builds tailored to your specific vision</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Models Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6">Business Models We Support</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">White-Label Products</h3>
                  <p className="text-sm text-muted-foreground">Sell games to clients as turnkey solutions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Custom Builds</h3>
                  <p className="text-sm text-muted-foreground">Branded games for your community</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Reward Campaigns</h3>
                  <p className="text-sm text-muted-foreground">Airdrop and loyalty programs via gameplay</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Resell Licenses</h3>
                  <p className="text-sm text-muted-foreground">Digital product with full resale rights</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Sponsored Seasons</h3>
                  <p className="text-sm text-muted-foreground">Brand partnerships and gaming events</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Community Engagement</h3>
                  <p className="text-sm text-muted-foreground">Keep your audience active and growing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6">Technology Stack</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Modern, scalable architecture built for performance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div>
                <h3 className="font-semibold mb-3">Frontend</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Telegram Mini App</li>
                  <li>• React / Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Backend</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Node.js (NestJS)</li>
                  <li>• Python (Aiogram)</li>
                  <li>• WebSockets / Socket.IO</li>
                  <li>• REST APIs</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Database</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• PostgreSQL</li>
                  <li>• Redis</li>
                  <li>• Realtime sync</li>
                  <li>• Data analytics</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Web3 & Payments</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• TON Connect</li>
                  <li>• NFT integration</li>
                  <li>• Telegram Stars</li>
                  <li>• Stripe / Crypto</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Card className="inline-block p-6 max-w-2xl">
                <h3 className="font-semibold mb-3 flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Anti-Cheat & Security
                </h3>
                <p className="text-sm text-muted-foreground">
                  Server-validated logic • Rate limiting • Anti-bot protection • Fraud scoring • hCaptcha integration
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6">What You Get</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Every build includes everything you need to launch and scale
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Full source code",
                "Deployment scripts (Docker)",
                "Admin dashboard",
                "User economy config",
                "Game UI + UX flows",
                "Documentation + runbook",
                "API documentation",
                "Optional reseller license"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="bg-gradient-to-br from-primary/[0.03] via-background to-accent/50 rounded-2xl p-12 md:p-16 text-center border border-border">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6">Ready to Launch Your Telegram Game?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start a conversation on WhatsApp. Get instant responses and a custom quote in 24 hours.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-base px-8 bg-[#25D366] hover:bg-[#20bd5a] text-white border-[#20bd5a]"
                  onClick={handleWhatsAppClick}
                  data-testid="button-whatsapp-cta"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat on WhatsApp
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base px-8"
                  onClick={() => window.location.href = 'mailto:contact@persystance.com'}
                  data-testid="button-email-cta"
                >
                  Email Us Instead
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                📧 contact@persystance.com | 💬 WhatsApp: +94 77 800 5567
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
