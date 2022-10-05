<script setup>
const props = defineProps({
  cookiesStatus: Object
})
</script>

<template>
  <section class="modal-options" id="options">
    <slot name="options">
      <div class="check-group">
        <Transition name="fade" mode="out-in">
          <input
            type="checkbox"
            id="analytics"
            :key="cookiesStatus.analytics"
            v-model="cookiesStatus.analytics"
          />
        </Transition>
        <label for="analytics">Analytics</label>
        <slot>
          - Analytics cookies are used to track website visitors and their user behaviour.
        </slot>
      </div>

      <div class="check-group">
        <Transition name="fade" mode="out-in">
          <input
            type="checkbox"
            id="marketing"
            :key="cookiesStatus.marketing"
            v-model="cookiesStatus.marketing"
          />
        </Transition>
        <label for="marketing">Marketing</label>
        <slot>
          - Marketing Cookies are used to send advertising, or to track the user across several websites for marketing purposes.
        </slot>
      </div>

      <div class="check-group">
        <!-- NO v-model because required! -->
        <input checked disabled type="checkbox" id="essential" />
        <label for="essential">Essential</label>
        <slot>
          - Essential cookies are essential for a website to function correctly.
        </slot>
      </div>
    </slot>
  </section>
</template>

<style>
.check-group {
  padding: 10px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the checkboxes side by side */
  color: rgb(93, 92, 92);
}

/* Here fade animation css */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.6;
}
</style>
