/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '2/25': '80%',
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}

