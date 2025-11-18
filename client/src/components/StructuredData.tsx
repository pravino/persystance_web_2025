import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type: "organization" | "service" | "aggregateRating" | "faq" | "breadcrumb" | "localBusiness" | "all";
  serviceName?: string;
  serviceDescription?: string;
  price?: string;
  faqItems?: Array<{ question: string; answer: string }>;
  breadcrumbItems?: Array<{ name: string; url: string }>;
}

export default function StructuredData({ 
  type, 
  serviceName, 
  serviceDescription, 
  price,
  faqItems = [],
  breadcrumbItems = []
}: StructuredDataProps) {
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Persystance Networks",
    "url": "https://persystance.com",
    "logo": "https://persystance.com/logo-square.png",
    "description": "Rapid MVP development company specializing in 2-week MVP builds and 30-day launches. Expert in Web, Mobile, SaaS, Blockchain, AI, Telegram/Web3 games, and compliant enterprise systems (GDPR, ISO 27001, SOC 2) for asset management and secure data rooms.",
    "foundingDate": "2012",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+94-778005567",
      "contactType": "Sales",
      "areaServed": "Worldwide",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://lk.linkedin.com/company/persystance"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName || "MVP Development Services",
    "description": serviceDescription || "Production-ready MVP development in 2 weeks with 50% cost optimization. Full launch support in 30 days.",
    "provider": {
      "@type": "Organization",
      "name": "Persystance Networks"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MVP Development",
            "description": "Production-ready MVP in 2 weeks, full launch in 30 days"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Telegram Game Development",
            "description": "White-label or custom Telegram games with Web3 integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web3 Game Development",
            "description": "Blockchain gaming, tap-to-earn games, NFT integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Asset Management Systems",
            "description": "GDPR-compliant portfolio management with regulatory reporting for Europe, USA, and Middle East"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Secure Data Rooms",
            "description": "Enterprise-grade virtual data rooms for M&A due diligence with ISO compliance"
          }
        }
      ]
    }
  };

  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Persystance Networks",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "200",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Persystance Networks",
    "image": "https://persystance.com/logo-square.png",
    "description": "Enterprise MVP development and managed cloud infrastructure services. Specializing in ERP systems, cloud management, and rapid application development.",
    "url": "https://persystance.com",
    "telephone": "+94-778005567",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Colombo",
      "addressLocality": "Colombo",
      "addressRegion": "Western Province",
      "postalCode": "00100",
      "addressCountry": "LK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.9271",
      "longitude": "79.8612"
    },
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Germany" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Saudi Arabia" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://lk.linkedin.com/company/persystance"
    ]
  };

  const getSchemaData = () => {
    if (type === "organization") return organizationSchema;
    if (type === "service") return serviceSchema;
    if (type === "aggregateRating") return ratingSchema;
    if (type === "faq") return faqSchema;
    if (type === "breadcrumb") return breadcrumbSchema;
    if (type === "localBusiness") return localBusinessSchema;
    if (type === "all") {
      const schemas: any[] = [organizationSchema, serviceSchema, ratingSchema, localBusinessSchema];
      if (faqItems.length > 0) {
        schemas.push(faqSchema);
      }
      if (breadcrumbItems.length > 0) {
        schemas.push(breadcrumbSchema);
      }
      return {
        "@context": "https://schema.org",
        "@graph": schemas
      };
    }
    return organizationSchema;
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getSchemaData())}
      </script>
    </Helmet>
  );
}
