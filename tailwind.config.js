/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['myfont', 'sans-serif'], // Daftarkan font lokal Anda
      },
    },
  },
  plugins: [],
}

