/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      "logo" : ['Shadows Into Light', 'cursive'],
      'martian' : [ 'Martian Mono', 'monospace'],
      'DM': ['DM Sans', 'sans-serif'],
      'lexend' : [ 'Lexend Deca', 'sans-serif'],
      'vt323' : ['VT323', 'monospace']
    }
  },
  plugins: [],
}
