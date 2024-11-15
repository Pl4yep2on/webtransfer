/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,vue}", // Fichiers dans le dossier `src`
    "./templates/**/*.{html,php}", // Fichiers dans le dossier `templates`
  ],
  theme: {
    extend: {
      colors: {
        NcBlack: '#171717',
        NcBlue: '#0072c3',
        NcGray: '#212121',
      },
    },
  },
  plugins: [],
}

