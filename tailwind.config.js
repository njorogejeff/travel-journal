/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif'
      },
      colors: {
        // Primary Colors
        sunsetOrange: '#F55A5A',
        gunMetal: '#2B283A',

        // Neutral Colors
        white: '#FFFFFF',
        spanishGray: '#918E9B',
        culturedGrey: '#F5F5F5',
        ghostWhite: '#F5F7FB',
      },
      screens: {
        sm: '375px',
        md: '480px',
        lg: '640px',
        xl: '768px',
        '2xl': '976px',
        '3xl': '1024px',
        '4xl': '1280px',
        '5xl': '1440px',
        '6xl': '1536px',
        '7xl': '1600px',
      },
    },
  },
  plugins: [],
}

