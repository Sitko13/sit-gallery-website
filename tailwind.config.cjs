const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#2E2E2E',
        'brand-light': '#F8F9FA',
        'brand-blue': '#AEC6CF',
        'brand-pink': '#FADADD',
        'brand-green': '#C3E6CB',
        'brand-orange': '#FFDAB9',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}