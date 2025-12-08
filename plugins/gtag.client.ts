export default defineNuxtPlugin(() => {
  // Initialize dataLayer for Google Tag Manager and Google Analytics
  window.dataLayer = window.dataLayer || []
  
  // Initialize gtag function if not already available
  if (process.client && typeof window.gtag === 'undefined') {
    window.gtag = function(...args: any[]) {
      window.dataLayer.push(arguments)
    }
  }
  
  // Track page views on route changes (for both GTM and GA4)
  const router = useRouter()
  router.afterEach((to) => {
    if (process.client) {
      // Push to dataLayer for GTM
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'page_view',
          page_title: document.title,
          page_location: window.location.href,
          page_path: to.path
        })
      }
      
      // Also send to GA4 via gtag if available
      if (window.gtag) {
        window.gtag('config', 'G-D64NZ8LT70', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: to.path
        })
      }
    }
  })
})

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

