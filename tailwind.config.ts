import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-teal": "#0D6E6E",
        "accent-amber": "#D4830A",
        "warm-bg": "#FAFAF8",
        "success-green": "#15803D",
        "warning-red": "#C2410C",
      },
    },
  },
  plugins: [],
};
export default config;
