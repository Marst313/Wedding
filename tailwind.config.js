/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        greatVibes: ['GreatVibes-Regular', 'sans-serif'],
        miama: ['miama', 'sans-serif'],
        workSans: ['WORK-SANS', 'serif'],
      },
      keyframes: {
        goToRight: {
          '0%': { transform: 'translateX(-500%)' },
          '100%': { transform: 'translateX(500%)' }, // Corrected t9 100%
        },

        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      colors: {
        primary: '#98ADC8',
      },
      animation: {
        goToRight: 'goToRight 20s linear infinite',
      },
    },
  },
  plugins: [],
};
