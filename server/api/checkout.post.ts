import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-04-10',
})

export default defineEventHandler(async (event) => {
  const { priceId, metadata } = await readBody(event)

  if (!priceId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Price ID is required',
    })
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/cancel`,
      metadata: metadata || {},
    })

    return {
      sessionId: session.id,
    }
  } catch (error) {
    console.error('Stripe error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to create checkout session',
    })
  }
})
