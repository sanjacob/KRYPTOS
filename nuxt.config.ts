// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt'
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
  pwa: {
    registerType: 'autoUpdate',
    registerWebManifestInRouteRules: true,
    manifest: {
      name: 'KRYPTOS',
      short_name: 'KRYPTOS',
      theme_color: '#505050'
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    }
  },
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt"]
})
