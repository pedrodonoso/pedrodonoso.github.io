// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
  devtools: { enabled: false },
  modules: [
    "nuxt-icon",
    "nuxt-svgo",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  svgo: {
    autoImportPath: "./assets/icons/",
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  routeRules: {
    "/blog/**": { ssr: false }, // static page for blog
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/transition-style",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
      ],
    },
  },
});
