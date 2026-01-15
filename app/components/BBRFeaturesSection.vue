<template>
  <section class="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
    <!-- Decorative Elements -->
    <div class="absolute top-20 left-10 w-8 h-8 border-2 border-primary/50 animate-pulse"></div>
    <div class="absolute bottom-10 right-20 w-6 h-6 bg-primary/30 animate-bounce"></div>

    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
          Why The BBR Strategy Works
        </h2>
        <p class="text-xl text-gray-400">Simple. Effective. Profitable.</p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="bg-slate-800/50 border-2 border-primary/30 rounded-lg p-8 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
        >
          <div class="flex items-start gap-4">
            <div class="text-4xl">{{ feature.icon }}</div>
            <div class="flex-1">
              <h3 class="text-2xl font-black text-primary mb-3">{{ feature.title }}</h3>
              <p class="text-gray-300 leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- How It Works Section -->
      <div class="bg-gradient-to-r from-primary/10 to-transparent border-2 border-primary/30 rounded-lg p-12 mb-16">
        <h3 class="text-4xl font-black text-white mb-8 drop-shadow-lg">How The BBR Strategy Works</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            class="text-center"
          >
            <div class="w-16 h-16 bg-primary text-slate-950 rounded-full flex items-center justify-center font-black text-2xl mb-4 mx-auto">
              {{ index + 1 }}
            </div>
            <h4 class="text-lg font-bold text-white mb-2">{{ step.title }}</h4>
            <p class="text-gray-300 text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <!-- Stats Showcase -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-slate-800/50 border-2 border-primary/30 rounded-lg p-8 text-center hover:border-primary transition-all duration-300 hover:scale-105">
          <div class="text-5xl font-black text-primary mb-2">3:1</div>
          <p class="text-gray-300 font-semibold mb-2">Risk to Reward Ratio</p>
          <p class="text-gray-400 text-sm">Maximize profits while minimizing risk</p>
        </div>
        <div class="bg-slate-800/50 border-2 border-primary/30 rounded-lg p-8 text-center hover:border-primary transition-all duration-300 hover:scale-105">
          <div class="text-5xl font-black text-primary mb-2">10K+</div>
          <p class="text-gray-300 font-semibold mb-2">Active Traders</p>
          <p class="text-gray-400 text-sm">Join a thriving community of profitable traders</p>
        </div>
        <div class="bg-slate-800/50 border-2 border-primary/30 rounded-lg p-8 text-center hover:border-primary transition-all duration-300 hover:scale-105">
          <div class="text-5xl font-black text-primary mb-2">24/7</div>
          <p class="text-gray-300 font-semibold mb-2">Live Trading</p>
          <p class="text-gray-400 text-sm">See the strategy in action every trading day</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: '📊',
    title: 'Price Action Based',
    description: 'No complex indicators. Just pure, clean price action analysis that works in any market condition.'
  },
  {
    icon: '⚡',
    title: 'High Risk/Reward',
    description: 'Every trade has a 3:1 minimum risk-to-reward ratio, ensuring your winners pay for your losers and more.'
  },
  {
    icon: '🎯',
    title: 'Consistent & Simple',
    description: 'The BBR strategy is easy to learn and apply. No complicated setups, just consistent execution.'
  },
  {
    icon: '📈',
    title: 'Proven Results',
    description: 'Thousands of traders have used BBR to become profitable and pass funded accounts.'
  },
  {
    icon: '🤝',
    title: 'Community Support',
    description: 'Trade alongside thousands of other BBR traders in our active Discord community.'
  },
  {
    icon: '🎓',
    title: 'Live Education',
    description: 'Watch live trading sessions every day and learn exactly how to apply the BBR strategy.'
  }
]

const steps = [
  {
    title: 'Identify',
    description: 'Spot key price levels and market structure'
  },
  {
    title: 'Plan',
    description: 'Set up your 3:1 R:R trade setup'
  },
  {
    title: 'Execute',
    description: 'Enter with discipline and precision'
  },
  {
    title: 'Profit',
    description: 'Let winners run, cut losers quick'
  }
]
</script>
