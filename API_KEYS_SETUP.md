# API Keys Setup - Quick Reference

This is a quick reference guide for getting all your API keys. For detailed instructions, see `DEPLOYMENT_GUIDE.md`.

## What You Need

| Service | Key Name | Where to Find | Starts With |
|---------|----------|---------------|-------------|
| Sanity | Project ID | sanity.io → Settings → API | (alphanumeric) |
| Sanity | Dataset | sanity.io → Settings → API | `production` |
| Stripe | Publishable Key | stripe.com → Developers → API Keys | `pk_test_` or `pk_live_` |
| Stripe | Secret Key | stripe.com → Developers → API Keys | `sk_test_` or `sk_live_` |
| Resend | API Key | resend.com → API Keys | `re_` |

## Step-by-Step

### 1. Sanity CMS

```
1. Go to https://sanity.io
2. Sign up or log in
3. Create a new project named "Way Trades"
4. Click Settings (gear icon)
5. Click "API" in left sidebar
6. Copy your Project ID
7. Note your Dataset (usually "production")
```

**Add to `.env.local`:**
```
NUXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NUXT_PUBLIC_SANITY_DATASET=production
```

### 2. Stripe

```
1. Go to https://stripe.com
2. Sign up or log in
3. Click "Developers" (top right)
4. Click "API Keys" in left sidebar
5. Copy both keys (test keys for now)
```

**Add to `.env.local`:**
```
NUXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
```

### 3. Resend

```
1. Go to https://resend.com
2. Sign up or log in
3. Click "API Keys" in left sidebar
4. Click "Create API Key"
5. Copy your API key
```

**Add to `.env.local`:**
```
NUXT_RESEND_API_KEY=re_your_key_here
```

### 4. Site URL

```
NUXT_PUBLIC_SITE_URL=https://your-domain.com
```

(Use `http://localhost:3000` for local development)

## Your `.env.local` File

```
# Sanity CMS
NUXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NUXT_PUBLIC_SANITY_DATASET=production

# Stripe (use test keys first!)
NUXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret

# Resend Email
NUXT_RESEND_API_KEY=re_your_resend_key

# Site URL
NUXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Testing Locally

1. Create `.env.local` with the keys above
2. Run `npm install`
3. Run `npm run dev`
4. Visit `http://localhost:3000`

## Deploying to Vercel

1. Push your code to GitHub (don't include `.env.local`)
2. Go to vercel.com
3. Import your GitHub repository
4. Add the same environment variables in Vercel dashboard
5. Click Deploy

## Important Notes

⚠️ **Never commit `.env.local` to Git!** It's already in `.gitignore`

⚠️ **Use test keys first** (pk_test_, sk_test_) before switching to live keys

⚠️ **Keep your Secret Keys private!** Never share them or put them in public code

## Need Help?

- Sanity docs: https://www.sanity.io/docs
- Stripe docs: https://stripe.com/docs
- Resend docs: https://resend.com/docs
- Nuxt docs: https://nuxt.com/docs
