const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1c1c1c',
        'secondary': '#f6f6f1',
        'btn-primary': '#5c43f5',
        'btn-secondary': '#f5f5f0',
        'accent': '#fa7b6a',
      },
      fontFamily: {
        'title': ['var(--font-title)'],
        'body': ['var(--font-body)'],
      },
      boxShadow: {
        'strong': '10px 10px 0 0',
        'weak': '5px 5px 0 0',
        'light': '4px 4px 0 0',
      }
    },
  },
  plugins: [],
}

