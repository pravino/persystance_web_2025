# Design Guidelines: Persystance Networks MVP Development Platform

## Design Approach
**Reference-Based Strategy**: Drawing inspiration from modern tech service platforms (Vercel, Linear, Stripe) that emphasize speed, clarity, and technical credibility. The design will balance professional authority with startup-friendly approachability.

**Core Principle**: Fast, lean, and efficient - reflected in both messaging and visual design.

## Color Palette

### Dark Mode (Primary)
- **Background**: 220 15% 8% (deep navy-charcoal)
- **Surface**: 220 12% 12% (elevated cards/sections)
- **Primary Brand**: 210 100% 55% (electric blue - energy and speed)
- **Accent**: 165 75% 50% (teal - innovation and trust)
- **Text Primary**: 0 0% 98%
- **Text Secondary**: 220 10% 70%

### Light Mode
- **Background**: 0 0% 100%
- **Surface**: 220 15% 97%
- **Primary Brand**: 210 100% 48%
- **Accent**: 165 70% 45%
- **Text Primary**: 220 20% 10%
- **Text Secondary**: 220 10% 40%

## Typography
- **Headings**: Inter (700-800 weight) - modern, technical, clean
- **Body**: Inter (400-500 weight)
- **Accent/Numbers**: Space Grotesk (bold statistics, timelines)
- **Scale**: Hero (text-6xl), H2 (text-4xl), H3 (text-2xl), Body (text-base/lg)

## Layout System
**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 (desktop), py-12 (mobile)
- Component gaps: gap-8 (cards), gap-4 (list items)
- Container: max-w-7xl with px-4

## Page Structure (7-8 Sections)

### 1. Hero Section (100vh)
- Split layout: Left 50% bold messaging, Right 50% animated timeline/process visual
- Headline: "Ship Your MVP in 2 Weeks. Launch in 30 Days."
- Subheadline emphasizing cost optimization
- Dual CTAs: "Start Your Project" (primary) + "View Process" (outline with backdrop-blur)
- Trust indicator: "200+ MVPs Launched | 15+ Countries"

### 2. Value Proposition Grid (3-Column Desktop, 1-Column Mobile)
- **Speed**: Clock icon, "2-Week MVP Development"
- **Cost**: Dollar icon, "50% Cost Reduction"
- **Quality**: Check icon, "Production-Ready Launch"
Each card with icon, bold stat, supporting description

### 3. Process Timeline
- Horizontal timeline (desktop) / Vertical (mobile)
- 4 phases: Discovery (Days 1-3), Build (Days 4-10), Polish (Days 11-14), Launch (Days 15-30)
- Visual progress indicator connecting phases
- Each phase with deliverables list

### 4. Technology Stack Showcase
- Logos/badges grid showing tech expertise
- Categories: Web (React, Next.js), Mobile (React Native), Backend (Node, Python), AI/ML, Blockchain
- 2-column layout with category headers

### 5. Portfolio/Case Studies (2-Column Grid)
- 4-6 MVP examples with before/after or result metrics
- Card design: Project image, tech stack tags, timeline badge, result metric
- "View All Projects" CTA

### 6. Pricing Framework
- Not pricing tiers, but "Investment Clarity" section
- Table showing what's included in MVP package
- Transparent process: "Fixed-scope projects start from $X, Custom quotes in 24 hours"
- CTA: "Get Your Custom Quote"

### 7. Trust Section
- Client testimonials (2-3 column grid)
- Company logos of past clients
- Statistics showcase (projects, countries, satisfaction rate)

### 8. Contact/CTA Section
- Bold headline: "Ready to Launch Your Idea?"
- Form: Name, Email, Project Type, Brief Description
- Alternative: Calendar booking link
- Contact info sidebar: Email, response time promise

## Component Library

### Navigation
- Fixed top bar with backdrop-blur
- Logo left, menu items center, "Get Quote" button right
- Mobile: Hamburger menu with slide-in panel

### Cards
- Rounded (rounded-xl), subtle shadow (shadow-lg)
- Hover: slight lift (hover:translate-y-[-4px] transition)
- Border: 1px border with surface color

### Buttons
- Primary: Solid background, bold text, rounded-lg, px-8 py-4
- Secondary: Outline with backdrop-blur for image overlays
- Hover: Built-in states, no custom interactions

### Forms
- Dark mode optimized inputs
- Focused state with primary color ring
- Generous padding (py-3 px-4)

## Images

**Hero Image**: No - Replace with animated SVG/CSS timeline visualization showing 2-week sprint

**Section Images**:
1. **Process Timeline**: Illustrated workflow diagram (custom graphic)
2. **Portfolio Cards**: Screenshots of MVP projects built (4-6 images)
3. **Client Logos**: 6-8 company logos in grayscale grid
4. **Testimonial Photos**: 3 circular client headshots

**Image Treatment**: Sharp, high-contrast screenshots with subtle border, maintain dark theme consistency

## Animations
**Minimal & Purpose-Driven**:
- Hero timeline: Gentle pulse/progress animation on load
- Scroll-triggered fade-in for sections (once, subtle)
- Hover states: Cards lift, buttons subtle color shift
- NO parallax, NO continuous animations, NO distracting effects

## Key Differentiators
- Asymmetric hero (50/50 split vs centered)
- Timeline as hero element (non-traditional)
- Data-driven trust building (numbers, metrics)
- Technical credibility through stack showcase
- Startup-friendly tone with enterprise execution quality