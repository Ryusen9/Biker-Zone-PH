/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily:{
      'poppins':['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('tailwindcss-animated'),require('daisyui')],
}