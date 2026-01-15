# Way Trades - Marketing Funnel Website

A high-performance, feature-rich marketing funnel website built with Nuxt 3, Sanity CMS, Stripe, and Resend.

## Features

- **Hero Section** - Engaging landing page with mission statement
- **Live Trading Schedule** - Daily 9:20 AM EST trading sessions
- **Membership Pricing** - Free vs VIP comparison with Whop integration
- **Free Courses** - YouTube video courses for beginners
- **Alpha Futures Affiliate** - Prop firm partnership with discount code
- **Social Media Links** - Instagram, YouTube, TikTok integration
- **Marketing Funnels** - Lead magnets, upsells, thank you pages
- **Email Automation** - Resend integration for automated sequences
- **Stripe Checkout** - Secure payment processing
- **Sanity CMS** - Headless CMS for content management

## Tech Stack

- **Framework**: Nuxt 3 with TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Payments**: Stripe
- **Email**: Resend
- **Icons**: Lucide React / Nuxt Icon
- **Deployment**: Vercel / Netlify

## Project Structure

```
way-trades-nuxt/
├── app/
│   └── app.vue                 # Main app component
├── assets/
│   └── css/
│       └── main.css            # Global styles
├── components/
│   ├── HeroSection.vue
│   ├── LiveTradingSection.vue
│   ├── PricingSection.vue
│   ├── CoursesSection.vue
│   ├── AlphaFuturesSection.vue
│   ├── SocialMediaSection.vue
│   └── Footer.vue
├── pages/
│   ├── index.vue               # Homepage
│   ├── lead-magnet/[slug].vue  # Lead magnet pages
│   ├── upsell/[slug].vue       # Upsell pages
│   ├── thank-you.vue           # Thank you page
│   ├── success.vue             # Purchase success page
│   └── cancel.vue              # Purchase cancel page
├── schemas/
│   ├── course.ts               # Course schema
│   ├── leadMagnet.ts           # Lead magnet schema
│   ├── upsellProduct.ts        # Upsell product schema
│   ├── emailTemplate.ts        # Email template schema
│   └── index.ts                # Schema exports
├── server/
│   └── api/
│       ├── checkout.post.ts    # Stripe checkout endpoint
│       └── email/
│           └── send.post.ts    # Email sending endpoint
├── utils/
│   ├── sanity.ts               # Sanity client
│   ├── stripe.ts               # Stripe utilities
│   └── email.ts                # Email utilities
├── nuxt.config.ts              # Nuxt configuration
├── tailwind.config.js          # Tailwind configuration
├── vercel.json                 # Vercel deployment config
├── netlify.toml                # Netlify deployment config
└── .env.example                # Environment variables template
```

## Setup Instructions

### 1. Prerequisites

- Node.js 18+ and npm
- Git account
- Sanity account (free tier available)
- Stripe account (free tier available)
- Resend account (free tier available)
- Vercel or Netlify account (free tier available)

### 2. Environment Variables

Copy `.env.example` to `.env.local` and fill in your API keys:

```bash
cp .env.example .env.local
```

Then update with your actual values:

```
NUXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NUXT_PUBLIC_SANITY_DATASET=production
NUXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
NUXT_RESEND_API_KEY=re_...
NUXT_PUBLIC_SITE_URL=https://www.waytrades.com
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site.

### 5. Build for Production

```bash
npm run build
npm run preview
```

## API Keys Setup Guide

### Sanity CMS

1. Go to [sanity.io](https://www.sanity.io)
2. Create a new project
3. Go to **Settings** → **API**
4. Copy your **Project ID** and **Dataset name**
5. Add to `.env.local`:
   - `NUXT_PUBLIC_SANITY_PROJECT_ID`
   - `NUXT_PUBLIC_SANITY_DATASET`

### Stripe

1. Go to [stripe.com](https://www.stripe.com)
2. Create an account and verify email
3. Go to **Developers** → **API Keys**
4. Copy your **Publishable Key** and **Secret Key**
5. Add to `.env.local`:
   - `NUXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`

### Resend

1. Go to [resend.com](https://resend.com)
2. Create an account
3. Go to **API Keys**
4. Generate a new API key
5. Add to `.env.local`:
   - `NUXT_RESEND_API_KEY`

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your GitHub repository
4. Add environment variables in the Vercel dashboard
5. Click "Deploy"

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git" and connect your repository
4. Add environment variables in Site Settings → Build & Deploy
5. Netlify will automatically deploy

## Content Management

### Adding Courses

1. Go to your Sanity Studio (usually at `https://your-project.sanity.studio`)
2. Click on "Course" in the left sidebar
3. Click "Create" and fill in the course details
4. Publish when ready

### Creating Lead Magnets

1. In Sanity Studio, click "Lead Magnet"
2. Create a new lead magnet with:
   - Headline and subheadline
   - Benefits list
   - Download URL
   - Email sequence (optional)
3. Publish and access at `/lead-magnet/[slug]`

### Setting Up Upsells

1. In Sanity Studio, click "Upsell Product"
2. Create a product with:
   - Price and original price
   - Stripe Price ID (from your Stripe dashboard)
   - Features and benefits
   - Testimonials (optional)
3. Publish and access at `/upsell/[slug]`

## Email Automation

Email sequences are triggered automatically when users:
- Download a lead magnet
- Complete a purchase
- Sign up for the community

Customize email templates in Sanity under "Email Template".

## Troubleshooting

### Stripe Checkout Not Working
- Verify your Stripe keys are correct
- Check that your Stripe account is in test/live mode
- Ensure the price ID exists in your Stripe dashboard

### Emails Not Sending
- Check your Resend API key is valid
- Verify the email address is correct
- Check spam/promotions folder

### Sanity Content Not Loading
- Verify your project ID and dataset
- Check that your Sanity project is published
- Ensure CORS is configured in Sanity settings

## Support

For issues or questions:
- Email: support@waytrades.com
- Discord: [Join our community](https://whop.com/waytrades/free-access-c6/)

## License

© 2026 Way Trades. All rights reserved.
