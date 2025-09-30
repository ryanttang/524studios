import { defineAsyncComponent, defineComponent, onErrorCaptured, createVNode } from "vue";
import { i as injectHead, c as createError } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/ryantang/524studios/node_modules/hookable/dist/index.mjs";
import "/Users/ryantang/524studios/node_modules/unctx/dist/index.mjs";
import "/Users/ryantang/524studios/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/ryantang/524studios/node_modules/radix3/dist/index.mjs";
import "/Users/ryantang/524studios/node_modules/defu/dist/defu.mjs";
import "/Users/ryantang/524studios/node_modules/ufo/dist/index.mjs";
import "/Users/ryantang/524studios/node_modules/klona/dist/index.mjs";
import "/Users/ryantang/524studios/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "scule";
import "@unhead/schema-org/vue";
import "/Users/ryantang/524studios/node_modules/devalue/index.js";
import "vue/server-renderer";
const islandComponents = {
  "BrandedLogoDVue": defineAsyncComponent(() => import(
    "./BrandedLogo.d.vue-BTDBFo2Y.js"
    /* webpackChunkName: "components/branded-logo-d-vue-server" */
  ).then((c) => c.default || c)),
  "BrandedLogo": defineAsyncComponent(() => import(
    "./BrandedLogo-sMbZll9O.js"
    /* webpackChunkName: "components/branded-logo-server" */
  ).then((c) => c.default || c)),
  "FrameDVue": defineAsyncComponent(() => import(
    "./Frame.d.vue-BTDBFo2Y.js"
    /* webpackChunkName: "components/frame-d-vue-server" */
  ).then((c) => c.default || c)),
  "Frame": defineAsyncComponent(() => import(
    "./Frame-CQj9VkP4.js"
    /* webpackChunkName: "components/frame-server" */
  ).then((c) => c.default || c)),
  "NuxtDVue": defineAsyncComponent(() => import(
    "./Nuxt.d.vue-BTDBFo2Y.js"
    /* webpackChunkName: "components/nuxt-d-vue-server" */
  ).then((c) => c.default || c)),
  "Nuxt": defineAsyncComponent(() => import(
    "./Nuxt-FMzKJBot.js"
    /* webpackChunkName: "components/nuxt-server" */
  ).then((c) => c.default || c)),
  "NuxtSeoDVue": defineAsyncComponent(() => import(
    "./NuxtSeo.d.vue-BTDBFo2Y.js"
    /* webpackChunkName: "components/nuxt-seo-d-vue-server" */
  ).then((c) => c.default || c)),
  "NuxtSeo": defineAsyncComponent(() => import(
    "./NuxtSeo-C_rHEmeP.js"
    /* webpackChunkName: "components/nuxt-seo-server" */
  ).then((c) => c.default || c)),
  "PergelDVue": defineAsyncComponent(() => import(
    "./Pergel.d.vue-BTDBFo2Y.js"
    /* webpackChunkName: "components/pergel-d-vue-server" */
  ).then((c) => c.default || c)),
  "Pergel": defineAsyncComponent(() => import(
    "./Pergel-CjikIUP-.js"
    /* webpackChunkName: "components/pergel-server" */
  ).then((c) => c.default || c)),
  "SimpleBlogDVue": defineAsyncComponent(() => import(
    "./SimpleBlog.d.vue-BTDBFo2Y.js"
    /* webpackChunkName: "components/simple-blog-d-vue-server" */
  ).then((c) => c.default || c)),
  "SimpleBlog": defineAsyncComponent(() => import(
    "./SimpleBlog-_DyD6GWr.js"
    /* webpackChunkName: "components/simple-blog-server" */
  ).then((c) => c.default || c)),
  "UnJsDVue": defineAsyncComponent(() => import(
    "./UnJs.d.vue-BTDBFo2Y.js"
    /* webpackChunkName: "components/un-js-d-vue-server" */
  ).then((c) => c.default || c)),
  "UnJs": defineAsyncComponent(() => import(
    "./UnJs-CwVq-bWy.js"
    /* webpackChunkName: "components/un-js-server" */
  ).then((c) => c.default || c)),
  "WaveDVue": defineAsyncComponent(() => import(
    "./Wave.d.vue-BTDBFo2Y.js"
    /* webpackChunkName: "components/wave-d-vue-server" */
  ).then((c) => c.default || c)),
  "Wave": defineAsyncComponent(() => import(
    "./Wave-qdArrv7Z.js"
    /* webpackChunkName: "components/wave-server" */
  ).then((c) => c.default || c)),
  "WithEmojiDVue": defineAsyncComponent(() => import(
    "./WithEmoji.d.vue-BTDBFo2Y.js"
    /* webpackChunkName: "components/with-emoji-d-vue-server" */
  ).then((c) => c.default || c)),
  "WithEmoji": defineAsyncComponent(() => import(
    "./WithEmoji-CpVBYVMB.js"
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
export {
  islandRenderer as default
};
//# sourceMappingURL=island-renderer-B4hX33sb.js.map
