<template>
  <div class="config-button"></div>
</template>

<script>
export default {};
</script>

<style scoped>
/* CONFIG BUTTON */

.config-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: url("../assets/img/settings.svg") no-repeat #ffffff;
  background-position: center;
  background-size: 1rem;
  /* box-shadow: 0 0 2px 2px rgba(200, 200, 200, 1); */
  box-shadow: 0 0 2px 2px var(--config-button-shadow-color);
  position: fixed;
  top: 12px;
  right: 80px;
  z-index: var(--config-button-z-index);
  cursor: pointer;
}

@media only screen and (max-width: 1024px) {
  /* Se o tamanho da tela for menor que um valor calculado, prender botão no bottom. */
  .config-button {
    outline: none;
    width: 42px;
    height: 42px;
    background-size: 1.5rem;

    position: fixed;
    top: unset;
    right: 20px;
    bottom: 14px;

    box-shadow: 0 0 3px 3px var(--config-button-shadow-color);

    transition: transform 0.5s ease;
    background-color: var(--config-button-bg-color);
  }

  .rotate360deg {
    transform: rotate(180deg);
  }
}

@media only screen and (max-width: 600px) {
  .config-button {
    cursor: default; /* Serve para prevenir quadrado azul ao tocar */
  }
}
</style>
