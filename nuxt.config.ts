export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'FiveTwentyFour Studios - Boutique Web Design Agency',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'FiveTwentyFour Studios is a boutique web design agency specializing in modern, minimal, and stylish websites that help businesses grow.' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
