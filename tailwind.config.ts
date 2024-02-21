import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "#ebeef2",
        "primary": "#1fa45b",
        "secondary": "#f7f8fa",
        "icon-bg": "#e8f0f5"
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
