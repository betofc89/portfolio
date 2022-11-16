<template>
  <div class="proj-container">
    <div class="header-proj-container">{{ projectTitle }}</div>
    <div class="body-proj-container" :class="{ minheight: minheight == true }">
      <div class="up-body-proj-container">
        <p>
          {{ projectDescription }}
        </p>
      </div>
      <div class="under-body-proj-container">
        <div v-if="buttonLinks" class="link-proj-container">
          <a
            v-for="btn in buttonLinks"
            :href="btn.href"
            class="link-project-access"
            target="_blank"
            >{{ btn.text }}</a
          >
        </div>
        <div v-if="techs" class="techs-proj-container">
          <TechPill v-for="tech in techs" :techKey="tech" />
        </div>
      </div>
    </div>
    <div v-if="updated" class="footer-proj-container">
      <span lang="en">Updated:&nbsp;</span>
      <span lang="pt">Atualizado:&nbsp;</span><span> {{ updated }}</span>
    </div>
  </div>
</template>

<script>
import TechPill from "./TechPill.vue";

export default {
  name: "ProjectContainer",
  props: [
    "projectTitle",
    "projectDescription",
    "buttonLinks",
    "techs",
    "updated",
    "minheight",
  ],
  components: { TechPill },
  mounted() {
    // console.log("created");
    // console.log(this.minheight);
    if (this.minheight == false) {
      // document.querySelectorAll(".body-proj-container").forEach((el) => {
      // el.style.minHeight = "unset";
      // });
      // this.style.minHeight = "unset";
      // this.classList.add("minheight");
    }
  },
  created() {
    // console.log("UIASHDIUASHDIUASH");
    // this.classList.add("minheight");
  },
};
</script>

<style>
.proj-container {
  max-width: 372px;

  background-color: var(--element-bg-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-x) var(--box-shadow-y)
    var(--box-shadow-blur-radius) var(--box-shadow-spread-radius)
    var(--box-shadow-color);

  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  user-select: none;
}

@media only screen and (max-width: 668px) {
  .proj-container {
    width: 100%;
    max-width: unset;
  }
}

.proj-container:hover {
  background-color: var(--element-bg-color-hover);
  box-shadow: 0px 0px 10px 0px var(--box-shadow-color);
  transition: 0.2s all ease-in-out;
}

.proj-container:active {
  background-color: var(--element-bg-color);
  box-shadow: 0px 0px 5px 2px var(--box-shadow-color);
  transition: 0.2s all ease-in-out;
}

.proj-container:hover .header-proj-container {
  border-image: linear-gradient(
      to right,
      var(--thematic-gradient-color-1),
      var(--thematic-gradient-color-2)
    )
    1;
  background-color: var(--element-header-bg-color-hover);
}

.header-proj-container {
  background-color: var(--element-header-bg-color);
  color: var(--element-header-font-color);
  font-weight: bold;
  padding: 0.5rem 0rem 0.5rem 1rem;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  overflow: hidden;
  border-bottom-width: 5px;
  border-bottom-style: solid;
  border-image: linear-gradient(
      to right,
      var(--thematic-gradient-color-1-unhovered),
      var(--thematic-gradient-color-2-unhovered)
    )
    1;
  transition: 0.2s all ease-in-out;
}

.body-proj-container {
  /* min-height: 300px; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* border: 3px dashed white; */
  flex-grow: 1;
}

.up-body-proj-container {
  padding: 0rem 1rem 0.5rem 1rem;
  text-align: justify;

  /* border: 3px solid orange; */
  line-height: 1.75rem;

  flex-grow: 1;

  overflow-y: hidden;
}
.under-body-proj-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  /* border: 3px solid green; */
  flex-grow: 0;
}

.link-proj-container {
  padding: 0.5rem 0rem 0.5rem 1rem;
  /* border: 1px solid blue; */
}

.techs-proj-container {
  padding: 1rem 0rem 0.5rem 1rem;
  font-size: small;
  color: var(--font-color-ligher);

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* border: 1px solid white; */
}

.body-proj-container.minheight {
  min-height: 300px;
}

.link-project-access {
  font-weight: bold;
  font-size: small;
  color: var(--link-access-font-color);
  padding: 0.5rem;

  border-style: solid;
  border-width: 1px;
  border-radius: 0.33rem;
  border-color: var(--link-access-border-color);

  text-decoration: none;

  transition: 0.1s all ease-in-out;
}

.link-project-access:hover {
  background-color: var(--link-access-bg-color-hover);
  color: var(--link-access-font-color-hover);
}

.link-project-access:active {
  background: radial-gradient(
    circle at 50%,
    var(--link-access-bg-color-active-gradient-color-1) 50%,
    var(--link-access-bg-color-active-gradient-color-2)
  );
}

.link-proj-container a {
  margin-right: 10px;
}

.footer-proj-container {
  padding: 0.5rem 0rem 0.5rem 1rem;
  font-size: small;
  border-top: 1px solid var(--border-color);
  color: var(--font-color-ligher);
  display: flex;
  flex-direction: row;
}
</style>
