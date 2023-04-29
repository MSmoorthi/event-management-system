/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@alphanique/ui/components/**/*.{js,vue,ts}",
    "./node_modules/@alphanique/ui/composables/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
