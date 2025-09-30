# SEO & Analytics Setup Guide

## Overview
Your FiveTwentyFour Studios website has been fully optimized for SEO and analytics. Here's what has been implemented:

## ✅ SEO Optimizations

### 1. Meta Tags & Open Graph
- **Title**: "FiveTwentyFour Studios - Boutique Web & Marketing Agency"
- **Description**: Comprehensive meta description for search engines
- **Open Graph**: Complete OG tags for social media sharing
- **Twitter Cards**: Optimized for Twitter sharing
- **Theme Colors**: Brand colors for mobile browsers
- **Viewport**: Responsive design meta tags

### 2. Structured Data (JSON-LD)
- **Organization Schema**: Complete business information
- **Service Schema**: Web design, branding, and marketing services
- **Contact Schema**: Business contact information
- **Social Media**: Links to social profiles

### 3. Technical SEO
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Properly configured at `/robots.txt`
- **Canonical URLs**: Prevents duplicate content issues
- **Image Optimization**: Nuxt Image with WebP/AVIF support
- **Performance**: Optimized loading and compression

### 4. Image Optimization
- **Nuxt Image**: All images use optimized loading
- **WebP Format**: Modern image formats for better performance
- **Lazy Loading**: Images load as needed
- **Alt Tags**: Descriptive alt text for accessibility and SEO
- **Responsive Images**: Different sizes for different devices

## ✅ Analytics Setup

### 1. Google Analytics 4
- **Plugin**: `plugins/gtag.client.ts` for GA4 integration
- **Measurement ID**: Replace `G-XXXXXXXXXX` with your actual GA4 ID
- **Page Tracking**: Automatic page view tracking
- **Route Changes**: Tracks navigation between pages

### 2. Custom Analytics Composable
- **File**: `composables/useAnalytics.ts`
- **Events Tracked**:
  - Button clicks
  - Form submissions
  - Scroll depth
  - External link clicks
  - Portfolio filter usage
  - Time on page
  - File downloads

### 3. Event Tracking Implementation
- **Hero Section**: CTA button clicks
- **Portfolio**: Filter usage and project interactions
- **Contact Form**: Form submission tracking
- **Social Links**: External link tracking
- **Scroll Depth**: User engagement tracking

## 🔧 Configuration Files

### 1. Nuxt Configuration (`nuxt.config.ts`)
```typescript
modules: [
  '@nuxtjs/tailwindcss',
  '@nuxtjs/seo',
  '@nuxt/image',
  '@nuxtjs/sitemap',
  '@nuxtjs/robots'
]
```

### 2. SEO Modules
- **@nuxtjs/seo**: Core SEO functionality
- **@nuxt/image**: Image optimization
- **@nuxtjs/sitemap**: Automatic sitemap generation
- **@nuxtjs/robots**: Robots.txt generation

### 3. Site Configuration
- **URL**: `https://fivetwentyfourstudios.com`
- **Name**: "FiveTwentyFour Studios"
- **Description**: Boutique web & marketing agency description
- **Locale**: English (en_US)

## 📱 PWA & Mobile Optimization

### 1. Web App Manifest (`public/site.webmanifest`)
- **App Name**: "FiveTwentyFour Studios"
- **Short Name**: "524 Studios"
- **Theme Color**: Brand primary color
- **Icons**: Multiple sizes for different devices
- **Display**: Standalone mode

### 2. Mobile Meta Tags
- **Viewport**: Responsive design
- **Theme Color**: Brand colors
- **Apple Touch Icon**: iOS optimization
- **Mobile Web App**: PWA capabilities

## 🎯 Next Steps

### 1. Replace Placeholder Files
You need to create and replace these placeholder files:
- `public/favicon.ico` (16x16 or 32x32 pixels)
- `public/apple-touch-icon.png` (180x180 pixels)
- `public/favicon-32x32.png` (32x32 pixels)
- `public/favicon-16x16.png` (16x16 pixels)
- `public/android-chrome-192x192.png` (192x192 pixels)
- `public/android-chrome-512x512.png` (512x512 pixels)
- `public/og-image.jpg` (1200x630 pixels)

### 2. Update Google Analytics
1. Get your GA4 Measurement ID from Google Analytics
2. Replace `G-XXXXXXXXXX` in `plugins/gtag.client.ts`
3. Replace `G-XXXXXXXXXX` in `composables/useAnalytics.ts`

### 3. Update Business Information
Update the following in `nuxt.config.ts`:
- Phone number (currently `+1-555-0123`)
- Social media URLs
- Business address
- Contact information

### 4. Domain Configuration
Update the domain from `fivetwentyfourstudios.com` to your actual domain in:
- `nuxt.config.ts` (site.url, sitemap.hostname)
- `public/robots.txt` (sitemap URL)
- All meta tags and structured data

## 📊 Analytics Events

The following events are automatically tracked:

### User Engagement
- `button_click`: CTA button interactions
- `scroll`: Scroll depth tracking
- `portfolio_filter`: Portfolio category filtering
- `form_submit_success`: Successful form submissions
- `form_submit_error`: Failed form submissions

### Navigation
- `page_view`: Automatic page view tracking
- `external_link`: Outbound link clicks
- `file_download`: File download tracking

### Conversions
- `conversion`: Custom conversion tracking
- `timing_complete`: Page load time tracking

## 🚀 Performance Features

### 1. Image Optimization
- **Format**: WebP, AVIF, PNG, JPG
- **Quality**: 80-90% compression
- **Lazy Loading**: Images load on demand
- **Responsive**: Different sizes for different screens

### 2. Loading Optimization
- **Eager Loading**: Critical images (hero, logo)
- **Lazy Loading**: Non-critical images
- **Preload**: Important resources
- **Compression**: Optimized file sizes

### 3. SEO Performance
- **Core Web Vitals**: Optimized for Google's metrics
- **Mobile First**: Responsive design
- **Fast Loading**: Optimized assets
- **Accessibility**: Alt tags and semantic HTML

## 🔍 SEO Checklist

- ✅ Meta tags and descriptions
- ✅ Open Graph and Twitter Cards
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Image optimization
- ✅ Mobile optimization
- ✅ Performance optimization
- ✅ Analytics tracking
- ✅ Event tracking
- ✅ PWA manifest

## 📈 Monitoring & Maintenance

### 1. Google Search Console
- Submit your sitemap
- Monitor search performance
- Check for crawl errors
- Review Core Web Vitals

### 2. Google Analytics
- Monitor user behavior
- Track conversion rates
- Analyze traffic sources
- Review engagement metrics

### 3. Regular Updates
- Update content regularly
- Monitor page speed
- Check for broken links
- Update meta descriptions
- Refresh structured data

Your website is now fully optimized for SEO and analytics! 🎉
