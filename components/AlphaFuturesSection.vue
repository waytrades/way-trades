<template>
  <section class="py-20 md:py-32 bg-primary-dark/50">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto">
        <!-- Logo -->
        <div class="mb-8">
          <img 
            src="~/assets/alpha-futures-logo.png" 
            alt="Alpha Futures Logo" 
            class="w-20 h-20 mx-auto rounded-full drop-shadow-lg"
          />
        </div>

        <!-- Title -->
        <h2 class="section-title mb-4">
          Our Recommended Prop Firm: Alpha Futures
        </h2>

        <!-- Description -->
        <p class="text-gray-400 text-lg mb-8">
          We only partner with the best. Use our exclusive code to get the maximum discount when you sign up 
          with one of the industry's premier prop trading firms.
        </p>

        <!-- Discount Code -->
        <div class="mb-8">
          <p class="text-2xl font-bold text-gray-300 mb-2">
            Use Code: <span class="bg-primary/20 text-primary px-4 py-2 rounded-lg inline-block">WAY</span>
          </p>
          <p class="text-gray-500 text-sm">
            This code ensures you get the best available discount at the time of purchase.
          </p>
        </div>

        <!-- CTA Button -->
        <button 
          @click="signUpAlphaFutures"
          class="btn-primary text-lg px-8 py-4"
        >
          Sign Up with Alpha Futures
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function signUpAlphaFutures() {
  window.open('https://app.alpha-futures.com/signup/WAY/', '_blank')
}
</script>
