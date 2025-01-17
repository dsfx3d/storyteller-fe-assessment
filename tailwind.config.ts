import type {Config} from "tailwindcss";
import {globalHeaderHeight} from "./src/features/GlobalHeader/globalHeaderHeight";
import {sidebarZIndex} from "./src/features/Sidebar/sidebarZIndex";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Sidebar styles
    `h-[${globalHeaderHeight}]`,
    `h-[calc(100vh_-_${globalHeaderHeight})]`,
    `z-[${sidebarZIndex}]`,
    `z-[${sidebarZIndex - 1}]`,
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        sans: ["var(--font-sans-regular)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        info: {
          DEFAULT: "hsl(var(--info))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        4.5: "1.125rem",
        7.5: "1.875rem",
        9.5: "2.375rem",
      },
      screens: {
        mobile: "375px",
        tablet: "768px",
        desktop: "1024px",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
