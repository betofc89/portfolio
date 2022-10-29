<template>
  <ConfigButton @click="toggleConfigs" />
  <ThemeSwitcher @toggleTheme="toggleTheme" />

  <Modal
    v-show="showConfigs"
    @close="toggleConfigs"
    :posH="'right'"
    :posV="'top'"
  >
    <Configs @close="toggleConfigs" @toggleTheme="toggleTheme" />
  </Modal>

  <Modal
    v-show="showMemeClaraoGif"
    :posH="'auto'"
    :posV="'auto'"
    :modalCloseDelay="60000"
  >
    <!-- <img src="./assets/img/cortina-clarao-meme.gif" /> -->
    <img
      v-show="showMemeClaraoGif"
      :src="memeImageURL"
      style="user-select: none"
    />
  </Modal>
  <main>
    <div id="main-wrap">
      <h1 id="page-title">Roberto Cabral - Portfolio and Projects</h1>

      <!-- <button @click="toggleTheme">toggleTheme</button>
      <button @click="memeClaraoGif">memeClaraoGif</button> -->

      <Section :sectionId="'welcome-text'" :sectionTitle="'Welcome'">
        <p>
          In this page you will find my projects, a little about me (bio), and
          also a misc section with other projects I'm involved.<br />
        </p>
        <p>
          Feel free to get in touch through my
          <a
            href="https://www.linkedin.com/in/roberto-de-freitas-cabral/"
            class="subtle-link external-link"
            target="_blank"
            >LinkedIn</a
          >
          or
          <a
            href="mailto:roberto.de.freitas.cabral@outlook.com"
            class="subtle-link"
            >e-mail</a
          >. I'm currently open to job offerings.
        </p>
        <p>The navbar below may help you navigate through that page.</p>
      </Section>

      <Navbar />

      <Section :sectionId="'projects-section'" :sectionTitle="'Projects'">
        <p>Projects related to web development.</p>
        <div class="cont-projects">
          <ProjectContainer
            v-for="project in projects"
            :project-title="project.name"
            :project-description="project.description"
            :button-links="project.buttonlinks"
            :techs="project.techs"
            :updated="project.updated"
          />
        </div>
      </Section>

      <Section :sectionId="'bio-section'" :sectionTitle="'Bio'">
        <div class="cont-projects">
          <ProjectContainer
            v-for="bio in bios"
            :project-title="bio.name"
            :project-description="bio.description"
          />
        </div>
      </Section>

      <Section :sectionId="'misc-section'" :sectionTitle="'Misc'">
        <p>
          Parallel and past projects, hobbies, and other interesting things I'm
          involved with.
        </p>
        <div class="cont-projects">
          <ProjectContainer
            v-for="project in miscProjects"
            :project-title="project.name"
            :project-description="project.description"
            :button-links="project.buttonlinks"
            :techs="project.techs"
            :updated="project.updated"
          />
        </div>
      </Section>
    </div>
  </main>
  <footer>
    <div id="footer-line"></div>
    Roberto Cabral - 2022
  </footer>
</template>

<script>
import Modal from "./components/Modal.vue";
import ProjectContainer from "./components/ProjectContainer.vue";
import Navbar from "./components/Navbar.vue";
import Section from "./components/Section.vue";
import Configs from "./components/Configs.vue";
import ConfigButton from "./components/ConfigButton.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";

export default {
  name: "App",
  components: {
    Modal,
    ProjectContainer,
    Navbar,
    Section,
    Configs,
    ConfigButton,
    ThemeSwitcher,
  },
  data() {
    return {
      showConfigs: false,
      showMemeClaraoGif: false,
      memeImageURL: null,
      initialTheme: "",
      themeChangesToLight: 0,
      memeImageLoaded: false,
      projects: [
        {
          name: "Culinary Recipes WebApp",
          description:
            "A small webapp containing various culinary recipes developed with HTML, CSS, Vue.js, Node.js, Express, and MongoDB Atlas.",
          buttonlinks: [
            {
              text: "GitHub Repo",
              href: "https://github.com/betofc89/gestao-cozinha",
            },
            { text: "Video Demo", href: "https://youtu.be/5kze4z9TS_A" },
          ],
          techs: ["html", "css", "vuejs", "nodejs", "express", "mongodb"],
          updated: "Sep 16th, 2022",
        },
        {
          name: "Blockchain Interaction",
          description:
            "A page where a user will be able to interact with a smart contract on the Ethereum blockchain.",
          buttonlinks: [{ text: "Link (soon)", href: "#projects-session" }],
          techs: ["solidity", "ethereum", "html", "css", "vuejs"],
          updated: "(soon)",
        },
        {
          name: "This Portfolio Page",
          description:
            "A portfolio page where I offer a brief view of my projects, bio, and other contents. Features to come: different themes and other projects.",
          buttonlinks: [
            {
              text: "GitHub Repo",
              href: "https://github.com/betofc89/betofc89.github.io",
            },
          ],
          techs: ["html", "css", "vuejs", "javascript"],
          updated: "Oct 27th, 2022",
        },
      ],
      bios: [
        {
          name: "2003",
          description: "First contact with HTML through written tutorials.",
          buttonlinks: [],
          techs: [],
          updated: "",
        },
        {
          name: "2010 - 2011",
          description:
            "Developed a simple web application using HTML, CSS, JavaScript, PHP, and MySQL.",
          buttonlinks: [],
          techs: [],
          updated: "",
        },
        {
          name: "2011 - 2018",
          description:
            "Mechanical Engineering B.Sc. at UFRJ (Universidade Federal do Rio de Janeiro) (Macaé, Rio de Janeiro, Brazil).",
          buttonlinks: [],
          techs: [],
          updated: "",
        },
        {
          name: "2014 - 2015",
          description:
            "Mechanical Engineering scholarship at Stevens Institute of Technology (Hoboken, New Jersey, USA).",
          buttonlinks: [],
          techs: [],
          updated: "",
        },
        {
          name: "2019 - 2022",
          description:
            "Logistics Analyst at NEOgás do Brasil from Aug/2019 to Feb/2022.",
          buttonlinks: [],
          techs: [],
          updated: "",
        },
        {
          name: "2022 - present",
          description:
            "Learning fullstack web development and blockchain. I'm currently open to job offerings.",
          buttonlinks: [],
          techs: [],
          updated: "",
        },
      ],
      miscProjects: [
        {
          name: "Personal Notes on Web3 Dev",
          description:
            "My personal notes where I write my understanding while I learn about blockchain, Solidity, and related topics to web3 in general.",
          buttonlinks: [
            {
              text: "Link (Soon)",
              href: "#",
            },
          ],
          techs: ["solidity", "ethereum", "notion"],
          updated: "(soon)",
        },
        {
          name: "JavaScript course translation",
          description:
            "Forked from pt.javascript.info, a translation endeavor of en.javascript.info made by Portuguese speakers.",
          buttonlinks: [
            {
              text: "Link",
              href: "https://github.com/betofc89/pt.javascript.info",
            },
            {
              text: "Pull Request",
              href: "https://github.com/javascript-tutorial/pt.javascript.info/pull/247",
            },
          ],
          techs: ["javascript"],
          updated: "Aug 13rd, 2022",
        },
        {
          name: "Testing HTML/CSS features",
          description:
            "Test page in which I implement some of the many existing HTML and CSS features.",
          buttonlinks: [
            {
              text: "Link",
              href: "./testing_html_css/testing_html_css.html",
            },
          ],
          techs: ["html", "css"],
          updated: "Aug 13rd, 2022",
        },
        {
          name: "Excel data preparation",
          description:
            "A VBA (Visual Basic for Applications) algorithm that organizes exported data from a third-party software into an organized Excel table.",
          buttonlinks: [
            {
              text: "Link",
              href: "https://github.com/betofc89/excel-data-preparation",
            },
          ],
          techs: ["vba", "excel"],
          updated: "Jun 27th, 2022",
        },
        {
          name: "Mechanical Engineering final paper",
          description:
            "My Mechanical Engineering course conclusion work. A hydraulic system is simulated in Matlab using an artificial neural networks package.",
          buttonlinks: [
            {
              text: "Link",
              href: "https://github.com/betofc89/tcc-eng-mec",
            },
          ],
          techs: ["matlab", "neural_networks"],
          updated: "Dec 19th, 2018",
        },
      ],
    };
  },
  mounted() {
    const memeImage = new Image();
    memeImage.src = require("./assets/img/meme-cortina-clarao.gif");
    memeImage.onload = () => {
      console.log("memeImage loaded");
      this.memeImageURL = memeImage.src;
      console.log(this.memeImageURL);
      this.memeImageLoaded = true;
    };

    this.setTheme(this.getUserThemePreference());
  },

  methods: {
    toggleConfigs() {
      this.showConfigs = !this.showConfigs;
    },
    setTheme(theme) {
      document.documentElement.className = theme;
    },
    toggleTheme() {
      if (document.documentElement.classList.contains("dark-theme")) {
        this.setTheme("light-theme");
        // Só mostrar se o tema prefered for dark
        if (
          this.initialTheme == "dark" &&
          (this.themeChangesToLight == 0 ||
            this.themeChangesToLight % 5 == 0) &&
          this.memeImageLoaded
        ) {
          this.memeClaraoGif();
        }
        this.themeChangesToLight += 1;
      } else {
        this.setTheme("dark-theme");
      }
    },
    getUserThemePreference() {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        this.initialTheme = "dark";
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
    memeClaraoGif() {
      this.showMemeClaraoGif = true;
      window.setTimeout(() => {
        this.showMemeClaraoGif = false;
      }, 1000);
    },
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  scroll-behavior: smooth;
  /* user-select: none; */
}

html {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: var(--font-color);
  background-color: var(--primary-color);
}

body {
  margin: 0 auto;
}

main {
  max-width: 800px;
  margin: 2rem auto;
}

main #main-wrap {
  margin: 0 1rem;
}

section {
  margin-top: 3rem;
}

section p {
  line-height: 1.75rem;
}

/* ------------------------------------- */

a.subtle-link {
  color: var(--font-color);
  text-decoration: none;
  border-bottom: 1px dashed grey;
}

a.subtle-link:hover {
  color: var(--font-color-hover);
  border-bottom: none;
}

a.external-link:after {
  background-color: var(--font-color);
  content: "";
  display: inline-flex;
  height: 0.6rem;
  width: 0.6rem;
  margin-left: 5px;
  -webkit-mask-image: url(./assets/img/external-link-icon.svg);
  -webkit-mask-size: cover;
}

a.external-link:hover:after {
  background-color: var(--font-color-hover);
}

a.link-no-color {
  color: gray;
  /* text-decoration: none; */
}
/* ------------------------------------- */

h1#page-title {
  padding: 1rem;
  border-radius: 0.4rem;
  transition: 0.2s all ease-in-out;
}

/* ------------------------------------- */

section#welcome-text {
  margin-bottom: 4rem;
}

/* ------------------------------------- */

.cont-projects {
  margin-top: 2rem;
  max-width: 100%;
  display: grid;
  grid-auto-rows: 1fr;
  column-gap: 1.25rem;
  row-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

@media only screen and (max-width: 668px) {
  .cont-projects {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    grid-template-columns: unset;
  }
}

/* ------------------------------------- */

footer {
  text-align: center;
  margin-bottom: 1rem;
}

#footer-line {
  margin: 0 auto 1rem auto;
  background-color: var(--border-color);
  width: 70%;
  height: 1px;
}
</style>
