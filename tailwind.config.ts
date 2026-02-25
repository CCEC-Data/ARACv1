import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "var(--blue-primary)",
        "yellow-accent": "var(--yellow-accent)",
        "blue-soft": "var(--blue-soft)",
        white: "var(--white)",
        "off-white": "var(--off-white)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        "card-bg": "var(--card-bg)",
        border: "var(--border)",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Cormorant Garamond", "serif"],
        sans: ["Cormorant Garamond", "serif"],
        mono: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
