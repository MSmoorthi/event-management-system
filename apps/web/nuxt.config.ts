// @ts-nocheck
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: true,
  modules: [
    "nuxt-headlessui",
    "@nuxtjs/supabase",
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

  imports: { dirs: ["store/**"] },
  headlessui: {
    prefix: "",
  },

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
