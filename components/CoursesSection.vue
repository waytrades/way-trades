<template>
  <section id="courses" class="py-20 md:py-32">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title">Free Educational Courses</h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Comprehensive video courses designed for beginners to build a strong, profitable foundation.
        </p>
      </div>

      <!-- Courses Grid -->
      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Beginners Course -->
        <div class="card">
          <h3 class="text-2xl font-bold mb-2">Beginners Course</h3>
          <p class="text-gray-400 mb-4">Master the fundamentals of trading</p>

          <!-- Video Thumbnail -->
          <a 
            href="https://youtu.be/cq9TnguBkH8?feature=shared" 
            target="_blank" 
            rel="noopener noreferrer"
            class="block relative group mb-4"
          >
            <div class="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
              <Icon name="mdi:play-circle" size="64" class="text-red-600 group-hover:scale-110 transition-transform" />
            </div>
          </a>

          <p class="text-gray-300 mb-4">
            Learn the essential concepts, terminology, and strategies to start your trading journey with confidence.
          </p>

          <button 
            @click="watchCourse('https://youtu.be/cq9TnguBkH8?feature=shared')"
            class="btn-secondary w-full"
          >
            Watch on YouTube
          </button>
        </div>

        <!-- Technical Analysis Course -->
        <div class="card">
          <h3 class="text-2xl font-bold mb-2">Technical Analysis Course</h3>
          <p class="text-gray-400 mb-4">Advanced chart reading and analysis techniques</p>

          <!-- Video Thumbnail -->
          <a 
            href="https://youtu.be/SLr3zwyzDno?feature=shared" 
            target="_blank" 
            rel="noopener noreferrer"
            class="block relative group mb-4"
          >
            <div class="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
              <Icon name="mdi:play-circle" size="64" class="text-red-600 group-hover:scale-110 transition-transform" />
            </div>
          </a>

          <p class="text-gray-300 mb-4">
            Dive deep into technical indicators, chart patterns, and advanced strategies to make informed trading decisions.
          </p>

          <button 
            @click="watchCourse('https://youtu.be/SLr3zwyzDno?feature=shared')"
            class="btn-secondary w-full"
          >
            Watch on YouTube
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function watchCourse(url: string) {
  window.open(url, '_blank')
}
</script>
