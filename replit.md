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

### Pricing & Positioning Overhaul
**Business Reality**: Solo Sri Lankan developer with 23 years personal experience (since 2002), operating a 13-year company (founded 2012) with 2-person team. Monthly overhead: 2.5M LKR (~$8,300 USD). All MVPs built on modern cloud infrastructure (not mentioned in marketing).

### New Transparent Pricing Strategy
- **Starter MVP**: $5,000 - $7,000 (2 weeks, up to 5 basic features, quick market validation)
- **Standard MVP**: Starts at $8,300 (4-6 weeks, 7-10 features, production-ready)
- **Full Web Application**: Starts at $12,000 (6-8 weeks, comprehensive features & integrations)
- **Enterprise Solution**: Starts at $20,000 (8+ weeks, advanced features, scalability)

**Pricing Logic**: Starter MVP has $5k floor for competitive entry point. Standard+ projects maintain $8,300 minimum (covers 2.5M LKR overhead). Final pricing = base price + selected features, with 5%/8% savings for longer timelines.

### Calculator Redesign
Complete 3-step wizard replacing old slider-based system:
1. **Step 1**: Project type selection (4 types with honest price ranges)
2. **Step 2**: Feature checkboxes - users select exactly what they need (Auth $800, Payments $1,500, Dashboard $1,200, etc.) with individual costs
3. **Step 3**: Timeline selection (2 weeks Express, 4 weeks Standard with 5% savings, 8 weeks Flexible with 8% savings)
4. **Results**: Price range display ($X - $Y), not single number for transparency
5. **Pricing Floor**: All quotes maintain minimum $8,300 threshold (covers 2.5M LKR overhead)
6. **Trust Elements**: "Why Choose Quality Over Cheap" section comparing FCode Labs (€4.5k) and $500 Fiverr developers
7. **PDF Quote**: Professional download with included services, pricing breakdown, company credentials

### Credibility Updates
All site-wide mentions updated to:
- Hero: "23 Years Personal Experience • 13 Years in Business"
- About Us stats: "23 Years Personal Experience", "13 Years In Business"
- About Us copy: "Founded in 2012, backed by 23 years of personal software development experience since 2002"
- Values section: "23 years of personal experience, 13 years in business - direct access to senior developer, no juniors"

### Nexus Trading Repositioning
- Badge changed from "Live Demo" to "UI/UX Showcase Demo"
- Added disclaimer: "This is a UI demonstration with simulated data. It showcases interface design capabilities, not a $100k trading platform offering."
- Clarifies demo purpose while maintaining interactive functionality

### Competitive Positioning
**vs FCode Labs** (€4.5k MVP, 200+ employees, 7 years in business):
- Transparent calculator with instant pricing (vs "contact us")
- 23 years personal experience (vs 7-year company)
- Direct senior developer access (vs large team delegation)
- Live interactive demos proving capabilities

**vs Low-Cost Offshore** (Fiverr/Upwork $500-2k):
- 23 years accountability and track record
- Production-grade code, not prototypes
- 30-day post-launch support included
- Direct communication, no timezone/language barriers

### Included in All Projects
- Full source code ownership
- Comprehensive documentation & handover  
- 30-day post-launch support
- Direct access to 23-year veteran developer
- Production-grade architecture (not prototypes)
- Modern tech stack (React, TypeScript, cloud infrastructure)

### Key Differentiator
Only agency offering instant transparent pricing calculator with honest ranges vs "contact us for quote" - builds trust and accelerates lead conversion while maintaining sustainable pricing above $8,300 overhead threshold.