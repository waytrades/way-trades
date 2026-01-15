<template>
  <section class="relative min-h-screen bg-gradient-to-b from-primary-darker to-primary-dark flex items-center justify-center overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 text-center max-w-4xl">
      <!-- Logo -->
      <div v-if="logoUrl" class="mb-8">
        <img 
          :src="logoUrl" 
          :alt="siteSettings.logoAlt || 'Way Trades Logo'"
          class="h-24 w-auto mx-auto drop-shadow-lg"
        />
      </div>

      <!-- Brand Name -->
      <h1 class="text-6xl md:text-7xl font-bold text-primary mb-4 drop-shadow-lg">
        {{ title }}
      </h1>

      <!-- Tagline -->
      <p v-if="tagline" class="text-2xl md:text-3xl text-gray-300 mb-8 drop-shadow-lg">
        {{ tagline }}
      </p>

      <!-- Description -->
      <p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto drop-shadow-lg">
        Join our community of traders learning to trade futures and options with discipline and strategy.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="btn-primary">
          Join Free Community
        </a>
        <a href="https://whop.com/waytrades/vip-access-60-1cb2/?utm_source=store_page&funnelId=product_7b3b2e38-8bc7-402b-9afa-d939c94b9673" target="_blank" class="btn-secondary">
          Upgrade to VIP
        </a>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-8 text-center">
        <div>
          <div class="text-4xl font-bold text-primary">10K+</div>
          <div class="text-gray-400">Community Members</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-primary">500+</div>
          <div class="text-gray-400">Trading Signals</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-primary">24/7</div>
          <div class="text-gray-400">Support</div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div class="animate-bounce">
        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSiteSettings } from '~/composables/useSiteSettings'

const { fetchSettings, logoUrl, title, tagline, siteSettings } = useSiteSettings()

onMounted(async () => {
  await fetchSettings()
})
</script>
