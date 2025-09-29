/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          // main HTML file
    "./public/**/*.html",    // all HTML files in public
    "./src/**/*.{js,jsx,ts,tsx}" // your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
