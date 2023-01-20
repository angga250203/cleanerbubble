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
    },
  },
  plugins: [],
}
