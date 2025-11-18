import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  Calculator, 
  Download, 
  CheckCircle2,
  Clock,
  DollarSign,
  Users,
  Zap
} from "lucide-react";
import jsPDF from "jspdf";

interface ProjectConfig {
  projectType: string;
  features: number;
  complexity: number;
  timeline: number;
  teamSize: number;
}

interface Estimate {
  cost: number;
  weeks: number;
  team: string;
  features: string[];
}

export default function ProjectCalculator() {
  const [step, setStep] = useState(0);
  const [config, setConfig] = useState<ProjectConfig>({
    projectType: "mvp",
    features: 5,
    complexity: 2,
    timeline: 2,
    teamSize: 2
  });
  const [estimate, setEstimate] = useState<Estimate | null>(null);

  const projectTypes = [
    {
      id: "mvp",
      name: "MVP Development",
      description: "Launch-ready product in 2 weeks",
      basePrice: 15000,
      icon: Zap
    },
    {
      id: "enterprise",
      name: "Enterprise Solution",
      description: "Scalable, secure, compliant systems",
      basePrice: 50000,
      icon: Users
    },
    {
      id: "trading",
      name: "Trading Platform",
      description: "Institutional-grade trading infrastructure",
      basePrice: 100000,
      icon: DollarSign
    }
  ];

  const calculateEstimate = (): Estimate => {
    const selectedType = projectTypes.find(t => t.id === config.projectType);
    const basePrice = selectedType?.basePrice || 15000;
    
    const featureMultiplier = 1 + (config.features * 0.15);
    const complexityMultiplier = config.complexity === 1 ? 0.8 : config.complexity === 2 ? 1 : 1.5;
    const timelineMultiplier = config.timeline === 2 ? 1 : config.timeline === 4 ? 0.85 : 0.7;
    
    const totalCost = Math.round(basePrice * featureMultiplier * complexityMultiplier * timelineMultiplier);
    const weeks = config.timeline;
    
    const teamConfig = config.teamSize === 2 ? "Core Team (2-3)" : 
                       config.teamSize === 4 ? "Extended Team (4-5)" : "Full Team (6+)";
    
    const features = [
      "Full-stack development",
      "UI/UX design",
      "Database architecture",
      config.features >= 5 ? "API integration" : null,
      config.features >= 7 ? "Real-time features" : null,
      config.features >= 9 ? "Advanced analytics" : null,
      config.complexity >= 2 ? "Security hardening" : null,
      config.complexity >= 3 ? "Load balancing & scaling" : null,
      config.teamSize >= 4 ? "DevOps & CI/CD" : null,
      config.teamSize >= 6 ? "24/7 monitoring" : null,
    ].filter(Boolean) as string[];

    return { cost: totalCost, weeks, team: teamConfig, features };
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
    doc.text(`Type: ${projectTypes.find(t => t.id === config.projectType)?.name}`, 25, 60);
    doc.text(`Features: ${config.features}`, 25, 68);
    doc.text(`Complexity: ${config.complexity === 1 ? 'Simple' : config.complexity === 2 ? 'Medium' : 'Complex'}`, 25, 76);
    doc.text(`Timeline: ${config.timeline} weeks`, 25, 84);
    doc.text(`Team Size: ${est.team}`, 25, 92);
    
    doc.setFontSize(14);
    doc.text("Estimate Summary", 20, 110);
    doc.setFontSize(16);
    doc.text(`Total Investment: $${est.cost.toLocaleString()}`, 25, 122);
    doc.setFontSize(11);
    doc.text(`Delivery Timeline: ${est.weeks} weeks`, 25, 132);
    
    doc.setFontSize(14);
    doc.text("Included Services", 20, 150);
    doc.setFontSize(10);
    est.features.forEach((feature, index) => {
      doc.text(`• ${feature}`, 25, 160 + (index * 7));
    });
    
    doc.setFontSize(9);
    doc.text("This is an automated estimate. Contact us for a detailed proposal.", 20, 270);
    doc.text("www.persystance.com | contact@persystance.com", 20, 277);

    doc.save(`persystance-estimate-${Date.now()}.pdf`);
  };

  const handleCalculate = () => {
    const est = calculateEstimate();
    setEstimate(est);
    setStep(3);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="outline">
          <Calculator className="w-3 h-3 mr-1" />
          Smart Calculator
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Your Project Estimate
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Answer a few questions and get an instant, transparent estimate for your project. 
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
              <div className="grid md:grid-cols-3 gap-4">
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
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                      <p className="text-xs text-muted-foreground mt-3">
                        From ${type.basePrice.toLocaleString()}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 1: Features & Complexity */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">How many core features?</h3>
                <p className="text-muted-foreground mb-6">
                  Typical features: user auth, dashboard, data management, integrations, etc.
                </p>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[config.features]}
                    onValueChange={(value) => setConfig({ ...config, features: value[0] })}
                    min={3}
                    max={12}
                    step={1}
                    className="flex-1"
                  />
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    {config.features}
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">Complexity level?</h3>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {[
                    { level: 1, name: "Simple", desc: "Standard features" },
                    { level: 2, name: "Medium", desc: "Custom logic" },
                    { level: 3, name: "Complex", desc: "Advanced systems" }
                  ].map((option) => (
                    <button
                      key={option.level}
                      onClick={() => setConfig({ ...config, complexity: option.level })}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        config.complexity === option.level
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <h4 className="font-bold mb-1">{option.name}</h4>
                      <p className="text-xs text-muted-foreground">{option.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(0)}>Back</Button>
                <Button onClick={() => setStep(2)} className="flex-1">Continue</Button>
              </div>
            </div>
          )}

          {/* Step 2: Timeline & Team */}
          {step === 2 && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Delivery timeline?</h3>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {[
                    { weeks: 2, name: "Express", desc: "2 weeks", badge: "MVP Ready" },
                    { weeks: 4, name: "Standard", desc: "4 weeks", badge: "Recommended" },
                    { weeks: 8, name: "Extended", desc: "8+ weeks", badge: "Enterprise" }
                  ].map((option) => (
                    <button
                      key={option.weeks}
                      onClick={() => setConfig({ ...config, timeline: option.weeks })}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        config.timeline === option.weeks
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <Badge variant="secondary" className="mb-2">{option.badge}</Badge>
                      <h4 className="font-bold mb-1">{option.name}</h4>
                      <p className="text-xs text-muted-foreground">{option.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">Preferred team size?</h3>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[config.teamSize]}
                    onValueChange={(value) => setConfig({ ...config, teamSize: value[0] })}
                    min={2}
                    max={8}
                    step={2}
                    className="flex-1"
                  />
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    {config.teamSize === 2 ? "2-3" : config.teamSize === 4 ? "4-5" : "6+"} people
                  </Badge>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                <Button onClick={handleCalculate} className="flex-1">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Estimate
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Results */}
          {step === 3 && estimate && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">Your Project Estimate</h3>
                <p className="text-muted-foreground">
                  Based on your requirements, here's what we recommend
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10">
                  <DollarSign className="w-8 h-8 text-primary mb-3" />
                  <div className="text-sm text-muted-foreground mb-1">Total Investment</div>
                  <div className="text-4xl font-bold">${estimate.cost.toLocaleString()}</div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10">
                  <Clock className="w-8 h-8 text-accent mb-3" />
                  <div className="text-sm text-muted-foreground mb-1">Delivery Timeline</div>
                  <div className="text-4xl font-bold">{estimate.weeks} weeks</div>
                </Card>
              </div>

              <Card className="p-6 bg-muted/30">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Team Configuration: {estimate.team}
                </h4>
                <div className="space-y-2">
                  {estimate.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm">
                  💡 <strong>Pro tip:</strong> This is an automated estimate. Contact us for a detailed 
                  technical proposal with architecture diagrams, timeline breakdown, and team introductions.
                </p>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => { setStep(0); setEstimate(null); }}>
                  Start Over
                </Button>
                <Button onClick={generatePDF} className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF Quote
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
