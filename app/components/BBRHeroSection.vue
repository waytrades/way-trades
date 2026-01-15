<template>
  <section class="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">


    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
      <!-- Logo/Brand -->
      <div class="mb-8 text-center">
        <h1 class="text-7xl md:text-8xl font-black text-white mb-2 drop-shadow-lg">
          WAY TRADES
        </h1>
        <p class="text-xl md:text-2xl text-primary font-bold drop-shadow-lg">
          Master The BBR Strategy
        </p>
      </div>

      <!-- Main Headline -->
      <div class="text-center mb-12 max-w-4xl">
        <h2 class="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-lg">
          Join My Live Trading &
          <span class="text-primary"> Steal My BBR Strategy</span>
        </h2>
        <p class="text-2xl md:text-3xl text-gray-300 font-bold drop-shadow-lg">
          Which Has A <span class="text-primary text-4xl">3:1 R:R</span> For Free
        </p>
      </div>

      <!-- Subheading -->
      <p class="text-lg md:text-xl text-gray-400 text-center mb-8 max-w-2xl drop-shadow-lg">
        (Watch This Video To See Proof That My BBR Strategy Delivers Consistent Results)
      </p>

      <!-- Video Placeholder -->
      <div class="mb-12 w-full max-w-2xl">
        <div class="relative bg-slate-800 rounded-lg overflow-hidden border-2 border-primary/30 aspect-video flex items-center justify-center group cursor-pointer hover:border-primary transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative z-10 text-center">
            <div class="mb-4 flex justify-center">
              <svg class="w-20 h-20 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
              </svg>
            </div>
            <p class="text-white font-bold text-lg">Your BBR Strategy Video Coming Soon</p>
            <p class="text-gray-400 text-sm mt-2">Upload your video to see it here</p>
          </div>
        </div>
      </div>

      <!-- Key Stats -->
      <div class="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12 w-full max-w-3xl">
        <div class="bg-slate-800/50 border-2 border-primary/30 rounded-lg p-6 text-center hover:border-primary transition-all duration-300 hover:scale-105">
          <div class="text-4xl font-black text-primary mb-2">3:1</div>
          <p class="text-gray-300 font-semibold">Risk to Reward Ratio</p>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-2xl mb-8">
        <a 
          href="https://whop.com/waytrades/vip-access-60-1cb2/?utm_source=store_page&funnelId=product_7b3b2e38-8bc7-402b-9afa-d939c94b9673" 
          target="_blank"
          class="flex-1 bg-primary hover:bg-primary/90 text-slate-950 font-black py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50 border-2 border-primary"
        >
          🚀 Join VIP Trading
        </a>
        <a 
          href="https://whop.com/waytrades/free-access-c6/" 
          target="_blank"
          class="flex-1 bg-slate-800 hover:bg-slate-700 text-primary font-black py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 border-2 border-primary hover:border-primary/80"
        >
          💬 Join Free Community
        </a>
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
// This component is fully self-contained and ready to use
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
