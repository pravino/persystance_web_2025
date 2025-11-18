declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 Measurement ID

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
