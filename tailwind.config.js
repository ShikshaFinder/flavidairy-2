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
        },
        accent: {
          DEFAULT: "#FAA533",
          hover: "#E8941D",
        },
        neutral: {
          DEFAULT: "#EBEBEB",
          light: "#F8F9FA",
        },
        cyan: {
          DEFAULT: "#0BA6DF",
        },
        background: "var(--bg-default)",
        "foreground-muted": "var(--text-muted)",
        // Additional semantic colors
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#0BA6DF",
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
