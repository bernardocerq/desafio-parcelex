/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xlsm': '540px',
      'xsm': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'nav': '1780px',
    },
    fontFamily: {
      sans: ['M PLUS Rounded 1c', 'Poppins', 'sans-serif'],
      rounded: ['M PLUS Rounded 1c', 'sans-serif'],
      poppins: ['Poppins']
    },
    extend: {
      fontWeight: {
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800
      },
      fontSize: {
        xs: '0.65rem'
      },
      colors: {
        'par-primary': '#FFD700',
        'par-secondary': '#FFA500',
        'par-tertiary': '#FF6347',
        'par-quaternary': '#FF4500',
        'par-danger': '#DC143C',
        'par-success': '#00FF00',
        'par-warning': '#FFD700',
        'par-info': '#00BFFF',
        'par-light': '#F0F8FF',
        'par-dark': '#000000',
        'par-gray': '#808080',
        'par-gray-light': '#D3D3D3',
        'par-gray-lighter': '#C0C0C0',
        'par-gray-lightest': '#DCDCDC',
        'par-gray-dark': '#A9A9A9',
        'par-gray-darker': '#696969',
        'par-gray-darkest': '#2F4F4F',
      },

      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(1turn)' },
        },
        rotateOpacity: {
          '0%': {
            transform: 'rotate(0deg)',
            opacity: 0.1,
          },
          '100%': {
            transform: 'rotate(1turn)',
            opacity: 1,
          },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': {
            transform: 'translateY(10px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          },
        }
      },
      animation: {
        rotate: 'rotate ease-in 1s infinite',
        rotateOpacity1: 'rotateOpacity ease-in 1s infinite 0.1s',
        rotateOpacity2: 'rotateOpacity ease-in 1s infinite 0.2s',
        fadeIn: 'fadeIn ease-out 0.2s',
        fadeUp: 'fadeUp ease-out 0.2s'
      }
    },
  },
  plugins: [],
  safelist: ['bg-secondary', 'bg-success', 'border-success']
}
