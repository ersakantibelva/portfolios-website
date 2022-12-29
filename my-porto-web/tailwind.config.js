/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'imperial-red': '#E63946',
        'honeydew': '#F1FAEE',
        'powder-blue': '#A8DADC',
        'celadon-blue': '#457B9D',
        'prussian-blue': '#1D3557'
      },
      backgroundImage: {
        'landing': "url('https://images.wallpaperscraft.com/image/single/roses_buds_bush_123464_1280x720.jpg')"
      },
      brightness: {
        25: '.25',
      }
    },
  },
  plugins: [],
}
