/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      backgroundImage: {
        eneilson:"url('/fundo.svg')",
        'nei-gradient': 'linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 33.94%, #E1D55D 40.57%)',
        'student-gradient':'linear-gradient(0deg, rgba(41,60,232,1) 1%, rgba(172,59,27,1) 100%)',
        
      },

      colors: {
       gray: {
        900:'#121214'
       }
      }
    },
  },
  plugins: [],
}
