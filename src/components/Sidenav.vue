<template>
  <div v-show="showBackdrop" class="backdrop" @click.self="closeSidenav"></div>
  <div id="sidenavConfig" class="sidenav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBackdrop: false,
    };
  },
  methods: {
    showSidenav() {
      document.getElementById("sidenavConfig").style.width = "250px";
      this.showBackdrop = true;
    },
    closeSidenav() {
      document.getElementById("sidenavConfig").style.width = "0px";
      this.showBackdrop = false;
      // this.$emit("close");
    },
  },
};
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: var(--modal-window-z-index);
  /* z-index: 10; */
  top: 0;
  left: 0;
  background-color: var(--primary-color);
  overflow-x: hidden;
  transition: 0.5s;

  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  /* display: flex;
  justify-content: flex-start;
  align-items: flex-start; */
  /* padding: 20px; */
}

.backdrop {
  /* display: block; */
  /*  display: flex;
  justify-content: center;
  align-items: center; */
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: var(--modal-backdrop-z-index);
}
</style>
