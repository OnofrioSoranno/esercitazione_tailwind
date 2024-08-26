/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,css}"],
  theme: {
    extend: {
      backgroundImage:{
        bgHeader: "linear-gradient(to bottom, rgb(255,255,255), rgba(255,255,255,0.1)),url('/media/header_mountain.jpg')",

        bgTrees2: "url('/media/trees2.png')", 

        bgSingle: "url('/media/single.png')",

        bgOther: "url('/media/other.png')"

      },
      colors:{
        primary: '#8b0000',
        secondary: '#ececec',
        accenture: '#C67F7F',
      }
    },
  },
  plugins: [],
}

