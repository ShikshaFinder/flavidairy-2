module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.json",
  ],
  theme: {
    extend: {
      colors: {
        // Orange & Blue theme colors matching CSS variables
        primary: {
          DEFAULT: "#2563eb", // Blue 600
        },
        secondary: {
          DEFAULT: "#f59e0b", // Orange 500
        },
        accent: {
          DEFAULT: "#1d4ed8", // Blue 700
        },
        tertiary: {
          DEFAULT: "#f97316", // Orange 600
        },
        background: "#fefefe", // White background
        "foreground-muted": "#6b7280",
        success: "#059669",
        warning: "#f59e0b",
        destructive: "#dc2626",
        info: "#2563eb",
      },
    },
  },
  plugins: [],
};
