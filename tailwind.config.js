/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#f97316",
        dark: "#0f172a",
        white:"#ffff"
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
