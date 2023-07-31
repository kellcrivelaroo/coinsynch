/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        100: '#fff6e8',
        200: '#ffe1b5',
        300: '#ffcd82',
        400: '#ffb94f',
        500: '#fbab34',
        600: '#e09422',
        700: '#ad721a',
        800: '#7a4e0c',
        900: '#472c04',
      },
      secondary: {
        100: '#f6f6f6',
        200: '#f4f3f8',
        300: '#e0deea',
        400: '#acabb7',
        500: '#8c8a97',
        600: '#716f7a',
        700: '#5f5c6b',
        800: '#4e4b59',
        900: '#33303e',
      },
      tertiary: {
        100: '#e8faf1',
        200: '#d1f6e3',
        300: '#a4edc6',
        400: '#8de8b8',
        500: '#1bd171',
        600: '#18b863',
        700: '#149e55',
        800: '#0e6b3a',
        900: '#07381e',
      },
      quartenary: {
        100: '#fff2f3',
        200: '#ffcfd0',
        300: '#ff9497',
        400: '#fa7d80',
        500: '#ec3237',
        600: '#d42d31',
        700: '#a12225',
        800: '#6e171a',
        900: '#3b0c0e',
      },
      white: '#ffffff',
      black: '#000000',
      text: '#5D6670',
      table: '#fbfbfb',
    },
    extend: {
      screens: {
        '2xs': '374px',
        '2xl': '1440px',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(8px)' },
          '50%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(8px)' },
        },
        marquee: {
          '0%': { left: '0' },
          '100%': { left: '-170%' },
        },
      },
      animation: {
        'float-1': 'float 1s ease-in-out infinite',
        'float-1.5': 'float 1.5s ease-in-out infinite',
        'float-2': 'float 2s ease-in-out infinite',
        'float-2.5': 'float 2.5s ease-in-out infinite',

        marquee: 'marquee 8s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
