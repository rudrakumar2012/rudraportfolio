import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0B0E14",
        "surface-container": "#10131A",
        "surface-container-low": "#10131A",
        "surface-container-high": "#1c2028",
        "surface-highest": "#22262F",
        foreground: "#ecedf6",
        primary: "#8FF5FF",
        "primary-neon": "#00EEFC",
        secondary: "#C3F400",
        tertiary: "#65AFFF",
        outline: "#73757D",
        "outline-variant": "rgba(115, 117, 125, 0.2)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["Space Grotesk Mono", "monospace"],
      },
      backgroundImage: {
        "noise-texture": "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        sm: "0.125rem",
        md: "0.375rem",
      },
    },
  },
  plugins: [],
};
export default config;
