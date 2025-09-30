export default defineNuxtPlugin(() => {
  // Google Analytics 4
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Replace with your actual GA4 measurement ID
  
  // Load Google Analytics script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true
  })
  
  // Make gtag available globally
  window.gtag = gtag
  
  // Track page views on route changes
  const router = useRouter()
  router.afterEach((to) => {
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      page_path: to.path
    })
  })
})

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}
