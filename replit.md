# Persystance Networks - MVP Development Platform

## Overview

Persystance Networks provides rapid MVP development services, aiming for production-ready MVPs in 2 weeks and launch within 30 days. The platform functions as a marketing website to generate leads for startups and entrepreneurs, showcasing value propositions, technology expertise, and portfolio examples. It integrates WhatsApp for contact and includes a specialized landing page for Telegram/Web3 game development, enterprise compliance features, and a section for institutional trading and portfolio management services. The platform is undergoing a major upgrade to a future-forward interactive design with glassmorphism UI, live demos, and a comprehensive trading platform simulator, all built on a 100% static site architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript and Vite.
**Routing**: Wouter.
**UI Component Library**: Shadcn/ui (Radix UI primitives) with "New York" style.
**Styling**: Tailwind CSS with custom design tokens, dual-theme system (dark mode primary, light mode secondary), electric blue and teal accents.
**State Management**: React Query (TanStack Query).
**Theme System**: Custom React Context API with localStorage.
**Design System Enhancements**: Glassmorphism, animated gradients, shimmer effects, premium card hover effects, subtle grid backgrounds, and parallax scroll effects.
**Interactive Features**:
- **Live Nexus Trading Simulator**: Client-side demo with real-time order book, price movements, trading interface, portfolio dashboard, and recent trades feed using mock data.
- **Smart Project Calculator**: 3-step wizard for project type, feature selection with individual costs, and timeline selection. Displays price ranges, generates PDF quotes, and offers "Download PDF Quote" and "Book Free Discovery Call" CTAs.
- **Live Metrics Component**: Animated count-up statistics with glassmorphism cards and Intersection Observer for scroll-triggered animations.

### Backend Architecture

**Server Framework**: Express.js with TypeScript on Node.js.
**API Design**: RESTful API pattern with `/api` prefix.
**Data Storage**: In-memory storage abstraction (`MemStorage`).
**Session Management**: Configured for PostgreSQL session storage using `connect-pg-simple` (when implemented).

### Database Design

**ORM**: Drizzle ORM configured for PostgreSQL with Neon serverless adapter.
**Schema**: `contact_inquiries` table for lead capture.
**Validation**: Zod schemas derived from Drizzle definitions.
**Migration Strategy**: Drizzle Kit with a schema-first approach.

### Design System

**Typography**: Inter font family for text, Space Grotesk for accents.
**Color System**: HSL-based custom properties with light/dark palettes and an elevation system.
**Component Patterns**: Composition with variant-based styling using `class-variance-authority`.
**Responsive Design**: Mobile-first approach with Tailwind breakpoints.

### Architecture & Routing

The application maintains a 100% static site architecture with no backend dependencies. The `/nexus-trading` route showcases the live trading demo.

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
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay.
- **@replit/vite-plugin-cartographer**: Code navigation tool.
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

## Recent Changes (November 18, 2025)

### Scope Protection Updates (Latest)
Added comprehensive scope definitions to prevent client exploitation:

**Terms & Conditions Added:**
- Revision policy: 2 rounds included per feature, additional $150/hour
- Support policy: 30 days bug-fix warranty, 48-hour response time
- Hosting: Deployment included, hosting costs (server/domain/SSL) paid by client
- Baseline scope: Dashboard = 5 screens, CRUD = 1 entity (10 fields), Database = 5 simple tables

**Add-on Scope Definitions:**
Each of 8 add-on features now has explicit scope shown during selection AND in results/PDF:
- Payment Integration: "Stripe one-time checkout only (no subscriptions)"
- Analytics Dashboard: "Basic charts (5 metrics: users, revenue, activity, growth, conversion)"
- Live Chat Support: "Basic message list with send/receive (no typing indicators)"
- Notifications: "Transactional emails via SendGrid/Twilio (up to 3 templates)"
- Real-time Features: "Basic WebSocket updates for 1 feature (e.g., live notifications)"
- Advanced Search: "Text search with filters (up to 5 fields)"
- PDF Reports: "Simple PDF with tables & text (up to 3 report types)"
- Admin Dashboard: "Basic admin panel with user management & content CRUD"

**Baseline Features Clarified:**
- User Authentication: Email/password login only
- Database Design: Up to 5 simple tables
- RESTful API: CRUD for 1 entity (10 fields max)
- Mobile Responsive UI: All breakpoints
- Basic Dashboard: 5 screens (Home, List, Detail, Settings, Profile)

## Recent Changes (November 18, 2025)

### Pricing & Positioning Overhaul
**Business Reality**: Sri Lankan development company founded 2012 (13 years in business) with 2-person team. Monthly overhead: 2.5M LKR (~$8,300 USD). All MVPs built on modern cloud infrastructure (not mentioned in marketing).

### New Transparent Pricing Strategy
- **Starter MVP**: $5,000 - $7,000 (2 weeks, up to 5 basic features, quick market validation - Web only)
- **Standard MVP**: Starts at $8,300 (4-6 weeks, 7-10 features, production-ready - Web or React Native mobile)
- **Full Web Application**: Starts at $12,000 (6-8 weeks, comprehensive features & integrations - Web)
- **Enterprise Solution**: Starts at $20,000 (8+ weeks, advanced features, scalability - Web, Mobile, or Both)

**Pricing Logic**: Starter MVP has $5k floor for competitive entry point. Standard+ projects maintain $8,300 minimum (covers 2.5M LKR overhead). Each project type has fixed timeline (Starter=2wk, Standard=4wk, Full=6wk, Enterprise=8wk). Final pricing = base price + selected features.

### Calculator Redesign
Complete 2-step wizard with fixed timelines:
1. **Step 1**: Project type selection with fixed timelines:
   - Starter MVP: 2 weeks, $5k-7k (shows exactly what's included - no feature selection)
   - Standard MVP: 4 weeks, $8.3k-12k (feature checkboxes available)
   - Full Application: 6 weeks, $12k-18k (feature checkboxes available)
   - Enterprise: 8 weeks, $20k-30k (feature checkboxes available)
2. **Step 2**: Feature selection (Standard+ only) - users select exactly what they need (Auth $800, Payments $1,500, Dashboard $1,200, etc.)
3. **Results**: Price range display ($X - $Y), not single number for transparency
4. **Pricing Floor**: Starter has $5k floor, all other quotes maintain minimum $8,300 threshold (covers 2.5M LKR overhead)
5. **Trust Elements**: "Why Choose Quality Over Cheap" section comparing FCode Labs (€4.5k) and $500 Fiverr developers
6. **PDF Quote**: Professional download with included services, pricing breakdown, company credentials

### Credibility Updates
All site-wide mentions updated to:
- Hero: "13 Years in Business"
- About Us stats: "13 Years In Business", "200+ MVPs Launched"
- About Us copy: "Founded in 2012 with over a decade of proven expertise"
- Values section: "13 years in business - direct access to senior developer, no juniors"

### Nexus Trading Repositioning
- Badge changed from "Live Demo" to "UI/UX Showcase Demo • Web Platform"
- Added platform clarification: Web-based demo, mobile apps use React Native (iOS/Android)
- Added disclaimer: "This is a UI demonstration with simulated data. It showcases interface design capabilities, not a $100k trading platform offering."
- Clarifies demo purpose while maintaining interactive functionality

### Competitive Positioning
**vs FCode Labs** (€4.5k MVP, 200+ employees, 7 years in business):
- Transparent calculator with instant pricing (vs "contact us")
- 13 years in business (vs 7-year company)
- Direct senior developer access (vs large team delegation)
- Live interactive demos proving capabilities

**vs Low-Cost Offshore** (Fiverr/Upwork $500-2k):
- 13 years proven track record and accountability
- Production-grade code, not prototypes
- 30-day post-launch support included
- Direct communication, no timezone/language barriers

### Included in All Projects
- Full source code ownership
- Comprehensive documentation & handover  
- 30-day post-launch support
- Direct access to senior developer
- Production-grade architecture (not prototypes)
- Modern tech stack:
  - **Web**: React, TypeScript, cloud infrastructure
  - **Mobile**: React Native (iOS/Android)
  - **Backend**: Node.js, PostgreSQL, REST/GraphQL APIs

### Key Differentiator
Only agency offering instant transparent pricing calculator with honest ranges vs "contact us for quote" - builds trust and accelerates lead conversion while maintaining sustainable pricing above $8,300 overhead threshold.