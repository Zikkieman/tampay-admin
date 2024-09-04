/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        deepBlue: "#1D2739", // Existing
        mintGreen: "#7FF68C", // Existing
        goldenYellow: "#F3A218", // Existing
        pale: "#D0D5DD", // Existing
        limeGreen: "#41E755", // Existing
        forestGreen: "#0EB622", // Existing
        error: "#DD524D", // Existing
        tanBrown: "#645D5D", // Existing

        darkNavy: "#101928", // New
        blushPink: "#FBEAE9", // New
        crimsonRed: "#D42620", // New
        mintCream: "#E7F6EC", // New
        emeraldGreen: "#0F973D", // New
        brightYellow: "#F5B546",
      },
    },
  },
  plugins: [],
};
