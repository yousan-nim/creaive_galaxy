import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontSize: {},
      fontFamily: {
        skv: ["Sukhumvit", "sans-serif"],
        qsv: ["Quicksilver", "sans-serif"],
        arb: ["Akrobat", "sans-serif"],
      },
      colors: {
       
      },
    },
  },
  plugins: [],
};
export default config;