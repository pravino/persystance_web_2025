import { useEffect, useCallback } from 'react';
import { useLocation } from 'wouter';
import * as analytics from '@/lib/analytics';

export function usePageTracking() {
  const [location] = useLocation();

  useEffect(() => {
    analytics.pageview(location);
  }, [location]);
}

export function useScrollTracking() {
  useEffect(() => {
    let ticking = false;
    const depths = [25, 50, 75, 100];
    const trackedDepths = new Set<number>();

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

          depths.forEach(depth => {
            if (scrollPercent >= depth && !trackedDepths.has(depth)) {
              trackedDepths.add(depth);
              analytics.trackScrollDepth(depth);
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

export function useAnalytics() {
  const trackEvent = useCallback((
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    analytics.event(action, category, label, value);
  }, []);

  return {
    trackEvent,
    trackWhatsAppClick: analytics.trackWhatsAppClick,
    trackFormSubmission: analytics.trackFormSubmission,
    trackDemoInteraction: analytics.trackDemoInteraction,
    trackButtonClick: analytics.trackButtonClick,
    trackNavigation: analytics.trackNavigation,
    trackPortfolioView: analytics.trackPortfolioView,
    trackTestimonialView: analytics.trackTestimonialView,
    trackLeadGeneration: analytics.trackLeadGeneration,
    trackContactAttempt: analytics.trackContactAttempt,
  };
}
