/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        "1/2": "50%",
        "3/4": "75%",
      },
      maxWidth: {
        "1/2": "50%",
        "3/4": "75%",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
