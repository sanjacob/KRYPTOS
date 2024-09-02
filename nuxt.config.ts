// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],
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
      id: 'ch.jsan.kryptos',
      name: 'KRYPTOS',
      description: 'Explore the mythical crypto puzzle at home',
      short_name: 'KRYPTOS',
      theme_color: '#505050',
      orientation: "any",
      related_applications: [],
      scope_extensions: [
        {origin: "kryptos.jsan.ch"}
      ],
      categories: ["entertainment", "games", "education"],
      dir: "auto",
      prefer_related_applications: false,
      display: "standalone",
      display_override: [
        "window-controls-overlay"
      ],
      file_handlers: [],
      handle_links: "preferred",
      edge_side_panel: {},
      protocol_handlers: [],
      shortcuts: [
        {
          name: "K1",
          url: "/k1",
          description: "Open the K1 puzzle"
        },
        {
          name: "K2",
          url: "/k2",
          description: "Open the K2 puzzle"
        },
        {
          name: "K3",
          url: "/k3",
          description: "Open the K3 puzzle"
        },
        {
          name: "K4",
          url: "/k4",
          description: "Open the K4 puzzle"
        }
      ],
      launch_handler: {
        client_mode: ["navigate-existing", "auto"]
      },
      icons: [
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      screenshots: [
        {
          src: "pwa-ss-index.png",
          sizes: "1920×1388",
          type: "image/png",
          platform: "wide"
        },
        {
          src: "pwa-ss-k1.png",
          sizes: "1920×965",
          type: "image/png",
          platform: "wide"
        },
        {
          src: "pwa-ss-k2.png",
          sizes: "1920×965",
          type: "image/png",
          platform: "wide"
        },
        {
          src: "pwa-ss-k3.png",
          sizes: "1920×965",
          type: "image/png",
          platform: "wide"
        },
        {
          src: "pwa-ss-k4.png",
          sizes: "1920×965",
          type: "image/png",
          platform: "wide"
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
