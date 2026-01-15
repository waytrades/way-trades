# Way Trades - Complete Deployment Guide

This guide walks you through deploying your Way Trades website from start to finish.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Step 1: Set Up Sanity CMS](#step-1-set-up-sanity-cms)
3. [Step 2: Configure Stripe](#step-2-configure-stripe)
4. [Step 3: Set Up Resend Email](#step-3-set-up-resend-email)
5. [Step 4: Push to GitHub](#step-4-push-to-github)
6. [Step 5: Deploy to Vercel](#step-5-deploy-to-vercel)
7. [Step 6: Verify Everything Works](#step-6-verify-everything-works)

---

## Prerequisites

Before starting, make sure you have:

- ✅ GitHub account (free at [github.com](https://github.com))
- ✅ Vercel account (free at [vercel.com](https://vercel.com))
- ✅ Sanity account (free at [sanity.io](https://sanity.io))
- ✅ Stripe account (free at [stripe.com](https://stripe.com))
- ✅ Resend account (free at [resend.com](https://resend.com))
- ✅ Your custom domain (optional, but recommended)

---

## Step 1: Set Up Sanity CMS

### 1.1 Create a Sanity Project

1. Go to [sanity.io](https://sanity.io) and click **"Get started"**
2. Sign up with your email or GitHub account
3. Click **"Create Project"**
4. Fill in:
   - **Project name**: `Way Trades`
   - **Dataset name**: `production` (default)
   - **Project type**: Select "Blank project"
5. Click **"Create project"**

### 1.2 Get Your Project ID

1. In your Sanity project dashboard, click **"Settings"** (gear icon)
2. Click **"API"** in the left sidebar
3. Copy your **Project ID** (looks like: `abc123def456`)
4. Note your **Dataset** name (usually `production`)

### 1.3 Add Your Schemas to Sanity

1. In your Sanity project, click **"Manage"** → **"Plugins"**
2. You'll need to install the Sanity CLI locally:
   ```bash
   npm install -g @sanity/cli
   ```
3. In your project directory, run:
   ```bash
   sanity init
   ```
4. Follow the prompts to connect your Sanity project
5. Your schemas are already created in `/schemas` folder

### 1.4 Deploy Sanity Studio

1. In your terminal, run:
   ```bash
   sanity deploy
   ```
2. This will deploy your Sanity Studio to a public URL
3. You'll see a URL like: `https://your-project.sanity.studio`
4. Save this URL - you'll use it to manage content

---

## Step 2: Configure Stripe

### 2.1 Create a Stripe Account

1. Go to [stripe.com](https://stripe.com) and click **"Start now"**
2. Sign up with your email
3. Verify your email address
4. Complete your business information

### 2.2 Get Your API Keys

1. In your Stripe dashboard, click **"Developers"** (top right)
2. Click **"API Keys"** in the left sidebar
3. You'll see two keys:
   - **Publishable Key** (starts with `pk_live_` or `pk_test_`)
   - **Secret Key** (starts with `sk_live_` or `sk_test_`)

**⚠️ IMPORTANT**: Use `pk_test_` and `sk_test_` keys for testing first!

4. Copy both keys and save them somewhere safe

### 2.3 Create a Product in Stripe (Optional for Testing)

1. In Stripe, click **"Products"** in the left sidebar
2. Click **"Add product"**
3. Fill in:
   - **Name**: `VIP Membership`
   - **Price**: `74.00`
   - **Billing period**: `Monthly`
4. Click **"Save product"**
5. Copy the **Price ID** (looks like: `price_1234567890`)
6. You'll use this when setting up upsells in Sanity

---

## Step 3: Set Up Resend Email

### 3.1 Create a Resend Account

1. Go to [resend.com](https://resend.com) and click **"Get started"**
2. Sign up with your email
3. Verify your email address

### 3.2 Get Your API Key

1. In your Resend dashboard, click **"API Keys"** (left sidebar)
2. Click **"Create API Key"**
3. Name it: `Way Trades`
4. Copy the API key (starts with `re_`)
5. Save it somewhere safe

### 3.3 Verify Your Domain (Optional but Recommended)

1. In Resend, click **"Domains"**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `waytrades.com`)
4. Follow the DNS setup instructions
5. This allows emails to come from `noreply@waytrades.com`

---

## Step 4: Push to GitHub

### 4.1 Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click **"+"** (top right) → **"New repository"**
3. Fill in:
   - **Repository name**: `way-trades-website`
   - **Description**: `Marketing funnel website for Way Trades`
   - **Visibility**: Public (or Private if you prefer)
4. Click **"Create repository"**

### 4.2 Push Your Code to GitHub

In your terminal, in the `way-trades-nuxt` directory:

```bash
# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Way Trades website"

# Add GitHub as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**If you get an error about authentication:**
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Create a new token with `repo` permissions
3. Use the token as your password when prompted

---

## Step 5: Deploy to Vercel

### 5.1 Connect Vercel to GitHub

1. Go to [vercel.com](https://vercel.com) and log in
2. Click **"New Project"**
3. Click **"Import Git Repository"**
4. Authorize Vercel to access your GitHub account
5. Select your `way-trades-website` repository
6. Click **"Import"**

### 5.2 Add Environment Variables

1. In the Vercel import screen, scroll down to **"Environment Variables"**
2. Add each variable:

   | Variable | Value |
   |----------|-------|
   | `NUXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity Project ID |
   | `NUXT_PUBLIC_SANITY_DATASET` | `production` |
   | `NUXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Your Stripe Publishable Key |
   | `STRIPE_SECRET_KEY` | Your Stripe Secret Key |
   | `NUXT_RESEND_API_KEY` | Your Resend API Key |
   | `NUXT_PUBLIC_SITE_URL` | `https://your-domain.com` |

3. Click **"Deploy"**
4. Wait for the deployment to complete (usually 2-3 minutes)

### 5.3 Get Your Vercel URL

1. Once deployment is complete, you'll see a URL like:
   - `https://way-trades-website.vercel.app`
2. Click the URL to visit your live site!

### 5.4 Connect Your Custom Domain (Optional)

1. In Vercel, go to your project settings
2. Click **"Domains"** in the left sidebar
3. Click **"Add Domain"**
4. Enter your domain (e.g., `waytrades.com`)
5. Follow the DNS setup instructions
6. Your site will be live at your custom domain!

---

## Step 6: Verify Everything Works

### 6.1 Test the Homepage

1. Visit your Vercel URL or custom domain
2. Check that all sections load:
   - ✅ Hero section with logo
   - ✅ Live trading schedule
   - ✅ Pricing section
   - ✅ Free courses
   - ✅ Alpha Futures section
   - ✅ Social media links
   - ✅ Footer

### 6.2 Test Sanity CMS Integration

1. Go to your Sanity Studio URL
2. Create a test course:
   - Click **"Course"** → **"Create"**
   - Fill in title, description, YouTube URL
   - Click **"Publish"**
3. Go back to your website homepage
4. The course should appear in the "Free Educational Courses" section

### 6.3 Test Email Functionality

1. Go to your website
2. Create a test lead magnet in Sanity
3. Visit the lead magnet page
4. Enter your email and submit
5. Check your email inbox for the confirmation

### 6.4 Test Stripe Checkout

1. In Stripe dashboard, make sure you're in **Test Mode**
2. Create a test upsell product in Sanity with your Stripe Price ID
3. Visit the upsell page
4. Click checkout
5. Use test card: `4242 4242 4242 4242` (any future date, any CVC)
6. Complete the purchase
7. You should see the success page

---

## Troubleshooting

### Issue: "Cannot find module" errors

**Solution**: Run `npm install` again and redeploy

```bash
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### Issue: Sanity content not showing

**Solution**: Check your environment variables in Vercel

1. Go to Vercel project settings
2. Click **"Environment Variables"**
3. Verify `NUXT_PUBLIC_SANITY_PROJECT_ID` is correct
4. Redeploy by pushing a new commit to GitHub

### Issue: Stripe checkout not working

**Solution**: Verify your Stripe keys

1. Check you're using the correct publishable key
2. Verify the price ID exists in Stripe
3. Make sure you're not in test mode with live keys

### Issue: Emails not sending

**Solution**: Check Resend configuration

1. Verify your API key is correct
2. Check that your domain is verified (if using custom domain)
3. Look at Resend dashboard for error logs

---

## Next Steps

### 1. Customize Your Content

- Update the hero section text
- Add your logo to `/public/logo.png`
- Update social media links
- Add your courses and lead magnets

### 2. Set Up Email Sequences

In Sanity, create email templates for:
- Welcome emails
- Lead magnet delivery
- Upsell follow-ups
- Post-purchase sequences

### 3. Create Your First Funnel

1. Create a lead magnet in Sanity
2. Set up an email sequence
3. Create an upsell product
4. Link them together in your marketing

### 4. Monitor Performance

- Set up Google Analytics
- Track conversions in Stripe
- Monitor email opens in Resend
- Analyze traffic in Vercel

---

## Support

If you run into issues:

1. **Check the logs**: In Vercel, go to your project → Deployments → click a deployment → Logs
2. **Check Sanity errors**: In Sanity Studio, look for error messages
3. **Check Stripe**: Go to Stripe dashboard → Developers → Logs
4. **Check Resend**: Go to Resend dashboard → check email logs

---

## Congratulations! 🎉

Your Way Trades website is now live and ready to start converting leads into customers!

For questions or support, email: support@waytrades.com
