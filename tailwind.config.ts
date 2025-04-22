import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Avocado green color palette
        avocado: {
          50: "#f5f9f0",
          100: "#e6f0dc",
          200: "#d1e4c0",
          300: "#b3d494",
          400: "#94c169",
          500: "#77ac46",
          600: "#5e8c37",
          700: "#4a6e2e",
          800: "#3d5828",
          900: "#344a24",
          950: "#1a2912",
        },
        // Secondary earthy tones for Filipino-inspired palette
        bamboo: {
          50: "#fcf9f0",
          100: "#f8f0d7",
          200: "#f0e0b0",
          300: "#e6ca7e",
          400: "#dbb44f",
          500: "#d09e33",
          600: "#bc7e29",
          700: "#9c5f25",
          800: "#804c25",
          900: "#6b3f23",
          950: "#3d2112",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "bamboo-pattern": "url('/patterns/bamboo-pattern.svg')",
        "inabel-pattern": "url('/patterns/inabel-pattern.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
