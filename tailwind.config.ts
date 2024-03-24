import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

  },
  daisyui: {
    themes: [
      {
        surveyspark: {
          primary: "#bf25ff",
          secondary: "#058ED9",
          "primary-content": "#ffffff",
          "secondary-content": "#ffffff",
          "base-100": "#F9F9F9",
        }
      }
    ]
  },
  plugins: [require('daisyui')],
};
export default config;