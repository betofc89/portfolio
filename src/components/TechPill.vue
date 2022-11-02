<template>
  <div class="tech-pill">
    {{ techsObj[techKey].name }}
    <img
      v-if="techsObj[techKey].image"
      :src="require('../assets/img/logos/' + techsObj[techKey].image)"
      :alt="techsObj[techKey].name + ' logo'"
      class="tech-icon-logo"
    />
  </div>
</template>

<script>
export default {
  props: ["techKey"],
  data() {
    return {
      techsObj: {
        html: {
          name: "HTML",
          image: "html-logo.png",
        },
        css: {
          name: "CSS",
          image: "css-logo.png",
        },
        javascript: {
          name: "JavaScript",
          image: "javascript-logo.png",
        },
        nodejs: {
          name: "Node.js",
          image: "nodejs-logo.png",
        },
        vuejs: {
          name: "Vue.js",
          image: "vuejs-logo.png",
        },
        express: {
          name: "Express",
          image: "",
        },
        mongodb: {
          name: "MongoDB",
          image: "mongodb-logo.png",
        },
        solidity: {
          name: "Solidity",
          image: "solidity-logo.png",
        },
        ethereum: {
          name: "Ethereum",
          image: "ethereum-logo.png",
        },
        notion: {
          name: "Notion",
          image: "notion-logo.png",
        },
        excel: {
          name: "Excel",
          image: "excel-logo.png",
        },
        vba: {
          name: "VBA",
          image: "vba-logo.png",
        },
        matlab: {
          name: "Matlab",
          image: "matlab-logo.png",
        },
        neural_networks: {
          name: "Neural Networks",
          image: "neural-network-icon.png",
        },
      },
    };
  },
};
</script>
<style scoped>
.tech-icon-logo {
  margin-right: 0rem;
  filter: opacity(0.75) saturate(0);
  transition: 0.2s all ease-in-out;
  width: 16px;
  height: 16px;
  filter: opacity(0.75) saturate(1);
  vertical-align: middle;
}

.tech-pill {
  background-color: none;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  display: inline-block;
  border: 1px solid var(--border-color);
  margin-right: 0.2rem;
  margin-bottom: 0.4rem;
}
</style>
