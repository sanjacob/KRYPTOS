// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt', "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      'Major Mono Display': true,
      'Roboto Mono': {
        wght: '100...700'
      },
      download: true
    }
  },
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
  pwa: {
    registerType: 'autoUpdate',
    registerWebManifestInRouteRules: true,
    manifest: {
      name: 'KRYPTOS',
      short_name: 'KRYPTOS',
      theme_color: '#505050',
      icons: [
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    }
  },
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt"]
})
