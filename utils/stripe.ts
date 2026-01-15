import { loadStripe, Stripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null>

export const getStripe = () => {
  const config = useRuntimeConfig()
  
  if (!stripePromise) {
    stripePromise = loadStripe(config.public.stripePublishableKey)
  }
  
  return stripePromise
}

export async function createCheckoutSession(priceId: string, metadata?: Record<string, string>) {
  try {
    const response = await $fetch('/api/checkout', {
      method: 'POST',
      body: {
        priceId,
        metadata,
      },
    })
    
    return response
  } catch (error) {
    console.error('Checkout session error:', error)
    throw error
  }
}

export async function redirectToCheckout(sessionId: string) {
  const stripe = await getStripe()
  
  if (!stripe) {
    throw new Error('Stripe failed to load')
  }
  
  const { error } = await stripe.redirectToCheckout({
    sessionId,
  })
  
  if (error) {
    console.error('Redirect error:', error)
    throw error
  }
}
