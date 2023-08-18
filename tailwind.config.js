// @type {import('tailwindcss').Config}
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#9C2F3A',
        gray: '#D9D9D9'
      },
      screens: {
        title: '50px',
        subtitle: '35px'
      }
    }
  },
  plugins: []
};
