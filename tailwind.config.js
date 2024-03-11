/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "content-gray":"#eee",
        "green":"#42ad42",
        "red":"#ff7575",
        "light-white": "rgba(255,255,255,0.17)",
        "light-blue":"#d9dfff",
        "blue-dark":"#3f43c59e",
      },
    },
  },
  plugins: [],
}

