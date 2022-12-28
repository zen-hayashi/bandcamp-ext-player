/** @type {import('tailwindcss').Config} */

const percentageWidth = require('tailwindcss-percentage-width');
const daisyui = require('daisyui');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [percentageWidth, daisyui],
}
