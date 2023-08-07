// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-svgo",
    ["@nuxtjs/google-fonts", {
      families: {
        Poppins: [100, 200, 300, 400, 500, 600, 700]
      }
    }]
  ],
  svgo: {
    defaultImport: 'component'
  }
})