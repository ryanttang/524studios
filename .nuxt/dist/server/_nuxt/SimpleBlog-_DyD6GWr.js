import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "/Users/ryantang/524studios/node_modules/hookable/dist/index.mjs";
import { g as useSiteConfig } from "../server.mjs";
import { parseURL } from "/Users/ryantang/524studios/node_modules/ufo/dist/index.mjs";
import "/Users/ryantang/524studios/node_modules/klona/dist/index.mjs";
import "/Users/ryantang/524studios/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "ofetch";
import "/Users/ryantang/524studios/node_modules/unctx/dist/index.mjs";
import "/Users/ryantang/524studios/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/ryantang/524studios/node_modules/radix3/dist/index.mjs";
import "/Users/ryantang/524studios/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "scule";
import "@unhead/schema-org/vue";
import "/Users/ryantang/524studios/node_modules/devalue/index.js";
const _sfc_main = {
  __name: "SimpleBlog",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: false, default: "title" },
    website: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const website = computed(() => {
      return props.website || parseURL(useSiteConfig().url).host;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full flex items-start justify-start border-solid border-blue-500 border-[12px] bg-gray-50" }, _attrs))}><div class="flex items-start justify-start h-full"><div class="flex flex-col justify-between w-full h-full"><h1 class="text-[80px] p-20 font-black text-left" style="${ssrRenderStyle({ "display": "block", "line-clamp": "2", "text-overflow": "ellipsis" })}">${ssrInterpolate(__props.title)}</h1><p class="text-2xl pb-10 px-20 font-bold mb-0" style="${ssrRenderStyle({ "display": "block", "line-clamp": "3", "text-overflow": "ellipsis" })}">${ssrInterpolate(website.value)}</p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SimpleBlog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=SimpleBlog-_DyD6GWr.js.map
