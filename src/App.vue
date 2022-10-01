<script setup>
import { ref } from "vue";
import CookieModal from "./components/CookieModal.vue";

const isModalVisible = ref(true);

// Hide modal when user clicks a button
function closeModal() {
  isModalVisible.value = false;
}

// do something with the selected cookies like store them in a cookie session
function setCookies(selectedCookies) {
  console.log("Selected:", selectedCookies);
  const body = document.querySelector('body');
  body.style.overflow = '';
}
</script>

<template>
  <main>This could be the main content of the page</main>

  <CookieModal
    v-show="isModalVisible"
    @close="closeModal"
    @decline="setCookies"
    @accept="setCookies"
  >
    <template v-slot:header> </template>

    <template v-slot:body> </template>

    <template v-slot:footer> </template>
  </CookieModal>
</template>

<style scoped>
main {
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
