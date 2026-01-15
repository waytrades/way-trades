<template>
  <div class="min-h-screen bg-primary-darker">
    <!-- Loading State -->
    <div v-if="pending" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p class="text-gray-400">Loading...</p>
      </div>
    </div>

    <!-- Upsell Content -->
    <div v-else-if="product" class="py-12 md:py-20">
      <div class="container mx-auto px-4 max-w-6xl">
        <!-- Hero Section -->
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-bold text-primary mb-4">
            {{ product.headline }}
          </h1>
          <p class="text-2xl text-gray-300 max-w-3xl mx-auto">
            {{ product.subheadline }}
          </p>
        </div>

        <!-- Product Grid -->
        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <!-- Product Image -->
          <div v-if="product.image" class="hidden md:block">
            <img 
              :src="imageUrl"
              :alt="product.title"
              class="w-full rounded-lg shadow-2xl"
            />
          </div>

          <!-- Product Details -->
          <div class="space-y-8">
            <!-- Price -->
            <div class="card">
              <div class="flex items-baseline gap-2 mb-2">
                <span class="text-4xl font-bold text-primary">${{ product.price }}</span>
                <span v-if="product.originalPrice" class="text-lg text-gray-400 line-through">
                  ${{ product.originalPrice }}
                </span>
              </div>
              <p class="text-gray-400">One-time payment</p>
            </div>

            <!-- Features -->
            <div>
              <h3 class="text-2xl font-bold text-primary mb-4">What's Included</h3>
              <ul class="space-y-3">
                <li v-for="(feature, index) in product.features" :key="index" class="flex items-start">
                  <span class="text-primary mr-3 mt-1">✓</span>
                  <span class="text-gray-300">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Benefits -->
            <div>
              <h3 class="text-2xl font-bold text-primary mb-4">Benefits</h3>
              <ul class="space-y-3">
                <li v-for="(benefit, index) in product.benefits" :key="index" class="flex items-start">
                  <span class="text-primary mr-3 mt-1">→</span>
                  <span class="text-gray-300">{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <!-- CTA Button -->
            <button 
              @click="handleCheckout"
              :disabled="checkoutLoading"
              class="btn-primary w-full text-lg py-4 disabled:opacity-50"
            >
              {{ checkoutLoading ? 'Processing...' : product.ctaText }}
            </button>

            <!-- Money-back guarantee -->
            <p class="text-center text-gray-400 text-sm">
              30-day money-back guarantee. No questions asked.
            </p>
          </div>
        </div>

        <!-- Testimonials -->
        <div v-if="product.testimonials && product.testimonials.length > 0" class="mt-20">
          <h2 class="text-4xl font-bold text-primary text-center mb-12">What Our Customers Say</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div 
              v-for="(testimonial, index) in product.testimonials" 
              :key="index"
              class="card"
            >
              <div class="flex items-center gap-1 mb-4">
                <span v-for="star in testimonial.rating" :key="star" class="text-primary">★</span>
              </div>
              <p class="text-gray-300 mb-4">{{ testimonial.content }}</p>
              <p class="font-semibold text-primary">{{ testimonial.author }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Not Found -->
    <div v-else class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-primary mb-4">Product Not Found</h1>
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
import { createCheckoutSession, redirectToCheckout } from '~/utils/stripe'

const route = useRoute()
const slug = route.params.slug as string

const product = ref<any>(null)
const pending = ref(true)
const checkoutLoading = ref(false)

const imageUrl = computed(() => {
  return product.value?.image ? urlFor(product.value.image).url() : ''
})

onMounted(async () => {
  try {
    const query = `*[_type == "upsellProduct" && slug.current == "${slug}"][0]`
    product.value = await fetchSanityData(query)
  } catch (error) {
    console.error('Error fetching product:', error)
  } finally {
    pending.value = false
  }
})

async function handleCheckout() {
  if (!product.value?.stripePriceId) {
    alert('Product configuration error. Please contact support.')
    return
  }

  checkoutLoading.value = true
  try {
    const response = await createCheckoutSession(product.value.stripePriceId, {
      productName: product.value.title,
    })
    
    await redirectToCheckout(response.sessionId)
  } catch (error) {
    console.error('Checkout error:', error)
    alert('There was an error processing your request. Please try again.')
  } finally {
    checkoutLoading.value = false
  }
}
</script>
