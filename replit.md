# Persystance Networks - MVP Development Platform

## Overview

Persystance Networks specializes in rapid MVP development, aiming for production-ready MVPs within two weeks and launch within 30 days. The platform serves as a marketing tool to generate leads for startups by showcasing value propositions, technology expertise, and a portfolio. Key features include WhatsApp integration, a dedicated landing page for Telegram/Web3 game development, enterprise compliance features, and sections for institutional trading and portfolio management. The platform is upgrading to an interactive design with a glassmorphism UI, live demos, and a comprehensive trading platform simulator, all built on a 100% static site architecture. The business emphasizes transparent pricing, instant quotes, 13 years of experience, direct senior developer access, and production-grade code. It also offers a marketplace for 6 production-ready platforms as a deployment service (marketed as "Production-Ready Platforms"), targeting quick-launch entrepreneurs and regional startups.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend

The frontend is built with React 18+, TypeScript, and Vite. It utilizes Wouter for routing and Shadcn/ui (Radix UI primitives) with the "New York" style for UI components. Styling is managed with Tailwind CSS, incorporating a dual-theme system (dark mode primary) and electric blue/teal accents. State management is handled by React Query, and a custom React Context API manages the theme with localStorage. Design system enhancements include glassmorphism, animated gradients, shimmer effects, premium card hover effects, subtle grid backgrounds, and parallax scroll effects. Key interactive features are a Live Nexus Trading Simulator (client-side, mock data), a 3-step Smart Project Calculator for quotes, and a Live Metrics Component with animated statistics.

### Backend

The backend uses Express.js with TypeScript on Node.js for development server only. The production site is 100% static with no backend dependencies. Lead capture from the Express Interest form submits directly to HubSpot Forms API (Portal ID: 244409941) from the browser, requiring no server-side processing.

### Database

The database design employs Drizzle ORM for PostgreSQL with the Neon serverless adapter. It includes a `contact_inquiries` table for lead capture and uses Zod schemas derived from Drizzle definitions for validation. Drizzle Kit is used for migrations with a schema-first approach.

### Design System

Typography uses the Inter font family for text and Space Grotesk for accents. The color system is HSL-based with custom properties for light/dark palettes and an elevation system. Components are designed with composition and variant-based styling using `class-variance-authority`. A mobile-first approach is implemented with Tailwind breakpoints for responsive design.

### Architecture & Routing

The application maintains a 100% static site architecture with no backend dependencies. All functionality runs client-side, including lead capture via HubSpot Forms API. Key routes include:
- `/` - Homepage with calculator and services overview
- `/nexus-trading` - Live trading demo
- `/ready-made-products` - Product catalog showcasing 6 production-ready platforms (labeled as "Production-Ready Platforms")
- `/products/:id` - Individual product landing pages with detailed specs and pricing

### Feature Specifications

The platform offers production-ready platforms as a deployment service (marketed as "Production-Ready Platforms"), not standalone product sales. This includes professional deployment, customization (branding, configuration), source code ownership, and documentation. Services are categorized into MVP and Full editions with varying support and customization hours. Optional add-ons include deployment tiers (Basic, Production, Enterprise) and monthly support contracts (Maintenance, Managed, Dedicated) with defined scope boundaries to prevent abuse. Web3 features are modular, including Web3 Basic (wallet integration/contract deployment), Token Development (ERC-20/721 creation), and Smart Contract Expansion (custom contract coding). Firebase Integration, Stripe Commerce Suite, and Location Intelligence Pack (Google Maps/Mapbox) are also available as premium features.

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

### Third-Party Services
- **Stripe**: For e-commerce and subscription features.
- **Google Maps/Mapbox**: For location intelligence features.
- **Firebase**: For backend-as-a-service (Auth, Firestore, Storage).
- **Onfido/Jumio**: For KYC/AML compliance.
- **Okta/Auth0**: For Enterprise SSO.
- **Fireblocks**: For institutional crypto custody integration.
- **SendGrid/Twilio**: For transactional emails/notifications.