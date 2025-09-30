# Deployment Guide - FiveTwentyFour Studios

## 🚀 Free Hosting Options

Your Nuxt 3 project is now optimized and ready for deployment on the best free hosting platforms:

### 1. **Vercel** (Recommended)
- **Free Tier**: Unlimited static sites, 100GB bandwidth/month
- **Features**: Automatic deployments, custom domains, edge functions
- **Setup**: 
  1. Push code to GitHub
  2. Connect repository to Vercel
  3. Deploy automatically

### 2. **Netlify**
- **Free Tier**: 100GB bandwidth/month, 300 build minutes/month
- **Features**: Form handling, split testing, edge functions
- **Setup**: 
  1. Push code to GitHub
  2. Connect repository to Netlify
  3. Deploy automatically

### 3. **GitHub Pages**
- **Free Tier**: 1GB storage, 100GB bandwidth/month
- **Features**: Free custom domain, automatic SSL
- **Setup**: 
  1. Push code to GitHub
  2. Enable GitHub Pages in repository settings
  3. GitHub Actions will deploy automatically

## 📁 Project Structure

```
524studios/
├── .output/public/          # Static build output
├── vercel.json             # Vercel deployment config
├── netlify.toml            # Netlify deployment config
├── .github/workflows/      # GitHub Actions for auto-deployment
└── DEPLOYMENT_GUIDE.md     # This guide
```

## ⚙️ Build Commands

- **Development**: `npm run dev`
- **Production Build**: `npm run build`
- **Static Generation**: `npm run generate` (for static hosting)
- **Preview**: `npm run preview`

## 🔧 Optimizations Applied

### Bundle Optimization
- Manual chunk splitting for GSAP, Three.js, Headless UI
- Increased chunk size warning limit to 1000KB
- Optimized build output for better caching

### Image Optimization
- Configured IPX for image processing
- Set up proper caching headers
- Optimized for static generation

### SEO & Performance
- Meta tags and Open Graph configured
- Sitemap and robots.txt generated
- Structured data (JSON-LD) included
- Performance optimizations applied

## 🌐 Domain Configuration

Your site is configured for `https://fivetwentyfourstudios.com`:

1. **Update DNS**: Point your domain to the hosting provider
2. **SSL Certificate**: Automatically provided by all platforms
3. **Custom Domain**: Configure in hosting platform settings

## 📊 Performance Metrics

- **Build Size**: ~28.7 MB total (11.3 MB gzipped)
- **Largest Chunk**: 649 KB (GSAP + Three.js)
- **Image Assets**: Optimized with WebP/AVIF support
- **Caching**: Long-term caching for static assets

## 🚨 Important Notes

1. **Image Optimization**: IPX is configured but may need adjustment for static hosting
2. **Bundle Size**: Consider code splitting for Three.js if needed
3. **Environment Variables**: Add any required env vars in hosting platform
4. **Analytics**: Google Analytics is configured via gtag plugin

## 🔄 Deployment Workflow

1. **Local Development**: `npm run dev`
2. **Test Build**: `npm run generate && npx serve .output/public`
3. **Push to GitHub**: `git add . && git commit -m "Deploy" && git push`
4. **Automatic Deployment**: Hosting platform builds and deploys
5. **Verify**: Check deployed site and performance

## 🆘 Troubleshooting

### Build Errors
- Check Node.js version (18+ recommended)
- Clear `.nuxt` and `.output` directories
- Run `npm ci` for clean install

### Image Issues
- Verify image paths in components
- Check IPX configuration for static hosting
- Consider using CDN for large images

### Performance Issues
- Monitor bundle size in build output
- Use browser dev tools for performance analysis
- Consider lazy loading for heavy components

## 📞 Support

For deployment issues:
1. Check hosting platform documentation
2. Review build logs in platform dashboard
3. Test locally with `npm run generate`
4. Verify all dependencies are properly installed

---

**Ready to deploy!** 🎉 Choose your preferred hosting platform and follow their setup guide.
