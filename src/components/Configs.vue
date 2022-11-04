<template>
  <div class="configs-content" @mousewheel.prevent>
    <div class="configs-content-controls">
      <div class="control-box row">
        <span lang="en">Language</span>
        <span lang="pt">Idioma</span>
        <select name="languages" id="languagesSelect" @change="changeLang">
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

      <div class="control-box column" @mousewheel="mousewheelChangeAngle">
        <span lang="en">Sun angle</span>
        <span lang="pt">Ângulo do Sol</span>
        <div class="slidecontainer" @click="checkShadow">
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
      <div class="control-box column" @mousewheel="mousewheelChangeElevation">
        <span lang="en">Element elevation</span>
        <span lang="pt">Elevação do elemento</span>
        <div class="slidecontainer" @click="checkShadow">
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
    <div
      class="configs-content-body"
      @mousewheel.self.prevent="mousewheelChangeAngle"
    >
      <div
        id="sun-path"
        @mousewheel.self.prevent="mousewheelChangeAngle"
        @click.self="changeSunPosition"
      >
        <div
          id="sun-object"
          @click="toggleTheme"
          @mousewheel.self.prevent="mousewheelChangeAngle"
        ></div>
        <div
          id="angle-object"
          @mousewheel.self.prevent="mousewheelChangeAngle"
        ></div>
        <div id="square-shadow" @mousewheel="mousewheelChangeElevation">
          <div class="header-proj-container">Lorem Ipsum</div>
          <div class="body-proj-container">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            assumenda cupiditate labore, consequuntur itaque.
          </div>
        </div>
      </div>
    </div>
    <div class="configs-content-close-section">
      <div class="modal-close-button" @click="closeConfigs">
        <span lang="en">Close</span><span lang="pt">Fechar</span>
      </div>
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
    changeSunPosition(e) {
      let result = this.convertCoords(e.offsetX, e.offsetY);
      let cbShadow = document.getElementById("cbShadow");
      console.log("(x, y) = " + "(" + result.x + ", " + result.y + ")");

      console.log("seno = " + this.calcSeno(result.x, result.y));
      console.log(
        "arcsen = " +
          Math.asin(this.calcSeno(result.x, result.y)) +
          " = " +
          (Math.asin(this.calcSeno(result.x, result.y)) * 180) / Math.PI +
          " = " +
          this.getAngulo(result.x, result.y) +
          " graus."
      );
      console.log(
        "getNearestMultiple -> " +
          this.getNearestMultiple(this.getAngulo(result.x, result.y))
      );
      console.log("Quadrante: " + this.getNumQuadrante(result.x, result.y));
      console.log("----------------------------");

      let sliderShadow = document.getElementById("sliderShadow");

      if (cbShadow.checked) {
        sliderShadow.value = this.getNearestMultiple(
          this.getAngulo(result.x, result.y)
        );
        this.changeShadow();
      } else {
        this.checkShadow();
      }

      /* let deresult = this.coordsToCirclePath(result.x, result.y);
      console.log(
        "(offsetX, offsetY) = " +
          "(" +
          deresult.offsetX +
          ", " +
          deresult.offsetY +
          ")"
      ); */

      /* console.log(
        "(e.offsetX, e.offsetY) = " + "(" + e.offsetX + ", " + e.offsetY + ")"
      ); */
    },

    getAngulo(x, y) {
      let angulo;
      let seno = this.calcSeno(x, y);
      let arcosenoRad = Math.asin(seno);
      let arcosenoAng = (arcosenoRad * 180) / Math.PI;
      let quadrante = this.getNumQuadrante(x, y);
      if (quadrante == 1) {
        angulo = arcosenoAng;
      } else if (quadrante == 2) {
        angulo = 180 - arcosenoAng;
      } else if (quadrante == 3) {
        angulo = 180 + Math.abs(arcosenoAng);
      } else if (quadrante == 4) {
        angulo = 360 - Math.abs(arcosenoAng);
      }

      return angulo;
    },

    getNearestMultiple(angulo) {
      let quociente = Math.floor(angulo / 15);
      let anterior = 15 * quociente;
      let posterior = 15 * (quociente + 1);
      if (Math.abs(angulo - anterior) < Math.abs(angulo - posterior)) {
        return anterior;
      } else {
        return posterior;
      }
    },

    getNumQuadrante(x, y) {
      if (x > 0) {
        if (y > 0) {
          return 1;
        } else if (y < 0) {
          return 4;
        } else if (y == 0) {
          return "x+";
        }
      } else if (x < 0) {
        if (y > 0) {
          return 2;
        } else if (y < 0) {
          return 3;
        } else if (y == 0) {
          return "x-";
        }
      } else if (x == 0) {
        if (y > 0) {
          return "y+";
        } else if (y < 0) {
          return "y-";
        } else {
          return "0,0";
        }
      }
    },

    convertCoords(offsetX, offsetY) {
      // recebe offset e retorna coords a partir do centro do sun path
      let x = offsetX - 100;
      let y = offsetY * -1 + 100;
      return { x, y };
    },

    coordsToCirclePath(x, y) {
      let offsetX = x + 100;
      let offsetY = (y - 100) * -1;
      return { offsetX, offsetY };
    },

    calcSeno(x, y) {
      let hipotenusa = this.calcHipotenusa(x, y);
      let seno = y / hipotenusa;
      return seno;
    },

    calcHipotenusa(x, y) {
      let hip = Math.sqrt(x ** 2 + y ** 2);
      return hip;
    },

    mousewheelChangeAngle(e) {
      this.checkShadow();
      let cbShadow = document.getElementById("cbShadow");
      let sliderShadow = document.getElementById("sliderShadow");
      let altPressed = 1;
      if (e.altKey) {
        altPressed = 3;
      }
      if (e.deltaY > 0 && cbShadow.checked) {
        // está rolando para baixo -> ang diminui
        if (
          sliderShadow.value == 0 &&
          (e.target.id == "sun-path" ||
            e.target.id == "sun-object" ||
            e.target.id == "angle-object")
        ) {
          sliderShadow.value = 360 - 15 * altPressed;
        } else {
          sliderShadow.value = parseInt(sliderShadow.value) - 15 * altPressed;
        }
        this.changeShadow();
      } else if (e.deltaY < 0 && cbShadow.checked) {
        // está rolando para cima
        if (
          sliderShadow.value == 360 &&
          (e.target.id == "sun-path" ||
            e.target.id == "sun-object" ||
            e.target.id == "angle-object")
        ) {
          sliderShadow.value = 0 + 15 * altPressed;
        } else {
          sliderShadow.value = parseInt(sliderShadow.value) + 15 * altPressed;
        }
        this.changeShadow();
      }
    },
    mousewheelChangeElevation(e) {
      this.checkShadow();
      let cbShadow = document.getElementById("cbShadow");
      let sliderElevation = document.getElementById("sliderElementsElevation");
      if (e.deltaY > 0 && cbShadow.checked) {
        // está rolando para baixo -> ang diminui
        console.log("rolando pra baixo");
        sliderElevation.value -= 1;
        this.changeShadow();
      } else if (e.deltaY < 0 && cbShadow.checked) {
        // está rolando para cima
        console.log("rolando pra cima");
        sliderElevation.value = parseInt(sliderElevation.value) + 1;
        this.changeShadow();
      }
    },

    changeLang(e) {
      console.log(e.target.value);
      this.$emit("changeLang", e.target.value);
    },

    toggleShadow() {
      const declaration = document.querySelector(":root").style;
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

    checkShadow() {
      let cbShadow = document.getElementById("cbShadow");
      let circleAttention = document.getElementById("circle-attention");
      if (!cbShadow.checked && circleAttention.style.display != "block") {
        // shadow off
        circleAttention.style.display = "block";
        circleAttention.classList.add("tremer");
        window.setTimeout(() => {
          circleAttention.style.display = "none";
          circleAttention.classList.remove("tremer");
        }, 1000);
      }
    },

    changeShadow() {
      const declaration = document.querySelector(":root").style;
      let cbShadow = document.getElementById("cbShadow");
      let sunAngle = document.getElementById("sliderShadow");
      let sunAngleValue = document.getElementById("sliderShadow").value;
      let sunAngleRad = (sunAngleValue / 180) * Math.PI;
      let elemElevationValue = document.getElementById(
        "sliderElementsElevation"
      ).value;
      let angleObject = document.getElementById("angle-object");

      let result = this.calculateValues(elemElevationValue, sunAngleRad);

      declaration.setProperty("--box-shadow-x", result.coordX + "px");
      declaration.setProperty("--box-shadow-y", result.coordY + "px");
      declaration.setProperty(
        "--box-shadow-blur-radius",
        result.blurRadius + "px"
      );
      declaration.setProperty(
        "--sun-object-position-x",
        result.sun_coordX + "px"
      );
      declaration.setProperty(
        "--sun-object-position-y",
        result.sun_coordY + "px"
      );

      declaration.setProperty(
        "--angle-object-position-x",
        result.angleObj_coordX + "px"
      );
      declaration.setProperty(
        "--angle-object-position-y",
        result.angleObj_coordY + "px"
      );
      angleObject.innerHTML = sunAngleValue + "\xB0";
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

      let blurRadius = elElev * (1 / 3);

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
        blurRadius,
        sun_coordX,
        sun_coordY,
        angleObj_coordX,
        angleObj_coordY,
      };
    },

    toggleBorderRadius() {
      const declaration = document.querySelector(":root").style;
      let cbBorderRadius = document.getElementById("cbBorderRadius");
      if (cbBorderRadius.checked) {
        declaration.setProperty("--border-radius", "10px");
      } else {
        declaration.setProperty("--border-radius", "0px");
      }
    },

    toggleTheme() {
      this.$emit("toggleTheme");
    },

    closeConfigs() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.configs-content {
  padding: 1rem;
  user-select: none;
  /* background: green; */
  /* width: 100%; */
  height: 100%;
}

.configs-content-controls {
  /* position: relative; */
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
  padding: 1rem 0.5rem;
  border-radius: var(--border-radius);
}

.control-box.row {
  display: flex;
  flex-direction: row;
}
.control-box.row > select {
  margin-left: 0.5rem;
}

.control-box.row > input[type="checkbox"] {
  margin-right: 0.5rem;
}

.control-box.column {
  display: flex;
  flex-direction: column;
}

.slidecontainer input {
  margin-top: 0.5rem;
  width: 100%;
}

.tremer {
  animation-name: tremer;
  animation-duration: 1s;
}

@keyframes tremer {
  0% {
    background-color: red;
    left: 0px;
  }

  25% {
    background-color: yellow;
    left: 50px;
  }
  50% {
    background-color: blue;
    left: 0px;
  }
  75% {
    background-color: green;
    left: 25px;
  }
  100% {
    background-color: red;
    left: 0px;
  }
}

#circle-attention {
  margin-left: 5px;
  top: 5px;
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
</style>
