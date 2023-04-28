/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'quicksand-bold': ["QuicksandBold", "sans-serif"],
      'quicksand-medium': ["QuicksandMedium", "sans-serif"],
    },

    extend: {
      height: {
        screen: ['100vh', '100dvh'],
      },
      width: {
        screen: ['100vw', '100dvw'],
      },

      opacity: {
        15: '.15'
      },

      keyframes: {
        bounceRight: {
          '0%, 100%': {transform: 'translateX(-25%)'},
          '50%': {transform: 'translateX(0%)'},
        },
      },
      animation: {
        bounceRight: 'bounceRight 1s infinite',
      },
    },
  },
  plugins: [],
}

