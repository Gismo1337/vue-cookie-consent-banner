import CookieModal from "./components/CookieModal.vue";

const VueCookieConsentBanner = {
    install(Vue, options) {
        Vue.component("vue-cookie-consent-banner", CookieModal);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueCookieConsentBanner);
}

export default VueCookieConsentBanner;