// @ts-nocheck
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: true,
  modules: [
    "@alphanique/ui/nuxt",
    "@nuxt/image-edge",
    "@nuxt/image-edge",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@vue-macros/nuxt",
    "@vueuse/nuxt",
    "nuxt-icon",
    "nuxt-typed-router",
  ],

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  pinia: {
    autoImports: [
      ["defineStore", "definePiniaStore"],
      "acceptHMRUpdate",
      "storeToRefs",
    ],
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dxuzmgp20/image/upload/",
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "iconify-icon",
    },
  },
});
