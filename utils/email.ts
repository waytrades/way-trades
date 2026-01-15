export interface EmailOptions {
  to: string
  subject: string
  html: string
  from?: string
}

export async function sendEmail(options: EmailOptions) {
  try {
    const response = await $fetch('/api/email/send', {
      method: 'POST',
      body: {
        to: options.to,
        subject: options.subject,
        html: options.html,
        from: options.from || 'noreply@waytrades.com',
      },
    })
    
    return response
  } catch (error) {
    console.error('Email send error:', error)
    throw error
  }
}

export async function sendWelcomeEmail(email: string, name: string) {
  const html = `
    <h1>Welcome to Way Trades, ${name}!</h1>
    <p>Thank you for joining our community. We're excited to help you on your trading journey.</p>
    <p>Check out our free resources and get started today!</p>
  `
  
  return sendEmail({
    to: email,
    subject: 'Welcome to Way Trades',
    html,
  })
}

export async function sendLeadMagnet(email: string, magnet: string) {
  const html = `
    <h1>Your Free Trading Guide</h1>
    <p>Thank you for downloading our guide: ${magnet}</p>
    <p>We'll be sending you more valuable content soon!</p>
  `
  
  return sendEmail({
    to: email,
    subject: 'Your Free Trading Guide - Way Trades',
    html,
  })
}
