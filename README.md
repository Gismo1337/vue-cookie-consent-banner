![Preview](https://s20.directupload.net/images/221001/kraykcfh.png)

# vue-cookie-consent-banner

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
git clone https://github.com/Gismo1337/vue-cookie-consent-banner
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

<!-- Prewritten for later use
## USAGE

`npm install vue-cookie-consent-banner`

add the following to your App.vue


```js
import { ref } from 'vue'
import VueCookieConsentBanner from "@vue-cookie-consent-banner";

const isModalVisible = ref(true);

// Hide modal when user clicks a button
function closeModal() {
  isModalVisible.value = false;
}

// do something with the selected cookies like store them in a cookie session
function setCookies(selectedCookies) {
  console.log('Selected:', selectedCookies);
}
```

```vue
<VueCookieConsentBanner  v-show="isModalVisible"
                @close="closeModal"
                @decline="setCookies"
                @accept="setCookies" >

    <template v-slot:header>
    </template>

    <template v-slot:body>
    </template>

    <template v-slot:footer>
    </template>

  </VueCookieConsentBanner>
```

-->