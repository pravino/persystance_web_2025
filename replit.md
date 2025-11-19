# Persystance Networks - MVP Development Platform

## Overview

Persystance Networks specializes in rapid MVP development, aiming for production-ready MVPs within two weeks and launch within 30 days. The platform serves as a marketing tool to generate leads for startups, showcasing value propositions, technology expertise, and a portfolio. It features WhatsApp integration for contact, a dedicated landing page for Telegram/Web3 game development, enterprise compliance features, and sections for institutional trading and portfolio management. The platform is currently being upgraded to a future-forward, interactive design with a glassmorphism UI, live demos, and a comprehensive trading platform simulator, all based on a 100% static site architecture. The business operates with a transparent pricing strategy, providing instant quotes via a calculator and emphasizing 13 years of experience, direct senior developer access, and production-grade code.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend

The frontend is built with React 18+, TypeScript, and Vite. It uses Wouter for routing and Shadcn/ui (Radix UI primitives) with the "New York" style for UI components. Styling is managed with Tailwind CSS, incorporating a dual-theme system (dark mode primary) and electric blue/teal accents. State management is handled by React Query, and a custom React Context API manages the theme with localStorage.

Design system enhancements include glassmorphism, animated gradients, shimmer effects, premium card hover effects, subtle grid backgrounds, and parallax scroll effects. Key interactive features are a Live Nexus Trading Simulator (client-side, mock data), a 3-step Smart Project Calculator for quotes, and a Live Metrics Component with animated statistics.

### Backend

The backend utilizes Express.js with TypeScript on Node.js, following a RESTful API pattern. Data storage is abstracted via `MemStorage` (in-memory), with PostgreSQL session storage planned via `connect-pg-simple`.

### Database

The database design employs Drizzle ORM for PostgreSQL with the Neon serverless adapter. It includes a `contact_inquiries` table for lead capture and uses Zod schemas derived from Drizzle definitions for validation. Drizzle Kit is used for migrations with a schema-first approach.

### Design System

Typography uses the Inter font family for text and Space Grotesk for accents. The color system is HSL-based with custom properties for light/dark palettes and an elevation system. Components are designed with composition and variant-based styling using `class-variance-authority`. A mobile-first approach is implemented with Tailwind breakpoints for responsive design.

### Architecture & Routing

The application maintains a 100% static site architecture with no direct backend dependencies for core content. Key routes include:
- `/` - Homepage with calculator and services overview
- `/nexus-trading` - Live trading demo
- `/ready-made-products` - Product catalog showcasing 6 ready-made software solutions
- `/products/:id` - Individual product landing pages with detailed specs and pricing

## External Dependencies

### UI & Component Libraries
- **Radix UI**: Unstyled, accessible UI primitives.
- **Shadcn/ui**: Pre-built components leveraging Radix UI and Tailwind.
- **Lucide React**: Icon library.
- **Embla Carousel**: Carousel functionality.
- **cmdk**: Command palette component.

### Data & Forms
- **React Hook Form**: Form state management and validation.
- **Zod**: Schema validation and type inference.
- **@hookform/resolvers**: Integration for React Hook Form and Zod.

### Database & ORM
- **Drizzle ORM**: TypeScript ORM for PostgreSQL.
- **@neondatabase/serverless**: Neon serverless PostgreSQL driver.
- **Drizzle Zod**: Automatic Zod schema generation.

### Development Tools
- **Vite**: Build tool and dev server.
- **TypeScript**: Type safety.

### Routing & State
- **Wouter**: Lightweight routing library.
- **@tanstack/react-query**: Server state management and caching.

### Styling
- **Tailwind CSS**: Utility-first CSS framework.
- **PostCSS**: CSS processing.
- **class-variance-authority**: Type-safe variant-based styling.
- **clsx & tailwind-merge**: Conditional className utilities.

### Date & Time
- **date-fns**: Date manipulation and formatting.

### Graphics & Visualization
- **Three.js**: 3D graphics library.
- **ethers.js**: Web3 library for blockchain interaction.
- **recharts**: Composable charting library.

### Utilities & Enhancements
- **jspdf**: Client-side PDF generation for project quotes.
- **react-intersection-observer**: Scroll-based animations and lazy loading.
- **lottie-react**: Lottie animation player for React.
- **react-syntax-highlighter**: Syntax highlighting for code examples.
- **Stripe**: For e-commerce and subscription features.
- **Google Maps/Mapbox**: For location intelligence features.
- **Firebase**: For backend-as-a-service (Auth, Firestore, Storage).
- **Onfido/Jumio**: For KYC/AML compliance.
- **Okta/Auth0**: For Enterprise SSO.
- **Fireblocks**: For institutional crypto custody integration.
- **SendGrid/Twilio**: For transactional emails/notifications.

## Recent Changes (November 19, 2025)

### Ready-Made Products Marketplace (Latest)
Launched new revenue stream with pre-built, production-ready software products:

**Product Catalog:**
New `/ready-made-products` route with 6 ready-made solutions:
1. **Taxi/Ride-Hailing App** ($8k MVP / $18k Full) - React Native, complete Uber clone
2. **KYC/AML Module** ($5k MVP / $12k Full) - Plug-and-play verification with facial recognition
3. **Crypto Exchange** ($25k MVP / $60k Full) - Full trading platform with order matching
4. **Commodity Exchange** ($20k MVP / $45k Full) - B2B marketplace for physical commodities
5. **Property Management** ($12k MVP / $28k Full) - Multi-portal system for landowners/investors/scouts
6. **Appointment System** ($6k MVP / $15k Full) - Universal booking for service businesses

**Technical Implementation:**
- Product data structure (`client/src/data/products.ts`) with complete specs, features, pricing tiers
- Dynamic routing with individual product landing pages (`/products/:id`)
- ProductInterestForm component for lead capture with GA4 tracking
- Integrated with existing analytics infrastructure (trackProductView, trackProductInterest)
- SEO optimization with canonical URLs and product-specific meta tags

**Business Model:**
- Two-tier pricing (MVP vs Full) for each product
- Complete source code ownership
- White-label ready
- Deployment in 2-30 days (vs 8-12 weeks custom)
- Target market expansion: quick-launch entrepreneurs + regional startups

**Marketing Integration:**
- Homepage CTA section promoting ready-made products
- Navigation menu item for visibility
- GA4 tracking for product views and interest submissions
- Lead generation optimization via generate_lead events

**Strategic Positioning:**
- Complements custom MVP service (some clients want faster launch)
- Lower barrier to entry ($5k-$60k vs $12k-$40k custom)
- Recurring revenue through support/updates
- Portfolio expansion into vertical-specific markets

### **Business Model: Option B - Deployment Service (Not Software Sales)**

**Model Type**: Pre-Built Foundation + Professional Deployment Service

Ready-made products are sold as a **deployment service**, not standalone software purchases. This means:

**What Clients Get:**
1. ✅ Battle-tested codebase (the pre-built product)
2. ✅ Professional deployment to their infrastructure
3. ✅ Customization (branding, configuration, minor tweaks)
4. ✅ Source code ownership
5. ✅ Knowledge transfer and documentation

**Service Inclusions by Tier:**

**MVP Edition** ($5k-$25k):
- Deployment: 6-24 hours professional setup
- Customization: 10 hours (branding, colors, basic config)
- Support: 30 days email support
- Documentation: Complete technical docs
- Training: None (self-serve)

**Full Edition** ($12k-$60k):
- Deployment: 12-48 hours professional setup
- Customization: 30 hours (white-label + advanced config)
- Support: 90 days priority support
- Documentation: Complete technical docs
- Training: 2-hour training session

**Optional Add-Ons:**

**Deployment Tiers:**
- Basic Deploy ($500): Single VPS, Docker, basic SSL
- Production Deploy ($1,500): AWS/GCP, auto-scaling, CDN, monitoring
- Enterprise Deploy ($3,000): Multi-region, high-availability, advanced monitoring

**Support Contracts (Monthly):**
- Maintenance ($300/mo): Email support (72h SLA), bug fixes, security patches
- Managed ($800/mo): Chat support (4h SLA), feature requests (5h/month)
- Dedicated ($2,000/mo): Phone support (2h SLA), priority development (15h/month), 24/7 emergency

**Scope Protection Policy:**

**Included Customization:**
- Logo replacement and branding
- Color scheme (up to 5 colors)
- App/platform name changes
- Basic config (currencies, languages, timezone)
- Minor UI tweaks within allocated hours

**NOT Included (Extra Charges):**
- New features or modules
- Third-party API integrations beyond spec
- Database schema modifications
- Custom workflow development
- Performance optimization beyond standard
- Ongoing hosting/infrastructure management
- Content creation or data entry

**Extra Work Rates:**
- Hourly: $150/hour
- Daily: $1,200/day

**Why Option B (Service) vs Option A (Product Sales):**
- Higher perceived value (doing work vs handing over files)
- Justifies 2-30 day timeline
- Opens recurring revenue (support contracts)
- Protects from "buy once, resell forever" abuse
- Positions as premium agency, not code vendor

## Recent Changes (November 18, 2025)

### Firebase Integration & Web3 Clarification (Latest)
Added Firebase backend services and clarified Web3 feature differentiation:

**New Feature:**
- **Firebase Integration** ($2,000, Standard+ tier): Complete backend-as-a-service with Firebase Auth (email + 2 social providers), Firestore database (basic CRUD for 3 collections), and Storage (file upload/download). Client provides Firebase project.

**Web3 Feature Clarifications:**
Features are modular building blocks that can be combined:
- **Web3 Basic (Infrastructure)** ($3,000): Wallet integration layer - sets up blockchain connection and deploys YOUR existing contract. Does not include writing new contracts.
- **Token Development** ($2,500): We CREATE a new ERC-20 OR ERC-721 token from audited templates. We write the token code for you.
- **Smart Contract Expansion** ($1,800): We DESIGN & CODE up to 3 custom contracts with your business logic + unit tests.

**Naming Updates:**
- "Fireblocks Custody" renamed to "Fireblocks Integration" for clarity - feature integrates with client's Fireblocks tenant, configures vault + policy engine, and implements transaction signing/transfer flow.

**Tier Updates:**
- Standard: 6 add-ons (was 5), includes Firebase
- Enterprise: 17 add-ons (was 16)
- All tier descriptions and limits updated across UI and PDF

**Competitive Positioning:**
- Firebase backend simplifies MVP development for Standard tier clients
- Clear Web3 differentiation prevents confusion and scope disputes
- Modular Web3 approach allows clients to mix-and-match based on needs

### Commerce & Location Intelligence Expansion
Added e-commerce and location-based service capabilities:

**Premium Features Added:**
- **Stripe Commerce Suite** ($3,800, Full+ tier): Subscriptions (5 plans), shopping cart (50 SKUs), customer portal, webhooks
- **Location Intelligence Pack** ($1,600, Standard+ tier): Google Maps/Mapbox with 10 markers, geocoding, distance matrix (100 daily requests)

**Tier Updates (now superseded by Firebase addition):**
- Standard: Was 4→5→6 add-ons
- Full: 9 add-ons (includes Commerce Suite + KYC/AML)
- Enterprise: Was 14→16→17 add-ons, base price $20k-$40k

**Scope Protection:**
Both features have explicit boundaries to prevent disputes. Clients must provide API keys and billing accounts.

### Advanced Web3 Suite - Institutional Crypto
Expanded Web3 capabilities with Fireblocks integration:

**Enterprise Web3 Features:**
- Web3 Basic, Token Development, Smart Contract Expansion, Fireblocks Integration
- Advanced Web3 Package: ~$11,800 total for all blockchain features
- Targets institutional crypto/DeFi clients ($50k+ budgets)