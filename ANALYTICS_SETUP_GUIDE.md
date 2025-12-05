# Analytics Setup Guide - Next Steps

## ✅ What's Already Done

1. **Google Tag Manager (GTM) Installed**
   - GTM Container ID: `GTM-T9GRRD4Q`
   - Script loaded in `<head>`
   - Noscript fallback in `<body>`
   - DataLayer initialized

2. **Event Tracking Functions Ready**
   - Button clicks (Hero, Portfolio CTAs)
   - Form submissions (Contact form)
   - Page views (automatic on route changes)
   - Scroll tracking
   - External link clicks
   - File downloads
   - Conversions

3. **Components Already Tracking**
   - Hero Section: "What We Do" and "Start Your Project" buttons
   - Portfolio Section: "Start Your Project" CTA
   - Contact Section: Form submission tracking

---

## 🎯 Next Steps to Complete Analytics Setup

### Step 1: Verify GTM Installation (5 minutes)

1. **Deploy your site** (if not already deployed)
2. **Visit your live site** in a browser
3. **Open browser DevTools** (F12 or Cmd+Option+I)
4. **Check Console** for any GTM errors
5. **Verify GTM is loading:**
   - Go to Network tab → Filter by "gtm.js"
   - You should see a request to `googletagmanager.com/gtm.js?id=GTM-T9GRRD4Q`
6. **Check dataLayer:**
   - In Console, type: `window.dataLayer`
   - You should see an array with GTM initialization data

**Alternative:** Use [Google Tag Assistant](https://tagassistant.google.com/) Chrome extension to verify GTM is working.

---

### Step 2: Set Up Google Analytics 4 in GTM (10 minutes)

1. **Go to Google Tag Manager Dashboard**
   - Visit: https://tagmanager.google.com
   - Select your container: `GTM-T9GRRD4Q`

2. **Create a GA4 Configuration Tag**
   - Click **Tags** → **New**
   - Tag Name: `GA4 - Configuration`
   - Tag Type: **Google Analytics: GA4 Configuration**
   - Measurement ID: Get this from your GA4 property (format: `G-XXXXXXXXXX`)
   - Triggering: **All Pages**

3. **Get Your GA4 Measurement ID**
   - Go to [Google Analytics](https://analytics.google.com)
   - Admin → Data Streams → Select your web stream
   - Copy the Measurement ID (starts with `G-`)

4. **Test the Tag**
   - Click **Preview** in GTM
   - Enter your website URL
   - Verify the GA4 tag fires on page load

5. **Publish the Container**
   - Click **Submit** → Add version name: "Initial GA4 Setup"
   - Click **Publish**

---

### Step 3: Set Up Event Tracking in GTM (15 minutes)

Your website already pushes events to dataLayer. Now configure GTM to send them to GA4:

#### A. Form Submission Events

1. **Create Trigger:**
   - Triggers → New
   - Name: `Form Submit - Contact Form`
   - Trigger Type: **Custom Event**
   - Event name: `form_submit_success`
   - This trigger fires on: **All Custom Events**

2. **Create Tag:**
   - Tags → New
   - Name: `GA4 - Form Submission`
   - Type: **Google Analytics: GA4 Event**
   - Configuration Tag: Select your GA4 Configuration tag
   - Event Name: `form_submit_success`
   - Trigger: `Form Submit - Contact Form`

#### B. Button Click Events

1. **Create Trigger:**
   - Name: `Button Click`
   - Type: **Custom Event**
   - Event name: `button_click`

2. **Create Tag:**
   - Name: `GA4 - Button Click`
   - Type: **Google Analytics: GA4 Event**
   - Event Name: `button_click`
   - Add Event Parameters:
     - `button_name`: `{{Button Name}}` (create a Data Layer Variable)
     - `button_location`: `{{Button Location}}` (create a Data Layer Variable)
   - Trigger: `Button Click`

#### C. Create Data Layer Variables

For each event parameter, create a variable:

1. **Variables** → **New**
2. **Variable Type:** Data Layer Variable
3. **Data Layer Variable Name:** `button_name` (or `button_location`, `form_name`, etc.)
4. **Data Layer Version:** Version 2

**Recommended Variables to Create:**
- `button_name`
- `button_location`
- `form_name`
- `event_category`
- `event_label`
- `page_path`
- `page_title`

---

### Step 4: Set Up Conversions (10 minutes)

1. **In Google Analytics 4:**
   - Go to **Admin** → **Events**
   - Mark these events as conversions:
     - `form_submit_success` ✅
     - `button_click` (optional, for key CTAs)
     - `conversion` (if using custom conversion tracking)

2. **Create Conversion Events in GTM** (if needed):
   - Create tags for specific conversion events
   - Use the `trackConversion()` function in your code for custom conversions

---

### Step 5: Enhanced Tracking Setup (Optional - 20 minutes)

#### A. Scroll Depth Tracking

Your code has `trackScroll()` function. To use it:

1. **Add scroll tracking to a component:**
   ```vue
   <script setup>
   import { onMounted } from 'vue'
   const { trackScroll } = useAnalytics()
   
   onMounted(() => {
     if (process.client) {
       let maxScroll = 0
       window.addEventListener('scroll', () => {
         const scrollPercent = Math.round(
           (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
         )
         if (scrollPercent > maxScroll) {
           maxScroll = scrollPercent
           if (scrollPercent === 25 || scrollPercent === 50 || scrollPercent === 75 || scrollPercent === 100) {
             trackScroll(scrollPercent)
           }
         }
       })
     }
   })
   </script>
   ```

2. **Create GTM Trigger:**
   - Event: `scroll`
   - Fire on: 25%, 50%, 75%, 100% scroll depth

#### B. Time on Page Tracking

1. **Add to a component:**
   ```vue
   onMounted(() => {
     if (process.client) {
       const startTime = Date.now()
       window.addEventListener('beforeunload', () => {
         const timeOnPage = Math.round((Date.now() - startTime) / 1000)
         trackTimeOnPage(timeOnPage)
       })
     }
   })
   ```

#### C. External Link Tracking

Add to links that go to external sites:
```vue
<a 
  href="https://external-site.com" 
  target="_blank"
  @click="trackExternalLink('https://external-site.com', 'Link Text')"
>
  External Link
</a>
```

---

### Step 6: Testing & Validation (15 minutes)

1. **Use GTM Preview Mode:**
   - Click **Preview** in GTM
   - Enter your website URL
   - Test each interaction:
     - Click buttons → Verify `button_click` event fires
     - Submit form → Verify `form_submit_success` event fires
     - Navigate pages → Verify `page_view` fires

2. **Use GA4 DebugView:**
   - In GA4, go to **Configure** → **DebugView**
   - Enable debug mode (add `?debug_mode=true` to URL or use GA Debugger extension)
   - Verify events are being received in real-time

3. **Check Real-Time Reports:**
   - GA4 → **Reports** → **Realtime**
   - Interact with your site
   - Verify events appear in real-time

4. **Validate Data Layer:**
   - Open browser console
   - Type: `window.dataLayer`
   - Verify events are being pushed correctly

---

### Step 7: Additional Analytics Tools (Optional)

#### A. Facebook Pixel
If you want Facebook tracking:

1. **Get your Pixel ID** from Facebook Events Manager
2. **Create GTM Tag:**
   - Type: **Custom HTML**
   - Add Facebook Pixel base code
   - Use dataLayer events to trigger Facebook events

#### B. LinkedIn Insight Tag
1. **Get Partner ID** from LinkedIn Campaign Manager
2. **Create GTM Tag:**
   - Type: **Custom HTML**
   - Add LinkedIn Insight Tag code

#### C. Microsoft Clarity (Free Heatmaps)
1. **Sign up** at https://clarity.microsoft.com
2. **Get Project ID**
3. **Add via GTM** or directly in `nuxt.config.ts`

---

### Step 8: Set Up Goals & Funnels (15 minutes)

1. **In GA4, create Events:**
   - Form submissions
   - Key button clicks
   - Page views for important pages

2. **Create Funnels:**
   - Home → Portfolio → Contact Form
   - Track drop-off points

3. **Set Up Audiences:**
   - Visitors who viewed portfolio
   - Visitors who clicked CTA but didn't submit form
   - Returning visitors

---

## 📊 Current Event Tracking Summary

### Events Already Implemented in Code:

| Event Name | Trigger | Location | Status |
|------------|---------|----------|--------|
| `page_view` | Route change | `plugins/gtag.client.ts` | ✅ Automatic |
| `button_click` | CTA clicks | Hero, Portfolio sections | ✅ Implemented |
| `form_submit_success` | Form submission | Contact section | ✅ Implemented |
| `form_submit_error` | Form errors | Contact section | ✅ Implemented |

### Events Available (Not Yet Implemented):

| Event Name | Function | Status |
|------------|----------|--------|
| `scroll` | `trackScroll()` | ⚠️ Function ready, needs implementation |
| `timing_complete` | `trackTimeOnPage()` | ⚠️ Function ready, needs implementation |
| `file_download` | `trackDownload()` | ⚠️ Function ready, needs implementation |
| `click` (outbound) | `trackExternalLink()` | ⚠️ Function ready, needs implementation |
| `conversion` | `trackConversion()` | ⚠️ Function ready, needs implementation |

---

## 🔍 Quick Verification Checklist

- [ ] GTM container loads on live site
- [ ] GA4 Configuration tag created and published
- [ ] Form submission events tracked
- [ ] Button click events tracked
- [ ] Page views tracked automatically
- [ ] Events appear in GA4 DebugView
- [ ] Events appear in GA4 Realtime reports
- [ ] Conversions marked in GA4
- [ ] Data Layer variables created
- [ ] GTM Preview mode works correctly

---

## 🚨 Common Issues & Solutions

### Issue: GTM not loading
**Solution:** 
- Check container ID is correct
- Verify script is in `<head>`
- Check browser console for errors
- Ensure site is deployed (GTM may not work in localhost)

### Issue: Events not firing
**Solution:**
- Verify dataLayer.push() is being called
- Check GTM Preview mode
- Verify triggers are set up correctly
- Check event names match exactly (case-sensitive)

### Issue: Events fire but don't appear in GA4
**Solution:**
- Verify GA4 Configuration tag is published
- Check Measurement ID is correct
- Wait 24-48 hours for data to appear (or use Realtime reports)
- Verify GA4 property is linked correctly

---

## 📚 Resources

- [Google Tag Manager Documentation](https://support.google.com/tagmanager)
- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/10089681)
- [GTM Preview Mode Guide](https://support.google.com/tagmanager/answer/6107056)
- [GA4 DebugView Guide](https://support.google.com/analytics/answer/7201382)

---

## 🎉 You're Done When:

1. ✅ GTM is loading on your live site
2. ✅ GA4 is receiving page views
3. ✅ Form submissions are tracked
4. ✅ Button clicks are tracked
5. ✅ Events appear in GA4 Realtime reports
6. ✅ Conversions are marked in GA4
7. ✅ You can see data in GA4 after 24-48 hours

---

**Need Help?** Check the browser console, GTM Preview mode, and GA4 DebugView for troubleshooting.
