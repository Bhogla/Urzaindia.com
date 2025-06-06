/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'edu-sa-hand': ['"Edu SA Hand"', 'cursive'],
        sans: ['"Gill Sans"', 'sans-serif'],
      },
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'carousel': 'carousel 40s linear infinite'
      }
    },
  },
  plugins: [],
};
