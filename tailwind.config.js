/** @type {import('tailwindcss').Config} */
module.exports = {
  // Is content ke andar apna rasta lazmi check karein
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
