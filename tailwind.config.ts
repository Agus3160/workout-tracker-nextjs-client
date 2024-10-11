import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        "bounce-slow":{
          "0%":{transform:"translateY(0px)"},
          "50%":{transform:"translateY(8px)"},
          "100%":{transform:"translateY(0px)"},
        }
      },
      animation:{
        "bounce-slow": "bounce-slow 3s infinite",
      }
    },
  },
  plugins: [],
};
export default config;
