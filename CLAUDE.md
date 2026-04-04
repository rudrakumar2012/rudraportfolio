# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start Next.js production server
- `npm run lint` - Run Next.js ESLint

## Project Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3 with custom dark sci-fi/HUD theme
- **Animations**: Framer Motion for scroll and hover transitions
- **Icons**: Lucide React

### Component Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout: Inter + Space Grotesk fonts, MouseGlow, AnimatedGrid, HUD border
│   ├── page.tsx                 # Home page: Hero → About → Experience → Projects → Footer
│   ├── globals.css              # CSS variables, glass-card/glow/HUD utility classes, noise texture
│   └── api/status/route.ts     # Health-check API: fetches StockSage AI vercel endpoint, returns LIVE/OFFLINE
├── components/
│   ├── Hero.tsx                 # Hero section with name, title, featured project (StockSage), system stats
│   ├── AboutSystem.tsx          # Developer bio + skill tags + animated hex bars
│   ├── ExperienceLog.tsx        # Timeline of work experience (Srijan Technologies) with animated scanner beam
│   ├── ProjectCard.tsx          # Hover-animated glass card with tags, external links, version label
│   ├── AnimatedGrid.tsx         # Fixed CRT grid background with scanning line animation
│   ├── MouseGlow.tsx            # Cursor-tracking radial gradient spotlight
│   └── StatusIndicator.tsx      # Fetches /api/status, shows colored dot (LIVE/OFFLINE/UNREACHABLE)
└── app/icon.png                 # Browser tab favicon (glowing cyan-blue Antigravity R)
```

### Design Theme
Dark sci-fi HUD / cyberpunk aesthetic with neon cyan (`#00EEFC`) and lime (`#C3F400`) accents on a near-black background (`#0B0E14`). Visual elements include:
- **Glass Cards**: Semi-transparent with backdrop blur and subtle border
- **HUD Border**: Fixed inset border with overlay blend for frame effect
- **Noise Texture**: SVG filter overlay on body (3% opacity)
- **Animated Grid**: CRT-style grid lines with vertical scanner line
- **Mouse Spotlight**: Radial gradient follows cursor
- **Timeline Scanner**: Animated beam on experience timeline

### Styling Conventions
- Tailwind utility classes with custom color tokens in `tailwind.config.ts`
- Color palette: `surface`, `foreground`, `primary-neon`, `secondary`, `tertiary`, `outline`, `outline-variant`
- Typography: Inter (sans-serif body), Space Grotesk (display headings)
- Reusable CSS classes: `glass-card`, `glow-blue`, `glow-lime`, `hud-container`, `hud-margin`, `technical-readout`, `no-line-section`

### Data Flow
- All data is static and hardcoded in `page.tsx` (project cards, skills, experiences)
- The only dynamic element is `/api/status` — a server-side route that pings the deployed StockSage AI app and caches the result for 60s
- `StatusIndicator` client component fetches `/api/status` on mount

### Deployment
- Deployed on **Netlify** with `@netlify/plugin-nextjs` for serverless function support
- Serverless route (`/api/status`) requires the Next.js plugin for Netlify compatibility
