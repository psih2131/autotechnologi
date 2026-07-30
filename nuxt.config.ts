// https://nuxt.com/docs/api/configuration/nuxt-config

import dotenv from 'dotenv'

dotenv.config()

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/scss/main.scss'],
  modules: ['@pinia/nuxt', 'nuxt-swiper', 'vue-yandex-maps/nuxt'],

  pinia: {
    storesDirs: ['./stores'],
  },
  
  yandexMaps: {
    apikey: 'af5a38a2-5bf8-44de-bfbe-b30e278e9df4',
    // грузим скрипт только когда монтируется карта — не ломает гидрацию при ошибке ключа
    initializeOn: 'onComponentMount',
    lang: 'ru_RU',
  },

  build: {
    transpile: ['vue-yandex-maps'],
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        typeRoots: [
          './node_modules/@types',
          './node_modules/@yandex/ymaps3-types',
        ],
      },
    },
  },

  runtimeConfig: {
    strapiToken: process.env.STRAPI_TOKEN || '',
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || process.env.PUBLIC_API_URL || 'http://localhost:1337',
    },
  },
})