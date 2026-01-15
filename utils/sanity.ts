import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const config = useRuntimeConfig()

export const sanityClient = createClient({
  projectId: config.public.sanityProjectId,
  dataset: config.public.sanityDataset,
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function fetchSanityData(query: string) {
  try {
    return await sanityClient.fetch(query)
  } catch (error) {
    console.error('Sanity fetch error:', error)
    throw error
  }
}
