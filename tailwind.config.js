/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      dark_blue: 'hsl(209, 23%, 22%)',
      very_dark_blue: 'hsl(207, 26%, 17%)',
      very_dark_blue_2: 'hsl(200, 15%, 8%)',
      dark_gray: 'hsl(0, 0%, 52%)',
      very_light_gray: 'hsl(0, 0%, 98%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      'Nunito-sans': ['Nunito Sans', 'sans-serif', 'system-ui'],
    },
  },
  plugins: [],
};
