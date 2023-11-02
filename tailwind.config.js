/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        navh:"7vh",
        bodyH:"93vh",
        height40rem:"40rem"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
      },
      padding:{
        navb:"7vh"
      },
      colors:{
        redish:"#F5385D",
        bluish:"#000031",
        navbarc:"#0E0F31",
      },
      width:{
        width40rem:"35rem",
        width30per:"33%"
      },
      animation: {
        'bounce-slow': 'bounce 2s ease 1',
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

