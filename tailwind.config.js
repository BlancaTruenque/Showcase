/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik-mono-one': ['Rubik Mono One', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
