module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.json",
  ],
  important: true, // Force Tailwind to use !important
  theme: {
    extend: {
      colors: {
        // Blue and Orange theme colors
        primary: {
          DEFAULT: "#3B82F6", // Blue primary
          hover: "#2563EB", // Darker blue for hover
          foreground: "#FFFFFF", // White text on primary
        },
        secondary: {
          DEFAULT: "#F97316", // Orange secondary
          hover: "#EA580C", // Darker orange for hover
          foreground: "#FFFFFF", // White text on secondary
        },
        accent: {
          DEFAULT: "#F97316", // Orange accent
          hover: "#EA580C",
          foreground: "#FFFFFF",
        },
        neutral: {
          DEFAULT: "#F3F4F6", // Light neutral
          foreground: "#1E3A8A", // Dark blue text on neutral
        },
        cyan: {
          DEFAULT: "#06B6D4", // Cyan highlight
          foreground: "#FFFFFF", // White text on cyan
        },
        // Blue and Orange variants
        blue: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        orange: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
        },
        // Essential colors
        black: "#000000",
        white: "#FFFFFF",
        transparent: "transparent",
        // Map semantic colors to blue/orange theme
        success: "#10B981", // Green for success
        warning: "#F59E0B", // Amber for warning
        error: "#EF4444", // Red for error
        info: "#3B82F6", // Blue for info
      },
      boxShadow: {
        primary: "var(--shadow-primary)",
        accent: "var(--shadow-accent)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "var(--radius-sm)",
        lg: "var(--radius-lg)",
      },
    },
  },
  plugins: [],
};
