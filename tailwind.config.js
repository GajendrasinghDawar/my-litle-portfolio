/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{},
    extend: {
      gridTemplateColumns:{
        layout:'1fr min(65ch,100%) 1fr',
      },
    },
  },
  plugins: [],
}
