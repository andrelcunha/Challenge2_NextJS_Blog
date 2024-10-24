import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#333",   
      },
      textColor: {
        primary: "#09090B",
        secondary: "#666",
        tertiary: "#71717A",
      },
      backgroundColor: {
        primary: "#fff",
      },
    },
  },
  plugins: [],
};
export default config;
