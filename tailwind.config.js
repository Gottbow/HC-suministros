/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'MWD':'1fr 4fr',
        'CVP': '1fr 18fr 1fr',
        'CVPDIV': 'repeat(2, auto)',
        'CVPTOP': '2fr 3fr'
      }
    },
    container: {
      center: true,
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            
          },
        },
        dark: {
          // ...
          colors: {
            
          },
        },
        // ... custom themes
      },
    }),


  ]
}

