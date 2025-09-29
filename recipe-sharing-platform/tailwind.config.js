/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",             // root HTML file
    "./src/**/*.{js,jsx,ts,tsx}" // all React components
  ],
  theme: {
    extend: {
      // optional: add custom colors, fonts, or animations here
      animation: {
        'spin-slow': 'spin 6s linear infinite', // optional slow spin
      },
    },
  },
  plugins: [],
}
