/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    extend: {
      colors: {
        main: '#f9f9f9',
      },
    },
  },
  plugins: [require("daisyui")],
}