import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  future: {
    hoverOnlyWhenSupported: true
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, global-require, @typescript-eslint/no-var-requires
  plugins: [require("tailwindcss-touch")()],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      },
      boxShadow: {
        "shadow-1": "box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.14)"
      },
      colors: {
        black: "#020202",
        "black-700": "rgb(2,2,2, 0.7)",
        blue: "#0156FF",
        "dark-blue": "#0047D6",
        "dark-gray": "#A2A6B0",
        "dark-white": "#F5F7FF",
        green: "#78A962",
        "light-blue": "#01A4FF",
        "light-gray": "#CACDD8",
        "light-yellow": "#FFCE4F",
        orange: "#E9A426",
        red: "#C94D3F",
        yellow: "#FFB800"
      }
    },
    screens: {
      // => @media (min-width: 1024px) { ... }
      desktop: "1280px",

      // => @media (min-width: 640px) { ... }
      laptop: "1024px",

      mobile: "480px",

      // => @media (min-width: 480px) { ... }
      tablet: "768px"
      // => @media (min-width: 1280px) { ... }
    }
  }
};
export default config;
