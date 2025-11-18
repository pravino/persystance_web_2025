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

The application maintains a 100% static site architecture with no direct backend dependencies for core content. The `/nexus-trading` route showcases the live trading demo.

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