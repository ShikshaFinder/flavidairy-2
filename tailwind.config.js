module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.json",
  ],
  theme: {
    extend: {
      colors: {
        // tokens used in components — adjust to your brand palette if needed
        primary: {
          DEFAULT: "#0f766e",
        },
        accent: {
          DEFAULT: "#10b981",
        },
        background: "#f8fafc",
        "foreground-muted": "#6b7280",
      },
    },
  },
  plugins: [],
};
