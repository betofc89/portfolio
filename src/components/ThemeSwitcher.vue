<template>
  <div class="theme-switch-wrapper">
    <label class="theme-switch" for="cb-dark-theme">
      <input type="checkbox" id="cb-dark-theme" @change="toggleTheme" />
      <div class="slider round"></div>
    </label>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSwitch() {
      if (document.documentElement.classList.contains("dark-theme")) {
        document.getElementById("cb-dark-theme").checked = true;
      } else {
        document.getElementById("cb-dark-theme").checked = false;
      }
    },
    toggleTheme() {
      this.$emit("toggleTheme");
    },
  },
};
</script>

<style scoped>
/* Peguei o código abaixo da seguinte página: */
/* https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8 */

.theme-switch-wrapper {
  display: flex;
  align-items: center;

  position: fixed;
  top: 10px;
  right: 10px;
}

.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}

.theme-switch input {
  display: none;
  /* position: fixed;
  top: 0;
  left: 0; */
}

.slider {
  /* background-color: #ccc; */
  background-color: rgb(253, 221, 115);
  cursor: pointer;
  position: absolute;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  transition: 0.4s;
}

.slider:before {
  background-color: #fff;
  background-image: var(--sun-icon);
  /* background-image: url("../assets/img/sun-icon.svg"); */
  background-size: 1rem;
  background-repeat: no-repeat;
  background-position: center;
  content: "";
  /* content: url(); */
  position: absolute;

  width: 26px;
  height: 26px;

  bottom: 4px;
  left: 4px;
  transition: 0.4s;
}

input:checked + .slider {
  /* background-color: #66bb6a; */
  background-color: #7866bb;
}

input:checked + .slider:before {
  /* background-image: url("../assets/img/moon-icon.svg"); */
  /* background-image: var(--sun-icon); */
  background-size: 1rem;
  background-repeat: no-repeat;
  background-position: center;
  content: "";
}

/* input:checked + .slider:before {
  transform: translateX(26px);
} */
#cb-dark-theme:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

@media only screen and (max-width: calc(800px + 60px + 10px + 1rem + 3rem)) {
  /* Estou adicionando este bloco para impedir que o switcher desça junto com a rolagem da tela se o tamanho da tela for menor que um valor calculado. */
  /* 800px: main max-width; 60px: .theme-switch width; 10px: .theme-switch-wrapper right position; 1rem: #main-wrap margin; 3rem: margem de segurança */
  .theme-switch-wrapper {
    position: absolute;
  }
}
</style>
