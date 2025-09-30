import { Launcher } from 'file:///Users/ryantang/524studios/node_modules/chrome-launcher/dist/index.js';
import playwrightCore from 'file:///Users/ryantang/524studios/node_modules/playwright-core/index.mjs';
import { createError } from 'file:///Users/ryantang/524studios/node_modules/h3/dist/index.mjs';
import { joinURL, withQuery } from 'file:///Users/ryantang/524studios/node_modules/ufo/dist/index.mjs';
import { toValue } from 'file:///Users/ryantang/524studios/node_modules/vue/index.mjs';
import { u as useOgImageRuntimeConfig, F as useNitroOrigin } from '../nitro/nitro.mjs';
import 'file:///Users/ryantang/524studios/node_modules/unhead/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/destr/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/hookable/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/ryantang/524studios/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/ryantang/524studios/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/ryantang/524studios/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/ryantang/524studios/node_modules/ohash/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/klona/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/defu/dist/defu.mjs';
import 'file:///Users/ryantang/524studios/node_modules/scule/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/unctx/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/radix3/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/consola/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/@unocss/core/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/@unocss/preset-wind3/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/devalue/index.js';
import 'node:fs';
import 'node:url';
import 'file:///Users/ryantang/524studios/node_modules/pathe/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/unhead/dist/server.mjs';
import 'file:///Users/ryantang/524studios/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/ryantang/524studios/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/ryantang/524studios/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/ryantang/524studios/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/ipx/dist/index.mjs';

const chromePath = Launcher.getFirstInstallation();
async function createBrowser() {
  return playwrightCore.chromium.launch({
    headless: true,
    executablePath: chromePath
  });
}

async function createScreenshot({ basePath, e, options, extension }, browser) {
  const { colorPreference } = useOgImageRuntimeConfig();
  const path = options.component === "PageScreenshot" ? basePath : joinURL("/__og-image__/image", basePath, `og.html`);
  const page = await browser.newPage({
    colorScheme: colorPreference || "no-preference",
    baseURL: useNitroOrigin(e)
  });
  try {
    if (true && !options.html) {
      options.html = await e.$fetch(path).catch(() => void 0);
    }
    await page.setViewportSize({
      width: toValue(options.width) || 1200,
      height: toValue(options.height) || 630
    });
    if (options.html) {
      const html = options.html;
      await page.evaluate((html2) => {
        document.open("text/html");
        document.write(html2);
        document.close();
      }, html);
      await page.waitForLoadState("networkidle");
    } else {
      await page.goto(withQuery(path, options.props), {
        timeout: 1e4,
        waitUntil: "networkidle"
      });
    }
    const screenshotOptions = {
      timeout: 1e4,
      animations: "disabled",
      type: extension === "png" ? "png" : "jpeg"
    };
    const _options = options.screenshot || {};
    if (_options.delay)
      await page.waitForTimeout(_options.delay);
    if (_options.mask) {
      await page.evaluate((mask) => {
        for (const el of document.querySelectorAll(mask))
          el.style.display = "none";
      }, _options.mask);
    }
    if (_options.selector)
      return await page.locator(_options.selector).screenshot(screenshotOptions);
    return await page.screenshot(screenshotOptions);
  } finally {
    await page.close();
  }
}

const ChromiumRenderer = {
  name: "chromium",
  supportedFormats: ["png", "jpeg", "jpg"],
  async debug() {
    return {};
  },
  async createImage(ctx) {
    const browser = await createBrowser();
    const screenshot = await createScreenshot(ctx, browser).catch((e) => e);
    await browser.close();
    if (screenshot instanceof Error) {
      return createError({
        statusCode: 400,
        cause: screenshot,
        statusMessage: `[Nuxt OG Image] Failed to create screenshot ${screenshot.message}.`
      });
    }
    return screenshot;
  }
};

export { ChromiumRenderer as default };
//# sourceMappingURL=renderer2.mjs.map
