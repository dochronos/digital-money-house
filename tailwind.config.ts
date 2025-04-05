import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/assets/**/*.png"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-desktop": "url('/assets/bg-desktop.webp')",
        "bg-mobile": "url('/assets/bg-mobile.png')",
        "bg-tablet": "url('/assets/bg-tablet.png')"
      },
      colors: {
        dark1: "#052A2D",
        dark2: "#151817",
        green: "#0AEB8C",
        gray1: "#D2FFEC",
        error1: "#EE3737",
        error2: "#E81010",
        select1: "#D2FFEC",
        button1: "#CECECE",
        black: "#000",
        white: "#FFF",
      },
      fontFamily: {
        "open-sans": "'Open Sans'"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      }
    }
  },
  plugins: []
};

export default config;
