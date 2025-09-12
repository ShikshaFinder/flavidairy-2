module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.json",
  ],
  theme: {
    extend: {
      colors: {
        // EU-focused color palette
        primary: {
          DEFAULT: "#EF7722",
          hover: "#D66A1F",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FAA533", // Use accent color as secondary
          hover: "#E8941D",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FAA533",
          hover: "#E8941D",
          foreground: "#FFFFFF",
        },
        neutral: {
          DEFAULT: "#EBEBEB",
          light: "#F8F9FA",
          foreground: "#111827",
        },
        cyan: {
          DEFAULT: "#0BA6DF",
          foreground: "#FFFFFF",
        },
        // CSS custom property connections
        background: "var(--bg-default)",
        foreground: "var(--text-default)",
        muted: {
          DEFAULT: "var(--bg-neutral-light)",
          foreground: "var(--text-muted)",
        },
        border: "var(--border-default)",
        input: "var(--border-default)",
        ring: "var(--focus-ring)",
        // Additional semantic colors
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#0BA6DF",
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
      },
      boxShadow: {
        'primary': 'var(--shadow-primary)',
        'accent': 'var(--shadow-accent)',
      },
      borderRadius: {
        'DEFAULT': 'var(--radius)',
        'sm': 'var(--radius-sm)',
        'lg': 'var(--radius-lg)',
      },
    },
  },
  plugins: [],
};
