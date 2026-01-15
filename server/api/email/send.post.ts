import { Resend } from 'resend'

const resend = new Resend(process.env.NUXT_RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  const { to, subject, html, from } = await readBody(event)

  if (!to || !subject || !html) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email, subject, and HTML are required',
    })
  }

  try {
    const response = await resend.emails.send({
      from: from || 'Way Trades <noreply@waytrades.com>',
      to,
      subject,
      html,
    })

    if (response.error) {
      throw new Error(response.error.message)
    }

    return {
      success: true,
      id: response.data?.id,
    }
  } catch (error) {
    console.error('Resend error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email',
    })
  }
})
