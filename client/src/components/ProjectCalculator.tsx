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
  features: string[];
}

const projectTypes = [
  {
    id: "starter",
    name: "Starter MVP",
    description: "2 weeks - Up to 5 basic features for quick validation",
    baseMin: 5000,
    baseMax: 7000,
    icon: Zap
  },
  {
    id: "standard",
    name: "Standard MVP",
    description: "4-6 weeks - Production-ready with 7-10 features (Web or React Native)",
    baseMin: 8300,
    baseMax: 12000,
    icon: Code
  },
  {
    id: "full",
    name: "Full Web Application",
    description: "6-8 weeks - Comprehensive features & integrations",
    baseMin: 12000,
    baseMax: 18000,
    icon: Store
  },
  {
    id: "enterprise",
    name: "Enterprise Solution",
    description: "8+ weeks - Advanced systems (Web, Mobile, or Both)",
    baseMin: 20000,
    baseMax: 30000,
    icon: Rocket
  }
];

const availableFeatures = [
  { id: "auth", name: "User Authentication", cost: 800 },
  { id: "dashboard", name: "Admin Dashboard", cost: 1200 },
  { id: "api", name: "RESTful API", cost: 1000 },
  { id: "database", name: "Database Design", cost: 1000 },
  { id: "payments", name: "Payment Integration", cost: 1500 },
  { id: "realtime", name: "Real-time Features", cost: 2000 },
  { id: "notifications", name: "Email/SMS Notifications", cost: 800 },
  { id: "analytics", name: "Analytics Dashboard", cost: 1500 },
  { id: "mobile", name: "Mobile Responsive", cost: 600 },
  { id: "search", name: "Advanced Search", cost: 1200 },
  { id: "chat", name: "Live Chat Support", cost: 1800 },
  { id: "reports", name: "PDF Report Generation", cost: 1000 }
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
      return { minCost: 8300, maxCost: 12000, weeks: 4, features: [] };
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
    
    const features = [
      "Source code ownership",
      "Documentation & handover",
      "30-day post-launch support",
      "Direct access to senior developer",
      ...config.selectedFeatures.map(id => {
        const feature = availableFeatures.find(f => f.id === id);
        return feature?.name || "";
      }).filter(Boolean)
    ];

    return { minCost, maxCost, weeks, features };
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
    const projectTimelines: Record<string, number> = { starter: 2, standard: 4, full: 6, enterprise: 8 };
    doc.text(`Timeline: ${projectTimelines[config.projectType] || 4} weeks`, 25, 76);
    
    doc.setFontSize(14);
    doc.text("Estimate Summary", 20, 95);
    doc.setFontSize(16);
    doc.text(`Investment Range: $${est.minCost.toLocaleString()} - $${est.maxCost.toLocaleString()}`, 25, 107);
    doc.setFontSize(11);
    doc.text(`Delivery Timeline: ${est.weeks} weeks`, 25, 117);
    
    doc.setFontSize(14);
    doc.text("What's Included", 20, 135);
    doc.setFontSize(10);
    const maxFeaturesPerPage = 18;
    est.features.slice(0, maxFeaturesPerPage).forEach((feature, index) => {
      doc.text(`• ${feature}`, 25, 145 + (index * 7));
    });
    
    doc.setFontSize(11);
    doc.text("Why Persystance Networks?", 20, 220);
    doc.setFontSize(9);
    doc.text("✓ 13 Years in Business - Proven Track Record", 25, 230);
    doc.text("✓ Direct Access to Senior Developer (No Juniors)", 25, 238);
    doc.text("✓ Full Code Ownership & Documentation", 25, 246);
    doc.text("✓ 30-Day Post-Launch Support Included", 25, 254);
    doc.text("✓ Transparent Pricing, No Hidden Costs", 25, 262);
    
    doc.setFontSize(9);
    doc.text("This is an automated estimate. Book a discovery call for detailed technical proposal.", 20, 277);
    doc.text("www.persystance.com | contact@persystance.com | WhatsApp: +94 77 123 4567", 20, 284);

    doc.save(`persystance-estimate-${Date.now()}.pdf`);
  };

  const handleCalculate = () => {
    const est = calculateEstimate();
    setEstimate(est);
    setStep(2);
  };

  const toggleFeature = (featureId: string) => {
    setConfig(prev => ({
      ...prev,
      selectedFeatures: prev.selectedFeatures.includes(featureId)
        ? prev.selectedFeatures.filter(id => id !== featureId)
        : [...prev.selectedFeatures, featureId]
    }));
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
                        setConfig({ ...config, projectType: type.id });
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
                  {config.projectType === 'starter' ? 'What\'s Included in Your Starter MVP' : 'Select the features you need'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {config.projectType === 'starter' 
                    ? 'These 5 core features are included for 2-week delivery. Need more? Choose Standard MVP instead.'
                    : 'Choose all features your MVP requires. Each adds to the final estimate.'
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
                            <p className="text-sm text-muted-foreground">PostgreSQL setup with 3-5 tables</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong>RESTful API</strong>
                            <p className="text-sm text-muted-foreground">CRUD operations & endpoints</p>
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
                            <p className="text-sm text-muted-foreground">5-8 functional pages</p>
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
                  // Standard, Full, Enterprise - Show selectable features
                  <div className="grid md:grid-cols-2 gap-3">
                    {availableFeatures.map((feature) => {
                      const isSelected = config.selectedFeatures.includes(feature.id);
                      return (
                        <button
                          key={feature.id}
                          onClick={() => toggleFeature(feature.id)}
                          className={`p-4 rounded-lg border-2 transition-all text-left flex items-start gap-3 ${
                            isSelected
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isSelected ? 'border-primary bg-primary' : 'border-muted-foreground'
                          }`}>
                            {isSelected && <CheckCircle2 className="w-3 h-3 text-primary-foreground" />}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-1">{feature.name}</h4>
                            <p className="text-xs text-muted-foreground">+${feature.cost.toLocaleString()}</p>
                          </div>
                        </button>
                      );
                    })}
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
                  <div className="text-3xl font-bold">{estimate.weeks} weeks</div>
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

              <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Why Choose Quality Over Cheap?
                </h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>23 years</strong> personal experience vs 7-year agencies</span>
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
                    <span><strong>Accountability</strong> - 13 years in business</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Production code vs Fiverr <strong>$500 prototypes</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>30-day support</strong> vs abandoned projects</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Unlike €4.5k agencies with 200+ employee overhead or $500 offshore freelancers who disappear, 
                  you get senior-level expertise with transparent, honest pricing.
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
