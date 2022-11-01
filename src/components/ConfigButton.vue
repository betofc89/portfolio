<template>
  <div class="config-button"></div>
</template>

<script>
export default {};
</script>

<style scoped>
/* CONFIG BUTTON */

.config-button {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: url("../assets/img/settings.svg") no-repeat white;
  background-position: center;
  background-size: 1rem;
  box-shadow: 0 0 2px 2px rgba(200, 200, 200, 1);
  position: fixed;
  top: 10px;
  right: 80px;
  z-index: var(--config-button-z-index);
  cursor: pointer;
}

@media only screen and (max-width: 1024px) {
  /* Se o tamanho da tela for menor que um valor calculado, prender botão no bottom. */
  .config-button {
    outline: none;
    width: 58px;
    height: 58px;
    background-size: 1.5rem;

    position: fixed;
    top: unset;
    right: 20px;
    bottom: 20px;

    box-shadow: 0 0 3px 3px rgba(176, 176, 176, 1);

    transition: transform 0.5s ease;
  }

  .rotate360deg {
    transform: rotate(180deg);
  }
}
</style>
