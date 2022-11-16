<template>
  <section :id="sectionId">
    <div class="section-stripe" @mousewheel="changeStripe"></div>
    <h1 lang="en">{{ sectionTitle.en }}</h1>
    <h1 lang="pt">{{ sectionTitle.pt }}</h1>
    <slot> </slot>
  </section>
</template>

<script>
export default {
  props: ["sectionId", "sectionTitle"],
  methods: {
    changeStripe(e) {
      const declaration = document.querySelector(":root").style;
      // const gradA = declaration.getProperty("--grad-a");
      const gradA = getComputedStyle(document.documentElement).getPropertyValue(
        "--grad-a"
      );
      const gradB = getComputedStyle(document.documentElement).getPropertyValue(
        "--grad-b"
      );
      const gradC = getComputedStyle(document.documentElement).getPropertyValue(
        "--grad-c"
      );
      /* console.log(
        "(gradA, gradB, gradC) = " +
          "(" +
          gradA +
          ", " +
          gradB +
          ", " +
          gradC +
          ")"
      ); */

      var gradAValue = parseInt(gradA.split("%")[0]);
      var gradBValue = parseInt(gradB.split("%")[0]);
      var gradCValue = parseInt(gradC.split("%")[0]);
      console.log(e);
      if (e.wheelDeltaY > 0) {
        // pra cima
        gradBValue <= 90 ? (gradBValue += 10) : (gradBValue += 0);
      } else {
        // pra baixo
        gradBValue >= 10 ? (gradBValue -= 10) : (gradBValue -= 0);
      }

      if (e.altKey) {
        e.preventDefault();
        declaration.setProperty("--grad-b", gradBValue + "%");
      }
    },
  },
};
</script>

<style scoped>
.section-stripe {
  width: 25%;
  background: linear-gradient(
    to right,
    var(--thematic-gradient-color-1) var(--grad-a),
    var(--thematic-gradient-color-2) var(--grad-b),
    var(--thematic-gradient-color-1) var(--grad-c)
  );
  height: 10px;
  /* box-shadow: 3px 3px var(--section-stripe-box-shadow-color); */
  /* box-shadow: var(--box-shadow-x) var(--box-shadow-y)
    var(--box-shadow-blur-radius) var(--box-shadow-spread-radius)
    var(--box-shadow-color); */
}
</style>
