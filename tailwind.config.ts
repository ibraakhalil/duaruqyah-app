import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "var(--accent1)",
          2: "var(--accent2)",
        },
        "bg": "var(--bg)",
        "bg2": "var(--bg2)",
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "icon-bg": "var(--icon-bg)"
      },
    },
  },
  plugins: [],
}

export default config