<template>
  <section class="hero-gradient py-20 md:py-32 overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center text-center space-y-8">
        <!-- Logo -->
        <div class="animate-fade-in">
          <img 
            src="~/assets/logo.png" 
            alt="Way Trades Logo" 
            class="w-64 md:w-80 lg:w-96 drop-shadow-lg"
          />
        </div>

        <!-- Main Title -->
        <h1 class="section-title animate-slide-in-up animation-delay-200">
          Way Trades
        </h1>

        <!-- Tagline -->
        <p class="text-xl md:text-2xl text-gray-300 max-w-2xl animate-slide-in-up animation-delay-300">
          Join The Way to Trading Success
        </p>

        <!-- Description -->
        <p class="text-base md:text-lg text-gray-400 max-w-3xl animate-slide-in-up animation-delay-400">
          Our mission is simple: to transform traders into consistent, disciplined, and independent professionals. 
          Whether you're a beginner or a struggling intermediate, we provide the knowledge and expertise you need 
          to succeed with our guidance.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-in-up animation-delay-400">
          <button 
            @click="scrollToSection('pricing')"
            class="btn-primary"
          >
            Join Our Community
          </button>
          <button 
            @click="scrollToSection('courses')"
            class="btn-secondary"
          >
            Explore Free Courses
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
