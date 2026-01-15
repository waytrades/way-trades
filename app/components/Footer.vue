<template>
  <footer class="bg-primary-darker border-t border-primary/20 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <h3 class="text-xl font-bold text-primary mb-4">{{ title }}</h3>
          <p class="text-gray-400">{{ description }}</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-primary transition">Home</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary transition">Courses</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary transition">Pricing</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary transition">Community</a></li>
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
            <a v-if="socialLinks.instagram" :href="socialLinks.instagram" target="_blank" class="text-gray-400 hover:text-primary transition">
              <Icon name="mdi:instagram" size="24" />
            </a>
            <a v-if="socialLinks.youtube" :href="socialLinks.youtube" target="_blank" class="text-gray-400 hover:text-primary transition">
              <Icon name="mdi:youtube" size="24" />
            </a>
            <a v-if="socialLinks.tiktok" :href="socialLinks.tiktok" target="_blank" class="text-gray-400 hover:text-primary transition">
              <Icon name="mdi:tiktok" size="24" />
            </a>
            <a v-if="socialLinks.discord" :href="socialLinks.discord" target="_blank" class="text-gray-400 hover:text-primary transition">
              <Icon name="mdi:discord" size="24" />
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-primary/20 pt-8">
        <!-- Copyright -->
        <div class="text-center text-gray-400 mb-4">
          <p>&copy; {{ new Date().getFullYear() }} {{ title }}. All rights reserved.</p>
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
</template>

<script setup lang="ts">
import { useSiteSettings } from '~/composables/useSiteSettings'

const { fetchSettings, title, description, socialLinks } = useSiteSettings()

onMounted(async () => {
  await fetchSettings()
})
</script>
