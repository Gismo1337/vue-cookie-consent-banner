<script setup>

import CookieModal from "./components/CookieModal.vue";
import { ref } from 'vue'

const isModalVisible = ref(true)

function closeModal() {
  isModalVisible.value = false;
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      This could be your website
    </div>
  </header>

  <main>

  </main>

  <CookieModal  v-show="isModalVisible"
                @close="closeModal" >
    <template v-slot:header>
    </template>

    <template v-slot:body>
    </template>

    <template v-slot:footer>
    </template>
  </CookieModal>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
