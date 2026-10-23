/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Yeh line 'src' ke andar ki sab files ko scan karegi
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
