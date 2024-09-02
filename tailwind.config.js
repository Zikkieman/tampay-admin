/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        deepBlue: "#1D2739",
        mintGreen: "#7FF68C",
        goldenYellow: "#F3A218",
        pale: "#D0D5DD",
        limeGreen: "#41E755",
        forestGreen: "#0EB622",
        error: "#DD524D",
        tanBrown: "#645D5D",
      },
    },
  },
  plugins: [],
};
