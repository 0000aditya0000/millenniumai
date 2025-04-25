/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // or wherever your files live
  ],
  theme: {
    extend: {
      fontFamily: {
        code: ['code', 'sans-serif'], // now you can use font-custom
      },
    },
  },
  plugins: [],
}
