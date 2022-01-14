module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Adam'],
      serif: ['Adam'],
      mono: ['Adam'],
      display: ['Adam'],
      body: ['Adam']
    },
    extend: {},
    screens: {

      'xs': '300px',

      'sm': '640px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}