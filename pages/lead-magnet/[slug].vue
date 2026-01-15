<template>
  <div class="min-h-screen bg-primary-darker">
    <!-- Loading State -->
    <div v-if="pending" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p class="text-gray-400">Loading...</p>
      </div>
    </div>

    <!-- Lead Magnet Content -->
    <div v-else-if="leadMagnet" class="py-12 md:py-20">
      <div class="container mx-auto px-4 max-w-5xl">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left: Content -->
          <div class="space-y-6">
            <h1 class="text-4xl md:text-5xl font-bold text-primary">
              {{ leadMagnet.headline }}
            </h1>
            <p class="text-xl text-gray-300">
              {{ leadMagnet.subheadline }}
            </p>

            <!-- Benefits List -->
            <div class="space-y-3">
              <p class="text-lg font-semibold text-white">What You'll Get:</p>
              <ul class="space-y-2">
                <li v-for="(benefit, index) in leadMagnet.benefits" :key="index" class="flex items-start">
                  <span class="text-primary mr-3 mt-1">✓</span>
                  <span class="text-gray-300">{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <!-- CTA Button -->
            <button 
              @click="handleDownload"
              class="btn-primary text-lg px-8 py-4 w-full md:w-auto"
            >
              Get Free Access Now
            </button>
          </div>

          <!-- Right: Image -->
          <div v-if="leadMagnet.image" class="hidden md:block">
            <img 
              :src="imageUrl"
              :alt="leadMagnet.title"
              class="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <!-- Email Form (shown after initial interest) -->
        <div v-if="showEmailForm" class="mt-12 max-w-md mx-auto card">
          <h3 class="text-2xl font-bold text-primary mb-4">Get Your Free Resource</h3>
          <form @submit.prevent="submitEmail" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">First Name</label>
              <input 
                v-model="form.firstName"
                type="text"
                required
                class="w-full px-4 py-2 bg-primary-dark border border-primary/30 rounded-lg text-white focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input 
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-2 bg-primary-dark border border-primary/30 rounded-lg text-white focus:outline-none focus:border-primary"
              />
            </div>
            <button 
              type="submit"
              :disabled="submitting"
              class="btn-primary w-full disabled:opacity-50"
            >
              {{ submitting ? 'Sending...' : 'Send Me The Resource' }}
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Not Found -->
    <div v-else class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-primary mb-4">Lead Magnet Not Found</h1>
        <NuxtLink to="/" class="btn-secondary">
          Back to Home
        </NuxtLink>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { fetchSanityData, urlFor } from '~/utils/sanity'
import { sendLeadMagnet } from '~/utils/email'

const route = useRoute()
const slug = route.params.slug as string

const leadMagnet = ref<any>(null)
const pending = ref(true)
const showEmailForm = ref(false)
const submitting = ref(false)

const form = reactive({
  firstName: '',
  email: '',
})

const imageUrl = computed(() => {
  return leadMagnet.value?.image ? urlFor(leadMagnet.value.image).url() : ''
})

onMounted(async () => {
  try {
    const query = `*[_type == "leadMagnet" && slug.current == "${slug}"][0]`
    leadMagnet.value = await fetchSanityData(query)
  } catch (error) {
    console.error('Error fetching lead magnet:', error)
  } finally {
    pending.value = false
  }
})

function handleDownload() {
  showEmailForm.value = true
}

async function submitEmail() {
  submitting.value = true
  try {
    // Send welcome email
    await sendLeadMagnet(form.email, leadMagnet.value.title)
    
    // Redirect to thank you page
    await navigateTo(`/thank-you?email=${encodeURIComponent(form.email)}&magnet=${slug}`)
  } catch (error) {
    console.error('Error submitting email:', error)
    alert('There was an error. Please try again.')
  } finally {
    submitting.value = false
  }
}
</script>
