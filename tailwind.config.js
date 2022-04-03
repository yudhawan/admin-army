module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        black: '#464255',
        red: '#db5454',
        hoveRed: '#d64040'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
