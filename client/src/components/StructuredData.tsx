import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type: "organization" | "service" | "aggregateRating" | "all";
  serviceName?: string;
  serviceDescription?: string;
  price?: string;
}

export default function StructuredData({ 
  type, 
  serviceName, 
  serviceDescription, 
  price 
}: StructuredDataProps) {
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Persystance Networks",
    "url": "https://persystance.com",
    "logo": "https://persystance.com/logo-square.png",
    "description": "Rapid MVP development company specializing in 2-week MVP builds and 30-day launches. Expert in Web, Mobile, SaaS, Blockchain, AI, and Telegram/Web3 game development.",
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

  const getSchemaData = () => {
    if (type === "organization") return organizationSchema;
    if (type === "service") return serviceSchema;
    if (type === "aggregateRating") return ratingSchema;
    if (type === "all") {
      return {
        "@context": "https://schema.org",
        "@graph": [organizationSchema, serviceSchema, ratingSchema]
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
