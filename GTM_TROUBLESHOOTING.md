# Google Analytics Tag Detection Troubleshooting

## Issue: Tag Not Detected on fivetwentyfour.studio

Google Analytics is looking for the tag on `fivetwentyfour.studio`, but your site is currently configured for `https://524studios.vercel.app`.

## Solutions

### Option 1: Add Both Domains to Google Analytics (Recommended)

1. **In Google Analytics:**
   - Go to **Admin** → **Data Streams**
   - Click on your web stream
   - Under **Web stream details**, add `fivetwentyfour.studio` as an additional domain
   - Or create a separate data stream for `fivetwentyfour.studio` if it's a different site

2. **Verify the tag is on the correct domain:**
   - Visit `https://fivetwentyfour.studio` (or `http://fivetwentyfour.studio`)
   - Open browser DevTools (F12)
   - Go to **Network** tab
   - Filter by "gtag" or "googletagmanager"
   - Refresh the page
   - You should see requests to `googletagmanager.com/gtag/js?id=G-D64NZ8LT70`

### Option 2: Update Google Analytics to Check the Correct Domain

1. **In Google Analytics Setup:**
   - When it asks for the website URL, enter: `https://524studios.vercel.app`
   - Or the actual domain where your site is deployed

### Option 3: Verify Tag is Actually Deployed

**Check if the tag is live on your site:**

1. **Visit your live site** (whichever domain it's on)
2. **Open browser DevTools** (F12 or Cmd+Option+I)
3. **Check the Console:**
   ```javascript
   // Type this in the console:
   window.dataLayer
   // Should show an array with GTM/GA data
   
   // Check if gtag exists:
   typeof window.gtag
   // Should return "function"
   ```

4. **Check Network Tab:**
   - Filter by "gtag" or "googletagmanager"
   - Look for: `googletagmanager.com/gtag/js?id=G-D64NZ8LT70`
   - Status should be 200 (success)

5. **View Page Source:**
   - Right-click → View Page Source
   - Search for "G-D64NZ8LT70"
   - Should find the Google tag script in the `<head>` section

### Option 4: Use Google Tag Assistant

1. **Install Google Tag Assistant Chrome Extension:**
   - Visit: https://tagassistant.google.com/
   - Install the extension

2. **Test Your Site:**
   - Visit your live website
   - Click the Tag Assistant icon
   - It will show if GTM and GA4 tags are detected

### Option 5: Manual Verification

**Test if the tag is working:**

1. **Visit your site** in a browser
2. **Open Console** (F12)
3. **Run this command:**
   ```javascript
   gtag('event', 'test_event', {
     event_category: 'test',
     event_label: 'manual_test'
   })
   ```

4. **Check GA4 Realtime Reports:**
   - Go to Google Analytics
   - **Reports** → **Realtime**
   - You should see the test event appear (may take a few seconds)

## Common Issues & Solutions

### Issue: Tag Not Loading
**Symptoms:** No gtag.js request in Network tab

**Solutions:**
- Check if site is deployed
- Check browser console for errors
- Verify script is in `<head>` (not blocked by ad blockers)
- Check if site is behind a firewall/CDN blocking scripts

### Issue: Wrong Domain
**Symptoms:** Google Analytics checking wrong domain

**Solutions:**
- Add correct domain in GA4 Data Stream settings
- Or update the domain in GA4 setup wizard

### Issue: Tag Loads But Not Detected
**Symptoms:** Tag is in source code but GA4 says it's not detected

**Solutions:**
- Wait 24-48 hours (Google's crawler may need time)
- Use "Try again" button in GA4
- Verify tag is on the homepage (not just subpages)
- Check if robots.txt is blocking Google's crawler

### Issue: Ad Blocker Blocking
**Symptoms:** Tag works in incognito but not normal browsing

**Solutions:**
- Disable ad blockers temporarily to test
- Tag should still work for most users (ad blockers only affect users with them)

## Quick Verification Checklist

- [ ] Site is deployed and live
- [ ] Tag script is in page source (View Source → search "G-D64NZ8LT70")
- [ ] Network tab shows gtag.js loading (200 status)
- [ ] Console shows `window.dataLayer` exists
- [ ] Console shows `window.gtag` is a function
- [ ] GA4 Realtime reports show activity
- [ ] Domain in GA4 matches actual site domain
- [ ] No console errors related to gtag/GTM

## Next Steps

1. **Verify tag is on live site:**
   - Visit your actual domain
   - Check page source for the tag
   - Check Network tab for gtag.js loading

2. **Update Google Analytics:**
   - Add the correct domain in Data Stream settings
   - Or use "Try again" after verifying tag is live

3. **Wait for Detection:**
   - Google's crawler may take 24-48 hours
   - Use Realtime reports to verify it's working immediately

4. **Test with Tag Assistant:**
   - Install Google Tag Assistant extension
   - Visit your site and check if tags are detected

## Your Current Configuration

- **Site URL in config:** `https://524studios.vercel.app`
- **GA4 Measurement ID:** `G-D64NZ8LT70`
- **GTM Container ID:** `GTM-T9GRRD4Q`
- **Google Analytics checking:** `fivetwentyfour.studio`

**Action needed:** Either:
1. Deploy to `fivetwentyfour.studio` and ensure tag is there, OR
2. Update Google Analytics to check `524studios.vercel.app` (or your actual domain)
