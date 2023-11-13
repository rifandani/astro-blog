const plugin = require('tailwindcss/plugin')
const forms = require('@tailwindcss/forms')
const typography = require('@tailwindcss/typography')
const animate = require('tailwindcss-animate')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '.darkmode'],
  theme: {
    extend: {
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
    },
  },
  plugins: [
    typography,
    forms,
    animate,
    plugin(({ matchUtilities, addUtilities }) => {
      matchUtilities({
        vg: (value) => ({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          [`@apply ${value.replaceAll(',', ' ')}`]: {},
        }),
      }),
        addUtilities({
          '.content-v-auto': {
            'content-visibility': 'auto',
          },
          '.content-v-hidden': {
            'content-visibility': 'hidden',
          },
          '.content-v-visible': {
            'content-visibility': 'visible',
          },
        })
    }),
  ],
}
