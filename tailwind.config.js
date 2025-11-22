/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#184f9f",
        "primary-foreground": "#ffffff",
      },
      fontFamily: {
        customFont: ["Open Sans", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
