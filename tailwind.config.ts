/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {
        mobile: { max: "767px" },          // Phones
        tablet: { min: "768px", max: "1439px" }, // Tablets
        desktop: "1440px",                 // Large screens
      },
    },
  },
  plugins: [],
};
