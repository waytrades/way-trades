// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  css: ['~/assets/css/main.css'],
  
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  
  runtimeConfig: {
    public: {
      sanityProjectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID,
      sanityDataset: process.env.NUXT_PUBLIC_SANITY_DATASET || 'production',
      stripePublishableKey: process.env.NUXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      resendApiKey: process.env.NUXT_RESEND_API_KEY,
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt'],
    },
  },

  experimental: {
    payloadExtraction: false,
    renderJsonPayload: true,
  },
})
