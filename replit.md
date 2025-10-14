# Persystance Networks - MVP Development Platform

## Overview

Persystance Networks (founded 2012, 13+ years experience) is a marketing website and lead generation platform for a rapid MVP development service. The platform showcases the company's ability to build production-ready MVPs in 2 weeks and launch them within 30 days, targeting startups and entrepreneurs looking for fast, cost-effective development solutions.

The application is built as a marketing site with multiple sections highlighting value propositions, technology expertise, portfolio examples, client testimonials, and WhatsApp contact integration. The site now includes a specialized Telegram/Web3 game development landing page.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### October 2025
- Added dedicated `/telegram-games` landing page showcasing Telegram/Web3 game development services
- Added "Web3 Games" to Industry Expertise section (Telegram mini apps, tap-to-earn games, blockchain gaming, NFT integration)
- Replaced contact form with WhatsApp Business integration (94778005567)
- Updated navigation with smart routing for cross-page section navigation
- Updated social links: LinkedIn company page, removed Twitter/GitHub
- Simplified hero headline for non-tech audience (removed "MVP" jargon)

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript using Vite as the build tool and development server.

**Routing**: Wouter - a minimal client-side router. The application is primarily a single-page app with a home route and a 404 fallback.

**UI Component Library**: Shadcn/ui (Radix UI primitives) with the "New York" style variant, providing accessible, composable components with consistent styling.

**Styling**: Tailwind CSS with custom design tokens implementing a dual-theme system (dark mode primary, light mode secondary). Custom CSS variables control colors, spacing, and elevation effects. The design follows specific brand guidelines with electric blue primary (#210 100% 55%) and teal accent colors.

**State Management**: React Query (TanStack Query) for server state management and data fetching, configured with conservative defaults (no refetching, infinite stale time).

**Theme System**: Custom theme provider using React Context API and localStorage for theme persistence, supporting dark/light mode toggle.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**API Design**: RESTful API pattern with all routes prefixed with `/api`. Currently minimal backend implementation with placeholder route registration.

**Data Storage**: The application uses an in-memory storage abstraction (`MemStorage` class) implementing an `IStorage` interface. This allows for easy migration to persistent storage solutions.

**Session Management**: Configured to use `connect-pg-simple` for PostgreSQL session storage (when implemented).

**Development Setup**: Vite middleware integration for HMR (Hot Module Replacement) in development, with production static file serving.

### Database Design

**ORM**: Drizzle ORM configured for PostgreSQL with Neon serverless adapter.

**Schema**: Currently defines a `contact_inquiries` table for lead capture with fields:
- `id` (UUID primary key, auto-generated)
- `name`, `email`, `company` (text fields)
- `project_type` (text field for categorizing inquiry type)
- `message` (text field for inquiry details)

**Validation**: Zod schemas derived from Drizzle table definitions for runtime type safety and validation.

**Migration Strategy**: Drizzle Kit configured with schema-first approach, migrations output to `/migrations` directory.

### Design System

**Typography**: Inter font family for headings and body text (400-800 weights), Space Grotesk for accent elements and statistics.

**Color System**: HSL-based custom properties with separate light/dark mode palettes. Implements elevation system using opacity-based overlays (`--elevate-1`, `--elevate-2`) for hover/active states.

**Component Patterns**: Heavy use of composition with variant-based styling (class-variance-authority). Components support dark mode through CSS custom properties and the `.dark` class selector.

**Responsive Design**: Mobile-first approach with Tailwind breakpoints. Custom mobile detection hook (`useIsMobile`) for conditional rendering.

## External Dependencies

### UI & Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives (accordion, dialog, dropdown, popover, etc.)
- **Shadcn/ui**: Pre-built components using Radix UI with Tailwind styling
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel/slider functionality
- **cmdk**: Command palette component

### Data & Forms
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation and type inference
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Database & ORM
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **@neondatabase/serverless**: Neon serverless PostgreSQL driver
- **Drizzle Zod**: Automatic Zod schema generation from Drizzle tables

### Development Tools
- **Vite**: Build tool and dev server with React plugin
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit
- **@replit/vite-plugin-cartographer**: Code navigation tool for Replit
- **TypeScript**: Type safety across the entire codebase

### Routing & State
- **Wouter**: Lightweight routing library (~1.2KB)
- **@tanstack/react-query**: Server state management and caching

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with Autoprefixer
- **class-variance-authority**: Type-safe variant-based styling
- **clsx & tailwind-merge**: Conditional className utilities

### Date & Time
- **date-fns**: Date manipulation and formatting library

### Assets
The application uses stock images stored in `/attached_assets/stock_images/` for portfolio items and testimonials, referenced through Vite's asset import system.