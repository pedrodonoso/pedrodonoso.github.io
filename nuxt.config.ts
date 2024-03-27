// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
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
  content: {
    markdown: {
      tags: {
        h1: "MyProseH1",
        h2: "MyProseH2",
        p: "MyProseP",
      },
    },
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
