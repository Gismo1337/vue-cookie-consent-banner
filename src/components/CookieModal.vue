<script setup>
import { onMounted, ref } from "vue";

const emit = defineEmits(["close", "accept", "decline"]);
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
  }

  // Prevent showing modal until cookies are searched
  showModal.value = true;
});

const close = () => {
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
};
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
            X
          </button>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">
            We are using cookies to give you the best experience on our website.
            You can find out more about which cookies we are using or switch
            them off in settings.
          </slot>
        </section>

        <section v-if="showOptions" class="modal-options" id="options">
          <slot name="options">
            <div class="check-group">
              <input
                type="checkbox"
                id="analytics"
                v-model="cookiesStatus.analytics"
              />
              <label for="analytics">Analytics</label>
            </div>
            <div class="check-group">
              <input
                type="checkbox"
                id="marketing"
                v-model="cookiesStatus.marketing"
              />
              <label for="marketing">Marketing</label>
            </div>
            <div class="check-group">
              <!-- NO v-model because required! -->
              <input checked disabled type="checkbox" id="essential" />
              <label for="essential">Essential</label>
            </div>
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            <!-- Default footer! -->
          </slot>

          <div class="btn-group">
            <button
              type="button"
              class="btn-accept"
              @click="accept(cookiesStatus)"
              aria-label="Close modal"
            >
              Accept
            </button>

            <button
              type="button"
              class="btn-option"
              @click.prevent="showOptions = !showOptions"
              aria-label="Close modal"
            >
              Options
            </button>

            <button
              type="button"
              class="btn-decline"
              @click="decline"
              aria-label="Close modal"
            >
              Decline
            </button>
          </div>
        </footer>
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
  background: #ffffff;
  box-shadow: #c0c0c195 0px 7px 29px 0px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 1rem;
  margin: 1.25rem;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
  font-weight: bold;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  color: black;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-accept {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 10px;
}

.btn-decline {
  color: white;
  background: #a9a9a9;
  border: 1px solid #a9a9a9;
  border-radius: 10px;
}

.btn-option {
  color: #4aae9b;
  background: white;
  border: 1px solid #4aae9b;
  border-radius: 10px;
}

.btn-group button {
  padding: 10px 24px; /* Some padding */
  margin: 10px;
  cursor: pointer; /* Pointer/hand icon */
  float: right; /* Float the buttons side by side */
}

.check-group {
  padding: 10px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the checkboxes side by side */
}

.check-group input {
  margin-right: 10px;
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

/* Add a background color on hover
.btn-group button:hover {
  background-color: #3e8e41;
}
*/

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

label {
  color: black;
}
</style>
