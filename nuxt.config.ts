// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    'vuetify-nuxt-module',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern-compiler',
        },
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
  compatibilityDate: '2024-12-01',
})
