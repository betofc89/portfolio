<template>
  <div class="backdrop" @click.self="closeModal">
    <div
      class="modal"
      :class="{
        top: posV === 'top',
        right: posH === 'right',
        left: posH === 'left',
        bottom: posV === 'bottom',
        center: posH === 'auto' && posV === 'auto',
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posH", "posV", "modalCloseDelay"],
  methods: {
    closeModal() {
      if (this.modalCloseDelay) {
        window.setTimeout(() => {}, this.modalCloseDelay);
      }
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal.right {
  right: 10px;
}
.modal.top {
  top: 10px;
}
.modal.left {
  left: 10px;
}
.modal.bottom {
  bottom: 10px;
}
.modal.center {
  position: relative;
  margin: auto;
  /* max-width: 500px; */
}

.backdrop {
  /* display: block; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: var(--modal-backdrop-z-index);
}

.modal {
  background-color: var(--primary-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  position: absolute;
  /* top: 10px;
  right: 10px; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  z-index: var(--modal-window-z-index);
}
</style>
