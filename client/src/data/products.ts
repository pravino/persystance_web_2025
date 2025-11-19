import { Car, Shield, Bitcoin, TrendingUp, Building2, Calendar } from "lucide-react";

export interface ServiceIncludes {
  deploymentHours: number;
  customizationHours: number;
  supportDays: number;
  documentation: boolean;
  training: boolean;
  trainingHours?: number;
}

export interface ProductTier {
  name: "MVP" | "Full";
  price: number;
  features: string[];
  deploymentDays: number;
  serviceIncludes: ServiceIncludes;
}

export interface DeploymentTier {
  name: string;
  price: number;
  description: string;
  features: string[];
}

export interface SupportContract {
  name: string;
  pricePerMonth: number;
  description: string;
  features: string[];
  bugTicketLimit?: number;
  featureHoursLimit?: number;
  deploymentsPerMonth?: number;
  overageRates?: {
    perTicket?: number;
    perHour?: number;
  };
  rolloverPolicy?: string;
  phoneSupportHours?: string;
  emergencySupport?: string;
}

export interface SupportScopeDefinitions {
  bugDefinition: string;
  featureDefinition: string;
  emergencyDefinition: string;
  phoneSupportHours: string;
  afterHoursEmergencyFee: number;
}

export interface RateTiers {
  basic: number;        // UI, branding, colors, basic config
  standard: number;     // Backend features, integrations, workflows
  specialized: number;  // DevOps, blockchain, security, performance
}

export interface ScopeProtection {
  includedCustomization: string[];
  notIncluded: string[];
  rateTiers: RateTiers;
  dailyRate: number;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: any;
  category: string;
  tiers: ProductTier[];
  techStack: string[];
  whatsIncluded: string[];
  idealFor: string[];
  faq: Array<{ question: string; answer: string }>;
  deploymentTiers: DeploymentTier[];
  supportContracts: SupportContract[];
  scopeProtection: ScopeProtection;
}

// Support scope definitions
export const supportScopeDefinitions: SupportScopeDefinitions = {
  bugDefinition: "Bugs are defined as breakage of existing functionality as originally delivered. This excludes new features, UI changes, API modifications, or behavioral changes.",
  featureDefinition: "Features include any new functionality or changes to existing behavior, such as UI modifications, API changes, new modules, or workflow adjustments.",
  emergencyDefinition: "Emergency support covers critical issues: application downtime, payment system failures, or security breaches. Standard SLA applies to all other requests.",
  phoneSupportHours: "9AM - 9PM (client timezone)",
  afterHoursEmergencyFee: 250
};

// Standard add-on services (same for all products)
const standardDeploymentTiers: DeploymentTier[] = [
  {
    name: "Basic Deploy",
    price: 500,
    description: "Single VPS deployment with Docker",
    features: [
      "Single server setup (DigitalOcean/Linode)",
      "Docker containerization",
      "Basic SSL certificate",
      "Environment configuration",
      "Database initialization"
    ]
  },
  {
    name: "Production Deploy",
    price: 1500,
    description: "Cloud deployment with auto-scaling",
    features: [
      "AWS/GCP deployment",
      "Auto-scaling configuration",
      "Load balancer setup",
      "CDN integration",
      "Monitoring & alerts",
      "Backup automation"
    ]
  },
  {
    name: "Enterprise Deploy",
    price: 3000,
    description: "Multi-region with advanced infrastructure",
    features: [
      "Multi-region deployment",
      "High-availability setup",
      "Advanced monitoring (Datadog/New Relic)",
      "Security hardening",
      "Performance optimization",
      "Disaster recovery plan"
    ]
  }
];

const standardSupportContracts: SupportContract[] = [
  {
    name: "Maintenance",
    pricePerMonth: 300,
    description: "Bug fixes and minor updates",
    features: [
      "Email support (72-hour response)",
      "Up to 10 bug tickets/month",
      "Minor security patches",
      "1 deployment/month included",
      "Monthly check-in call"
    ],
    bugTicketLimit: 10,
    deploymentsPerMonth: 1,
    overageRates: {
      perTicket: 25,
      perHour: 50
    },
    rolloverPolicy: "Hours do not roll over to next month"
  },
  {
    name: "Managed",
    pricePerMonth: 800,
    description: "4-hour SLA with feature development",
    features: [
      "Email & chat support (4-hour SLA)",
      "Priority bug fixes",
      "Security updates",
      "Feature development: up to 5 hours/month (no rollover)",
      "2 deployments/month included",
      "Weekly status reports"
    ],
    featureHoursLimit: 5,
    deploymentsPerMonth: 2,
    overageRates: {
      perHour: 60
    },
    rolloverPolicy: "Hours do not roll over to next month"
  },
  {
    name: "Dedicated",
    pricePerMonth: 2000,
    description: "Full-service with priority development",
    features: [
      "Phone, email & chat support (2-hour SLA)",
      "Dedicated account manager",
      "Feature development: up to 15 hours/month (no rollover)",
      "Priority development queue",
      "24/7 emergency support (outages/security only)",
      "Monthly strategy call",
      "Max 10 tickets/month"
    ],
    bugTicketLimit: 10,
    featureHoursLimit: 15,
    overageRates: {
      perHour: 80
    },
    rolloverPolicy: "Hours do not roll over. Unused time expires monthly.",
    phoneSupportHours: "9AM - 9PM (client timezone)",
    emergencySupport: "Restricted to app outages, payment failures, or security breaches. Non-emergencies follow 2-hour SLA. After-hours emergency: $250/incident."
  }
];

const standardScopeProtection: ScopeProtection = {
  includedCustomization: [
    "Logo replacement and branding",
    "Color scheme customization (up to 5 colors)",
    "App/platform name changes",
    "Basic configuration (currencies, languages, timezone)",
    "Minor UI tweaks within allocated hours"
  ],
  notIncluded: [
    "New features or modules",
    "Third-party API integrations beyond specification",
    "Database schema modifications",
    "Custom workflow development",
    "Performance optimization beyond standard setup",
    "Ongoing hosting/infrastructure management",
    "Content creation or data entry"
  ],
  rateTiers: {
    basic: 50,        // UI work, branding, colors, basic config
    standard: 65,     // Backend features, integrations, custom workflows
    specialized: 100  // DevOps, deployment optimization, blockchain, high-security
  },
  dailyRate: 500  // Roughly 8 hours at $65/hr average rate
};

export const products: Product[] = [
  {
    id: "taxi-app",
    name: "Taxi/Ride-Hailing App",
    tagline: "Your Own Uber - Launch in Days",
    description: "Complete ride-hailing solution with real-time tracking, payments, and driver management. Built with React Native for iOS & Android.",
    icon: Car,
    category: "Transportation",
    tiers: [
      {
        name: "MVP",
        price: 8000,
        deploymentDays: 3,
        features: [
          "Rider & Driver Mobile Apps (iOS + Android)",
          "Real-time GPS Tracking & Route Optimization",
          "In-app Payments (Stripe/Card)",
          "Basic Admin Dashboard",
          "Push Notifications",
          "Ride Request & Acceptance Flow",
          "Trip History & Receipts",
          "5-star Rating System"
        ],
        serviceIncludes: {
          deploymentHours: 8,
          customizationHours: 10,
          supportDays: 30,
          documentation: true,
          training: false
        }
      },
      {
        name: "Full",
        price: 18000,
        deploymentDays: 7,
        features: [
          "Everything in MVP, plus:",
          "Multi-payment Options (Cash, Wallet, Card)",
          "Surge Pricing Engine",
          "Driver Earnings & Payout System",
          "Advanced Analytics Dashboard",
          "Promo Codes & Referral System",
          "Multi-language Support (3 languages)",
          "SMS Notifications (Twilio)",
          "Ride Scheduling (book in advance)",
          "Customer Support Chat"
        ],
        serviceIncludes: {
          deploymentHours: 16,
          customizationHours: 30,
          supportDays: 90,
          documentation: true,
          training: true,
          trainingHours: 2
        }
      }
    ],
    deploymentTiers: standardDeploymentTiers,
    supportContracts: standardSupportContracts,
    scopeProtection: standardScopeProtection,
    techStack: ["React Native", "Node.js", "PostgreSQL", "Google Maps API", "Stripe", "Firebase", "Socket.io"],
    whatsIncluded: [
      "Complete source code with documentation",
      "iOS & Android apps ready for App Store submission",
      "Admin web dashboard",
      "Database setup & initial deployment",
      "3 months of bug fixes",
      "White-label ready (your branding)"
    ],
    idealFor: [
      "Entrepreneurs launching local taxi services",
      "Existing taxi companies going digital",
      "Regional ride-sharing startups",
      "Airport shuttle services"
    ],
    faq: [
      {
        question: "Can I customize the branding?",
        answer: "Yes! The app is fully white-label. You can customize colors, logo, app name, and branding elements."
      },
      {
        question: "Do I need my own servers?",
        answer: "We recommend cloud hosting (AWS/Google Cloud). Our deployment service includes complete infrastructure setup and configuration."
      },
      {
        question: "Do I own the source code after deployment?",
        answer: "Yes, you get complete source code ownership with no recurring license fees. It's yours to modify and use as needed."
      },
      {
        question: "Can I add more features later?",
        answer: "Absolutely. We offer additional customization and development services at $50-$100/hour based on complexity (most work is $50-$65/hour). Daily rate: $500."
      }
    ]
  },
  {
    id: "kyc-module",
    name: "KYC/AML Verification Module",
    tagline: "Enterprise-Grade Identity Verification",
    description: "Plug-and-play KYC/AML compliance module with document verification, facial recognition, and AML screening. Integrates with any platform.",
    icon: Shield,
    category: "Compliance",
    tiers: [
      {
        name: "MVP",
        price: 5000,
        deploymentDays: 2,
        features: [
          "ID Document Upload & Verification",
          "Liveness Detection (Selfie Check)",
          "Basic AML Screening (name matching)",
          "Verification Status Dashboard",
          "REST API Integration",
          "Email Notifications",
          "Support for 3 Document Types (Passport, ID, Driver's License)"
        ],
        serviceIncludes: {
          deploymentHours: 6,
          customizationHours: 10,
          supportDays: 30,
          documentation: true,
          training: false
        }
      },
      {
        name: "Full",
        price: 12000,
        deploymentDays: 5,
        features: [
          "Everything in MVP, plus:",
          "Advanced AML Screening (PEP, Sanctions Lists)",
          "OCR Data Extraction from Documents",
          "Multi-country Document Support (50+ countries)",
          "Risk Scoring Engine",
          "Audit Trail & Compliance Reports",
          "Webhook Integration",
          "Admin Review Interface",
          "Onfido/Jumio Integration (optional)"
        ],
        serviceIncludes: {
          deploymentHours: 12,
          customizationHours: 30,
          supportDays: 90,
          documentation: true,
          training: true,
          trainingHours: 2
        }
      }
    ],
    deploymentTiers: standardDeploymentTiers,
    supportContracts: standardSupportContracts,
    scopeProtection: standardScopeProtection,
    techStack: ["React", "Node.js", "PostgreSQL", "AWS S3", "Face Recognition API", "AML Database APIs"],
    whatsIncluded: [
      "Complete verification module with API",
      "Admin dashboard for manual reviews",
      "Integration guide & API documentation",
      "Database schema & deployment scripts",
      "6 months of security updates",
      "GDPR compliance considerations"
    ],
    idealFor: [
      "Fintech platforms requiring compliance",
      "Crypto exchanges needing KYC",
      "Lending platforms",
      "Gaming/betting platforms",
      "Any regulated financial service"
    ],
    faq: [
      {
        question: "Which KYC providers do you integrate with?",
        answer: "MVP uses custom verification. Full version supports Onfido, Jumio, or custom solutions."
      },
      {
        question: "Is this GDPR compliant?",
        answer: "Yes, includes data retention policies and user consent flows. Final compliance is client responsibility."
      },
      {
        question: "Can I use my own AML provider?",
        answer: "Yes, the module is designed to integrate with any AML API (ComplyAdvantage, Refinitiv, etc.)."
      }
    ]
  },
  {
    id: "crypto-exchange",
    name: "Crypto Exchange Platform",
    tagline: "Launch Your Cryptocurrency Exchange",
    description: "Full-featured crypto trading platform with order matching, wallet management, and admin controls. Built for security and scalability.",
    icon: Bitcoin,
    category: "Finance",
    tiers: [
      {
        name: "MVP",
        price: 25000,
        deploymentDays: 14,
        features: [
          "User Registration & KYC Integration",
          "5 Trading Pairs (BTC, ETH, USDT + 2 custom)",
          "Spot Trading (Market & Limit Orders)",
          "Order Matching Engine",
          "Hot & Cold Wallet Management",
          "Deposit & Withdrawal System",
          "Trading Dashboard with Charts",
          "Admin Panel (user management, transactions)",
          "2FA Authentication",
          "Basic Trading Fees Configuration"
        ],
        serviceIncludes: {
          deploymentHours: 24,
          customizationHours: 10,
          supportDays: 30,
          documentation: true,
          training: false
        }
      },
      {
        name: "Full",
        price: 60000,
        deploymentDays: 30,
        features: [
          "Everything in MVP, plus:",
          "20+ Trading Pairs",
          "Advanced Order Types (Stop-Loss, OCO, Trailing Stop)",
          "Margin Trading (up to 5x leverage)",
          "Liquidity Provider Integration",
          "Trading Bots & API Access",
          "P2P Trading Module",
          "Staking & Yield Programs",
          "Multi-language Support (5 languages)",
          "Advanced Analytics & Reporting",
          "Cold Storage Integration (Hardware Wallets)",
          "AML Transaction Monitoring"
        ],
        serviceIncludes: {
          deploymentHours: 48,
          customizationHours: 30,
          supportDays: 90,
          documentation: true,
          training: true,
          trainingHours: 2
        }
      }
    ],
    deploymentTiers: standardDeploymentTiers,
    supportContracts: standardSupportContracts,
    scopeProtection: standardScopeProtection,
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "WebSocket", "Blockchain APIs", "TradingView Charts"],
    whatsIncluded: [
      "Complete exchange platform source code",
      "Trading engine with order matching",
      "Wallet integration (hot + cold storage guide)",
      "Admin dashboard with full controls",
      "API documentation for traders",
      "Security audit recommendations",
      "12 months of critical security updates"
    ],
    idealFor: [
      "Entrepreneurs launching regional exchanges",
      "Token issuers creating liquidity",
      "Institutional crypto trading desks",
      "Blockchain projects building DEX-CEX hybrid"
    ],
    faq: [
      {
        question: "Do you provide blockchain infrastructure?",
        answer: "No, you'll need to integrate with blockchain nodes (we provide guides for popular chains)."
      },
      {
        question: "Is this regulatory compliant?",
        answer: "We build the technology. Regulatory compliance (licenses, KYC/AML) is client responsibility."
      },
      {
        question: "Can I add more cryptocurrencies?",
        answer: "Yes, the platform supports adding new trading pairs via admin panel configuration."
      },
      {
        question: "What about security?",
        answer: "Includes encryption, 2FA, cold storage support. We recommend professional security audit before launch."
      }
    ]
  },
  {
    id: "commodity-exchange",
    name: "Commodity Trading Exchange",
    tagline: "Digital Marketplace for Physical Commodities",
    description: "B2B commodity trading platform for agricultural products, metals, energy. Features contracts, settlements, and logistics tracking.",
    icon: TrendingUp,
    category: "Finance",
    tiers: [
      {
        name: "MVP",
        price: 20000,
        deploymentDays: 12,
        features: [
          "Buyer & Seller Registration",
          "Product Listing (5 commodity categories)",
          "Spot Price Trading",
          "Contract Management System",
          "Payment Escrow Integration",
          "Basic Logistics Tracking",
          "Document Upload (invoices, certificates)",
          "Admin Dashboard",
          "Email Notifications"
        ],
        serviceIncludes: {
          deploymentHours: 20,
          customizationHours: 10,
          supportDays: 30,
          documentation: true,
          training: false
        }
      },
      {
        name: "Full",
        price: 45000,
        deploymentDays: 25,
        features: [
          "Everything in MVP, plus:",
          "Futures Contracts Trading",
          "20+ Commodity Categories",
          "Real-time Market Data Integration",
          "Quality Inspection Workflows",
          "Multi-currency Support",
          "Advanced Logistics (shipment tracking, warehouse integration)",
          "Credit Line Management",
          "Automated Settlement System",
          "Analytics & Market Reports",
          "Mobile Apps for Traders"
        ],
        serviceIncludes: {
          deploymentHours: 40,
          customizationHours: 30,
          supportDays: 90,
          documentation: true,
          training: true,
          trainingHours: 2
        }
      }
    ],
    deploymentTiers: standardDeploymentTiers,
    supportContracts: standardSupportContracts,
    scopeProtection: standardScopeProtection,
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe", "Document Storage (S3)", "Maps API"],
    whatsIncluded: [
      "Complete trading platform source code",
      "Buyer, seller, and admin portals",
      "Contract & settlement engine",
      "Database with commodity templates",
      "Integration guide for market data APIs",
      "6 months of support",
      "White-label ready"
    ],
    idealFor: [
      "Agricultural commodity traders",
      "Metal & mining marketplaces",
      "Energy trading platforms",
      "B2B industrial supply chains",
      "Governments digitizing commodity markets"
    ],
    faq: [
      {
        question: "Can this handle international trades?",
        answer: "Yes, supports multi-currency and international shipping workflows in the Full version."
      },
      {
        question: "Do you provide market data feeds?",
        answer: "No, but we integrate with your preferred market data provider (Bloomberg, Reuters, etc.)."
      },
      {
        question: "Is escrow included?",
        answer: "We provide escrow workflow. You'll need to integrate with a licensed escrow service provider."
      }
    ]
  },
  {
    id: "property-management",
    name: "Property Management System",
    tagline: "For Landowners, Investors & Scouts",
    description: "All-in-one platform for property listings, investment tracking, scout management, and tenant communication.",
    icon: Building2,
    category: "Real Estate",
    tiers: [
      {
        name: "MVP",
        price: 12000,
        deploymentDays: 7,
        features: [
          "Property Listing & Management",
          "Landowner Portal (add properties, track earnings)",
          "Investor Portal (browse, invest, track ROI)",
          "Scout Portal (submit leads, earn commissions)",
          "Tenant Management (basic)",
          "Payment Tracking",
          "Document Storage",
          "Email Notifications",
          "Admin Dashboard"
        ],
        serviceIncludes: {
          deploymentHours: 12,
          customizationHours: 10,
          supportDays: 30,
          documentation: true,
          training: false
        }
      },
      {
        name: "Full",
        price: 28000,
        deploymentDays: 18,
        features: [
          "Everything in MVP, plus:",
          "Advanced Investment Analytics",
          "Automated Rent Collection (Stripe)",
          "Maintenance Request System",
          "Lease Agreement Management",
          "Financial Reports & Tax Documents",
          "Scout Commission Automation",
          "Multi-property Portfolio View",
          "Mobile Apps for All User Types",
          "WhatsApp/SMS Notifications",
          "Integration with Property Marketplaces"
        ],
        serviceIncludes: {
          deploymentHours: 24,
          customizationHours: 30,
          supportDays: 90,
          documentation: true,
          training: true,
          trainingHours: 2
        }
      }
    ],
    deploymentTiers: standardDeploymentTiers,
    supportContracts: standardSupportContracts,
    scopeProtection: standardScopeProtection,
    techStack: ["React", "React Native", "Node.js", "PostgreSQL", "Stripe", "AWS S3", "Maps API", "PDF Generation"],
    whatsIncluded: [
      "Complete multi-portal system",
      "Web dashboards for all user roles",
      "Mobile apps (Full version)",
      "Database with property templates",
      "Payment integration setup",
      "6 months of support",
      "Custom branding"
    ],
    idealFor: [
      "Real estate investment platforms",
      "Property management companies",
      "Landowner cooperatives",
      "Real estate scout networks",
      "Rental management businesses"
    ],
    faq: [
      {
        question: "Can scouts get paid automatically?",
        answer: "Yes, the Full version includes automated commission calculations and payout workflows."
      },
      {
        question: "Does it handle rent collection?",
        answer: "MVP tracks payments manually. Full version automates rent collection via Stripe."
      },
      {
        question: "Can investors see real-time ROI?",
        answer: "Yes, investor dashboard shows live performance metrics and earnings projections."
      }
    ]
  },
  {
    id: "appointment-system",
    name: "Multi-Industry Appointment System",
    tagline: "Bookings for Car Detailing, AC Repair & More",
    description: "Universal booking system for service businesses. Works for car detailing, AC repair, salons, spas, clinics - any appointment-based business.",
    icon: Calendar,
    category: "Service",
    tiers: [
      {
        name: "MVP",
        price: 6000,
        deploymentDays: 4,
        features: [
          "Online Booking Widget (embed on website)",
          "Service Menu Management",
          "Calendar & Availability Scheduling",
          "Customer Registration",
          "Email & SMS Confirmations",
          "Payment Collection (Stripe)",
          "Basic Admin Dashboard",
          "Booking History",
          "3 Staff Members"
        ],
        serviceIncludes: {
          deploymentHours: 8,
          customizationHours: 10,
          supportDays: 30,
          documentation: true,
          training: false
        }
      },
      {
        name: "Full",
        price: 15000,
        deploymentDays: 10,
        features: [
          "Everything in MVP, plus:",
          "Unlimited Staff & Locations",
          "Mobile App (iOS + Android)",
          "Customer Loyalty Program",
          "Automated Reminders (SMS/WhatsApp)",
          "Multi-service Package Deals",
          "Advanced Analytics (peak times, revenue)",
          "Customer Reviews & Ratings",
          "Waitlist Management",
          "Integration with Google Calendar",
          "Point-of-Sale (POS) for walk-ins"
        ],
        serviceIncludes: {
          deploymentHours: 16,
          customizationHours: 30,
          supportDays: 90,
          documentation: true,
          training: true,
          trainingHours: 2
        }
      }
    ],
    deploymentTiers: standardDeploymentTiers,
    supportContracts: standardSupportContracts,
    scopeProtection: standardScopeProtection,
    techStack: ["React", "React Native", "Node.js", "PostgreSQL", "Stripe", "Twilio", "Google Calendar API"],
    whatsIncluded: [
      "Complete booking system source code",
      "Customer-facing booking interface",
      "Admin dashboard for staff management",
      "Mobile apps (Full version)",
      "Payment integration setup",
      "3 months of support",
      "Multi-business white-label ready"
    ],
    idealFor: [
      "Car detailing & auto services",
      "AC repair & home services",
      "Salons & spas",
      "Medical/dental clinics",
      "Fitness trainers & gyms",
      "Any appointment-based business"
    ],
    faq: [
      {
        question: "Can I use this for multiple locations?",
        answer: "MVP supports 1 location. Full version supports unlimited locations with separate calendars."
      },
      {
        question: "Does it integrate with my existing website?",
        answer: "Yes, the booking widget can be embedded on any website via simple code snippet."
      },
      {
        question: "Can customers reschedule appointments?",
        answer: "Yes, customers can reschedule or cancel through the booking portal (with admin-defined rules)."
      },
      {
        question: "What about no-shows?",
        answer: "Full version includes deposit collection and automated reminder systems to reduce no-shows."
      }
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};
