const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: {
        light: '#EFEDF9',
        DEFAULT: '#735BF2',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      green: colors.green,
      purple: colors.purple,
      defaultBlue: colors.blue
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
