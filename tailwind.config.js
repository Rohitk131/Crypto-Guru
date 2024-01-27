/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        swipeD: {
          '0%': {
            'transform': 'translateY(-100%)',
          },
          '100%' :{
            'transform': 'translateY(0%)',
          }
        },
        swipeU: {
          '0%': {
            'transform': 'translateY(0%)',
          },
          '100%' :{
            'transform': 'translateY(-100%)',
          }
        },
      },
      animation: {
        'swipe-down': 'swipeD 0.3s linear',
        'swipe-up': 'swipeU 0.3s ease-out',
      },
    },
  },
  plugins: [],
}

