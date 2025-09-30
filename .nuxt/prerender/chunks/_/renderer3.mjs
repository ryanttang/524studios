import { getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///Users/ryantang/524studios/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { getResponseStatusText, getResponseStatus, getQuery, createError, appendResponseHeader } from 'file:///Users/ryantang/524studios/node_modules/h3/dist/index.mjs';
import { joinURL, withoutTrailingSlash, hasProtocol } from 'file:///Users/ryantang/524studios/node_modules/ufo/dist/index.mjs';
import { b as appId, d as defineRenderHandler, e as buildAssetsURL, p as publicAssetsURL, g as appTeleportTag, h as appTeleportAttrs, i as createSSRContext, j as appHead, s as setSSRError, k as payloadCache, l as getRouteRules, m as getRenderer, o as getEntryIds, q as renderInlineStyles, v as replaceIslandTeleports, w as useNitroApp } from '../nitro/nitro.mjs';
import { stringify, uneval } from 'file:///Users/ryantang/524studios/node_modules/devalue/index.js';
import { relative } from 'file:///Users/ryantang/524studios/node_modules/pathe/dist/index.mjs';
import { propsToString, renderSSRHead } from 'file:///Users/ryantang/524studios/node_modules/unhead/dist/server.mjs';
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
import 'file:///Users/ryantang/524studios/node_modules/vue/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/consola/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/@unocss/core/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/@unocss/preset-wind3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/ryantang/524studios/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/ryantang/524studios/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/ryantang/524studios/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/ipx/dist/index.mjs';

function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderSSRHeadOptions = {"omitLineBreaks":false};

const entryFileName = "atdU5nr1.js";

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
let entryPath;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery(event) : null;
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const ssrContext = createSSRContext(event);
  const headEntryOptions = { mode: "server" };
  ssrContext.head.push(appHead, headEntryOptions);
  if (ssrError) {
    ssrError.statusCode &&= Number.parseInt(ssrError.statusCode);
    setSSRError(ssrContext, ssrError);
  }
  const isRenderingPayload = PAYLOAD_URL_RE.test(ssrContext.url);
  if (isRenderingPayload) {
    const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
    ssrContext.url = url;
    event._path = event.node.req.url = url;
    if (await payloadCache.hasItem(url)) {
      return payloadCache.getItem(url);
    }
  }
  const routeOptions = getRouteRules(event);
  if (routeOptions.ssr === false) {
    ssrContext.noSSR = true;
  }
  const _PAYLOAD_EXTRACTION = !ssrContext.noSSR;
  const payloadURL = _PAYLOAD_EXTRACTION ? joinURL(ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL, ssrContext.url.replace(/\?.*$/, ""), PAYLOAD_FILENAME) + "?" + ssrContext.runtimeConfig.app.buildId : void 0;
  const renderer = await getRenderer(ssrContext);
  {
    for (const id of await getEntryIds()) {
      ssrContext.modules.add(id);
    }
  }
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  const inlinedStyles = !ssrContext._renderResponse && !isRenderingPayload ? await renderInlineStyles(ssrContext.modules ?? []) : [];
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response = renderPayloadResponse(ssrContext);
    {
      await payloadCache.setItem(ssrContext.url, response);
    }
    return response;
  }
  if (_PAYLOAD_EXTRACTION) {
    appendResponseHeader(event, "x-nitro-prerender", joinURL(ssrContext.url.replace(/\?.*$/, ""), PAYLOAD_FILENAME));
    await payloadCache.setItem(withoutTrailingSlash(ssrContext.url), renderPayloadResponse(ssrContext));
  }
  const NO_SCRIPTS = routeOptions.noScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (!NO_SCRIPTS) {
    let path = entryPath;
    if (!path) {
      path = buildAssetsURL(entryFileName);
      if (/^(?:\/|\.+\/)/.test(path) || hasProtocol(path, { acceptRelative: true })) {
        entryPath = path;
      } else {
        path = relative(event.path.replace(/\/[^/]+$/, "/"), joinURL("/", path));
        if (!/^(?:\/|\.+\/)/.test(path)) {
          path = `./${path}`;
        }
      }
    }
    ssrContext.head.push({
      script: [{
        tagPosition: "head",
        tagPriority: -2,
        type: "importmap",
        innerHTML: JSON.stringify({ imports: { "#entry": path } })
      }]
    }, headEntryOptions);
  }
  if (_PAYLOAD_EXTRACTION && !NO_SCRIPTS) {
    ssrContext.head.push({
      link: [
        { rel: "preload", as: "fetch", crossorigin: "anonymous", href: payloadURL } 
      ]
    }, headEntryOptions);
  }
  if (ssrContext._preloadManifest && !NO_SCRIPTS) {
    ssrContext.head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  const link = [];
  for (const resource of Object.values(styles)) {
    link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
  }
  if (link.length) {
    ssrContext.head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS) {
    ssrContext.head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      script: _PAYLOAD_EXTRACTION ? renderPayloadJsonScript({ ssrContext, data: splitPayload(ssrContext).initial, src: payloadURL })  : renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.noScripts) {
    const tagPosition = "head";
    ssrContext.head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
  const htmlContext = {
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  return {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
});
function normalizeChunks(chunks) {
  const result = [];
  for (const _chunk of chunks) {
    const chunk = _chunk?.trim();
    if (chunk) {
      result.push(chunk);
    }
  }
  return result;
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}

export { renderer as default };
//# sourceMappingURL=renderer3.mjs.map
