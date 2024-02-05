/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#256D1B',
        secondary: '#253745',
        white: {
          main: '#FEFEFE',
        },
        gray: {
          main: '#C4C4C4',
        },
      },
      textShadow: {
        base: 'rgb(0, 0, 0) 1px 1px 2px',
      },
      boxShadow: {
        '3xl': '0 5px 5px -3px rgba(0, 0, 0, .8)',
        '3xl-hover': '0 20px 15px -8px rgba(0, 0, 0, .8)',
      },
      flex: {
        '4': '4 0 auto',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': value => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      )
    }),
  ],
}
