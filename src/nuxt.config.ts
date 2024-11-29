import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  //...
  build: {
    transpile: ["vuetify"],
  },
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, inital-scale=1" },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.min.mjs",
          type: "module",
          defer: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.min.mjs",
          type: "module",
          defer: true,
        },
        {
          src: "https://cdn.jsdelivr.net/npm/marked/marked.min.js",
          type: "module",
          defer: true,
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/robots",
    "@nuxt/content",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
});
