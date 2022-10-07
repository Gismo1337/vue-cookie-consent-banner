<h1 align="center">
  <!-- <br> -->
  <!-- <a href="https://github.com/Gismo1337/vue-cookie-consent-banner"><img src="https://raw.githubusercontent.com/Gismo1337/vue-cookie-consent-banner/master/public/favicon.ico" alt="Markdownify" width="50"></a>
  <br> -->
  vue-cookie-consent-banner
  <br>
</h1>

<h4 align="center">This template should help get you started developing with Vue 3 in Vite.</h4>

<p align="center">
    </br>
  <a href="https://github.com/Gismo1337/vue-cookie-consent-banner">
    <img src="https://img.shields.io/github/contributors/Gismo1337/vue-cookie-consent-banner">
  </a>
  <a href="https://github.com/Gismo1337/vue-cookie-consent-banner">
    <img src="https://img.shields.io/github/forks/Gismo1337/vue-cookie-consent-banner">
  </a>
  <a href="https://github.com/Gismo1337/vue-cookie-consent-banner">
    <img src="https://img.shields.io/github/stars/Gismo1337/vue-cookie-consent-banner">
  </a>
  <a href="https://github.com/Gismo1337/vue-cookie-consent-banner">
    <img src="https://img.shields.io/github/issues/Gismo1337/vue-cookie-consent-banner">
  </a>
</p>

<p align="center">
  <a href="https://github.com/Gismo1337/vue-cookie-consent-banner/issues">Report Bug</a> •
  <a href="https://github.com/Gismo1337/vue-cookie-consent-banner/issues">Request Feature</a> •
  <a href="https://github.com/Gismo1337/vue-cookie-consent-banner#license">License</a>
</p>

![screenshot](https://bilderupload.org/image/ff2c33412-open.png)

<!-- omit in toc -->
## Table of Contents

- [Getting Started](#getting-started)
  - [Recommended IDE Setup](#recommended-ide-setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Customize configuration](#customize-configuration)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Getting Started

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

### Prerequisites

Before installation, please make sure you have already installed the following tools:

- [Git](https://git-scm.com/downloads)
- [Nodejs](https://nodejs.org/en/download/)

### Installation

1. Clone the repo

    ```sh
   git clone https://github.com/Gismo1337/vue-cookie-consent-banner.git
   ```

2. Navigate to the cloned project directory

    ```sh
   cd vue-cookie-consent-banner
   ```

3. Install the dependencies

    ```sh
   npm install
   ```

4. Start the server

    ```sh
   npm run dev
   ```

5. Open the browser to visit the website at http://localhost:3000/

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

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

## Contributing

We appreciate feedback and contribution to this repo! Before you get started, please see the following:

- [Contributing Guidelines](https://github.com/Gismo1337/vue-cookie-consent-banner/blob/master/CONTRIBUTING.md)
- [Code of Conduct Guidelines](https://github.com/Gismo1337/vue-cookie-consent-banner/blob/master/CODE_OF_CONDUCT.md)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Gismo1337/vue-cookie-consent-banner/blob/master/LICENSE.md) file for details

## Support

Give a ⭐️ if this project helped you!