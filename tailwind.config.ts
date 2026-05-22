import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1B2B65",
        "navy-deep": "#0f1a3d",
        lime: "#7ED957",
        "lime-deep": "#6dc94a",
        cream: "#fafaf8",
        beige: "#f5f5f0",
      },
      fontFamily: {
        serif: ["Lora", "serif"],
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
