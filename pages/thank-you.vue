<template>
  <div class="min-h-screen bg-primary-darker flex items-center justify-center">
    <div class="container mx-auto px-4 text-center max-w-2xl">
      <!-- Success Icon -->
      <div class="mb-8">
        <div class="inline-block bg-primary/20 rounded-full p-6">
          <Icon name="mdi:check-circle" size="64" class="text-primary" />
        </div>
      </div>

      <!-- Main Message -->
      <h1 class="text-5xl md:text-6xl font-bold text-primary mb-4">
        Thank You!
      </h1>

      <p class="text-2xl text-gray-300 mb-6">
        Your request has been received.
      </p>

      <!-- Details -->
      <div class="card mb-8">
        <p class="text-gray-400 mb-4">
          We've sent the resource to:
        </p>
        <p class="text-lg font-semibold text-primary break-all">
          {{ email }}
        </p>
        <p class="text-gray-400 mt-4">
          Check your inbox and spam folder. We'll also be sending you valuable trading tips and updates.
        </p>
      </div>

      <!-- Next Steps -->
      <div class="space-y-4 mb-8">
        <h3 class="text-xl font-bold text-white mb-4">What's Next?</h3>
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <span class="text-primary font-bold">1.</span>
            <p class="text-gray-300 text-left">Download your resource from the email</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-primary font-bold">2.</span>
            <p class="text-gray-300 text-left">Join our free community to connect with other traders</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-primary font-bold">3.</span>
            <p class="text-gray-300 text-left">Explore our VIP membership for advanced trading signals</p>
          </div>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/" class="btn-primary">
          Back to Home
        </NuxtLink>
        <button 
          @click="joinCommunity"
          class="btn-secondary"
        >
          Join Free Community
        </button>
      </div>

      <!-- Bonus Offer -->
      <div class="mt-12 card border-2 border-primary/50">
        <p class="text-gray-400 mb-2">Special Offer:</p>
        <p class="text-xl font-bold text-primary mb-4">
          Upgrade to VIP and get 20% off your first month
        </p>
        <button 
          @click="upgradeVip"
          class="btn-primary"
        >
          Claim Your Discount
        </button>
      </div>
    </div>

    <!-- Footer -->
    <Footer class="absolute bottom-0 w-full" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const email = computed(() => route.query.email || 'your email')

function joinCommunity() {
  window.open('https://whop.com/waytrades/free-access-c6/', '_blank')
}

function upgradeVip() {
  window.open('https://whop.com/waytrades/vip-access-60-1cb2/?utm_source=store_page&funnelId=product_7b3b2e38-8bc7-402b-9afa-d939c94b9673', '_blank')
}

useHead({
  title: 'Thank You - Way Trades',
  meta: [
    {
      name: 'description',
      content: 'Thank you for joining Way Trades! Check your email for your resource.',
    },
  ],
})
</script>
