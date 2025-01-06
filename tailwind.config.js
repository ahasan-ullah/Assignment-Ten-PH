/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'text': '#0f1405',
      'background': '#fcfdf8',
      'first': '#aed23a',
      'second': '#8de594',
      'third': '#68dc98',
    },
  },
  plugins: [
    daisyui,
  ],
}