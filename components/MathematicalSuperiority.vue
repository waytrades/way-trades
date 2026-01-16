<template>
  <section class="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="flex justify-center mb-4">
          <Icon name="lucide:brain" class="w-12 h-12 text-yellow-500" />
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-white mb-4">
          MATH OVER HYPE
        </h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          Most traders chase high win rates. We chase <span class="font-bold text-yellow-500">Mathematical Robustness</span>. 
          Here's why a <span class="font-bold text-white">50% win rate with 1:3 Risk:Reward</span> is the ultimate trading edge.
        </p>
      </div>

      <!-- Main Comparison Grid -->
      <div class="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
        <!-- BBR Strategy Card -->
        <div class="border-2 border-yellow-500/50 hover:border-yellow-500 transition-all duration-300 bg-slate-900/50 backdrop-blur relative overflow-hidden rounded-xl">
          <div class="absolute top-0 right-0 bg-yellow-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-bl-lg">
            RECOMMENDED
          </div>
          <div class="p-6 bg-yellow-500/10 border-b border-yellow-500/20">
            <div class="flex items-center justify-center mb-2">
              <Icon name="lucide:trending-up" class="w-10 h-10 text-yellow-500" />
            </div>
            <h3 class="text-2xl font-bold text-center text-yellow-500">BBR Strategy</h3>
          </div>
          <div class="p-6 space-y-4">
            <div class="space-y-3 border-b border-slate-800 pb-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-400">Win Rate:</span>
                <span class="font-bold text-lg text-white">50%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">Risk:Reward:</span>
                <span class="font-bold text-lg text-yellow-500">1:3</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">Per Trade Expectancy:</span>
                <span class="font-bold text-lg text-green-500">+$1.00</span>
              </div>
            </div>
            <div class="space-y-2">
              <p class="text-sm font-semibold text-white">10 Trades Result:</p>
              <p class="text-3xl font-bold text-green-500">+$10 Profit</p>
              <p class="text-xs text-gray-500">(5 wins × $3) - (5 losses × $1)</p>
            </div>
            <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mt-4">
              <p class="text-sm font-semibold text-green-500 flex items-center gap-2">
                <Icon name="lucide:shield-check" class="w-4 h-4" /> High Margin for Error
              </p>
              <p class="text-xs text-gray-400 mt-1">You can be wrong 70% of the time and still be near breakeven.</p>
            </div>
          </div>
        </div>

        <!-- "Hype" Trader Card -->
        <div class="border-2 border-red-500/30 hover:border-red-500/50 transition-all duration-300 bg-slate-900/50 backdrop-blur rounded-xl">
          <div class="p-6 bg-red-500/10 border-b border-red-500/20">
            <div class="flex items-center justify-center mb-2">
              <Icon name="lucide:bar-chart-3" class="w-10 h-10 text-red-500" />
            </div>
            <h3 class="text-2xl font-bold text-center text-red-500">The "Hype" Trader</h3>
          </div>
          <div class="p-6 space-y-4">
            <div class="space-y-3 border-b border-slate-800 pb-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-400">Win Rate:</span>
                <span class="font-bold text-lg text-white">90%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">Risk:Reward:</span>
                <span class="font-bold text-lg text-red-500">1:1</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">Per Trade Expectancy:</span>
                <span class="font-bold text-lg text-orange-500">+$0.80</span>
              </div>
            </div>
            <div class="space-y-2">
              <p class="text-sm font-semibold text-white">10 Trades Result:</p>
              <p class="text-3xl font-bold text-orange-500">+$8 Profit</p>
              <p class="text-xs text-gray-500">(9 wins × $1) - (1 loss × $1)</p>
            </div>
            <div class="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mt-4">
              <p class="text-sm font-semibold text-red-500 flex items-center gap-2">
                <Icon name="lucide:x-circle" class="w-4 h-4" /> Zero Margin for Error
              </p>
              <p class="text-xs text-gray-400 mt-1">If accuracy drops to 50%, they lose everything. They must be perfect.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Insight Box -->
      <div class="max-w-4xl mx-auto mb-12">
        <div class="border-2 border-yellow-500 bg-yellow-500/5 rounded-xl p-8">
          <h3 class="text-2xl font-bold text-yellow-500 mb-4">The "Margin for Error" Advantage</h3>
          <p class="text-lg text-white mb-4">
            The BBR Strategy is superior because it is <span class="font-bold">Robust</span>. 
            In trading, you will have bad weeks. The math determines if you survive them.
          </p>
          <div class="grid md:grid-cols-2 gap-6 mt-6">
            <div class="space-y-2">
              <p class="font-bold text-yellow-500">BBR Strategy (1:3 R:R)</p>
              <p class="text-sm text-gray-400">
                If your win rate drops to <span class="text-white font-bold">40%</span>, you are <span class="text-green-500 font-bold">STILL PROFITABLE</span> (+$2 per 10 trades).
              </p>
            </div>
            <div class="space-y-2">
              <p class="font-bold text-red-500">Hype Trader (1:1 R:R)</p>
              <p class="text-sm text-gray-400">
                If their win rate drops to <span class="text-white font-bold">40%</span>, they are <span class="text-red-500 font-bold">HEAVILY LOSING</span> (-$2 per 10 trades).
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center max-w-3xl mx-auto">
        <h3 class="text-2xl font-bold text-white mb-4">Stop Chasing Perfection. Start Using Math.</h3>
        <p class="text-gray-400 mb-8">
          Join our free Discord community to watch daily live trading at 9:20 AM EST, where you'll see the 1:3 Risk:Reward model in action.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://whop.com/waytrades/free-access-c6/" 
            target="_blank"
            class="bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            Join Free Community
          </a>
          <a 
            href="https://whop.com/waytrades/vip-access-60-1cb2/?utm_source=store_page&funnelId=product_7b3b2e38-8bc7-402b-9afa-d939c94b9673" 
            target="_blank"
            class="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg border border-slate-700"
          >
            Upgrade to VIP
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No extra logic needed for this static comparison component
</script>
