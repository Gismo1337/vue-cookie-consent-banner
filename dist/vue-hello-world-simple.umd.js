(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-hello-world-simple"] = factory(require("vue"));
	else
		root["vue-hello-world-simple"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), (__WEBPACK_EXTERNAL_MODULE__203__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 203:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ entry_lib)
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CookieModal.vue?vue&type=script&setup=true&lang=js


const _hoisted_1 = {
  key: 0,
  class: "modal-backdrop"
}
const _hoisted_2 = {
  class: "modal",
  role: "dialog",
  "aria-labelledby": "modalTitle",
  "aria-describedby": "modalDescription"
}
const _hoisted_3 = {
  class: "modal-header",
  id: "modalTitle"
}
const _hoisted_4 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  class: "btn-close-svg",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512"
}, [
  /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", { d: "M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1\n                     4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9\n                     70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 \n                     45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5\n                     15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" })
], -1)
const _hoisted_5 = [
  _hoisted_4
]
const _hoisted_6 = {
  class: "modal-body",
  id: "modalDescription"
}
const _hoisted_7 = {
  key: 0,
  class: "modal-options",
  id: "options"
}
const _hoisted_8 = { class: "check-group" }
const _hoisted_9 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("label", { for: "analytics" }, "Analytics ", -1)
const _hoisted_10 = { class: "check-group" }
const _hoisted_11 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("label", { for: "marketing" }, "Marketing", -1)
const _hoisted_12 = { class: "check-group" }
const _hoisted_13 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("input", {
  checked: "",
  disabled: "",
  type: "checkbox",
  id: "essential"
}, null, -1)
const _hoisted_14 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("label", { for: "essential" }, "Essential", -1)
const _hoisted_15 = { class: "modal-footer" }
const _hoisted_16 = { class: "btn-group" }

;


/* harmony default export */ const CookieModalvue_type_script_setup_true_lang_js = ({
  __name: 'CookieModal',
  emits: ["close", "accept", "decline", "toggleScroll"],
  setup(__props, { emit }) {


const showModal = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
const showOptions = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
const COOKIE_NAME = "cookie-preferences";
const cookiesStatus = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)({
  essential: true,
  analytics: true,
  marketing: true,
});

(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
  // Parse stored cookies looking for saved preferences
  const cookieStrings = document.cookie.split(";");
  const keyValPairs = cookieStrings.map((str) => str.trim().split("="));
  const consentCookie = keyValPairs.find(([key]) => key === COOKIE_NAME);

  if (consentCookie) {
    cookiesStatus.value = JSON.parse(consentCookie[1]);
    emit("accept", cookieStrings.value);
    emit("close");
  } else {
    emit("toggleScroll", false);
  }

  // Prevent showing modal until cookies are searched
  showModal.value = true;
});

const close = () => {
  emit("toggleScroll", true);
  emit("close");

};

const accept = (value) => {
  // Save preferences to cookie
  document.cookie = `${COOKIE_NAME}=${JSON.stringify(
    cookiesStatus.value
  )}; expires=Fri, 31 Dec 9999 23:59:59 GMT;`;

  emit("accept", value);
  close();
};

const decline = () => {
  emit("decline", cookiesStatus.value);
  close();
  document.body.innerHTML= "<h1 style='text-align:center'>This site require cookies!!</h1>";
};

return (_ctx, _cache) => {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Transition, { name: "modal-fade" }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [
      (showModal.value)
        ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [
            (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_2, [
              (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("header", _hoisted_3, [
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "header", {}, () => [
                  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" Cookie Consent ")
                ]),
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
                  type: "button",
                  class: "btn-close",
                  onClick: decline,
                  "aria-label": "Close modal"
                }, _hoisted_5)
              ]),
              (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("section", _hoisted_6, [
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "body", {}, () => [
                  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" We are using cookies to give you the best experience on our website. You can find out more about which cookies we are using or switch them off in settings. ")
                ])
              ]),
              (showOptions.value)
                ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("section", _hoisted_7, [
                    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "options", {}, () => [
                      (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_8, [
                        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(external_commonjs_vue_commonjs2_vue_root_Vue_.Transition, {
                          name: "fade",
                          mode: "out-in"
                        }, {
                          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [
                            (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)(((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("input", {
                              type: "checkbox",
                              id: "analytics",
                              key: cookiesStatus.value.analytics,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((cookiesStatus.value.analytics) = $event))
                            })), [
                              [external_commonjs_vue_commonjs2_vue_root_Vue_.vModelCheckbox, cookiesStatus.value.analytics]
                            ])
                          ]),
                          _: 1
                        }),
                        _hoisted_9,
                        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default", {}, () => [
                          (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" - Analytics cookies are used to track website visitors and their user behaviour. ")
                        ])
                      ]),
                      (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_10, [
                        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(external_commonjs_vue_commonjs2_vue_root_Vue_.Transition, {
                          name: "fade",
                          mode: "out-in"
                        }, {
                          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [
                            (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)(((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("input", {
                              type: "checkbox",
                              key: cookiesStatus.value.marketing,
                              id: "marketing",
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((cookiesStatus.value.marketing) = $event))
                            })), [
                              [external_commonjs_vue_commonjs2_vue_root_Vue_.vModelCheckbox, cookiesStatus.value.marketing]
                            ])
                          ]),
                          _: 1
                        }),
                        _hoisted_11,
                        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default", {}, () => [
                          (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" - Marketing Cookies are used to send advertising, or to track the user across several websites for marketing purposes. ")
                        ])
                      ]),
                      (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_12, [
                        _hoisted_13,
                        _hoisted_14,
                        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default", {}, () => [
                          (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" - Essential cookies are essential for a website to function correctly. ")
                        ])
                      ])
                    ])
                  ]))
                : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true),
              (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("footer", _hoisted_15, [
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "footer"),
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_16, [
                  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
                    type: "button",
                    class: "btn-accept",
                    onClick: _cache[2] || (_cache[2] = $event => (accept(cookiesStatus.value))),
                    "aria-label": "Close modal"
                  }, " Accept "),
                  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
                    type: "button",
                    class: "btn-option",
                    onClick: _cache[3] || (_cache[3] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withModifiers)($event => (showOptions.value = !showOptions.value), ["prevent"])),
                    "aria-label": "Close modal"
                  }, " Options "),
                  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
                    type: "button",
                    class: "btn-decline",
                    onClick: decline,
                    "aria-label": "Close modal"
                  }, " Decline ")
                ])
              ])
            ])
          ]))
        : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)
    ]),
    _: 3
  }))
}
}

});
;// CONCATENATED MODULE: ./src/components/CookieModal.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-52.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-52.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CookieModal.vue?vue&type=style&index=0&id=66048bc6&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/CookieModal.vue?vue&type=style&index=0&id=66048bc6&lang=css

;// CONCATENATED MODULE: ./src/components/CookieModal.vue



;

const __exports__ = CookieModalvue_type_script_setup_true_lang_js;

/* harmony default export */ const CookieModal = (__exports__);
;// CONCATENATED MODULE: ./src/install.js


const VueCookieConsentBanner = {
  install(Vue, options) {
    Vue.component("vue-cookie-consent-banner", CookieModal);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(VueCookieConsentBanner);
}

/* harmony default export */ const install = (VueCookieConsentBanner);

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ const entry_lib = (install);


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-hello-world-simple.umd.js.map