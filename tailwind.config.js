/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins','sans-serif']
      },
      backgroundImage: {
        'aboutbg': "url('/asset/bgsepatu.webp')",
        'about1': "url('/asset/about1.jpg')",
        
      },
    },
  },
  plugins: [],
}
