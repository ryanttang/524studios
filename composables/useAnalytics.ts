export const useAnalytics = () => {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (process.client && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'engagement',
        event_label: parameters?.label || '',
        value: parameters?.value || 0,
        ...parameters
      })
    }
  }

  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (process.client && window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_title: pageTitle || document.title,
        page_location: window.location.href,
        page_path: pagePath
      })
    }
  }

  const trackConversion = (conversionId: string, value?: number, currency = 'USD') => {
    if (process.client && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value || 0,
        currency: currency
      })
    }
  }

  const trackScroll = (scrollDepth: number) => {
    if (process.client && window.gtag) {
      window.gtag('event', 'scroll', {
        event_category: 'engagement',
        event_label: 'scroll_depth',
        value: scrollDepth
      })
    }
  }

  const trackTimeOnPage = (timeInSeconds: number) => {
    if (process.client && window.gtag) {
      window.gtag('event', 'timing_complete', {
        name: 'page_load_time',
        value: timeInSeconds
      })
    }
  }

  const trackFormSubmission = (formName: string, success = true) => {
    if (process.client && window.gtag) {
      window.gtag('event', success ? 'form_submit_success' : 'form_submit_error', {
        event_category: 'form',
        event_label: formName,
        form_name: formName
      })
    }
  }

  const trackButtonClick = (buttonName: string, location?: string) => {
    if (process.client && window.gtag) {
      window.gtag('event', 'button_click', {
        event_category: 'engagement',
        event_label: buttonName,
        button_name: buttonName,
        button_location: location || 'unknown'
      })
    }
  }

  const trackDownload = (fileName: string, fileType?: string) => {
    if (process.client && window.gtag) {
      window.gtag('event', 'file_download', {
        event_category: 'engagement',
        event_label: fileName,
        file_name: fileName,
        file_type: fileType || 'unknown'
      })
    }
  }

  const trackExternalLink = (url: string, linkText?: string) => {
    if (process.client && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'outbound',
        event_label: url,
        outbound_url: url,
        link_text: linkText || 'unknown'
      })
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
