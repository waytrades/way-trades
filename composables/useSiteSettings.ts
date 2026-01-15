import { ref, computed } from 'vue'
import { fetchSanityData, urlFor } from '~/utils/sanity'

export const useSiteSettings = () => {
  const settings = ref<any>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchSettings = async () => {
    loading.value = true
    error.value = null
    try {
      const query = `*[_type == "siteSettings"][0]`
      settings.value = await fetchSanityData(query)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch settings'
      console.error('Error fetching site settings:', err)
    } finally {
      loading.value = false
    }
  }

  const logoUrl = computed(() => {
    return settings.value?.logo ? urlFor(settings.value.logo).url() : null
  })

  const title = computed(() => settings.value?.title || 'Way Trades')
  const description = computed(() => settings.value?.description || '')
  const tagline = computed(() => settings.value?.tagline || '')
  const primaryColor = computed(() => settings.value?.primaryColor || '#D4AF37')
  const secondaryColor = computed(() => settings.value?.secondaryColor || '#1a1a1a')
  const socialLinks = computed(() => settings.value?.socialLinks || {})

  return {
    settings,
    loading,
    error,
    fetchSettings,
    logoUrl,
    title,
    description,
    tagline,
    primaryColor,
    secondaryColor,
    socialLinks,
  }
}
