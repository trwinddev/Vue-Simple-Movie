// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['DM Sans', 'san-serif']
      },
      colors: {
        primary: '#f62682',
        secondary: '#6f5cf1'
      },
      minHeight: {
        '1/2': '50%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
