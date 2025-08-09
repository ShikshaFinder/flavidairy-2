module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - White and Sky Blue
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
          DEFAULT: "#0ea5e9", // Sky Blue
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        accent: {
          DEFAULT: "#0284c7", // Darker Sky Blue
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        tertiary: {
          DEFAULT: "#0369a1", // Dark Sky Blue
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
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
          DEFAULT: "#0369a1",
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
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
        "gradient-primary": "linear-gradient(135deg, #ffffff 0%, #0ea5e9 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
        "gradient-accent": "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
        "gradient-multi":
          "linear-gradient(135deg, #ffffff 0%, #0ea5e9 25%, #0284c7 50%, #0369a1 75%, #ffffff 100%)",
        "aurora-bg":
          "linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(14, 165, 233, 0.1) 25%, rgba(2, 132, 199, 0.1) 50%, rgba(3, 105, 161, 0.1) 75%, rgba(255, 255, 255, 0.1) 100%)",
      },
    },
  },
  plugins: [],
};
