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
        bodyH:"93vh"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
      },
      padding:{
        navb:"7vh"
      },
      colors:{
        redish:"#F5385D",
      },
      width:{
        width40rem:"35rem"
      },
      animation: {
        'bounce-slow': 'bounce 2s ease 1',
      }

    },
  },
  plugins: [],
}

