import type { Config } from "tailwindcss";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: "#0156FF",
        black: "#020202",
        "light-blue": "#01A4FF",
        "dark-blue": "#0047D6",
        "light-gray": "#CACDD8",
        "dark-gray": "#A2A6B0",
        green: "#78A962",
        red: "#C94D3F",
        "dark-white": "#F5F7FF",
        yellow: "#FFB800",
        "light-yellow": "#FFCE4F",
        orange: "#E9A426"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      boxShadow: {
        "shadow-1": "box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.14)"
      }
    },
    screens: {
      mobile: "480px",
      // => @media (min-width: 480px) { ... }
      tablet: "768px",
      // => @media (min-width: 640px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1280px"
      // => @media (min-width: 1280px) { ... }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, global-require, @typescript-eslint/no-var-requires
  plugins: [require("tailwindcss-touch")()]
};
export default config;
