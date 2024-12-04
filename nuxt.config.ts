// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module', "@nuxt/fonts", '@nuxtjs/tailwindcss'
  ],

  primevue: {
    /* Options */
    components: {
      include: '*'     
    },
    importTheme: { from: "@/themes/pgdf-theme.js" },
    usePrimeVue: true,
    options: {
      ripple: true,
      inputVariant: 'filled'
    }
  },

  css: [
    'primeicons/primeicons.css',
    '@/assets/styles/theme.scss'
  ],

  devtools: { enabled: true },
  compatibilityDate: '2024-12-04'
})