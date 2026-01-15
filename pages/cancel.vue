<template>
  <div class="min-h-screen bg-primary-darker flex items-center justify-center">
    <div class="container mx-auto px-4 text-center max-w-2xl">
      <!-- Error Icon -->
      <div class="mb-8">
        <div class="inline-block bg-red-500/20 rounded-full p-6">
          <Icon name="mdi:alert-circle" size="64" class="text-red-500" />
        </div>
      </div>

      <!-- Main Message -->
      <h1 class="text-5xl md:text-6xl font-bold text-red-500 mb-4">
        Purchase Cancelled
      </h1>

      <p class="text-2xl text-gray-300 mb-6">
        Your purchase was not completed.
      </p>

      <!-- Details -->
      <div class="card mb-8">
        <p class="text-gray-400 mb-4">
          No charges have been made to your account. You can try again anytime.
        </p>
      </div>

      <!-- Why Cancel? -->
      <div class="space-y-4 mb-8 text-left">
        <h3 class="text-xl font-bold text-white mb-4">Having trouble?</h3>
        <ul class="space-y-2 text-gray-300">
          <li class="flex items-start gap-2">
            <span class="text-primary">→</span>
            <span>Try a different payment method</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-primary">→</span>
            <span>Check that your card details are correct</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-primary">→</span>
            <span>Contact your bank if you see any issues</span>
          </li>
        </ul>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/" class="btn-primary">
          Back to Home
        </NuxtLink>
        <button 
          @click="tryAgain"
          class="btn-secondary"
        >
          Try Purchase Again
        </button>
      </div>

      <!-- Support -->
      <div class="mt-12 card">
        <p class="text-gray-400 mb-2">Still need help?</p>
        <p class="text-gray-300 mb-4">
          Contact our support team at <span class="text-primary">support@waytrades.com</span>
        </p>
      </div>
    </div>

    <!-- Footer -->
    <Footer class="absolute bottom-0 w-full" />
  </div>
</template>

<script setup lang="ts">
function tryAgain() {
  navigateTo('/')
}

useHead({
  title: 'Purchase Cancelled - Way Trades',
  meta: [
    {
      name: 'description',
      content: 'Your purchase was cancelled. No charges were made. Try again anytime.',
    },
  ],
})
</script>
