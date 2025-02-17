/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',  // Black
          light: '#ffffff',    // White
        },
        secondary: {
          DEFAULT: '#111111',  // Slightly lighter black for contrast
        },
        accent: {
          DEFAULT: '#fe1100',  // Bright red
          bright: '#ff3322',   // Slightly lighter red for hover states
        },
      },
    },
  },
  plugins: [],
};