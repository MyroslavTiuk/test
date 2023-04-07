/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFFF',
      grey: '#595959',
      'light-grey': '#D9D9D9',
    },
    boxShadow: {
      box: '0px 2px 8px rgba(0, 0, 0, 0.2)',
      'box-active': '0px 2px 30px rgba(0, 0, 0, 0.2)',
    },
    extend: {},
  },
  plugins: [],
};
