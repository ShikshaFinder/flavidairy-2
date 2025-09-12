module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.json",
  ],
  theme: {
    extend: {
      colors: {
        // ONLY the 4 required EU colors plus black and white
        primary: {
          DEFAULT: "#EF7722", // Orange primary
          hover: "#D66A1F", // Darker orange for hover
          foreground: "#FFFFFF", // White text on primary
        },
        secondary: {
          DEFAULT: "#FAA533", // Golden secondary
          hover: "#E8941D", // Darker golden for hover
          foreground: "#FFFFFF", // White text on secondary
        },
        accent: {
          DEFAULT: "#FAA533", // Same as secondary
          hover: "#E8941D",
          foreground: "#FFFFFF",
        },
        neutral: {
          DEFAULT: "#EBEBEB", // Light neutral
          foreground: "#000000", // Black text on neutral
        },
        cyan: {
          DEFAULT: "#0BA6DF", // Cyan highlight
          foreground: "#FFFFFF", // White text on cyan
        },
        // Essential colors only
        black: "#000000",
        white: "#FFFFFF",
        transparent: "transparent",
        // Map semantic colors to our 4 colors
        success: "#0BA6DF", // Use cyan for success
        warning: "#FAA533", // Use secondary for warning  
        error: "#EF7722", // Use primary for error
        info: "#0BA6DF", // Use cyan for info
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
