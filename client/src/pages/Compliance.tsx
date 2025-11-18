import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Globe, CheckCircle2, FileCheck, Server, Eye, Database, UserCheck, Scale, FileText, MapPin } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";

export default function Compliance() {
  const { trackButtonClick } = useAnalytics();

  const complianceStandards = [
    {
      icon: Shield,
      standard: "ISO 27001:2022",
      title: "Information Security Management",
      description: "We follow ISO 27001 standards for information security management systems, ensuring systematic approach to managing sensitive company information.",
      details: [
        "Risk assessment and treatment",
        "Security policy implementation",
        "Asset management",
        "Access control procedures",
        "Cryptographic controls",
        "Incident management"
      ]
    },
    {
      icon: Server,
      standard: "ISO 27017:2015",
      title: "Cloud Security Controls",
      description: "Implementation of cloud-specific security controls based on ISO 27017 guidelines for cloud service providers and users.",
      details: [
        "Cloud infrastructure security",
        "Virtual network isolation",
        "Cloud service management",
        "Data segregation",
        "Monitoring and logging",
        "Secure cloud deployment"
      ]
    },
    {
      icon: Lock,
      standard: "ISO 27018:2019",
      title: "Cloud Privacy Protection",
      description: "Adherence to ISO 27018 practices for protecting personally identifiable information (PII) in public cloud environments.",
      details: [
        "PII protection in cloud",
        "Data processing transparency",
        "User consent management",
        "Data location controls",
        "Secure data deletion",
        "Privacy impact assessments"
      ]
    },
    {
      icon: Globe,
      standard: "GDPR",
      title: "General Data Protection Regulation",
      description: "Full compliance with GDPR requirements for handling European client data, ensuring privacy rights and data protection.",
      details: [
        "Data protection by design",
        "Right to be forgotten",
        "Data portability",
        "Breach notification procedures",
        "Data processing agreements",
        "Privacy policy transparency"
      ]
    },
    {
      icon: FileCheck,
      standard: "SOC 2 Type II Ready",
      title: "Service Organization Control",
      description: "Implementation of SOC 2 Type II controls for security, availability, processing integrity, confidentiality, and privacy.",
      details: [
        "Security controls and monitoring",
        "Availability and uptime tracking",
        "Processing integrity validation",
        "Confidential data protection",
        "Privacy policy enforcement",
        "Continuous compliance monitoring"
      ]
    }
  ];

  const industries = [
    {
      icon: Database,
      title: "Asset Management Systems",
      description: "INSPIRA Exchange - institutional trading platform with Fireblocks custody and real-world Liechtenstein operations",
      expertise: [
        "Built INSPIRA Exchange with high-performance matching engine",
        "Fireblocks custody integration for institutional security",
        "Multi-jurisdictional client onboarding with KYC/AML compliance",
        "Proof of funds verification across multiple countries",
        "B2B connectivity to Merkle.trade exchange ($28.7B volume)",
        "Real-time ledger system for position tracking",
        "Smart order routing for best execution",
        "Regulatory reporting (MiFID II, AIFMD)",
        "Audit trail and compliance logging",
        "Multi-currency and multi-asset support (crypto, FIAT, commodities)"
      ],
      regions: ["Europe", "USA", "Middle East", "Liechtenstein", "Asia"]
    },
    {
      icon: Eye,
      title: "Secure Data Rooms",
      description: "Enterprise-grade virtual data rooms for sensitive transactions",
      expertise: [
        "M&A due diligence platforms",
        "Document access control and permissions",
        "Watermarking and download tracking",
        "Granular user activity monitoring",
        "Time-limited access controls",
        "Encrypted file storage and transfer"
      ],
      regions: ["Europe", "USA", "Middle East"]
    }
  ];

  const geographicCompliance = [
    {
      region: "Europe",
      regulations: ["GDPR", "ISO 27001", "ISO 27017", "ISO 27018", "MiFID II", "AIFMD"],
      description: "Full compliance with European data protection and financial regulations"
    },
    {
      region: "Liechtenstein",
      regulations: ["KYC/AML", "Financial Market Authority (FMA)", "Due Diligence Act", "GDPR", "Swiss Banking Standards"],
      description: "Real-world operations in Liechtenstein financial center with cross-border client onboarding expertise"
    },
    {
      region: "United States",
      regulations: ["SOC 2 Type II", "ISO 27001", "State Privacy Laws", "SEC Regulations", "BSA/AML"],
      description: "Adherence to US security standards and financial regulatory requirements"
    },
    {
      region: "Middle East",
      regulations: ["ISO 27001", "Data Sovereignty", "Local Data Protection Laws", "KYC/AML"],
      description: "Compliance with regional data protection and sovereignty requirements"
    }
  ];

  const securityPractices = [
    {
      title: "Data Encryption",
      description: "AES-256 encryption for data at rest, TLS 1.3 for data in transit"
    },
    {
      title: "Access Control",
      description: "Role-based access control (RBAC) with multi-factor authentication"
    },
    {
      title: "Regular Audits",
      description: "Quarterly security audits and annual penetration testing"
    },
    {
      title: "Incident Response",
      description: "24/7 security monitoring with documented incident response procedures"
    },
    {
      title: "Data Backup",
      description: "Automated daily backups with geo-redundant storage"
    },
    {
      title: "Vendor Management",
      description: "Third-party vendor security assessments and compliance verification"
    }
  ];

  const kycAmlExpertise = [
    {
      icon: UserCheck,
      title: "KYC (Know Your Customer)",
      description: "Multi-jurisdictional client verification and identity management",
      capabilities: [
        "Identity verification across multiple countries",
        "Country-specific documentation requirements",
        "Automated KYC workflows and approvals",
        "Real-time identity verification APIs",
        "Ongoing customer due diligence monitoring",
        "Politically Exposed Persons (PEP) screening"
      ]
    },
    {
      icon: Scale,
      title: "AML (Anti-Money Laundering)",
      description: "Comprehensive AML compliance for financial operations",
      capabilities: [
        "Transaction monitoring and suspicious activity detection",
        "AML risk assessment frameworks",
        "Sanctions screening (OFAC, EU, UN)",
        "Regulatory reporting and filing",
        "Automated alerts and case management",
        "Compliance training and documentation"
      ]
    },
    {
      icon: FileText,
      title: "Proof of Funds Verification",
      description: "Rigorous source of funds and wealth verification",
      capabilities: [
        "Source of funds documentation",
        "Source of wealth verification",
        "Bank statement validation",
        "Cross-border fund transfer compliance",
        "Enhanced due diligence for high-risk clients",
        "Audit trail for all verifications"
      ]
    },
    {
      icon: MapPin,
      title: "Liechtenstein Operations",
      description: "Real-world experience managing asset management in a premier European financial center",
      capabilities: [
        "Liechtenstein financial regulatory compliance",
        "Cross-border client onboarding (Europe, USA, Middle East, Asia)",
        "Multi-jurisdictional account opening workflows",
        "Country-specific regulatory requirements implementation",
        "Financial center best practices",
        "Swiss/Liechtenstein banking standards"
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Compliance & Security Standards"
        description="Enterprise-grade compliance for asset management and secure data rooms. GDPR, ISO 27001, ISO 27017, ISO 27018 compliant development serving Europe, USA, and Middle East."
        canonicalUrl="https://persystance.com/compliance"
        keywords="GDPR compliance, ISO 27001, KYC AML compliance, Liechtenstein financial center, asset management compliance, SOC 2, data room security, multi-jurisdictional onboarding, proof of funds verification, enterprise compliance"
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-6" variant="outline">
              <Shield className="w-3 h-3 mr-1" />
              Enterprise-Grade Security & Compliance
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Worldwide Compliance Standards
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Trusted by enterprises across Europe, USA, and Middle East for asset management systems 
              and secure data rooms with full regulatory compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Globe className="w-4 h-4 mr-2" />
                13+ Years Experience
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Shield className="w-4 h-4 mr-2" />
                ISO Compliant
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Lock className="w-4 h-4 mr-2" />
                GDPR Certified
              </Badge>
            </div>
          </div>
        </section>

        {/* Compliance Standards Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Compliance Standards We Follow
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We implement industry-leading compliance frameworks to protect your data and meet regulatory requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <standard.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {standard.standard}
                      </Badge>
                      <h3 className="font-semibold text-lg">{standard.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {standard.description}
                  </p>
                  <ul className="space-y-2">
                    {standard.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* KYC/AML Expertise */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                KYC/AML & Multi-Jurisdictional Compliance
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Real-world experience managing asset management operations in Liechtenstein with cross-border client 
                onboarding across Europe, USA, Middle East, and Asia. Full KYC/AML compliance implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {kycAmlExpertise.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
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

        {/* Industry Expertise */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Regulated Industry Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized experience building compliant systems for highly regulated industries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                      <industry.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                      <p className="text-muted-foreground">{industry.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Our Expertise:</h4>
                    <ul className="space-y-2">
                      {industry.expertise.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {industry.regions.map((region, idx) => (
                      <Badge key={idx} variant="secondary">
                        <Globe className="w-3 h-3 mr-1" />
                        {region}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Geographic Compliance */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Regional Compliance Coverage
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meeting regulatory requirements across key global markets.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {geographicCompliance.map((geo, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">{geo.region}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {geo.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {geo.regulations.map((reg, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {reg}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Practices */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Security Best Practices
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive security framework protects your sensitive data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityPractices.map((practice, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{practice.title}</h3>
                      <p className="text-sm text-muted-foreground">{practice.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Compliant, Secure Systems?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your compliance requirements and regulatory needs for your next project.
            </p>
            <a
              href="https://wa.me/94778005567?text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20your%20compliance%20and%20security%20capabilities."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackButtonClick('compliance_contact')}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              <Shield className="w-4 h-4 mr-2" />
              Discuss Your Compliance Needs
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
