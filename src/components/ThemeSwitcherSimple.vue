<template>
  <div class="theme-switch-wrapper">
    <label class="theme-switch" for="cb-dark-theme-simple">
      <input type="checkbox" id="cb-dark-theme-simple" @change="toggleTheme" />
      <div class="slider round"></div>
    </label>
  </div>
</template>

<script>
export default {
  methods: {
    toggleTheme() {
      this.$emit("toggleTheme");
    },
    toggleSwitch() {
      if (document.documentElement.classList.contains("dark-theme")) {
        document.getElementById("cb-dark-theme-simple").checked = true;
      } else {
        document.getElementById("cb-dark-theme-simple").checked = false;
      }
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

  /* position: absolute;
  top: 10px;
  right: 10px; */
}

.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}

.theme-switch input {
  display: none;
}

.slider {
  /* background-color: #ccc; */
  background-color: rgba(253, 221, 115, 1);
  /* background-color: var(--element-bg-color); */
  cursor: pointer;
  position: absolute;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* transition: 0.4s; */

  /* box-shadow: 0 0 2px 2px var(--config-button-shadow-color); */
  box-shadow: var(--config-control-box-shadow);
  /* box-shadow: 0 0 4px 1px rgb(64, 64, 64) inset; */
}

.slider:before {
  /* background-color: #fff; */
  background-color: var(--element-bg-color);
  background-image: var(--sun-icon-branco);
  /* background-image: var(--sun-icon); */
  background-size: 1rem;
  background-repeat: no-repeat;
  background-position: center;
  content: "";
  position: absolute;

  width: 26px;
  height: 26px;

  bottom: 4px;
  left: 4px;
  transition: transform cubic-bezier(1, 0, 0, 1) 0.3s, background 0.4s;

  /* box-shadow: 0 0 3px 1px grey; */
  box-shadow: var(--slider-knob-box-shadow);
  /* box-shadow: 0 0 3px 1px red; */
}

input:checked + .slider {
  /* background-color: #66bb6a; */
  background-color: #7866bb;
  /* background-color: #423aaa; */
}

input:checked + .slider:before {
  /* background-image: url("../assets/img/moon-icon.svg"); */
  /* background-image: var(--sun-icon); */
  /* background-size: 1rem;
  background-repeat: no-repeat;
  background-position: center;
  content: ""; */
  /* box-shadow: 0 0 3px 3px rgb(84, 84, 84); */
}

/* input:checked + .slider:before {
  transform: translateX(26px);
} */
#cb-dark-theme-simple:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  /* border-radius: 34px; original*/
  border-radius: 10px;
}

.slider.round:before {
  /* border-radius: 50%; original*/
  border-radius: 30%;
}

@media only screen and (max-width: calc(800px + 60px + 10px + 1rem + 3rem)) {
  /* Estou adicionando este bloco para impedir que o switcher desça junto com a rolagem da tela se o tamanho da tela for menor que um valor calculado. */
  /* 800px: main max-width; 60px: .theme-switch width; 10px: .theme-switch-wrapper right position; 1rem: #main-wrap margin; 3rem: margem de segurança */
  .theme-switch-wrapper {
    /* position: absolute; */
  }
}
</style>
