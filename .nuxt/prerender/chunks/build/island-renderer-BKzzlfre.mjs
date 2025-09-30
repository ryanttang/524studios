import { defineComponent, defineAsyncComponent, onErrorCaptured, createVNode } from 'file:///Users/ryantang/524studios/node_modules/vue/index.mjs';
import { i as injectHead, c as createError } from './server.mjs';
import 'file:///Users/ryantang/524studios/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/ryantang/524studios/node_modules/unhead/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/h3/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/destr/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/hookable/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/ufo/dist/index.mjs';
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
import 'file:///Users/ryantang/524studios/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/ryantang/524studios/node_modules/@unhead/addons/dist/index.mjs';
import 'file:///Users/ryantang/524studios/node_modules/@unhead/schema-org/dist/vue.mjs';

const islandComponents = {
  "BrandedLogoDVue": defineAsyncComponent(() => import(
    './BrandedLogo.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/branded-logo-d-vue-server" */
  ).then((c) => c.default || c)),
  "BrandedLogo": defineAsyncComponent(() => import(
    './BrandedLogo-sMbZll9O.mjs'
    /* webpackChunkName: "components/branded-logo-server" */
  ).then((c) => c.default || c)),
  "FrameDVue": defineAsyncComponent(() => import(
    './Frame.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/frame-d-vue-server" */
  ).then((c) => c.default || c)),
  "Frame": defineAsyncComponent(() => import(
    './Frame-CQj9VkP4.mjs'
    /* webpackChunkName: "components/frame-server" */
  ).then((c) => c.default || c)),
  "NuxtDVue": defineAsyncComponent(() => import(
    './Nuxt.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/nuxt-d-vue-server" */
  ).then((c) => c.default || c)),
  "Nuxt": defineAsyncComponent(() => import(
    './Nuxt-FMzKJBot.mjs'
    /* webpackChunkName: "components/nuxt-server" */
  ).then((c) => c.default || c)),
  "NuxtSeoDVue": defineAsyncComponent(() => import(
    './NuxtSeo.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/nuxt-seo-d-vue-server" */
  ).then((c) => c.default || c)),
  "NuxtSeo": defineAsyncComponent(() => import(
    './NuxtSeo-DLPf7mGo.mjs'
    /* webpackChunkName: "components/nuxt-seo-server" */
  ).then((c) => c.default || c)),
  "PergelDVue": defineAsyncComponent(() => import(
    './Pergel.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/pergel-d-vue-server" */
  ).then((c) => c.default || c)),
  "Pergel": defineAsyncComponent(() => import(
    './Pergel-CjikIUP-.mjs'
    /* webpackChunkName: "components/pergel-server" */
  ).then((c) => c.default || c)),
  "SimpleBlogDVue": defineAsyncComponent(() => import(
    './SimpleBlog.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/simple-blog-d-vue-server" */
  ).then((c) => c.default || c)),
  "SimpleBlog": defineAsyncComponent(() => import(
    './SimpleBlog-XsZAhnMQ.mjs'
    /* webpackChunkName: "components/simple-blog-server" */
  ).then((c) => c.default || c)),
  "UnJsDVue": defineAsyncComponent(() => import(
    './UnJs.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/un-js-d-vue-server" */
  ).then((c) => c.default || c)),
  "UnJs": defineAsyncComponent(() => import(
    './UnJs-CwVq-bWy.mjs'
    /* webpackChunkName: "components/un-js-server" */
  ).then((c) => c.default || c)),
  "WaveDVue": defineAsyncComponent(() => import(
    './Wave.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/wave-d-vue-server" */
  ).then((c) => c.default || c)),
  "Wave": defineAsyncComponent(() => import(
    './Wave-qdArrv7Z.mjs'
    /* webpackChunkName: "components/wave-server" */
  ).then((c) => c.default || c)),
  "WithEmojiDVue": defineAsyncComponent(() => import(
    './WithEmoji.d.vue-BTDBFo2Y.mjs'
    /* webpackChunkName: "components/with-emoji-d-vue-server" */
  ).then((c) => c.default || c)),
  "WithEmoji": defineAsyncComponent(() => import(
    './WithEmoji-CpVBYVMB.mjs'
    /* webpackChunkName: "components/with-emoji-server" */
  ).then((c) => c.default || c))
};
const islandRenderer = defineComponent({
  name: "IslandRenderer",
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const head = injectHead();
    head.entries.clear();
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    onErrorCaptured((e) => {
      console.log(e);
    });
    return () => createVNode(component || "span", { ...props.context.props, "data-island-uid": "" });
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-BKzzlfre.mjs.map
