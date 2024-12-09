/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        flamingo_red : '#DF6951',
        golden_yellow : '#F1A501',
        navyBlue : '#181E4B',
        grayBlue: '#5E6282'
      },
      boxShadow:{
         'primary': '0 2px 10px -1px #DF6951',
         'secondary' : '0 2px 15px -4px #F1A501',
         'ternary' : '0 2px 15px -4px #01F195',
         'custom-light': '0 6px 30px -10px rgb(89, 177, 230)',
      },
      fontFamily: {
        volkhov: ['Volkhov', 'serif'], // Add Volkhov to the font stack
        graieste: ['Graieste', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
})

