/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'dark-blue': 'hsl(240, 38%, 20%)',
      'grayish-blue': 'hsl(240, 18%, 77%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontSize: {
      'body-m': ['32px', '44px'],
    },
    fontFamily: {
      regular: ['Inter'],
      medium: ['Inter'],
      bold: ['Inter'],
    },
    fontWeight: {
      regular: 300,
      medium: 500,
      bold: 700,
    },
  },
  plugins: [],
};
