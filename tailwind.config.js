/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        f1:"#31A0FE",
        TX1:"#F83535",
        TX01:"#A4B5B8",
        TX2:"#42424",
        TX3:"#fdc62e",
        TX4:"#F42C37",
        TX5:"#D9D9D9",
        TX6:"#3DDD6A",
        TX7:"#1376f4",
        TX8:"#D9D9D9",
        TX9:"#1F2937",
        TX10:"#273242",
        TX11:"##ffffff0d",
      },  
      backgroundImage:{
        bgl:"url('../img/cp-bg.png')",
        bg2:"url('../img/cp-bg-2.png')",
        bg3:"url('../img/payy2.png')",
        bg3:"url('../img/payy3.png')",
        
      }

    },
  },
  plugins: [],
  darkMode:'class'
}

