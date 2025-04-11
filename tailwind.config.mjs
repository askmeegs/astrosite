/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        comic: ['Comic Sans MS', 'Comic Sans', 'cursive'],
      },
      zIndex: {
        '60': '60',
      }
    },
  },
  plugins: [],
}
