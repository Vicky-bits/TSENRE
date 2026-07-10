import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#EAF6FC",
          100: "#CDEBF7",
          200: "#9AD7EF",
          300: "#63C0E6",
          400: "#2FA6D8",
          500: "#0077B6", // primary
          600: "#00648E", // primary-dark
          700: "#024E70",
          800: "#023E73",
          900: "#012A4A",
        },
        accent: {
          50: "#FFF4EC",
          100: "#FFE4CC",
          200: "#FDBA74", // accent-light
          300: "#FB9B4A",
          400: "#F97316", // accent
          500: "#EA5F0A",
          600: "#C24A05",
        },
        ink: {
          DEFAULT: "#1F2937", // text
          soft: "#4B5563",
          faint: "#9CA3AF",
        },
        surface: {
          DEFAULT: "#F8FAFC", // background
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(0,119,182,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,119,182,0.06) 1px, transparent 1px)",
        "ocean-gradient": "linear-gradient(135deg, #012A4A 0%, #023E73 40%, #0077B6 100%)",
        "ocean-radial": "radial-gradient(circle at top right, rgba(47,166,216,0.35), transparent 60%)",
      },
      backgroundSize: {
        "grid-24": "24px 24px",
        "grid-48": "48px 48px",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(2,42,74,0.15)",
        card: "0 4px 24px -4px rgba(2,42,74,0.10)",
        "card-hover": "0 20px 50px -12px rgba(0,119,182,0.25)",
        glow: "0 0 0 1px rgba(0,119,182,0.15), 0 8px 30px -8px rgba(0,119,182,0.4)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "scan-line": "scan-line 3s ease-in-out infinite",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(0%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(2000%)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
