/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",         // Main app folder ke liye
    "./src/**/*.{js,jsx,ts,tsx}",         // Aap ke naye src folder ke liye
    "./components/**/*.{js,jsx,ts,tsx}"   // Agar main root par components hain
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
