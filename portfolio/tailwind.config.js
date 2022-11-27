/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
      'sono': ['Sono', 'sans-serif'],

      'fredoka': ['Fredoka One', 'sans-serif'],
      'quicksand': ['Quicksand', 'sans-serif'],
      'josefin': ['Josefin Sans', 'sans-serif'],
      'michroma': ['Michroma', 'sans-serif'],
      'barlow': ['Barlow', 'sans-serif'],
      'anton': ['Anton', 'sans-serif'],
      'alice': ['Alice', 'sans-serif'],

      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
      backgroundImage: {
        'logo': "url('../assets/wallp.png')",
      },
    },
  },
  plugins: [],
}
