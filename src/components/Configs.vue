<template>
  <div class="modal-content">
    <div class="modal-content-controls">
      <div class="control-box">
        <input type="checkbox" name="" id="cbShadow" @change="toggleShadow" />
        <label for="cbShadow">Shadow</label>
        <div id="circle-attention"></div>
      </div>
      <div class="control-box">
        <span>Sun angle</span>
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
      <div class="control-box">
        <span>Element elevation</span>
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
      <div class="control-box">
        <input
          type="checkbox"
          name=""
          id="cbBorderRadius"
          @change="toggleBorderRadius"
        />
        <label for="cbBorderRadius">Border radius</label>
      </div>
    </div>
    <div class="modal-content-body">
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
    <div class="modal-content-close-section">
      <div class="modal-close-button" @click="closeConfigs">Close</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.changeShadow();
    this.toggleShadow();
    this.toggleBorderRadius();
  },
  methods: {
    closeConfigs() {
      this.$emit("close");
    },
    changeShadow() {
      const declaration = document.styleSheets[0].cssRules[0].style;
      let sliderShadow = document.getElementById("sliderShadow");
      let sunAngleRad = (sliderShadow.value / 180) * Math.PI;

      let sliderElevation = document.getElementById("sliderElementsElevation");
      let elemElevation = sliderElevation.value;

      let angleObject = document.getElementById("angle-object");
      let resultado = this.calculateValues(elemElevation, sunAngleRad);
      console.log(resultado);

      declaration.setProperty("--box-shadow-x", resultado.coordX + "px");
      declaration.setProperty("--box-shadow-y", resultado.coordY + "px");
      declaration.setProperty(
        "--sun-object-position-x",
        resultado.sun_coordX + "px"
      );
      declaration.setProperty(
        "--sun-object-position-y",
        resultado.sun_coordY + "px"
      );

      declaration.setProperty(
        "--angle-object-position-x",
        resultado.angleObj_coordX + "px"
      );
      declaration.setProperty(
        "--angle-object-position-y",
        resultado.angleObj_coordY + "px"
      );
      angleObject.innerHTML = sliderShadow.value + "\xB0";
    },
    toggleShadow() {
      const declaration = document.styleSheets[0].cssRules[0].style;
      let sliderShadow = document.getElementById("sliderShadow");
      let sliderElevation = document.getElementById("sliderElementsElevation");
      let cbShadow = document.getElementById("cbShadow");
      if (cbShadow.checked) {
        console.log("cbShadow checked");
        declaration.setProperty("--box-shadow-alpha", 1);
        sliderShadow.disabled = false;
        sliderElevation.disabled = false;

        sliderShadow.classList.remove("inactive-slider");
        sliderElevation.classList.remove("inactive-slider");
      } else {
        console.log("cbShadow unchecked");
        declaration.setProperty("--box-shadow-alpha", 0);
        sliderShadow.disabled = true;
        sliderElevation.disabled = true;

        sliderShadow.classList.add("inactive-slider");
        sliderElevation.classList.add("inactive-slider");
      }
    },
    toggleBorderRadius() {
      const declaration = document.styleSheets[0].cssRules[0].style;
      let cbBorderRadius = document.getElementById("cbBorderRadius");
      if (cbBorderRadius.checked) {
        declaration.setProperty("--border-radius", "10px");
      } else {
        declaration.setProperty("--border-radius", "0px");
      }
    },
    calculateValues(elElev, sunAng) {
      const sunPathRadius = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--sun-path-radius");
      const sunObjRadius = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--sun-object-radius");
      // This function calculates the values of x and y coordinates
      // of the box-shadow property. Since I want the sun following
      // the standard trigonometric cycle, I multiplied the coordX to -1.
      let coordX = elElev * Math.cos(sunAng).toFixed(2) * -1;
      let coordY = elElev * Math.sin(sunAng).toFixed(2);

      let sun_coordX =
        parseInt(sunPathRadius) +
        parseInt(sunPathRadius) * Math.cos(sunAng).toFixed(2) -
        parseInt(sunObjRadius) -
        1;
      let sun_coordY =
        parseInt(sunPathRadius) -
        parseInt(sunPathRadius) * Math.sin(sunAng).toFixed(2) -
        parseInt(sunObjRadius) -
        1;

      let angleObj_coordX =
        parseInt(sunPathRadius) +
        parseInt(sunPathRadius) * 0.65 * Math.cos(sunAng).toFixed(2) -
        parseInt(sunObjRadius) -
        1;

      let angleObj_coordY =
        parseInt(sunPathRadius) -
        parseInt(sunPathRadius) * 0.65 * Math.sin(sunAng).toFixed(2) -
        parseInt(sunObjRadius) -
        1;

      return {
        coordX,
        coordY,
        sun_coordX,
        sun_coordY,
        angleObj_coordX,
        angleObj_coordY,
      };
    },
    toggleTheme() {
      this.$emit("toggleTheme");
      // const declaration = document.styleSheets[0].cssRules[0].style;
      // declaration.setProperty("--primary-color", "red");
    },
  },
};
</script>

<style>
.modal-content {
  /* background: green; */
  width: 100%;
}

.modal-content-controls {
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

#cbShadow {
  /* transition: 0.2s transform ease; */
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

.modal-content-body {
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
  line-height: unset;
  overflow: hidden;
  text-align: left;
  /* border-bottom-width: 2px; */
}

.modal-content-close-section {
  /* background: green; */
  display: inline-block;
  /* margin: 0 auto; */
  /* position: absolute; */
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
}

@media only screen and (max-width: 600px) {
  /* Se o tamanho da tela for menor que 600px. */
  .modal-backdrop {
    background-color: rgba(0, 0, 0, 0.75);
  }

  .modal-window {
    width: 75%;
    height: 100%;
    top: 0px;
    right: 0px;
    padding: 5px;
  }

  .control-box {
    /* display: flex; */
    /* flex-direction: row; */
    /* justify-content: center; */
    /* align-items: center; */
    padding: 1rem;
    width: 100%;
    vertical-align: middle;
  }

  .control-box input[type="checkbox"] {
    /* width: 35px; */
    /* height: 35px; */
  }

  /* #cbShadow::before {
    background-image: url("./img/arrow-right.svg");
    background-size: 50px 50px;
    display: inline-block;
    width: 50px;
    height: 50px;
    content: "";
    margin-left: -30px;

    filter: invert(31%) sepia(95%) saturate(7472%) hue-rotate(358deg)
      brightness(96%) contrast(123%);
    vertical-align: middle;
  } */

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
