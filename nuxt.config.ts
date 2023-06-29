// https://nuxt.com/docs/api/configuration/nuxt-config
import type { IntlifyModuleOptions } from '@intlify/nuxt3'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vite-pwa/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/eslint-module',
    'nuxt-headlessui',
    '@intlify/nuxt3',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxt/image',
  ],
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
  },
  unocss: {
    preflight: true,
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt Vite PWA',
      short_name: 'NuxtVitePWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
  headlessui: {
    prefix: '',
  },
  intlify: {
    localeDir: 'lang',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'id'],
    },
  },
  image: {
    cloudinary: {
      // baseURL: 'https://res.cloudinary.com/<your-cloud-name>/image/upload/<mapping-folder>'
      baseURL: 'https://res.cloudinary.com/dlgp7anbd/image/upload/v1682049469/',
    },
  },

})
