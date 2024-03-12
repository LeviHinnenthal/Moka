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
          100:'#D09A7B',
          200: '#D9D9D9',
        },
        neutral: {
          100:'#ffffff',
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

