# Persystance Networks - MVP Development Platform

## Overview

Persystance Networks offers rapid MVP development services, aiming to build production-ready MVPs in 2 weeks and launch within 30 days. The platform serves as a marketing website to generate leads, targeting startups and entrepreneurs seeking fast, cost-effective development. It showcases value propositions, technology expertise, portfolio examples, client testimonials, and integrates WhatsApp for contact. Key additions include a specialized Telegram/Web3 game development landing page and comprehensive enterprise compliance features, alongside a new section for institutional trading and portfolio management services.

## User Preferences

Preferred communication style: Simple, everyday language.

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

### Assets
Stock images for portfolio and testimonials are stored in `/attached_assets/stock_images/`.