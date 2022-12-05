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
      'sono': ['Sono', 'sans-serif'],

      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    container: {
      padding: {
        default: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#242824',
        secondary: '#F5E6E0',
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      backgroundImage: {
        hero: "url('./assets/homePages/hero/hero.jpg')"
      }
    },
  },
  plugins: [],
}
