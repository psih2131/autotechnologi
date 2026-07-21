// https://nuxt.com/docs/api/configuration/nuxt-config

import dotenv from 'dotenv'

dotenv.config()

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/scss/main.scss'],
  modules: ['@pinia/nuxt', 'nuxt-swiper'],

  pinia: {
    storesDirs: ['./stores'],
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || process.env.PUBLIC_API_URL || 'http://localhost:1337',
    },
  },
})