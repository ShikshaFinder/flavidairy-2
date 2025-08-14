module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Green Theme
        primary: {
          DEFAULT: "#16a34a", // Green 600
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        secondary: {
          DEFAULT: "#22c55e", // Green 500
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        accent: {
          DEFAULT: "#15803d", // Green 700
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        tertiary: {
          DEFAULT: "#10b981", // Emerald Green
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        // Neutral Colors - Clean and Minimal
        background: {
          DEFAULT: "#f0fdf4",
          secondary: "#dcfce7",
          tertiary: "#bbf7d0",
        },
        foreground: {
          DEFAULT: "#1a1a1a",
          secondary: "#374151",
          muted: "#6b7280",
        },
        // Status Colors
        success: {
          DEFAULT: "#059669",
          50: "#ecfdf5",
          100: "#d1fae5",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
        warning: {
          DEFAULT: "#f59e0b",
          50: "#fffbeb",
          100: "#fef3c7",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        destructive: {
          DEFAULT: "#dc2626",
          50: "#fef2f2",
          100: "#fee2e2",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
        },
        info: {
          DEFAULT: "#16a34a",
          50: "#f0fdf4",
          100: "#dcfce7",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
        },
      },
      animation: {
        aurora: "aurora 8s ease-in-out infinite",
        gradient: "gradient 3s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        gradient: {
          "0%, 100%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "left center",
          },
          "50%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #f0fdf4 0%, #22c55e 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
        "gradient-accent": "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
        "gradient-multi":
          "linear-gradient(135deg, #f0fdf4 0%, #22c55e 25%, #16a34a 50%, #15803d 75%, #f0fdf4 100%)",
        "aurora-bg":
          "linear-gradient(45deg, rgba(240, 253, 244, 0.1) 0%, rgba(34, 197, 94, 0.1) 25%, rgba(22, 163, 74, 0.1) 50%, rgba(21, 128, 61, 0.1) 75%, rgba(240, 253, 244, 0.1) 100%)",
      },
    },
  },
  plugins: [],
};
