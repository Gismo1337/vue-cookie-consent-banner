<script setup>
import FooterSection from "./FooterSection.vue";
import OptionSection from "./OptionSection.vue";
import { onMounted, ref } from "vue";

const emit = defineEmits(["close", "accept", "decline", "toggleScroll"]);
const showModal = ref(false);
const showOptions = ref(false);
const COOKIE_NAME = "cookie-preferences";
const cookiesStatus = ref({
  essential: true,
  analytics: true,
  marketing: true,
});

onMounted(() => {
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
  )}; expires=Fri, 31 Dec 2099 23:59:59 GMT;`;

  emit("accept", value);
  close();
};

const decline = () => {
  emit("decline", cookiesStatus.value);
  close();
  document.body.innerHTML= "<h1 style='text-align:center'>This site require cookies!!</h1>";
};

const toggleOptions = () => {
  showOptions.value =! showOptions.value;
}
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" v-if="showModal">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header"> Cookie Consent </slot>
          <button
            type="button"
            class="btn-close"
            @click="decline"
            aria-label="Close modal"
          >
          <svg 
            class="btn-close-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1
                     4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9
                     70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 
                     45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5
                     15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
          </svg>
          </button>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">
            We are using cookies to give you the best experience on our website. You can
            find out more about which cookies we are using or switch them off in settings.
          </slot>
        </section>

        <option-section
          v-if="showOptions"
          :cookies-status="cookiesStatus"
        />

        <footer-section
          @accept="accept(cookiesStatus)"
          @decline="decline"
          @toggleOptions="toggleOptions">
        </footer-section>

      </div>
    </div>
  </transition>
</template>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #c6c6c64d;
  display: flex;
  justify-content: center;
  align-items: end;
}

.modal {
  max-width: 1055px;
  background: #ffffff;
  box-shadow: #c0c0c195 0 7px 29px 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 1rem;
  margin: 1.25rem;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.2em;
  padding: 15px;
  display: flex;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  color: black;
}

.btn-close {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  border: none;
  font-size: 20px;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-close-svg {
  width: 20px;
  height: 20px;
  fill: #4aae9b;
  position:absolute;
  transform: translate(-50%, -50%);
}

.btn-group button {
  padding: 10px 24px; /* Some padding */
  margin: 10px;
  cursor: pointer; /* Pointer/hand icon */
  float: right; /* Float the buttons side by side */
}

.check-group {
  padding: 10px; /* Some padding */
  cursor: default; /* Cursor default icon */
  float: left; /* Float the checkboxes side by side */
  color: rgb(93, 92, 92);
}

.check-group label{
  cursor: default; /* label cursor set default */
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0.7;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

label {
  color: black;
}
</style>
