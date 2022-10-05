<script setup>
const emit = defineEmits(["accept", "decline", "toggleOptions"]);

const accept = () => {
  emit("accept");
};

const decline = () => {
  emit("decline");
};

const toggleOptions = () => {
  emit("toggleOptions")
}
</script>

<template>
  <footer class="modal-footer">
    <slot name="footer">
      <!-- Default footer! -->
    </slot>

    <div class="btn-group">
      <button
          type="button"
          class="btn-accept"
          @click="accept"
          aria-label="Close modal"
      >
        Accept
      </button>

      <button
          type="button"
          class="btn-option"
          @click="toggleOptions"
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
</template>

<style>
.modal-footer {
  padding: 15px;
  display: flex;
  border-top: 1px solid #eeeeee;
  flex-direction: column;
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
