<template>
  <div class="proj-container">
    <div class="header-proj-container">{{ projectTitle }}</div>
    <div class="body-proj-container">
      <p>
        {{ projectDescription }}
      </p>
    </div>
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
    <div v-if="updated" class="footer-proj-container">
      Updated: {{ updated }}
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
  ],
  components: { TechPill },
};
</script>

<style>
.proj-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 372px;

  background-color: var(--element-bg-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  /* box-shadow: 0px 0px 4px 0px var(--box-shadow-color); */
  box-shadow: var(--box-shadow-x) var(--box-shadow-y)
    var(--box-shadow-blur-radius) var(--box-shadow-spread-radius)
    var(--box-shadow-color);
  /* transition: 0.2s all ease-in-out; */
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
}

.proj-container:hover .tech-icon-logo {
  filter: opacity(0.75) saturate(1);
}

.proj-container:hover .header-proj-container {
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
  padding: 0 1rem;
  line-height: 1.75rem;
  text-align: justify;
  flex-grow: 1; /* Esta linha faz com que o techs-proj-container fique grudado na base, como desejado. */
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

.link-proj-container {
  padding: 0.5rem 0rem 2rem 1rem;
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  justify-content: end;
}

.link-proj-container a {
  margin-right: 10px;
}

.techs-proj-container {
  padding: 0.5rem 0rem 0.5rem 1rem;
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  justify-content: end;
  font-size: small;
  /* color: rgb(128, 128, 128); */
  color: var(--font-color-ligher);
}

.footer-proj-container {
  padding: 0.5rem 0rem 0.5rem 1rem;
  justify-content: end;
  margin-top: auto; /* Esta linha é importante para posicionar no final. */
  align-items: center;
  font-size: small;
  border-top: 1px solid var(--border-color);
  color: var(--font-color-ligher);
}
</style>
