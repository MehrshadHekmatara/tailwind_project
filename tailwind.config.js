/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        "card_xl":"1200px",
        "card_md":"720px",
        "card_sm":"480px",
        "slide_xl":"900px",
        "footer_xl":"950px",
        "card_mm":"550px",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark'],
  },
}
