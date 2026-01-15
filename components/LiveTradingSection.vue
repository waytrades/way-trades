<template>
  <section class="py-16 md:py-24 bg-primary-dark/30">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto p-8 border-2 border-primary/50 rounded-xl bg-primary-dark/50 hover:border-primary transition-all duration-300">
        <!-- Headline -->
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-primary text-center">
          LIVE TRADING DAILY
        </h2>

        <!-- Description -->
        <p class="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-8">
          Join us every weekday at <span class="font-bold text-primary">9:20 AM EST</span> to watch us trade the market 
          in real-time on both TikTok and YouTube.
        </p>

        <!-- CTA Button -->
        <div class="flex justify-center">
          <button 
            @click="watchOnTikTok"
            class="btn-primary flex items-center gap-3"
          >
            <Icon name="mdi:tiktok" size="24" />
            Watch Live on TikTok
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function watchOnTikTok() {
  window.open('https://www.tiktok.com/@way_trades', '_blank')
}
</script>
