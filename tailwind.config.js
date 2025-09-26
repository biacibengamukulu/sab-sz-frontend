const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: {
    content: ['./{layouts,pages,components}/**/*.{js,jsx,ts,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e2eef6',
          100: '#b6d4e8',
          200: '#85b8d9',
          300: '#549cca',
          400: '#2f86be',
          DEFAULT: '#0a71b3',
          600: '#0969ac',
          700: '#075ea3',
          800: '#05549a',
          900: '#03428b',
          A100: '#b7d4ff',
          A200: '#84b5ff',
          A400: '#5196ff',
          A700: '#3787ff',
          contrast: 'white',
        },
        secondary: {
          50: '#e0f3fb',
          100: '#b3e2f5',
          200: '#80ceef',
          300: '#4dbae9',
          400: '#26ace4',
          DEFAULT: '#009ddf',
          600: '#0095db',
          700: '#008bd7',
          800: '#0081d2',
          900: '#006fca',
          A100: '#f2f9ff',
          A200: '#bfdfff',
          A400: '#8cc5ff',
          A700: '#73b8ff',
          contrast: 'white',
        },
        gray: {
          50: '#f8f8f8',
          100: '#f1f1f1',
          200: '#e2e2e2',
          300: '#d4d4d4',
          400: '#c5c5c5',
          500: '#b7b7b7',
          600: '#929292',
          700: '#6e6e6e',
          800: '#494949',
          900: '#252525',
        },
        success: {
          DEFAULT: defaultTheme.colors.green['500'],
        },
        warning: {
          DEFAULT: defaultTheme.colors.yellow['500'],
        },
      },
      fontFamily: {
        custom: ['GothamRnd-Medium', ...defaultTheme.fontFamily.sans],
        customMedium: ['GothamRnd-Medium'],
        customBold: ['GothamRnd-Bold'],
      },
      keyframes: {
        roll: {
          '0%': { opacity: '0', transform: 'translateY(-3rem) ' },
          '100%': { opacity: '1', transform: 'translateY(0rem) ' },
        },
      },
      animation: {
        roll: 'roll 1s ease-in-out',
      },
      fontSize: {
        xxs: '.5rem',
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
    },
    customForms: (theme) => ({
      default: {
        'input, textarea, multiselect, select': {
          borderRadius: theme('borderRadius.md'),
          borderWidth: theme('borderWidth.DEFAULT'),
        },
        checkbox: {
          color: theme('colors.black'),
          borderColor: theme('colors.gray.500'),
        },
      },
    }),
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    //require("@tailwindcss/custom-forms"),
    plugin(function ({ addComponents, addBase }) {
      addBase({
        div: {
          borderStyle: 'solid',
        },
      });
      const components = {
        '.h-screen-88': {
          height: '88vh',
        },
        '.h-screen-60': {
          height: '60vh',
        },
        '.h-screen-50': {
          height: '50vh',
        },
      };

      addComponents(components);
    }),
  ],
};
