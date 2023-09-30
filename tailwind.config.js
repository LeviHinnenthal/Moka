/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      primary: 'Roboto',
      secondary: 'Roboto',
    },
    extend: {
      colors:{
        primary: {
          100:'#a5ffce',
          200:'#4ae290',
          300:'25c870',
        },
        neutral: {
          100:'#ffffff',
          200:'#dedee3',
          300:'#9797a1',
          400:'#595962',
          500:'#131316',
        },
        page:'#fcfcff',
      },
      backgroundImage: {
        banner: "url('/src/assets/img/bannerHome.png')",
        faq: "url('/src/assets/img/question.png')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        custom: '100%',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

