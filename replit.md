# Persystance Networks - MVP Development Platform

## Overview

Persystance Networks offers rapid MVP development services, aiming to build production-ready MVPs in 2 weeks and launch within 30 days. The platform serves as a marketing website to generate leads, targeting startups and entrepreneurs seeking fast, cost-effective development. It showcases value propositions, technology expertise, portfolio examples, client testimonials, and integrates WhatsApp for contact. Key additions include a specialized Telegram/Web3 game development landing page and comprehensive enterprise compliance features, alongside a new section for institutional trading and portfolio management services.

**Persystance 2.0 Transformation (November 2025)**: Major upgrade to future-forward interactive design with glassmorphism UI, live demos, animated metrics, and comprehensive trading platform simulator - designed to be "way ahead" of competitors like FCode Labs while maintaining 100% static site architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (November 18, 2025)

### Branding Updates
- **Nexus Trading Rebrand**: Renamed INSPIRA Exchange → Nexus Trading across all pages (TradingPortfolio, IndustryExpertise, Compliance, Navigation)
- Consistent branding for institutional trading platform showcasing real client work

### New Interactive Features

#### 1. Live Nexus Trading Simulator (`/nexus-trading`)
A comprehensive, fully functional trading platform demo featuring:
- Real-time order book with bid/ask spreads
- Live price movements and market simulation
- Trading interface with buy/sell order placement
- Portfolio dashboard with P&L tracking
- Recent trades feed
- All client-side with realistic mock data
- Demonstrates institutional-grade capabilities without backend dependencies

#### 2. Smart Project Calculator Component
Interactive cost estimation tool with:
- Multi-step wizard (project type, features, complexity, timeline, team size)
- Real-time cost and timeline calculations
- PDF quote generation with jsPDF
- Transparent pricing methodology
- Positioned after Interactive Demos section on homepage
- Powerful lead generation and conversion tool

#### 3. Live Metrics Component
Animated statistics showcase featuring:
- Count-up animations with custom hook (`use-count-up.ts`)
- Glassmorphism card designs
- Key metrics: MVPs delivered, countries served, client retention
- Intersection Observer for scroll-triggered animations
- Added to homepage after Trust Badges

### Design System Enhancements

#### Glassmorphism & Modern Effects
New CSS utilities in `client/src/index.css`:
- `.glass` - Glassmorphism utility with backdrop blur
- `.animate-shimmer` - Shimmer animation for gradient text
- `.card-enhanced` - Premium card hover effects with elevation
- `.bg-grid-white` - Subtle grid background pattern
- `.parallax-slow` - Parallax scroll effects

#### Hero Section Transformation
Enhanced `client/src/components/Hero.tsx`:
- Multi-layered animated gradients (radial gradients from multiple origins)
- Shimmer effect on key headline text ("2 Weeks", "30 Days")
- Glassmorphism on badge and timeline card
- Enhanced button styling with shadows and hover effects
- Grid background pattern overlay
- Improved visual hierarchy and modern aesthetics

### New Dependencies
- **jspdf** (v2.5.2): PDF generation for project calculator quotes
- **react-intersection-observer** (v9.14.0): Scroll-triggered animations
- **lottie-react** (v2.4.0): Animation support (installed for future use)
- **react-syntax-highlighter** (v15.6.1): Code display (installed for future use)

### Architecture & Routing
- Added `/nexus-trading` route to showcase live trading demo
- Linked from Trading Portfolio page with prominent "View Live Demo" button
- Maintained 100% static site architecture (no backend dependencies)

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, using Vite for development and build.
**Routing**: Wouter, a minimal client-side router for a single-page application.
**UI Component Library**: Shadcn/ui (Radix UI primitives) with "New York" style.
**Styling**: Tailwind CSS with custom design tokens, implementing a dual-theme system (dark mode primary, light mode secondary), following specific brand guidelines with electric blue and teal accents.
**State Management**: React Query (TanStack Query) for server state management and data fetching.
**Theme System**: Custom React Context API provider with localStorage for theme persistence.

### Backend Architecture

**Server Framework**: Express.js with TypeScript on Node.js.
**API Design**: RESTful API pattern with `/api` prefix.
**Data Storage**: In-memory storage abstraction (`MemStorage`) for flexibility in migration.
**Session Management**: Configured for PostgreSQL session storage using `connect-pg-simple` (when implemented).

### Database Design

**ORM**: Drizzle ORM configured for PostgreSQL with Neon serverless adapter.
**Schema**: Defines a `contact_inquiries` table for lead capture.
**Validation**: Zod schemas derived from Drizzle definitions for type safety.
**Migration Strategy**: Drizzle Kit with a schema-first approach.

### Design System

**Typography**: Inter font family for text, Space Grotesk for accents.
**Color System**: HSL-based custom properties with distinct light/dark palettes and an elevation system.
**Component Patterns**: Composition with variant-based styling using `class-variance-authority`.
**Responsive Design**: Mobile-first approach with Tailwind breakpoints and a custom mobile detection hook.

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
- **jsPDF**: Client-side PDF generation for project quotes
- **react-intersection-observer**: Scroll-based animations and lazy loading
- **lottie-react**: Lottie animation player for React
- **react-syntax-highlighter**: Syntax highlighting for code examples

### Assets
Stock images for portfolio and testimonials are stored in `/attached_assets/stock_images/`.

## Key Features & Differentiators

### Interactive Proof of Capability
Unlike static agency websites, Persystance demonstrates capabilities through:
1. **Live Trading Simulator** - Working order book, portfolio management, real-time updates
2. **Smart Project Calculator** - Interactive cost estimation with PDF export
3. **Animated Metrics** - Real-time count-up animations showing achievements
4. **Glassmorphism Design** - Future-forward UI with depth and modern aesthetics

### Competitive Advantage
**vs FCode Labs and Traditional Agencies**:
- Interactive demos vs. static portfolios
- Transparent pricing calculator vs. "contact for quote"
- Live platform simulators vs. screenshots
- Modern glassmorphism UI vs. standard card layouts
- Animated metrics vs. static numbers
- PDF quote generation for instant gratification

### Technical Highlights
- **100% Static**: No backend required, deployable anywhere
- **Performance First**: Optimized animations, lazy loading, efficient rendering
- **Accessible**: ARIA labels, keyboard navigation, semantic HTML
- **Responsive**: Mobile-first design with progressive enhancement
- **SEO Optimized**: Structured data, meta tags, semantic markup

## Future Roadmap

### Planned Enhancements
- Industry-specific microsites (`/fintech`, `/healthcare`, `/web3`)
- Interactive Service Discovery component (decision tree)
- Before/after sliders for portfolio section
- Insights Hub with markdown-based blog articles
- Advanced micro-interactions (magnetic buttons, card tilts)
- Enhanced portfolio with case study deep-dives
- Client testimonial video integration

## Deployment

**Workflow**: 
1. Git push to repository
2. Production server: `git pull`
3. Build: `npm run build`
4. Copy built files to web folder

**Environment**: Fully static site, no server-side rendering or API required