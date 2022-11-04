<template>
  <section :id="sectionId">
    <div class="section-stripe"></div>
    <h1 lang="en">{{ sectionTitle.en }}</h1>
    <h1 lang="pt">{{ sectionTitle.pt }}</h1>
    <slot> </slot>
  </section>
</template>

<script>
export default {
  props: ["sectionId", "sectionTitle"],
};
</script>

<style scoped>
.section-stripe {
  width: 25%;
  background: linear-gradient(
    to right,
    var(--thematic-gradient-color-1),
    var(--thematic-gradient-color-2)
  );
  height: 10px;
  /* box-shadow: 3px 3px var(--section-stripe-box-shadow-color); */
  /* box-shadow: var(--box-shadow-x) var(--box-shadow-y)
    var(--box-shadow-blur-radius) var(--box-shadow-spread-radius)
    var(--box-shadow-color); */
}
</style>
