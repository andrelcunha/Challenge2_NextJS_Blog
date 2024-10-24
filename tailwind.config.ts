import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import  colors, { gray } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      colors: {
        primary: colors.pink,
        secondary: colors.gray,        
      },      
      borderColor: {
        primary: "#e6e6e6",
        secondary: "e6e6e6",
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
      },

    },
  },
  plugins: [],
};
export default config;
