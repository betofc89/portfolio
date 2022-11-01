<template>
  <div class="configs-content">
    <div class="configs-content-controls">
      <div class="control-box row">
        <span lang="en">Language</span>
        <span lang="pt">Idioma</span>
        <select
          name="languages"
          id="languagesSelect"
          @change="changeLang"
          style="margin-left: 0.5rem"
        >
          <option value="en">English</option>
          <option value="pt">Português</option>
        </select>
      </div>
      <div class="control-box row">
        <input type="checkbox" name="" id="cbShadow" @change="toggleShadow" />
        <label for="cbShadow"
          ><span lang="en">Shadow</span><span lang="pt">Sombra</span></label
        >
        <div id="circle-attention"></div>
      </div>

      <div class="control-box column">
        <span lang="en">Sun angle</span>
        <span lang="pt">Ângulo do Sol</span>
        <div class="slidecontainer">
          <input
            type="range"
            min="0"
            max="360"
            value="90"
            id="sliderShadow"
            step="15"
            @input="changeShadow"
          />
        </div>
      </div>
      <div class="control-box column">
        <span lang="en">Element elevation</span>
        <span lang="pt">Elevação do elemento</span>
        <div class="slidecontainer">
          <input
            type="range"
            min="0"
            max="20"
            value="5"
            id="sliderElementsElevation"
            step="1"
            @input="changeShadow"
          />
        </div>
      </div>
      <div class="control-box row">
        <input
          type="checkbox"
          name=""
          id="cbBorderRadius"
          @change="toggleBorderRadius"
        />
        <label for="cbBorderRadius"
          ><span lang="en">Border radius</span
          ><span lang="pt">Bordas arred.</span></label
        >
      </div>
    </div>
    <div class="configs-content-body">
      <div id="sun-path">
        <div id="sun-object" @click="toggleTheme"></div>
        <div id="angle-object"></div>
        <div id="square-shadow">
          <div class="header-proj-container">Lorem Ipsum</div>
          <div class="body-proj-container">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            assumenda cupiditate labore, consequuntur itaque.
          </div>
        </div>
      </div>
    </div>
    <div class="configs-content-close-section">
      <div class="modal-close-button" @click="closeConfigs">Close</div>
    </div>
  </div>
</template>

<script>
import ThemeSwitcher from "./ThemeSwitcher.vue";

export default {
  components: { ThemeSwitcher },
  mounted() {
    this.changeShadow();
    this.toggleShadow();
    this.toggleBorderRadius();
  },

  methods: {
    changeLang(e) {
      console.log(e.target.value);
      this.$emit("changeLang", e.target.value);
    },

    closeConfigs() {
      this.$emit("close");
    },

    changeShadow() {
      let sunAngleValue = document.getElementById("sliderShadow").value;
      let elemElevationValue = document.getElementById(
        "sliderElementsElevation"
      ).value;
      this.$emit("changeShadow", { sunAngleValue, elemElevationValue });
    },

    toggleShadow() {
      this.$emit("toggleShadow");
    },

    toggleBorderRadius() {
      this.$emit("toggleBorderRadius");
    },

    toggleTheme() {
      this.$emit("toggleTheme");
    },
  },
};
</script>

<style scoped>
.text {
  color: v-bind(color);
}

.configs-content {
  /* background: green; */
  width: 100%;
}

.configs-content-controls {
  position: relative;
  /* margin: 0 auto; */
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  /* height: 50%; */
  /* display: block; */
  /* width: auto; */
}

.control-box {
  /* background-color: var(--navbar-bg-color); */
  background-color: var(--element-bg-color);
  padding: 0.5rem;
  border-radius: var(--border-radius);
}

.control-box.row {
  display: flex;
  flex-direction: row;
}
.control-box.column {
  display: flex;
  flex-direction: column;
}

.tremer {
  animation-name: tremer;
  animation-duration: 1s;
}

@keyframes tremer {
  0% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background-color: yellow;
    left: 50px;
    /* left: 100%; */
    top: 0px;
  }
  50% {
    background-color: blue;
    left: 0px;
    top: 0px;
  }
  75% {
    background-color: green;
    /* left: 50%; */
    left: 25px;
    top: 0px;
  }
  100% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
}

#circle-attention {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  display: none;
  position: relative;
  /* z-index: -1; */
}

.configs-content-body {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 10px; */
}

#sun-path {
  margin: 30px 0px;
  /* background-color: green; */
  width: calc(var(--sun-path-radius) * 2);
  height: calc(var(--sun-path-radius) * 2);
  border-radius: 50%;
  border: 2px dashed lightgrey;
  position: relative;
}

#sun-object,
#angle-object {
  width: calc(var(--sun-object-radius) * 2);
  height: calc(var(--sun-object-radius) * 2);
  border-radius: 50%;
  /* background-color: black; */
  background: var(--sun-icon) var(--sun-icon-bg-color);
  /* background: url("../assets/img/sun-icon.svg") var(--sun-icon-bg-color); */
  /* background: url("./img/sun-icon.svg") radial-gradient(red, blue); */
  background-size: 1rem;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: var(--sun-object-position-x);
  top: var(--sun-object-position-y);

  /* top: calc(100px - 10px); */
  /* left: calc(200px - 10px); */
  cursor: pointer;
}

#angle-object {
  left: var(--angle-object-position-x);
  top: var(--angle-object-position-y);
  /* background: yellow; */
  background: unset;
  border-radius: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
  font-size: smaller;
  cursor: unset;
}

#square-shadow {
  display: flex;
  /* justify-content: flex-end; */
  flex-direction: column;

  width: 50px;
  height: 50px;
  background-color: var(--element-bg-color);
  position: absolute;
  border-radius: var(--border-radius);
  top: 75px;
  left: 75px;
  /* display: block; */
  box-shadow: var(--box-shadow-x) var(--box-shadow-y)
    var(--box-shadow-blur-radius) var(--box-shadow-spread-radius)
    var(--box-shadow-color);
}

#square-shadow .header-proj-container {
  font-size: 3px;
  padding: 5px;
  height: 15px;
  width: 100%;
  border-bottom-width: 2px;
  /* border-radius: unset; */
  border-radius: var(--border-radius) var(--border-radius) 0 0;
}

#square-shadow .body-proj-container {
  font-size: 3px;
  padding: 5px;
  /* height: 15px; */
  width: 100%;
  min-height: unset;
  line-height: unset;
  overflow: hidden;
  text-align: left;
  /* border-bottom-width: 2px; */
}

.configs-content-close-section {
  width: 100%;
}

.modal-close-button {
  background-color: var(--modal-close-button-bg-color);
  /* font-weight: bolder; */
  margin: auto;
  cursor: pointer;
  width: 50%;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
}

.modal-close-button:hover {
  background-color: var(--modal-close-button-bg-color-hover);
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  /* Se o tamanho da tela for menor que 600px. */

  .control-box {
    padding: 1rem;
    width: 100%;
    vertical-align: middle;
  }

  #sliderShadow,
  #sliderElementsElevation {
    -webkit-appearance: none;
    width: 100%;
    height: 35px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  #sliderShadow::-webkit-slider-thumb,
  #sliderElementsElevation::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 35px;
    height: 35px;
    /* background: #04aa6d; */
    background: rgb(42, 116, 253);
    cursor: pointer;
  }

  .inactive-slider::-webkit-slider-thumb {
    background: grey !important;
    cursor: not-allowed;
  }
}

.slidecontainer input {
  width: 100%;
}
</style>
