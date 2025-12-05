export default defineNuxtPlugin(() => {
  // Initialize dataLayer for Google Tag Manager
  window.dataLayer = window.dataLayer || []
  
  // Track page views on route changes
  const router = useRouter()
  router.afterEach((to) => {
    if (process.client && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_title: document.title,
        page_location: window.location.href,
        page_path: to.path
      })
    }
  })
})

declare global {
  interface Window {
    dataLayer: any[]
  }
}

