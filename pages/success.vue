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
        Purchase Successful!
      </h1>

      <p class="text-2xl text-gray-300 mb-6">
        Welcome to your new trading journey.
      </p>

      <!-- Details -->
      <div class="card mb-8">
        <p class="text-gray-400 mb-4">
          Your order has been confirmed. You'll receive an email shortly with:
        </p>
        <ul class="text-left space-y-2 text-gray-300">
          <li class="flex items-start gap-2">
            <span class="text-primary">✓</span>
            <span>Access to your purchased product</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-primary">✓</span>
            <span>Login credentials and setup instructions</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-primary">✓</span>
            <span>Exclusive trading resources</span>
          </li>
        </ul>
      </div>

      <!-- Next Steps -->
      <div class="space-y-4 mb-8">
        <h3 class="text-xl font-bold text-white mb-4">What's Next?</h3>
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <span class="text-primary font-bold">1.</span>
            <p class="text-gray-300 text-left">Check your email for access details</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-primary font-bold">2.</span>
            <p class="text-gray-300 text-left">Log in and start exploring your new resources</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-primary font-bold">3.</span>
            <p class="text-gray-300 text-left">Join our community Discord for support</p>
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
          Join Our Community
        </button>
      </div>

      <!-- Support -->
      <div class="mt-12 card">
        <p class="text-gray-400 mb-2">Need help?</p>
        <p class="text-gray-300 mb-4">
          Email us at <span class="text-primary">support@waytrades.com</span> or join our Discord community
        </p>
      </div>
    </div>

    <!-- Footer -->
    <Footer class="absolute bottom-0 w-full" />
  </div>
</template>

<script setup lang="ts">
function joinCommunity() {
  window.open('https://whop.com/waytrades/free-access-c6/', '_blank')
}

useHead({
  title: 'Purchase Successful - Way Trades',
  meta: [
    {
      name: 'description',
      content: 'Your purchase was successful! Check your email for access details.',
    },
  ],
})
</script>
