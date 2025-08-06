module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - White and Green
        primary: {
          DEFAULT: "#ffffff", // White
          50: "#ffffff",
          100: "#fefefe",
          200: "#fdfdfd",
          300: "#fcfcfc",
          400: "#fbfbfb",
          500: "#fafafa",
          600: "#f5f5f5",
          700: "#e5e5e5",
          800: "#d4d4d4",
          900: "#a3a3a3",
          950: "#737373",
        },
        secondary: {
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
        accent: {
          DEFAULT: "#059669", // Darker Green
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
        tertiary: {
          DEFAULT: "#16a34a", // Green
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
        // Neutral Colors - Clean and Minimal
        background: {
          DEFAULT: "#ffffff",
          secondary: "#fafafa",
          tertiary: "#f5f5f5",
        },
        foreground: {
          DEFAULT: "#000000",
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
          DEFAULT: "#d97706",
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
          DEFAULT: "#2563eb",
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
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
        "gradient-primary": "linear-gradient(135deg, #ffffff 0%, #10b981 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        "gradient-accent": "linear-gradient(135deg, #059669 0%, #16a34a 100%)",
        "gradient-multi":
          "linear-gradient(135deg, #ffffff 0%, #10b981 25%, #059669 50%, #16a34a 75%, #ffffff 100%)",
        "aurora-bg":
          "linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(16, 185, 129, 0.1) 25%, rgba(5, 150, 105, 0.1) 50%, rgba(22, 163, 74, 0.1) 75%, rgba(255, 255, 255, 0.1) 100%)",
      },
    },
  },
  plugins: [],
};
