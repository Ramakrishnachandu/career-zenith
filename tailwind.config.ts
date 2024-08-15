import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/UIPages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/UIcomponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        hover: "0 6px 12px #cbd5e1",
        active: "0 6px 12px #e2e8f0",
        card: "0px 14px 40px var(--Ev400, rgba(30, 10, 58, 0.1))",
      },
    },
  },
  plugins: [],
};
export default config;
