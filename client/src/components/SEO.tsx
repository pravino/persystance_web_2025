import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string;
  hreflang?: boolean;
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  keywords = "MVP development, rapid prototyping, startup development, 2 week MVP, Telegram games, Web3 games, blockchain gaming",
  hreflang = true,
}: SEOProps) {
  const siteName = "Persystance Networks";
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Persystance Networks" />
      
      {/* Geo-Targeting for Tier 1 & Tier 2 Markets */}
      <meta name="geo.region" content="US" />
      <meta name="geo.region" content="GB" />
      <meta name="geo.region" content="DE" />
      <meta name="geo.region" content="AE" />
      <meta name="geo.region" content="SA" />
      <meta name="geo.placename" content="United States" />
      <meta name="geo.placename" content="United Kingdom" />
      <meta name="geo.placename" content="Germany" />
      <meta name="geo.placename" content="United Arab Emirates" />
      <meta name="geo.placename" content="Saudi Arabia" />
      
      {/* Regional Content Hints */}
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="target" content="all" />
      
      {/* Hreflang Tags for International SEO */}
      {hreflang && (
        <>
          <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        </>
      )}
    </Helmet>
  );
}

// SEO configurations for different pages
export const seoConfig = {
  home: {
    title: "MVP in 2 Weeks, Launch in 30 Days",
    description: "Build production-ready MVPs in 2 weeks, launch in 30 days. 13+ years experience, 50% cost optimization. Web, mobile, blockchain, and AI development.",
    canonicalUrl: "https://persystance.com/",
    ogImage: "https://persystance.com/og-image.jpg",
    keywords: "MVP development, rapid prototyping, startup development, 2 week MVP, cost effective development, SaaS development, mobile app development",
  },
  telegramGames: {
    title: "Telegram & Web3 Game Development Services",
    description: "Build viral Telegram games and Web3 gaming platforms in 2 weeks. Tap-to-earn games, blockchain gaming, NFT integration. 900M+ Telegram users ready to play.",
    canonicalUrl: "https://persystance.com/telegram-games",
    ogImage: "https://persystance.com/og-image.jpg",
    keywords: "Telegram games, Web3 games, tap-to-earn games, blockchain gaming, Telegram mini apps, game development, viral games, NFT games",
  },
};
