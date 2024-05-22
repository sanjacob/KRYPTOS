// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/pwa'
  ],
  css: [
    '~/assets/css/theme.css'
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.png'}
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  devtools: { enabled: true }
})
