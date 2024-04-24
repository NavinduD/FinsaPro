import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'josefin-sans': ['Josefin Sans', 'sans-serif'],
    },
    colors:{
      'black':'#242424',
      'white': '#ffffff',
      'blue': '#07F1FA',
      'pink': '#8132E2',
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

