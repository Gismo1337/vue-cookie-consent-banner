<script setup>
const props = defineProps({
  cookiesStatus: Object
})
</script>

<template>
  <section class="modal-options" id="options">
    <slot name="options">

      <div class="options-container">
        <div class="anal-div">  <Transition name="fade" mode="out-in">
          <input
              type="checkbox"
              id="analytics"
              :key="cookiesStatus.analytics"
              v-model="cookiesStatus.analytics"
          />
        </Transition>
          <label for="analytics" aria-label="Accept analytics cookies">Analytics</label>
          <p class="sub-text">
            Analytics cookies are used to track website visitors and their user behaviour.
          </p>
        </div>

        <div class="mark-div">  <Transition name="fade" mode="out-in">
          <input
              type="checkbox"
              id="marketing"
              :key="cookiesStatus.marketing"
              v-model="cookiesStatus.marketing"
          />
        </Transition>
          <label for="marketing" aria-label="Accept marketing cookies">Marketing</label>
          <p class="sub-text">
            Marketing Cookies are used to send advertising, or to track the user across several websites for marketing purposes.
          </p>
        </div>

        <div class="essent-div">   <!-- NO v-model because required! -->
          <input checked disabled type="checkbox" id="essential" />
          <label for="essential" aria-label="Accept essential cookies">Essential</label>
          <p class="sub-text">
            Essential cookies are essential for a website to function correctly.
          </p></div>
      </div>


    </slot>
  </section>
</template>

<style>
.options-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1em;
  grid-row-gap: 0em;
  margin: 0em 1em 1em 1em;
}

.anal-div { grid-area: 1 / 1 / 2 / 2; }
.mark-div { grid-area: 1 / 2 / 2 / 3; }
.essent-div { grid-area: 1 / 3 / 2 / 4; }

@media only screen and (max-width: 400px) {
  /* For mobile phones: */
  .options-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 1em;
    margin: 0em 1em 1em 1em;
  }

  .anal-div { grid-area: 1 / 1 / 2 / 2; }
  .mark-div { grid-area: 2 / 1 / 3 / 2; }
  .essent-div { grid-area: 3 / 1 / 4 / 2; }
}


label {
  font-weight: bold;
  margin-left: 1em;
}

.sub-text {
  font-size: 0.8em;
  color: #666;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.6;
}
</style>
