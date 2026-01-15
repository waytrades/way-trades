<template>
  <section id="testimonials" class="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
    <!-- Decorative Elements -->
    <div class="absolute top-10 right-10 w-8 h-8 border-2 border-primary/50 animate-pulse"></div>
    <div class="absolute bottom-20 left-10 w-6 h-6 bg-primary/30 animate-bounce"></div>

    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
          But Don't Just Take My Word For It...
        </h2>
        <p class="text-xl text-gray-400">See What Our Traders Are Saying</p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-slate-800/50 border-2 border-primary/30 rounded-lg p-8 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <span v-for="i in 5" :key="i" class="text-primary text-xl">★</span>
          </div>

          <!-- Quote -->
          <p class="text-gray-300 mb-6 italic text-lg leading-relaxed">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-slate-950 font-bold text-lg">
              {{ testimonial.initials }}
            </div>
            <div>
              <p class="text-white font-bold">{{ testimonial.name }}</p>
              <p class="text-primary text-sm">{{ testimonial.achievement }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <h3 class="text-3xl md:text-4xl font-black text-white mb-8 drop-shadow-lg">
          Ready To Join The BBR Community?
        </h3>
        <div class="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
          <a 
            href="https://whop.com/waytrades/vip-access-60-1cb2/?utm_source=store_page&funnelId=product_7b3b2e38-8bc7-402b-9afa-d939c94b9673" 
            target="_blank"
            class="flex-1 bg-primary hover:bg-primary/90 text-slate-950 font-black py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50 border-2 border-primary"
          >
            🚀 Get VIP Access Now
          </a>
          <a 
            href="https://whop.com/waytrades/free-access-c6/" 
            target="_blank"
            class="flex-1 bg-slate-800 hover:bg-slate-700 text-primary font-black py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 border-2 border-primary hover:border-primary/80"
          >
            💬 Join Free First
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: 'Alex T.',
    initials: 'AT',
    quote: 'The BBR strategy changed my trading game. I went from losing money to consistently profitable in 3 months.',
    achievement: 'Passed Funded Account'
  },
  {
    name: 'Jordan M.',
    initials: 'JM',
    quote: 'Best trading community I\'ve been part of. The live sessions are incredibly valuable and the 3:1 R:R focus is game-changing.',
    achievement: '6-Figure Trader'
  },
  {
    name: 'Casey R.',
    initials: 'CR',
    quote: 'The BBR strategy is simple but effective. No complicated indicators, just pure price action. Highly recommend!',
    achievement: 'Consistent Monthly Profits'
  },
  {
    name: 'Morgan K.',
    initials: 'MK',
    quote: 'I\'ve tried many strategies, but BBR is the first one that actually works. The community support is unmatched.',
    achievement: 'Trading Full-Time'
  },
  {
    name: 'Taylor S.',
    initials: 'TS',
    quote: 'Way Trades has the best live trading sessions. You can see exactly how the BBR strategy is applied in real-time.',
    achievement: 'VIP Member'
  },
  {
    name: 'Riley P.',
    initials: 'RP',
    quote: 'Finally found a strategy that makes sense. The 3:1 R:R focus keeps me disciplined and profitable.',
    achievement: 'Consistent Winner'
  }
]
</script>
