import { transform } from 'typescript';

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
          '100%': { transform: 'translateX(500%)' },
        },

        leavesDrop: {
          '0%': {
            transform: 'translateY(-150%) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(50%) rotate(15deg)',
          },
          '100%': {
            transform: 'translateY(200%) rotate(-15deg)',
          },
        },

        leavesDrop2: {
          '0%': {
            transform: 'translateY(-150%) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(50%) rotate(-10deg)',
          },
          '100%': {
            transform: 'translateY(200%) rotate(10deg)',
          },
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
        leavesDrop: 'leavesDrop 6s linear infinite',
        leavesDrop2: 'leavesDrop2 8s linear infinite',
      },
    },
  },
  plugins: [],
};
