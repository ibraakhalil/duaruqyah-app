import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "bg": "#ebeef2",
        "primary": "#1fa45b",
        "secondary": "#f7f8fa",
        "icon-bg": "#e8f0f5"
      },
    },
  },
  plugins: [],
}

export default config