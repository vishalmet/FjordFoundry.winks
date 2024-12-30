/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'custom-bg': "url('../src/assets/fjo.webp')"
      },
      screens: {
        sm: "450px",
      },
    },
  },
  plugins: [],
}