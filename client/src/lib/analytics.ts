declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-M8GS24T2SW';

export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const event = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific event tracking functions
export const trackWhatsAppClick = () => {
  event('whatsapp_click', 'engagement', 'contact_whatsapp');
};

export const trackFormSubmission = (formName: string) => {
  event('form_submit', 'conversion', formName);
};

export const trackDemoInteraction = (demoName: string) => {
  event('demo_interaction', 'engagement', demoName);
};

export const trackScrollDepth = (depth: number) => {
  event('scroll_depth', 'engagement', `${depth}%`, depth);
};

export const trackButtonClick = (buttonName: string) => {
  event('button_click', 'engagement', buttonName);
};

export const trackNavigation = (destination: string) => {
  event('navigation', 'engagement', destination);
};

export const trackPortfolioView = (projectName: string) => {
  event('portfolio_view', 'engagement', projectName);
};

export const trackTestimonialView = (clientName: string) => {
  event('testimonial_view', 'engagement', clientName);
};

// Conversion tracking
export const trackLeadGeneration = (source: string) => {
  event('generate_lead', 'conversion', source);
};

export const trackContactAttempt = (method: string) => {
  event('contact_attempt', 'conversion', method);
};

// Calculator-specific tracking
export const trackCalculatorTierSelection = (tier: string) => {
  event('calculator_tier_selected', 'calculator', tier);
};

export const trackCalculatorFeatureToggle = (featureName: string, action: 'added' | 'removed') => {
  event('calculator_feature_toggle', 'calculator', `${featureName}_${action}`);
};

export const trackCalculatorEstimate = (
  tier: string,
  featureCount: number,
  minCost: number,
  maxCost: number,
  timeline: string
) => {
  event('calculator_estimate_generated', 'calculator', `${tier}_${featureCount}_features`, Math.round((minCost + maxCost) / 2));
  
  // Send detailed parameters as a custom event
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'calculator_quote', {
      tier_name: tier,
      feature_count: featureCount,
      min_cost: minCost,
      max_cost: maxCost,
      avg_cost: Math.round((minCost + maxCost) / 2),
      timeline: timeline,
    });
  }
};

export const trackCalculatorPDFDownload = (tier: string, minCost: number, maxCost: number) => {
  event('calculator_pdf_download', 'conversion', tier, Math.round((minCost + maxCost) / 2));
};

export const trackCalculatorStep = (step: number, stepName: string) => {
  event('calculator_step_viewed', 'calculator', stepName, step);
};

export const trackCalculatorAbandonment = (step: number, tier: string, featureCount: number) => {
  event('calculator_abandoned', 'calculator', `${tier}_step_${step}_${featureCount}_features`);
};

// GA4 Recommended Event: generate_lead
// This unlocks GA4's built-in Conversions reporting and Google Ads integration
export const trackGenerateLead = (
  tier: string, 
  minCost: number, 
  maxCost: number,
  featureCount: number
) => {
  const leadValue = Math.round((minCost + maxCost) / 2);
  
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'generate_lead', {
      currency: 'USD',
      value: leadValue,
      tier_name: tier,
      feature_count: featureCount,
      min_value: minCost,
      max_value: maxCost,
      lead_source: 'pricing_calculator'
    });
  }
};

// Ready-Made Products tracking
export const trackProductView = (productName: string, productId: string, category: string) => {
  event('product_view', 'ready_made_products', `${productName}_${productId}`);
  
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'view_item', {
      item_id: productId,
      item_name: productName,
      item_category: category
    });
  }
};

export const trackProductInterest = (productName: string, tier: string, price: number) => {
  event('product_interest_submitted', 'conversion', `${productName}_${tier}`, price);
  trackLeadGeneration(`ready_made_${productName.toLowerCase().replace(/\s+/g, '_')}_${tier.toLowerCase()}`);
};
