const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
// const defaultTheme = require('tailwindcss/defaultTheme');
const defaultConfig = require('tailwindcss/defaultConfig');
const tailwindBootstrapGrid = require('tailwind-bootstrap-grid');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.html'],
  prefix: '',
  important: false,
  darkMode: 'media', // or 'media' or 'class'
  corePlugins: {
    container: false,
    order: false,
  },
  theme: {
    extend: {
      backgroundImage: {
        'image-logo': "url('@/img/logo.png')",
      },
      colors: {
        primary: {
          DEFAULT: 'blue',
          ...colors.blue,
        },
        gray: colors.coolGray,
        blue: {
          450: '#5F99F7',
        },
        // primary: {
        //   200: colors.fuchsia[200],
        //   DEFAULT: colors.cyan[100],
        // },
      },
      fontFamily: {
        sans: ['Noto Sans TC', ...defaultConfig.theme.fontFamily.sans],
      },
      fill: (theme) => theme('colors'),
    },
    // screens: {
    //   sm: { min: '640px', max: '767px' },
    //   md: { min: '768px', max: '1023px' },
    //   lg: { min: '1024px', max: '1279px' },
    //   xl: { min: '1280px', max: '1535px' },
    //   '2xl': { min: '1536px' },
    // },
  },
  variants: {
    extend: {
      // padding: ['hover', 'active'],
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities, theme, variants }) => {
      addBase({
        h1: {
          fontSize: theme('fontSize.2xl'),
        },
      });
      addBase({
        h2: {
          fontSize: theme('fontSize.3xl'),
          color: colors.pink['500'],
        },
      });
      addComponents(
        {
          '.btn': {
            padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
            borderRadius: theme('borderRadius.lg'),
            transition: `all .15s`,
            '&:focus': {
              outline: 'none',
            },
            '&-primary': {
              color: theme('colors.white'),
              border: `1px solid ${theme('colors.blue[500]')}`,
              backgroundColor: theme('colors.blue[500]'),
              '&:hover': {
                backgroundColor: theme('colors.blue[700]'),
              },
            },
          },
        },
        {
          variants: variants('divideColor'),
        },
      );
      addUtilities(
        {
          '.apple': {
            paddingLeft: `${theme('spacing[4]')}`,
            paddingRight: `${theme('spacing[4]')}`,
            flex: `0 0 ${100 / 3}%`,
            maxWidth: `${100 / 3}%`,
          },
        },
        ['responsive', 'hover'],
      );
    }),
    plugin(({ addUtilities, theme }) => {
      addUtilities(
        {
          '.banana': {
            paddingLeft: `${theme('spacing[4]')}`,
            paddingRight: `${theme('spacing[4]')}`,
            flex: `0 0 ${100 / 2}%`,
            maxWidth: `${100 / 2}%`,
          },
        },
        ['responsive', 'hover'],
      );
    }),
    tailwindBootstrapGrid({
      gridGutterWidth: '2rem',
    }),
  ],
};
