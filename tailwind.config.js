/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor':'#15283c',
        'SecondariColor':'#38526e',
        'thirdColor' : '#6d7b8a'
      }
    },
  },
  plugins: [require("daisyui")],
}

