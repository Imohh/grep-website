/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "/index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'port-gore-600': '#241c45',
        'tickle-me-pink-600': '#db5a7f',
        'kimberly-600': '#676099',
      },
    },
    screens: {
      'xs': '300px',
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}