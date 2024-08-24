/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
 // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { // Add custom colors
        'light-blue': '#7ae7c7',
        cyan: '#9cdbff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui',)
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}