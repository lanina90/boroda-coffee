/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        franklinGothicBook: 'var(--font-franklin-gothic-book)',
        franklinGothicHeavy: 'var(--font-franklin-gothic-heavy)',
      },
    },
  },
  plugins: [],
};
