<template>
  <div class="min-h-screen bg-primary-darker">
    <!-- Navigation (optional, can be added later) -->
    
    <!-- Hero Section -->
    <HeroSection />

    <!-- Live Trading Schedule -->
    <LiveTradingSection />

    <!-- Pricing Section -->
    <PricingSection />

    <!-- Courses Section -->
    <CoursesSection />

    <!-- Alpha Futures Section -->
    <AlphaFuturesSection />

    <!-- Social Media Section -->
    <SocialMediaSection />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Way Trades - Trading Education Community',
  meta: [
    {
      name: 'description',
      content: 'Join Way Trades community for consistent, disciplined, and independent trading education. Free courses, live trading, and VIP membership available.',
    },
    {
      name: 'og:title',
      content: 'Way Trades - Trading Education Community',
    },
    {
      name: 'og:description',
      content: 'Transform into a consistent, disciplined trader with Way Trades education and community.',
    },
    {
      name: 'og:type',
      content: 'website',
    },
  ],
})
</script>
