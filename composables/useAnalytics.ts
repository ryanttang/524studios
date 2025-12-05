export const useAnalytics = () => {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (process.client) {
      const eventData = {
        event: eventName,
        event_category: 'engagement',
        event_label: parameters?.label || '',
        value: parameters?.value || 0,
        ...parameters
      }
      
      // Send to GTM via dataLayer
      if (window.dataLayer) {
        window.dataLayer.push(eventData)
      }
      
      // Send to GA4 via gtag
      if (window.gtag) {
        window.gtag('event', eventName, {
          event_category: eventData.event_category,
          event_label: eventData.event_label,
          value: eventData.value,
          ...parameters
        })
      }
    }
  }

  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (process.client) {
      const pageData = {
        event: 'page_view',
        page_title: pageTitle || document.title,
        page_location: window.location.href,
        page_path: pagePath
      }
      
      // Send to GTM via dataLayer
      if (window.dataLayer) {
        window.dataLayer.push(pageData)
      }
      
      // Send to GA4 via gtag
      if (window.gtag) {
        window.gtag('config', 'G-7CYXJNLREB', {
          page_title: pageData.page_title,
          page_location: pageData.page_location,
          page_path: pageData.page_path
        })
      }
    }
  }

  const trackConversion = (conversionId: string, value?: number, currency = 'USD') => {
    if (process.client) {
      const conversionData = {
        event: 'conversion',
        send_to: conversionId,
        value: value || 0,
        currency: currency
      }
      
      // Send to GTM via dataLayer
      if (window.dataLayer) {
        window.dataLayer.push(conversionData)
      }
      
      // Send to GA4 via gtag
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: conversionId,
          value: value || 0,
          currency: currency
        })
      }
    }
  }

  const trackScroll = (scrollDepth: number) => {
    if (process.client) {
      const scrollData = {
        event: 'scroll',
        event_category: 'engagement',
        event_label: 'scroll_depth',
        value: scrollDepth
      }
      
      if (window.dataLayer) window.dataLayer.push(scrollData)
      if (window.gtag) {
        window.gtag('event', 'scroll', {
          event_category: 'engagement',
          event_label: 'scroll_depth',
          value: scrollDepth
        })
      }
    }
  }

  const trackTimeOnPage = (timeInSeconds: number) => {
    if (process.client) {
      const timingData = {
        event: 'timing_complete',
        name: 'page_load_time',
        value: timeInSeconds
      }
      
      if (window.dataLayer) window.dataLayer.push(timingData)
      if (window.gtag) {
        window.gtag('event', 'timing_complete', {
          name: 'page_load_time',
          value: timeInSeconds
        })
      }
    }
  }

  const trackFormSubmission = (formName: string, success = true) => {
    if (process.client) {
      const eventName = success ? 'form_submit_success' : 'form_submit_error'
      const formData = {
        event: eventName,
        event_category: 'form',
        event_label: formName,
        form_name: formName
      }
      
      if (window.dataLayer) window.dataLayer.push(formData)
      if (window.gtag) {
        window.gtag('event', eventName, {
          event_category: 'form',
          event_label: formName,
          form_name: formName
        })
      }
    }
  }

  const trackButtonClick = (buttonName: string, location?: string) => {
    if (process.client) {
      const buttonData = {
        event: 'button_click',
        event_category: 'engagement',
        event_label: buttonName,
        button_name: buttonName,
        button_location: location || 'unknown'
      }
      
      if (window.dataLayer) window.dataLayer.push(buttonData)
      if (window.gtag) {
        window.gtag('event', 'button_click', {
          event_category: 'engagement',
          event_label: buttonName,
          button_name: buttonName,
          button_location: location || 'unknown'
        })
      }
    }
  }

  const trackDownload = (fileName: string, fileType?: string) => {
    if (process.client) {
      const downloadData = {
        event: 'file_download',
        event_category: 'engagement',
        event_label: fileName,
        file_name: fileName,
        file_type: fileType || 'unknown'
      }
      
      if (window.dataLayer) window.dataLayer.push(downloadData)
      if (window.gtag) {
        window.gtag('event', 'file_download', {
          event_category: 'engagement',
          event_label: fileName,
          file_name: fileName,
          file_type: fileType || 'unknown'
        })
      }
    }
  }

  const trackExternalLink = (url: string, linkText?: string) => {
    if (process.client) {
      const linkData = {
        event: 'click',
        event_category: 'outbound',
        event_label: url,
        outbound_url: url,
        link_text: linkText || 'unknown'
      }
      
      if (window.dataLayer) window.dataLayer.push(linkData)
      if (window.gtag) {
        window.gtag('event', 'click', {
          event_category: 'outbound',
          event_label: url,
          outbound_url: url,
          link_text: linkText || 'unknown'
        })
      }
    }
  }

  return {
    trackEvent,
    trackPageView,
    trackConversion,
    trackScroll,
    trackTimeOnPage,
    trackFormSubmission,
    trackButtonClick,
    trackDownload,
    trackExternalLink
  }
}

