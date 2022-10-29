<template>
  <section :id="sectionId">
    <div class="section-stripe"></div>
    <h1>{{ sectionTitle }}</h1>
    <slot> </slot>
  </section>
</template>

<script>
export default {
  props: ["sectionId", "sectionTitle"],
};
</script>

<style>
.section-stripe {
  width: 25%;
  background: linear-gradient(
    to right,
    var(--thematic-gradient-color-1),
    var(--thematic-gradient-color-2)
  );
  height: 10px;
  /* box-shadow: 3px 3px var(--section-stripe-box-shadow-color); */
  box-shadow: var(--box-shadow-x) var(--box-shadow-y)
    var(--box-shadow-blur-radius) var(--box-shadow-spread-radius)
    var(--box-shadow-color);
}
</style>
