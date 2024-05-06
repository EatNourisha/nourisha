/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976pc',
      xl: '1440px'
    },
    extend: {
      colors: {
        orangeNourisha: "#fe7e00",
        orangeLightNourisha: "#FFE8D1",
      }
    },
  },
  plugins: [],
}

