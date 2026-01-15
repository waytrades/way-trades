<template>
  <section id="pricing" class="py-20 md:py-32 bg-primary-dark/50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title">Join Our Community</h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Unlock your full trading potential with our Free Community or upgrade to VIP Membership.
        </p>
      </div>

      <!-- Pricing Cards Grid -->
      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Free Community Card -->
        <div class="card relative">
          <div class="mb-6">
            <h3 class="text-3xl font-bold text-primary mb-2">FREE COMMUNITY</h3>
            <p class="text-gray-400">Perfect for beginners</p>
          </div>

          <div class="space-y-6">
            <!-- Features -->
            <div>
              <h4 class="text-lg font-semibold text-primary mb-3">INCLUDES</h4>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-start">
                  <span class="text-primary mr-3">✓</span>
                  <span>Full Video Courses</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary mr-3">✓</span>
                  <span>Motivational Insights</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary mr-3">✓</span>
                  <span>Admin Commentary</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary mr-3">✓</span>
                  <span>Free Live Classes + Q&A's</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary mr-3">✓</span>
                  <span>Trading Chat</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary mr-3">✓</span>
                  <span>Long-Term Stock Ideas</span>
                </li>
              </ul>
            </div>

            <!-- CTA Button -->
            <button 
              @click="joinFreeCommuntiy"
              class="btn-primary w-full"
            >
              Join Free Community
            </button>
          </div>
        </div>

        <!-- VIP Membership Card -->
        <div class="card relative border-2 border-primary/50 hover:border-primary">
          <div class="absolute -top-4 -right-4 bg-primary text-primary-darker px-4 py-2 rounded-full font-bold text-sm">
            MOST POPULAR
          </div>

          <div class="mb-6">
            <h3 class="text-3xl font-bold text-primary mb-2">VIP MEMBERSHIP</h3>
            <div class="text-3xl font-bold text-primary mt-4">$74<span class="text-lg">/month</span></div>
            <p class="text-gray-400 text-sm mt-2">or $210/3 months (Save 5%) • $728/year (Save 18%)</p>
          </div>

          <div class="space-y-6">
            <!-- All Features from Free + VIP Features -->
            <div>
              <h4 class="text-lg font-semibold text-primary mb-3">EVERYTHING IN FREE, PLUS:</h4>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-start">
                  <span class="text-primary mr-3">✓</span>
                  <span>Morning Watchlists</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary mr-3">✓</span>
                  <span>Swing Trade Signals</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary mr-3">✓</span>
                  <span>Options Only Channel</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary mr-3">✓</span>
                  <span>Futures Only Channel</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary mr-3">✓</span>
                  <span>Live Day Trading Signals</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary mr-3">✓</span>
                  <span>Trade Recaps</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary mr-3">✓</span>
                  <span>Bonus Charts & Analysis</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary mr-3">✓</span>
                  <span>Full Access to Our Strategy</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary mr-3">✓</span>
                  <span>Exclusive Live Classes + Q&A's</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary mr-3">✓</span>
                  <span>Priority Support & Guidance</span>
                </li>
              </ul>
            </div>

            <!-- CTA Button -->
            <button 
              @click="joinVipMembership"
              class="btn-primary w-full bg-primary hover:bg-yellow-400"
            >
              Get VIP Access
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function joinFreeCommuntiy() {
  window.open('https://whop.com/waytrades/free-access-c6/', '_blank')
}

function joinVipMembership() {
  window.open('https://whop.com/waytrades/vip-access-60-1cb2/?utm_source=store_page&funnelId=product_7b3b2e38-8bc7-402b-9afa-d939c94b9673', '_blank')
}
</script>
