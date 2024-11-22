/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#091009',
        'cyber-green': '#00ff55',
        'cyber-blue': '#aaa'
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#aaa',
            h1: { color: '#00ff55' },
            h2: { color: '#00ff55' },
            h3: { color: '#00ff55' },
            h4: { color: '#00ff55' },
            strong: { color: '#00ff55' },
            code: { color: '#00ff55' },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
