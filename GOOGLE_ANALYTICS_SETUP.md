# Google Analytics 4 Setup Instructions

## Important: Update Your GA4 Measurement ID

The website has been set up with Google Analytics 4 tracking, but you need to replace the placeholder measurement ID with your actual GA4 ID.

### Steps to Update:

1. **Get your GA4 Measurement ID**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Select your property
   - Go to Admin → Data Streams → Web
   - Copy your Measurement ID (starts with `G-`)

2. **Update the following files**:

   **File 1: `client/index.html`** (lines 19 and 24)
   ```html
   <!-- Replace G-XXXXXXXXXX with your actual GA4 ID -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID-HERE"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-YOUR-ID-HERE', {
       page_path: window.location.pathname,
     });
   </script>
   ```

   **File 2: `client/src/lib/analytics.ts`** (line 8)
   ```typescript
   export const GA_MEASUREMENT_ID = 'G-YOUR-ID-HERE'; // Replace with your actual GA4 Measurement ID
   ```

3. **Verify tracking is working**:
   - After updating, publish your site
   - Visit your website
   - Open browser DevTools → Console
   - You should see GA tracking events
   - Check Google Analytics Real-Time reports to see active users

## What's Already Configured

✅ **Event Tracking**:
- Page views (automatic on route changes)
- Scroll depth (25%, 50%, 75%, 100%)
- WhatsApp button clicks
- Contact form interactions
- Demo interactions
- Portfolio views
- Testimonial views
- Lead generation events
- Managed Services CTA clicks

✅ **Performance Monitoring**:
- Page load times
- DOM content loaded
- Time to interactive
- Core Web Vitals

✅ **Conversion Funnels**:
- Contact attempts (WhatsApp, forms)
- Lead generation sources
- User journey tracking

## Testing Your Setup

Once you've updated the GA4 ID:

1. Visit your website in incognito mode
2. Open DevTools Console (F12)
3. Look for GA debug messages
4. Click around the site (contact buttons, navigation, scroll)
5. Check Google Analytics → Real-Time → Events
6. Verify events are appearing

## Need Help?

If you need assistance setting up Google Analytics 4:
1. Visit [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
2. Or contact support via WhatsApp

---

**Remember**: Replace `G-XXXXXXXXXX` in both files with your actual GA4 Measurement ID for tracking to work!
