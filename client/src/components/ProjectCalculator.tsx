import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  Download, 
  CheckCircle2,
  Clock,
  DollarSign,
  Zap,
  Code,
  Store,
  Rocket,
  MessageCircle
} from "lucide-react";
import jsPDF from "jspdf";

interface ProjectConfig {
  projectType: string;
  selectedFeatures: string[];
}

interface Estimate {
  minCost: number;
  maxCost: number;
  weeks: number;
  weeksDisplay: string;
  features: string[];
}

const projectTypes = [
  {
    id: "starter",
    name: "Starter MVP",
    description: "2 weeks - Fixed 5 baseline features for quick validation",
    baseMin: 5000,
    baseMax: 7000,
    icon: Zap
  },
  {
    id: "standard",
    name: "Standard MVP",
    description: "4 weeks - Baseline + up to 6 add-ons including Firebase (Web or React Native)",
    baseMin: 8300,
    baseMax: 12000,
    icon: Code
  },
  {
    id: "full",
    name: "Full Web Application",
    description: "6 weeks - Baseline + up to 9 add-ons including KYC/AML, Stripe Commerce (Web)",
    baseMin: 12000,
    baseMax: 18000,
    icon: Store
  },
  {
    id: "enterprise",
    name: "Enterprise Solution",
    description: "8+ weeks - Baseline + all 17 add-ons including SSO, Web3, Fireblocks, Full Commerce (Web, Mobile, or Both)",
    baseMin: 20000,
    baseMax: 40000,
    icon: Rocket
  }
];

const availableFeatures = [
  { id: "payments", name: "Payment Integration", cost: 1500, scope: "Stripe one-time checkout only (no subscriptions)", minTier: "standard" },
  { id: "analytics", name: "Analytics Dashboard", cost: 1500, scope: "Basic charts (5 metrics: users, revenue, activity, growth, conversion)", minTier: "standard" },
  { id: "notifications", name: "Email/SMS Notifications", cost: 800, scope: "Transactional emails via SendGrid/Twilio (up to 3 templates)", minTier: "standard" },
  { id: "search", name: "Advanced Search", cost: 1200, scope: "Text search with filters (up to 5 fields)", minTier: "standard" },
  { id: "chat", name: "Live Chat Support", cost: 1800, scope: "Basic message list with send/receive (no typing indicators)", minTier: "standard" },
  { id: "reports", name: "PDF Report Generation", cost: 1000, scope: "Simple PDF with tables & text (up to 3 report types)", minTier: "standard" },
  { id: "realtime", name: "Real-time Features", cost: 2000, scope: "Basic WebSocket updates for 1 feature (e.g., live notifications)", minTier: "standard" },
  { id: "social_login", name: "Social Media Login", cost: 1200, scope: "OAuth integration for Google, Facebook (2 providers max)", minTier: "standard" },
  { id: "location", name: "Location Intelligence Pack", cost: 1600, scope: "Embedded map (Google/Mapbox) with 10 markers, address autocomplete, geocoding, distance matrix (100 daily requests). Client provides API key & billing", minTier: "standard" },
  { id: "firebase", name: "Firebase Integration", cost: 2000, scope: "Firebase Auth (email + 2 social providers), Firestore database (basic CRUD for 3 collections), Storage (file upload/download). Client provides Firebase project", minTier: "standard" },
  { id: "kyc", name: "KYC/AML Compliance", cost: 3500, scope: "Identity verification via 1 provider (Onfido/Jumio) - document + sanctions check. Client provides vendor API keys", minTier: "full" },
  { id: "stripe_commerce", name: "Stripe Commerce Suite", cost: 3800, scope: "Subscriptions (5 plans), shopping cart (50 SKUs), customer portal, webhooks. Client provides Stripe API keys", minTier: "full" },
  { id: "sso", name: "Enterprise SSO", cost: 2000, scope: "SAML/OAuth SSO via 1 provider (Okta/Auth0). Client provides vendor account", minTier: "enterprise" },
  { id: "web3_basic", name: "Web3 Basic (Infrastructure)", cost: 3000, scope: "Wallet integration (MetaMask/WalletConnect) for 1 EVM chain, deploy YOUR existing contract to testnet. Does not include writing contracts", minTier: "enterprise" },
  { id: "token_dev", name: "Token Development", cost: 2500, scope: "Create NEW ERC-20 OR ERC-721 token from audited template, deploy to testnet. We write the token code. Client handles legal compliance & mainnet fees", minTier: "enterprise" },
  { id: "smart_contracts", name: "Smart Contract Expansion", cost: 1800, scope: "Design & code up to 3 NEW custom contracts with your business logic + unit tests. Excludes security audits (recommend 3rd-party)", minTier: "enterprise" },
  { id: "fireblocks", name: "Fireblocks Integration", cost: 4500, scope: "Integrate with client Fireblocks tenant, configure 1 vault + policy engine, transaction signing/transfer flow for 1 asset. Client provides Fireblocks license + API credentials", minTier: "enterprise" }
];

export default function ProjectCalculator() {
  const [step, setStep] = useState(0);
  const [config, setConfig] = useState<ProjectConfig>({
    projectType: "starter",
    selectedFeatures: []
  });
  const [estimate, setEstimate] = useState<Estimate | null>(null);

  const calculateEstimate = (): Estimate => {
    const selectedType = projectTypes.find(t => t.id === config.projectType);
    if (!selectedType) {
      return { minCost: 8300, maxCost: 12000, weeks: 4, weeksDisplay: "4 weeks", features: [] };
    }
    
    const featureCost = config.selectedFeatures.reduce((total, featureId) => {
      const feature = availableFeatures.find(f => f.id === featureId);
      return total + (feature?.cost || 0);
    }, 0);
    
    // Fixed timelines per project type
    const projectTimelines: Record<string, number> = {
      starter: 2,
      standard: 4,
      full: 6,
      enterprise: 8
    };
    
    // Starter MVP has lower floor ($5k), others maintain $8.3k floor (covers 2.5M LKR overhead)
    const MINIMUM_PROJECT_COST = config.projectType === 'starter' ? 5000 : 8300;
    let minCost = Math.round(selectedType.baseMin + featureCost);
    let maxCost = Math.round(selectedType.baseMax + featureCost);
    
    // Enforce floor and ensure reasonable spread
    minCost = Math.max(MINIMUM_PROJECT_COST, minCost);
    maxCost = Math.max(minCost + 2000, maxCost);
    
    const weeks = projectTimelines[config.projectType] || 4;
    const weeksDisplay = config.projectType === 'enterprise' ? `${weeks}+ weeks` : `${weeks} weeks`;
    
    const features = [
      "Source code ownership",
      "Documentation & handover",
      "30-day post-launch support",
      "Direct access to senior developer",
      ...config.selectedFeatures.map(id => {
        const feature = availableFeatures.find(f => f.id === id);
        return feature ? `${feature.name} (${feature.scope})` : "";
      }).filter(Boolean)
    ];

    return { minCost, maxCost, weeks, weeksDisplay, features };
  };

  const generatePDF = () => {
    const est = estimate || calculateEstimate();
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Project Estimate - Persystance Networks", 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 35);
    
    doc.setFontSize(14);
    doc.text("Project Configuration", 20, 50);
    doc.setFontSize(11);
    const selectedType = projectTypes.find(t => t.id === config.projectType);
    doc.text(`Type: ${selectedType?.name}`, 25, 60);
    doc.text(`Features: ${config.selectedFeatures.length} custom features`, 25, 68);
    doc.text(`Timeline: ${est.weeksDisplay}`, 25, 76);
    
    doc.setFontSize(14);
    doc.text("Estimate Summary", 20, 95);
    doc.setFontSize(16);
    doc.text(`Investment Range: $${est.minCost.toLocaleString()} - $${est.maxCost.toLocaleString()}`, 25, 107);
    doc.setFontSize(11);
    doc.text(`Delivery Timeline: ${est.weeksDisplay}`, 25, 117);
    
    doc.setFontSize(14);
    doc.text("What's Included", 20, 135);
    doc.setFontSize(10);
    const maxFeaturesPerPage = 18;
    est.features.slice(0, maxFeaturesPerPage).forEach((feature, index) => {
      doc.text(`• ${feature}`, 25, 145 + (index * 7));
    });
    
    doc.setFontSize(11);
    doc.text("Important Terms & Conditions", 20, 220);
    doc.setFontSize(9);
    doc.text("• Revisions: 2 rounds included per feature. Additional: $150/hour", 25, 230);
    doc.text("• Support: 30 days bug-fix warranty. Response: 48 hours", 25, 238);
    doc.text("• Hosting: Deployment included. Hosting costs paid by client", 25, 246);
    doc.text("• Scope: Dashboard = 5 screens, CRUD = 1 entity (10 fields), DB = 5 tables", 25, 254);
    doc.text("• Prerequisites: Client provides API keys (Stripe, Google Maps, Firebase, KYC, SSO)", 25, 262);
    doc.text("• Blockchain: Client funds gas fees, handles legal compliance for tokens", 25, 270);
    doc.text("• Fireblocks: Requires enterprise Fireblocks license (client-provided)", 25, 278);
    doc.text("• Firebase/Maps: Client provides Firebase project & Google Maps billing account", 25, 286);
    
    doc.setFontSize(11);
    doc.text("Why Persystance Networks?", 20, 298);
    doc.setFontSize(9);
    doc.text("✓ 13 Years in Business - Institutional-Grade Solutions", 25, 308);
    doc.text("✓ Fireblocks Integration + Firebase + Token Engineering + Full Commerce", 25, 315);
    
    doc.setFontSize(9);
    doc.text("This is an automated estimate. Book a discovery call for detailed proposal.", 20, 326);

    doc.save(`persystance-estimate-${Date.now()}.pdf`);
  };

  const handleCalculate = () => {
    const est = calculateEstimate();
    setEstimate(est);
    setStep(2);
  };

  const getFeatureLimit = (projectType: string): number => {
    const limits: Record<string, number> = {
      starter: 0,
      standard: 6,
      full: 9,
      enterprise: 17
    };
    return limits[projectType] || 6;
  };

  const getTierLevel = (projectType: string): number => {
    const levels: Record<string, number> = {
      starter: 0,
      standard: 1,
      full: 2,
      enterprise: 3
    };
    return levels[projectType] || 0;
  };

  const isFeatureAvailable = (feature: any): boolean => {
    if (!feature.minTier) return true;
    const currentLevel = getTierLevel(config.projectType);
    const requiredLevel = getTierLevel(feature.minTier);
    return currentLevel >= requiredLevel;
  };

  const validateFeaturesForTier = (projectType: string, selectedFeatures: string[]): string[] => {
    // Starter tier can't have any add-ons
    if (projectType === 'starter') {
      return [];
    }
    
    // Filter out features that aren't available in the new tier
    const availableInTier = selectedFeatures.filter(featureId => {
      const feature = availableFeatures.find(f => f.id === featureId);
      if (!feature) return false;
      if (!feature.minTier) return true;
      const currentLevel = getTierLevel(projectType);
      const requiredLevel = getTierLevel(feature.minTier);
      return currentLevel >= requiredLevel;
    });
    
    // Enforce tier limit (drop excess features if over limit)
    const limit = getFeatureLimit(projectType);
    return availableInTier.slice(0, limit);
  };

  const toggleFeature = (featureId: string) => {
    const limit = getFeatureLimit(config.projectType);
    
    setConfig(prev => {
      const isCurrentlySelected = prev.selectedFeatures.includes(featureId);
      
      // If deselecting, always allow
      if (isCurrentlySelected) {
        return {
          ...prev,
          selectedFeatures: prev.selectedFeatures.filter(id => id !== featureId)
        };
      }
      
      // If selecting, check limit
      if (prev.selectedFeatures.length >= limit) {
        return prev; // Don't add if at limit
      }
      
      return {
        ...prev,
        selectedFeatures: [...prev.selectedFeatures, featureId]
      };
    });
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="outline">
          <Calculator className="w-3 h-3 mr-1" />
          Transparent Pricing Calculator
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Instant, Honest Pricing
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          No "contact us for pricing" games. Select what you need and get a real estimate instantly.
          Download your personalized quote as a PDF.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[0, 1, 2, 3].map((s) => (
            <div 
              key={s}
              className={`h-2 rounded-full transition-all ${
                s <= step ? 'w-12 bg-primary' : 'w-8 bg-muted'
              }`}
            />
          ))}
        </div>

        <Card className="p-8 glass">
          {/* Step 0: Project Type */}
          {step === 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">What type of project do you need?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => {
                        // Validate and clean selected features when tier changes
                        const validatedFeatures = validateFeaturesForTier(type.id, config.selectedFeatures);
                        setConfig({ 
                          projectType: type.id,
                          selectedFeatures: validatedFeatures
                        });
                        setStep(1);
                      }}
                      className={`p-6 rounded-lg border-2 transition-all text-left ${
                        config.projectType === type.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <Icon className="w-8 h-8 mb-3 text-primary" />
                      <h4 className="font-bold mb-2">{type.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                      <p className="text-xs text-muted-foreground">
                        Starting from ${type.baseMin.toLocaleString()} - ${type.baseMax.toLocaleString()}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 1: Features Selection */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {config.projectType === 'starter' ? 'What\'s Included in Your Starter MVP' : 'Select Additional Features'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {config.projectType === 'starter' 
                    ? 'These 5 core features are included for 2-week delivery. Need more? Choose Standard MVP instead.'
                    : 'All Starter MVP features are included. Select additional features to enhance your project.'
                  }
                </p>
                
                {config.projectType === 'starter' ? (
                  // Starter MVP - Show fixed included features
                  <div className="space-y-4">
                    <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        Included in Starter MVP ($5,000 - $7,000)
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>User Authentication</strong>
                            <p className="text-sm text-muted-foreground">Email/password login & signup</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>Database Design</strong>
                            <p className="text-sm text-muted-foreground">PostgreSQL with up to 5 simple tables</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>RESTful API</strong>
                            <p className="text-sm text-muted-foreground">Simple CRUD operations for 1 entity (up to 10 fields)</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>Mobile Responsive UI</strong>
                            <p className="text-sm text-muted-foreground">Works on all devices</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>Basic Dashboard</strong>
                            <p className="text-sm text-muted-foreground">5 pre-defined screens (Home, List, Detail, Settings, Profile)</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                    
                    <div className="bg-muted/30 border border-border rounded-lg p-4">
                      <p className="text-sm">
                        <strong>Need more features?</strong> Go back and select <strong>Standard MVP</strong> for payments, 
                        admin dashboard, analytics, and more advanced features.
                      </p>
                    </div>
                  </div>
                ) : (
                  // Standard, Full, Enterprise - Show included + selectable features
                  <div className="space-y-6">
                    {/* Show included Starter MVP features */}
                    <Card className="p-6 bg-gradient-to-br from-green-500/5 to-green-500/10 border-green-500/20">
                      <h4 className="font-bold mb-4 flex items-center gap-2 text-green-700 dark:text-green-400">
                        <CheckCircle2 className="w-5 h-5" />
                        ✓ Includes All Starter MVP Features (No Extra Cost)
                      </h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div>• <strong>User Authentication:</strong> Email/password login</div>
                        <div>• <strong>Database Design:</strong> Up to 5 simple tables</div>
                        <div>• <strong>RESTful API:</strong> CRUD for 1 entity (10 fields max)</div>
                        <div>• <strong>Mobile Responsive UI:</strong> All breakpoints</div>
                        <div>• <strong>Basic Dashboard:</strong> 5 screens (Home, List, Detail, Settings, Profile)</div>
                      </div>
                    </Card>

                    {/* Show additional features to select */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">Add Additional Features:</h4>
                        <div className="text-sm text-muted-foreground">
                          {config.selectedFeatures.length} of {getFeatureLimit(config.projectType)} selected
                        </div>
                      </div>
                      
                      {config.projectType === 'full' && (
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mb-4">
                          <p className="text-sm text-blue-700 dark:text-blue-400">
                            ✨ <strong>Full tier unlocks:</strong> KYC/AML Compliance, Stripe Commerce Suite (subscriptions + shopping cart)
                          </p>
                        </div>
                      )}
                      
                      {config.projectType === 'enterprise' && (
                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 mb-4">
                          <p className="text-sm text-purple-700 dark:text-purple-400">
                            ⚡ <strong>Enterprise tier unlocks:</strong> All 17 features including SSO, Web3 Infrastructure, Token Development, Smart Contracts, Fireblocks Integration
                          </p>
                          <p className="text-xs text-purple-600 dark:text-purple-500 mt-2">
                            💎 Advanced Web3 Package (~$11k): All blockchain features for institutional crypto/DeFi platforms
                          </p>
                        </div>
                      )}
                      
                      {config.selectedFeatures.length >= getFeatureLimit(config.projectType) && (
                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 mb-4">
                          <p className="text-sm text-amber-700 dark:text-amber-400">
                            <strong>Feature limit reached.</strong> {
                              config.projectType === 'standard' ? 'Need more? Choose Full Application for up to 9 features including KYC/AML, Stripe Commerce Suite.' :
                              config.projectType === 'full' ? 'Need more? Choose Enterprise Solution for all 17 features including Web3, Fireblocks, SSO.' :
                              'Contact us for custom requirements beyond 17 features.'
                            }
                          </p>
                        </div>
                      )}
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        {availableFeatures.filter(f => isFeatureAvailable(f)).map((feature) => {
                          const isSelected = config.selectedFeatures.includes(feature.id);
                          const isLimitReached = config.selectedFeatures.length >= getFeatureLimit(config.projectType) && !isSelected;
                          
                          return (
                            <button
                              key={feature.id}
                              onClick={() => toggleFeature(feature.id)}
                              disabled={isLimitReached}
                              className={`p-4 rounded-lg border-2 transition-all text-left flex items-start gap-3 ${
                                isSelected
                                  ? 'border-primary bg-primary/5'
                                  : isLimitReached
                                  ? 'border-border bg-muted/30 opacity-50 cursor-not-allowed'
                                  : 'border-border hover:border-primary/50'
                              }`}
                            >
                              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                isSelected ? 'border-primary bg-primary' : 'border-muted-foreground'
                              }`}>
                                {isSelected && <CheckCircle2 className="w-3 h-3 text-primary-foreground" />}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-medium">{feature.name}</h4>
                                  {feature.minTier === 'enterprise' && (
                                    <span className="text-[10px] px-1.5 py-0.5 bg-purple-500/20 text-purple-700 dark:text-purple-400 rounded font-semibold">
                                      ENTERPRISE
                                    </span>
                                  )}
                                  {feature.minTier === 'full' && (
                                    <span className="text-[10px] px-1.5 py-0.5 bg-blue-500/20 text-blue-700 dark:text-blue-400 rounded font-semibold">
                                      FULL+
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-muted-foreground mb-1">+${feature.cost.toLocaleString()}</p>
                                <p className="text-xs text-muted-foreground italic">{feature.scope}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(0)}>Back</Button>
                <Button onClick={handleCalculate} className="flex-1">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Estimate
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Results */}
          {step === 2 && estimate && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">Your Personalized Estimate</h3>
                <p className="text-muted-foreground">
                  Based on your requirements, here's an honest price range
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10">
                  <DollarSign className="w-8 h-8 text-primary mb-3" />
                  <div className="text-sm text-muted-foreground mb-1">Investment Range</div>
                  <div className="text-3xl font-bold">${estimate.minCost.toLocaleString()} - ${estimate.maxCost.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground mt-2">Final price depends on specific requirements</p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10">
                  <Clock className="w-8 h-8 text-accent mb-3" />
                  <div className="text-sm text-muted-foreground mb-1">Delivery Timeline</div>
                  <div className="text-3xl font-bold">{estimate.weeksDisplay}</div>
                  <p className="text-xs text-muted-foreground mt-2">From project kickoff to launch</p>
                </Card>
              </div>

              <Card className="p-6 bg-muted/30">
                <h4 className="font-bold mb-4">What's Included in Your Package:</h4>
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                  {estimate.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-blue-500/5 border-blue-500/20">
                <h4 className="font-bold mb-3 text-blue-700 dark:text-blue-400">Important Terms & Conditions:</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                    <span><strong>Revisions:</strong> 2 rounds of revisions included per feature. Additional revisions: $150/hour</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                    <span><strong>Support:</strong> 30 days bug-fix warranty (no new features). Response time: 48 hours</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                    <span><strong>Hosting:</strong> Deployment included. Hosting costs (server, domain, SSL) paid by client</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                    <span><strong>Baseline Scope:</strong> Dashboard = 5 pre-defined screens. CRUD = simple operations for 1 entity (up to 10 fields). Database = up to 5 simple tables</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                    <span><strong>Prerequisites:</strong> Client provides API keys for 3rd-party services (Stripe, Google Maps billing, KYC providers, SSO vendors, etc.)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                    <span><strong>Blockchain/Web3:</strong> Client handles gas fees, mainnet deployment costs, legal compliance for tokens, and 3rd-party security audits. Fireblocks requires enterprise license</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Why Choose Quality Over Cheap?
                </h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>13 years</strong> in business vs 7-year agencies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Direct <strong>senior developer</strong> access, no delegation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Transparent pricing</strong> vs "contact us" games</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Production code vs Fiverr <strong>$500 prototypes</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Pre-built KYC/AML</strong> solutions for fintech compliance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Full Commerce Suite</strong> - Stripe subscriptions, shopping cart, webhooks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Location Intelligence</strong> - Google Maps integration, geocoding, distance matrix</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Firebase Backend</strong> - Auth, Firestore database, file storage out-of-the-box</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Institutional Web3</strong> - Fireblocks integration, token dev, smart contracts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Enterprise SSO</strong> ready for regulated industries</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>30-day support</strong> vs abandoned projects</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Unlike €4.5k agencies with 200+ employee overhead or $500 offshore freelancers who disappear, 
                  you get senior-level expertise with institutional-grade solutions (Full Commerce Suite, Firebase, Location Intelligence, Fireblocks integration, KYC/AML, token engineering) and transparent pricing.
                </p>
              </Card>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm">
                  💡 <strong>Next Steps:</strong> This automated estimate gives you transparent pricing. 
                  Book a free discovery call to discuss your specific requirements, see our portfolio, 
                  and get a detailed technical proposal with timeline breakdown.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <Button variant="outline" onClick={() => { setStep(0); setEstimate(null); }}>
                  Start Over
                </Button>
                <Button onClick={generatePDF}>
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF Quote
                </Button>
              </div>
              
              <div className="text-center pt-4">
                <Button 
                  size="lg" 
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full md:w-auto"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book Free Discovery Call
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
