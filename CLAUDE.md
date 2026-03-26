# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start Vite development server with HMR
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on all JS/JSX files (strict: 0 warnings allowed)

## Project Architecture

### Tech Stack
- **Framework**: React 18 with Vite (ES modules)
- **Styling**: Tailwind CSS with custom gradient theme
- **Animations**: Framer Motion for scroll-based transitions
- **Icons**: React Icons library
- **Type Animation**: react-type-animation for typing effect

### Component Structure
```
src/
├── App.jsx                    # Root component, composes all sections
├── main.jsx                   # Entry point
├── index.css                  # Global styles
├── components/
│   ├── Main.jsx              # Hero section with background image
│   ├── Sidenav.jsx           # Navigation (mobile hamburger + desktop side nav)
│   ├── FadeInOnScroll.jsx   # HOC wrapper for scroll-triggered animations
│   ├── Work.jsx              # Work experience section
│   ├── Projects.jsx          # Project showcase grid
│   ├── ProjectItem.jsx       # Individual project card component
│   ├── About.jsx             # About section
│   ├── Contact.jsx           # Contact section
│   ├── useScroll.js          # Custom hook for tracking scroll position
├── assets/
│   ├── *.jpg                 # Project screenshots and profile picture
│   └── react.svg
└── public/
    └── smoky-mountains.jpg   # Hero background (used by Main.jsx)
```

### Key Patterns

**Scroll-triggered animations**: Sections wrapped in `FadeInOnScroll` component receive `scrollPosition` prop from `useScroll` hook. Animation triggers when `scrollPosition > 100`.

**Responsive navigation**: `Sidenav` provides two modes:
- Mobile: Hamburger menu opens full-screen overlay with text labels
- Desktop: Fixed vertical icon-only navigation on left side

**Section IDs**: All main sections use semantic IDs (`main`, `work`, `projects`, `about`, `contact`) for anchor navigation.

### Styling Conventions
- Tailwind CSS utility classes throughout
- Custom gradient `bg-gradient-custom` defined in `tailwind.config.js` (linear-gradient: #FFBE98 → #F7DED0)
- Responsive breakpoints: `md:` and `lg:` prefixes used
- Shadow styling: `shadow-lg shadow-gray-400` pattern common

### Data Flow
- `App.jsx` calls `useScroll()` once and passes `scrollPosition` to all `FadeInOnScroll` wrappers
- Component composition: App wraps sections in FadeInOnScroll, no state management libraries
- Static project data hardcoded in `Projects.jsx`

### Portability Notes
- All project links point to external deployed sites or GitHub repos
- Images imported directly from `src/assets/` in components
