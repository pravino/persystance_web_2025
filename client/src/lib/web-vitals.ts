import { event } from './analytics';

export function reportWebVitals() {
  if (typeof window === 'undefined') return;

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const metricName = entry.name;
      const value = Math.round(entry.startTime);

      event('web_vitals', 'performance', metricName, value);
    }
  });

  try {
    observer.observe({ 
      entryTypes: ['navigation', 'resource', 'paint'] 
    });
  } catch (e) {
    console.warn('Performance observation not supported');
  }
}

export function trackPageLoad() {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      const pageLoadTime = navigation.loadEventEnd - navigation.fetchStart;
      const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
      const timeToInteractive = navigation.domInteractive - navigation.fetchStart;

      event('page_performance', 'performance', 'page_load_time', Math.round(pageLoadTime));
      event('page_performance', 'performance', 'dom_content_loaded', Math.round(domContentLoaded));
      event('page_performance', 'performance', 'time_to_interactive', Math.round(timeToInteractive));
    }
  });
}
