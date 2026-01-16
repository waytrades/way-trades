<template>
  <div class="min-h-screen bg-slate-950 text-white font-sans selection:bg-yellow-500 selection:text-slate-950">
    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-yellow-500 rounded-sm flex items-center justify-center">
            <span class="text-slate-950 font-black text-xl">W</span>
          </div>
          <span class="text-xl font-black tracking-tighter">WAY TRADES</span>
        </div>
        <div class="hidden md:flex items-center gap-8 text-sm font-bold text-gray-400">
          <a href="#strategy" class="hover:text-yellow-500 transition-colors">STRATEGY</a>
          <a href="#pricing" class="hover:text-yellow-500 transition-colors">MEMBERSHIP</a>
          <a href="#courses" class="hover:text-yellow-500 transition-colors">COURSES</a>
          <a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="bg-yellow-500 text-slate-950 px-4 py-2 rounded hover:bg-yellow-600 transition-colors">JOIN FREE</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative pt-20 pb-32 overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent -z-10"></div>
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-8xl font-black tracking-tighter mb-6">
          THE <span class="text-yellow-500">WAY</span> TO TRADING SUCCESS
        </h1>
        <p class="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Transforming traders into consistent, disciplined professionals using the mathematically proven <span class="text-white font-bold">BBR Strategy</span>.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-black py-5 px-10 rounded-lg transition-all transform hover:scale-105 text-xl shadow-[0_0_20px_rgba(234,179,8,0.3)]">
            START TRADING FOR FREE
          </a>
          <a href="#strategy" class="bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 px-10 rounded-lg transition-all border border-slate-800 text-xl">
            LEARN THE MATH
          </a>
        </div>
      </div>
    </header>

    <!-- Live Trading Section -->
    <section class="py-16 bg-slate-900/50 border-y border-slate-800">
      <div class="container mx-auto px-4">
        <div class="bg-slate-950 border-2 border-yellow-500/50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="text-center md:text-left">
            <div class="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-xs font-bold mb-4 animate-pulse">
              <div class="w-2 h-2 bg-red-500 rounded-full"></div>
              LIVE DAILY
            </div>
            <h2 class="text-3xl md:text-4xl font-black mb-4">WATCH US TRADE LIVE</h2>
            <p class="text-gray-400 text-lg max-w-xl">
              Join us every weekday at <span class="text-yellow-500 font-bold">9:20 AM EST</span> to watch the BBR Strategy applied to the live markets in real-time.
            </p>
          </div>
          <div class="flex flex-col gap-4 w-full md:w-auto">
            <a href="https://www.tiktok.com/@way_trades" target="_blank" class="flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-gray-200 transition-colors">
              <Icon name="simple-icons:tiktok" class="w-6 h-6" />
              WATCH ON TIKTOK
            </a>
            <a href="https://www.youtube.com/@waytrades" target="_blank" class="flex items-center justify-center gap-3 bg-red-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-red-700 transition-colors">
              <Icon name="simple-icons:youtube" class="w-6 h-6" />
              WATCH ON YOUTUBE
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Mathematical Superiority Section -->
    <div id="strategy">
      <MathematicalSuperiority />
    </div>

    <!-- Pricing Section -->
    <section id="pricing" class="py-24 bg-slate-950">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black mb-4">CHOOSE YOUR PATH</h2>
          <p class="text-gray-400 text-xl">From free education to professional VIP mentorship.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Free Plan -->
          <div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col">
            <h3 class="text-2xl font-bold mb-2">FREE COMMUNITY</h3>
            <div class="text-4xl font-black mb-6">$0<span class="text-sm text-gray-500 font-normal">/forever</span></div>
            <ul class="space-y-4 mb-8 flex-grow">
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-yellow-500 w-5 h-5" />
                Full Video Courses
              </li>
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-yellow-500 w-5 h-5" />
                Free Live Classes + Q&A
              </li>
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-yellow-500 w-5 h-5" />
                Trading Chat Access
              </li>
              <li class="flex items-center gap-3 text-gray-500 line-through">
                Morning Watchlists
              </li>
              <li class="flex items-center gap-3 text-gray-500 line-through">
                Live Day Trading Signals
              </li>
            </ul>
            <a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg text-center transition-colors">
              JOIN FREE
            </a>
          </div>
          <!-- VIP Plan -->
          <div class="bg-slate-900 border-2 border-yellow-500 rounded-2xl p-8 flex flex-col relative transform md:scale-105 shadow-2xl shadow-yellow-500/10">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-slate-950 text-xs font-black px-4 py-1 rounded-full">
              MOST POPULAR
            </div>
            <h3 class="text-2xl font-bold mb-2 text-yellow-500">VIP MEMBERSHIP</h3>
            <div class="text-4xl font-black mb-6">$74<span class="text-sm text-gray-500 font-normal">/month</span></div>
            <ul class="space-y-4 mb-8 flex-grow">
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-yellow-500 w-5 h-5" />
                Everything in Free
              </li>
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-yellow-500 w-5 h-5" />
                Morning Watchlists
              </li>
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-yellow-500 w-5 h-5" />
                Live Day Trading Signals
              </li>
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-yellow-500 w-5 h-5" />
                Full Access to BBR Strategy
              </li>
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-yellow-500 w-5 h-5" />
                Priority Support & Guidance
              </li>
            </ul>
            <a href="https://whop.com/waytrades/vip-access-60-1cb2/?utm_source=store_page&funnelId=product_7b3b2e38-8bc7-402b-9afa-d939c94b9673" target="_blank" class="w-full py-4 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-black rounded-lg text-center transition-colors">
              GET VIP ACCESS
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 border-t border-slate-800 bg-slate-950">
      <div class="container mx-auto px-4 text-center">
        <div class="flex items-center justify-center gap-2 mb-6">
          <div class="w-6 h-6 bg-yellow-500 rounded-sm flex items-center justify-center">
            <span class="text-slate-950 font-black text-sm">W</span>
          </div>
          <span class="text-lg font-black tracking-tighter">WAY TRADES</span>
        </div>
        <p class="text-gray-500 text-sm max-w-2xl mx-auto mb-8">
          Trading involves significant risk of loss and is not suitable for all investors. Way Trades provides educational content only and does not provide financial advice.
        </p>
        <div class="flex justify-center gap-6 text-gray-400 mb-8">
          <a href="https://www.instagram.com/way_trades" target="_blank" class="hover:text-yellow-500 transition-colors"><Icon name="simple-icons:instagram" class="w-6 h-6" /></a>
          <a href="https://www.youtube.com/@waytrades" target="_blank" class="hover:text-yellow-500 transition-colors"><Icon name="simple-icons:youtube" class="w-6 h-6" /></a>
          <a href="https://www.tiktok.com/@way_trades" target="_blank" class="hover:text-yellow-500 transition-colors"><Icon name="simple-icons:tiktok" class="w-6 h-6" /></a>
        </div>
        <p class="text-gray-600 text-xs">© 2026 Way Trades. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Nuxt 3 will automatically import the MathematicalSuperiority component
</script>
