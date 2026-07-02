import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050609",
        graphite: "#11141a",
        steel: "#202632",
        mist: "#f4f7fb",
        accent: "#38bdf8",
        success: "#34d399"
      },
      boxShadow: {
        glow: "0 0 48px rgba(56, 189, 248, 0.18)",
        emerald: "0 0 42px rgba(52, 211, 153, 0.16)"
      },
      backgroundImage: {
        "tech-lines":
          "linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
