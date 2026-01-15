<template>
  <section class="py-20 md:py-32 bg-primary-dark/30">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title">Connect With Us</h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Follow us on social media for daily trading tips, market updates, and community highlights.
        </p>
      </div>

      <!-- Social Media Buttons -->
      <div class="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
        <!-- Instagram -->
        <button 
          @click="openSocial('instagram')"
          class="btn-primary flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          <Icon name="mdi:instagram" size="24" />
          Instagram
        </button>

        <!-- YouTube -->
        <button 
          @click="openSocial('youtube')"
          class="btn-primary flex items-center gap-3 bg-red-600 hover:bg-red-700"
        >
          <Icon name="mdi:youtube" size="24" />
          YouTube
        </button>

        <!-- TikTok -->
        <button 
          @click="openSocial('tiktok')"
          class="btn-primary flex items-center gap-3 bg-black hover:bg-gray-800"
        >
          <Icon name="mdi:tiktok" size="24" />
          TikTok
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const socialLinks = {
  instagram: 'https://www.instagram.com/way_trades?igsh=MXZoOWg4dGF6ZG5vYg%3D%3D&utm_source=qr',
  youtube: 'https://www.youtube.com/@waytrades',
  tiktok: 'https://www.tiktok.com/@way_trades',
}

function openSocial(platform: keyof typeof socialLinks) {
  window.open(socialLinks[platform], '_blank')
}
</script>
