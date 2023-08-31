/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            code: {
              backgroundColor: theme('#25292e'),
              borderRadius: theme('borderRadius.sm'),
              paddingTop: theme('padding[1]'),
              paddingRight: theme('padding[1.5]'),
              paddingBottom: theme('padding[1]'),
              paddingLeft: theme('padding[1.5]'),
            },
            'code::before': {
              content: 'normal',
            },
            'code::after': {
              content: 'normal',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
