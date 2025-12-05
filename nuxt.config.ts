export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  site: {
    url: 'https://524studios.vercel.app',
    name: 'FiveTwentyFour Studios',
    description: 'Boutique web & marketing agency specializing in modern, minimal, and stylish websites that help businesses grow.',
    defaultLocale: 'en'
  },
  seo: {
    redirectToCanonicalSiteUrl: false
  },
  sitemap: {
    hostname: 'https://524studios.vercel.app',
    gzip: true,
    routes: [
      '/',
      '/#about',
      '/#services',
      '/#portfolio',
      '/#contact'
    ]
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://524studios.vercel.app/sitemap.xml'
  },
  image: {
    quality: 80,
    format: ['webp', 'avif', 'png', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    // Disable IPX completely for development
    ipx: false,
    // Use public directory for images
    domains: [],
    alias: {
      '/images': '/public/images'
    }
  },
  nitro: {
    // Optimize for static generation
    prerender: {
      crawlLinks: false,
      ignore: ['/_ipx/**']
    }
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'gsap': ['gsap'],
            'three': ['three'],
            'headlessui': ['@headlessui/vue'],
            'heroicons': ['@heroicons/vue']
          }
        }
      },
      chunkSizeWarningLimit: 1000
    }
  },
  app: {
    head: {
      title: 'FiveTwentyFour Studios - Boutique Web & Marketing Agency',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'FiveTwentyFour Studios is a boutique web & marketing agency specializing in modern, minimal, and stylish websites that help businesses grow.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#0ea5e9' },
        { name: 'msapplication-TileColor', content: '#0ea5e9' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'FiveTwentyFour Studios' },
        { property: 'og:title', content: 'FiveTwentyFour Studios - Boutique Web & Marketing Agency' },
        { property: 'og:description', content: 'Boutique web & marketing agency specializing in modern, minimal, and stylish websites that help businesses grow.' },
        { property: 'og:image', content: 'https://524studios.vercel.app/og-image.jpg' },
        { property: 'og:url', content: 'https://524studios.vercel.app' },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@fivetwentyfour' },
        { name: 'twitter:title', content: 'FiveTwentyFour Studios - Boutique Web & Marketing Agency' },
        { name: 'twitter:description', content: 'Boutique web & marketing agency specializing in modern, minimal, and stylish websites that help businesses grow.' },
        { name: 'twitter:image', content: 'https://524studios.vercel.app/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: 'https://524studios.vercel.app' }
      ],
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T9GRRD4Q');`,
          type: 'text/javascript'
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'FiveTwentyFour Studios',
            description: 'Boutique web & marketing agency specializing in modern, minimal, and stylish websites that help businesses grow.',
            url: 'https://524studios.vercel.app',
            logo: 'https://524studios.vercel.app/logo.png',
            sameAs: [
              'https://twitter.com/fivetwentyfour',
              'https://linkedin.com/company/fivetwentyfour',
              'https://instagram.com/fivetwentyfour'
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-555-0123',
              contactType: 'customer service',
              areaServed: 'US',
              availableLanguage: 'English'
            },
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'US'
            },
            service: [
              {
                '@type': 'Service',
                name: 'Web Design',
                description: 'Modern, responsive web design services'
              },
              {
                '@type': 'Service',
                name: 'Brand Strategy',
                description: 'Comprehensive brand strategy and identity design'
              },
              {
                '@type': 'Service',
                name: 'Marketing Support',
                description: 'Digital marketing and growth strategy services'
              }
            ]
          })
        }
      ]
    }
  }
})
