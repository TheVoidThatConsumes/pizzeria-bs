/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Bungee Spice'],
        fancy: ['Dancing Script'],
        body: ['Open Sans'],
        headingAlt: ['Lora'],
        extra: ['Caveat']
      }
    },
  },
  plugins: [],
}
