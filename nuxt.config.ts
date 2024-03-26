// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-icon", "nuxt-svgo", "@nuxt/content"],
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
});
