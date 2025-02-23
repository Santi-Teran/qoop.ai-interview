import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          textPrimary: "#1a1b26",
          textSecondary: "#4a4e69",
          primary: "#6c63ff",
          secondary: "#a29bfe",
          tertiary: "#FFB347",
          background: "#ECF5FF",
        },
        dark: {
          textPrimary: "#e0e0e0",
          textSecondary: "#a0a4b8",
          primary: "#ff6bcb",
          secondary: "#ff8eb6",
          tertiary: "#FFC75F",
          background: "#0A0F24",
        }        
      },
      backgroundImage: {
        "gradient-light":
          "linear-gradient(to bottom, #ECF5FF, #B3E5FC, #81D4FA)",
        "gradient-dark":
          "linear-gradient(to bottom, #0A0F24, #1E2A47, #28345A)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
