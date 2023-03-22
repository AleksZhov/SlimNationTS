/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "main-page-bgnd": "url('/src/image/home-page-bgnd.jpg')",
        "login-bgnd": "url('/src/image/login-bgnd.jpg')",
        "products-bgnd":"url('/src/image/products-bgnd.jpg')"
      }
    },
  },
  plugins: [],
}
