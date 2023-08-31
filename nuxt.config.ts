// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
    "@nuxtjs/google-fonts",
		"@nuxt/content"
    // "@nuxt/image"
  ],
  svgo: {
    defaultImport: 'component'
  },
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700]
    }
  },
	app: {
		head: {
			charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
			title: 'Dananz'
		}
	}
})