/** @type {import('tailwindcss').Config} */
export default {
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
         'secondary' : '0 2px 15px -4px #F1A501'
      },
      fontFamily: {
        volkhov: ['Volkhov', 'serif'], // Add Volkhov to the font stack
        graieste: ['Graieste', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

