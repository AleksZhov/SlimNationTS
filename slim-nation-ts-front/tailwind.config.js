/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "main-page-bgnd":"url('/src/image/home-page-bgnd.jpg')"
      }
    },
  },
  plugins: [],
}
