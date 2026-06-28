import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5B21B6",
        secondary: "#7C3AED",
        ink: "#111111",
        paper: "#FFFFFF",
        neutral: "#F5F5F5"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(91,33,182,0.35)",
        glass: "0 8px 32px rgba(91,33,182,0.12)"
      },
      backgroundImage: {
        "purple-gradient": "linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%)"
      }
    }
  },
  plugins: []
};

export default config;
