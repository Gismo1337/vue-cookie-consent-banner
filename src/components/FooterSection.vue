<script setup>
import Button from "./Button.vue";
const emit = defineEmits(["accept", "decline", "toggleOptions"]);

const accept = () => {
  emit("accept");
};

const decline = () => {
  emit("decline");
};

const toggleOptions = () => {
  emit("toggleOptions");
};
</script>

<template>
  <footer class="modal-footer">
    <slot name="footer">
      <!-- Default footer! -->
    </slot>

    <div class="btn-group">
      <Button class="btn-accept" aria-label="Accept cookies" @click="accept"
        >Accept</Button
      >
      <Button
        class="btn-option"
        aria-label="View cookie options"
        @click="toggleOptions"
        >Options</Button
      >
      <Button class="btn-decline" @click="decline" aria-label="Decline cookies">
        Decline
      </Button>
    </div>
  </footer>
</template>

<style>
.modal-footer {
  padding: 15px;
  display: flex;
  border-top: 1px solid #eeeeee;
  flex-direction: column;
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
</style>
