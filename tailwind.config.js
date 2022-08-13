/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        shadow_1: '0 0 3px rgba(255, 255, 255, 0.3)',
        shadow_2: '0 0 15px 3px rgba(0, 0, 0, 0.1)',
      },
    },
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
