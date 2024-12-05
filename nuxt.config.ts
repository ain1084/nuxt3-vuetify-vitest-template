// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    'vuetify-nuxt-module',
  ],
  vuetify: {
    moduleOptions: {
      // module specific options
    },
    vuetifyOptions: {
      // vuetify options
      theme: {
        // dark mode
        // defaultTheme: 'dark'
      }
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
  compatibilityDate: '2024-12-01',
})
