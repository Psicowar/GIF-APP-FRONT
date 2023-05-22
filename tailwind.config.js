/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': "#22c1c3",
        'lego-yellow': "#fdbb2d",
      },
      backgroundImage: {
        'nav-texture': "url('./assets/imgs/background-navbar.jpg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ] 
}

