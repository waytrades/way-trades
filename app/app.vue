<template>
  <div class="min-h-screen bg-slate-950">
    <!-- Hero Section -->
    <BBRHeroSection />

    <!-- Features Section -->
    <BBRFeaturesSection />

    <!-- Testimonials Section -->
    <TestimonialsSection />

    <!-- Footer -->
    <footer class="bg-slate-900 border-t border-primary/20 py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <!-- Brand -->
          <div>
            <h3 class="text-2xl font-black text-primary mb-4">WAY TRADES</h3>
            <p class="text-gray-400">Master the BBR strategy and join thousands of profitable traders.</p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-primary transition">Home</a></li>
              <li><a href="#testimonials" class="text-gray-400 hover:text-primary transition">Reviews</a></li>
              <li><a href="https://whop.com/waytrades/" target="_blank" class="text-gray-400 hover:text-primary transition">Store</a></li>
              <li><a href="https://discord.gg/waytrades" target="_blank" class="text-gray-400 hover:text-primary transition">Discord</a></li>
            </ul>
          </div>

          <!-- Resources -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-primary transition">Blog</a></li>
              <li><a href="#" class="text-gray-400 hover:text-primary transition">FAQ</a></li>
              <li><a href="#" class="text-gray-400 hover:text-primary transition">Support</a></li>
              <li><a href="#" class="text-gray-400 hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          <!-- Social -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div class="flex gap-4">
              <a href="https://instagram.com/waytrades" target="_blank" class="text-gray-400 hover:text-primary transition text-2xl">📷</a>
              <a href="https://youtube.com/@waytrades" target="_blank" class="text-gray-400 hover:text-primary transition text-2xl">📺</a>
              <a href="https://tiktok.com/@waytrades" target="_blank" class="text-gray-400 hover:text-primary transition text-2xl">🎵</a>
              <a href="https://discord.gg/waytrades" target="_blank" class="text-gray-400 hover:text-primary transition text-2xl">💬</a>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-primary/20 pt-8">
          <!-- Copyright -->
          <div class="text-center text-gray-400 mb-4">
            <p>&copy; {{ new Date().getFullYear() }} Way Trades. All rights reserved.</p>
          </div>

          <!-- Disclaimer -->
          <div class="text-center text-xs text-gray-500 max-w-2xl mx-auto">
            <p>
              Disclaimer: Trading futures and options involves substantial risk of loss. Past performance is not indicative of future results. 
              This content is for educational purposes only and should not be considered as financial advice. Always consult with a financial advisor before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported by Nuxt
</script>

<style>
:root {
  --primary: #D4AF37;
  --primary-dark: #1a1a1a;
  --primary-darker: #0f0f0f;
}

body {
  @apply bg-slate-950;
}

.btn-primary {
  @apply bg-primary hover:bg-primary/90 text-slate-950 font-black py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50 border-2 border-primary;
}

.btn-secondary {
  @apply bg-slate-800 hover:bg-slate-700 text-primary font-black py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-primary hover:border-primary/80;
}
</style>
