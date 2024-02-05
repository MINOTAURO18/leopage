/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '8%': '8%',
      },
      maxHeight: {
        '500px': '500px',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
