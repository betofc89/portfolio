<template>
  <div id="mascara-superior"></div>
  <div id="mascara-inferior"></div>

  <ThemeSwitcher @toggleTheme="toggleTheme" ref="themeswitcher" />
  <ConfigButton @click="openConfigs" />
  <!-- <Sidenav ref="sidenav" @close="toggleSidenav">
    <Configs
      @changeLang="setLanguage"
      @toggleShadow="toggleShadow"
      @changeShadow="changeShadow"
      @toggleBorderRadius="toggleBorderRadius"
      @toggleTheme="toggleTheme"
      @close="toggleSidenav"
    />
  </Sidenav> -->
  <Modal
    v-show="showConfigs"
    @close="closeConfigs"
    :posH="'right'"
    :posV="'top'"
    :fillVert="true"
    id="modalConfigs"
  >
    <Configs
      @close="closeConfigs"
      @toggleTheme="toggleTheme"
      @changeLang="setLanguage"
      ref="configs"
    />
  </Modal>

  <!-- <Modal
    v-show="showMemeClaraoGif"
    :posH="'center'"
    :posV="'center'"
    :modalCloseDelay="60000"
  >
    <img
      v-show="showMemeClaraoGif"
      :src="memeImageURL"
      style="user-select: none"
      id="memeClaraoGif"
    />
  </Modal> -->
  <main>
    <div id="main-wrap">
      <h1 id="page-title" lang="en">
        Roberto Cabral<br /><span
          style="font-size: 1.5rem; padding: 0; margin: 0"
          >Portfolio and Projects</span
        >
      </h1>
      <h1 id="page-title" lang="pt">
        Roberto Cabral<br /><span
          style="font-size: 1.5rem; padding: 0; margin: 0"
          >Portfólio e Projetos</span
        >
      </h1>

      <Section
        :sectionId="'welcome-text'"
        :sectionTitle="{ en: 'Welcome', pt: 'Bem-vindo' }"
      >
        <p lang="en">
          In this page you will find my projects, a little about me, and also a
          misc section with other projects I'm involved.<br />
        </p>
        <p lang="pt">
          Nesta página você encontrará meus projetos, um pouco sobre mim, e
          também uma seção com outros projetos.<br />
        </p>
        <p lang="en">
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
        <p lang="pt">
          Sinta-se à vontade para entrar em contato através do meu
          <a
            href="https://www.linkedin.com/in/roberto-de-freitas-cabral/"
            class="subtle-link external-link"
            target="_blank"
            >LinkedIn</a
          >
          ou
          <a
            href="mailto:roberto.de.freitas.cabral@outlook.com"
            class="subtle-link"
            >e-mail</a
          >. Estou aberto a ofertas de emprego.
        </p>
        <p lang="en">
          This page is also available in
          <a @click="setLanguage('pt')" class="subtle-link flag-link"
            >portuguese
            <!-- <img
              src="./assets/img/brazil-flag-twitter.svg"
              style="width: 1rem; height: 1rem"
            /> --> </a
          >.
        </p>
        <p lang="pt">
          Esta página também está disponível em
          <a @click="setLanguage('en')" class="subtle-link flag-link"
            >inglês
            <!-- <img
              src="./assets/img/gb-flag-twitter.svg"
              style="width: 1rem; height: 1rem"
            /> --> </a
          >.
        </p>
        <p lang="en">
          The navbar below may help you navigate through that page.
        </p>
        <p lang="pt">
          A barra de navegação abaixo pode ajudá-lo a navegar através desta
          página.
        </p>
      </Section>

      <Navbar />

      <Section
        :sectionId="'projects-section'"
        :sectionTitle="{ en: 'Projects', pt: 'Projetos' }"
      >
        <p lang="en">Projects related to web development.</p>
        <p lang="pt">Projetos relacionados ao desenvolvimento web.</p>

        <div class="cont-projects">
          <ProjectContainer
            v-for="project in projects_pt_br"
            :project-title="project.name"
            :project-description="project.description"
            :button-links="project.buttonlinks"
            :techs="project.techs"
            :updated="project.updated"
            :minheight="true"
            lang="pt"
          />

          <ProjectContainer
            v-for="project in projects_en"
            :project-title="project.name"
            :project-description="project.description"
            :button-links="project.buttonlinks"
            :techs="project.techs"
            :updated="project.updated"
            :minheight="true"
            lang="en"
          />
        </div>
      </Section>

      <Section
        :sectionId="'bio-section'"
        :sectionTitle="{ en: 'Bio', pt: 'Sobre' }"
      >
        <div class="cont-projects">
          <ProjectContainer
            v-for="bio in bios_pt_br"
            :project-title="bio.name"
            :project-description="bio.description"
            :minheight="false"
            lang="pt"
          />
          <ProjectContainer
            v-for="bio in bios_en"
            :project-title="bio.name"
            :project-description="bio.description"
            :minheight="false"
            lang="en"
          />
        </div>
      </Section>

      <Section
        :sectionId="'misc-section'"
        :sectionTitle="{ en: 'Misc', pt: 'Outros' }"
      >
        <p lang="en">
          Parallel and past projects, hobbies, and other interesting things.
        </p>
        <p lang="pt">
          Projetos paralelos ou anteriores, hobbies, e outras coisas
          interessantes.
        </p>
        <div class="cont-projects">
          <ProjectContainer
            v-for="project in miscProjects_pt_br"
            :project-title="project.name"
            :project-description="project.description"
            :button-links="project.buttonlinks"
            :techs="project.techs"
            :updated="project.updated"
            :minheight="true"
            lang="pt"
          />
          <ProjectContainer
            v-for="project in miscProjects_en"
            :project-title="project.name"
            :project-description="project.description"
            :button-links="project.buttonlinks"
            :techs="project.techs"
            :updated="project.updated"
            :minheight="true"
            lang="en"
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
import Sidenav from "./components/Sidenav.vue";

const navigatorLanguages = require("navigator-languages");

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
    Sidenav,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      showConfigs: false,
      showSidenav: false,
      // showMemeClaraoGif: false,
      // memeImageURL: null,
      initialTheme: "",
      themeChangesToLight: 0,
      // memeImageLoaded: false,
      projects_en: [
        {
          name: "Culinary Recipes WebApp",
          description:
            "A webapp containing various culinary recipes that I developed to join the fullstack challenge of a company.",
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
          name: "This Portfolio Page",
          description:
            "A portfolio page where I offer a brief view of my projects, bio, and other contents. Features to come: different themes and other projects.",
          buttonlinks: [
            {
              text: "GitHub Repo",
              href: "https://github.com/betofc89/portfolio",
            },
          ],
          techs: ["html", "css", "vuejs", "javascript"],
          updated: "Nov 11th, 2022",
        },
        {
          name: "Blockchain Interaction",
          description:
            "A page where a user will be able to interact with a smart contract on the Ethereum blockchain.",
          buttonlinks: [{ text: "Link (soon)", href: "#projects-session" }],
          techs: ["solidity", "ethereum", "html", "css", "vuejs"],
          updated: "(soon)",
        },
      ],
      projects_pt_br: [
        {
          name: "WebApp de Receitas Culinárias",
          description:
            "Webapp contendo várias receitas culinárias que desenvolvi para participar do desafio de desenvolvedor fullstack de uma empresa.",
          buttonlinks: [
            {
              text: "GitHub Repo",
              href: "https://github.com/betofc89/gestao-cozinha",
            },
            { text: "Vídeo", href: "https://youtu.be/5kze4z9TS_A" },
          ],
          techs: ["html", "css", "vuejs", "nodejs", "express", "mongodb"],
          updated: "16 de Set de 2022",
        },
        {
          name: "Esta página de portfolio",
          description:
            "Uma página de portfolio onde eu ofereço uma breve visualização dos meus projetos, biografia, e outros conteúdos. Diferentes temas visuais e outros projetos serão adicionados em breve.",
          buttonlinks: [
            {
              text: "GitHub Repo",
              href: "https://github.com/betofc89/portfolio",
            },
          ],
          techs: ["html", "css", "vuejs", "javascript"],
          updated: "11 de Nov de 2022",
        },
        {
          name: "Interação com a Blockchain",
          description:
            "Uma página onde o usuário será capaz de interagir com um contrato inteligente na blockchain da Ethereum",
          buttonlinks: [{ text: "Link (em breve)", href: "#projects-session" }],
          techs: ["solidity", "ethereum", "html", "css", "vuejs"],
          updated: "(em breve)",
        },
      ],
      bios_en: [
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
            "Developed a simple web application using HTML, CSS, JavaScript, jQuery, PHP, and MySQL.",
          buttonlinks: [],
          techs: [],
          updated: "",
        },
        /* {
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
        }, */
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
      bios_pt_br: [
        {
          name: "2003",
          description:
            "Primeiro contato com HTML através de tutoriais escritos.",
          buttonlinks: [],
          techs: [],
          updated: "",
        },
        {
          name: "2010 - 2011",
          description:
            "Desenvolvimento de uma aplicação web simples usando HTML, CSS, JavaScript, jQuery, PHP, e MySQL.",
          buttonlinks: [],
          techs: [],
          updated: "",
        },
        /* {
          name: "2011 - 2018",
          description:
            "Bacharelado em Engenharia Mecânica pela UFRJ (Universidade Federal do Rio de Janeiro) (Macaé, Rio de Janeiro, Brasil).",
          buttonlinks: [],
          techs: [],
          updated: "",
        },
        {
          name: "2014 - 2015",
          description:
            "Bolsista de Engenharia Mecânica na Stevens Institute of Technology (Hoboken, Nova Jérsei, EUA).",
          buttonlinks: [],
          techs: [],
          updated: "",
        }, */
        {
          name: "2019 - 2022",
          description: "Analista de Logística na NEOgás do Brasil.",
          buttonlinks: [],
          techs: [],
          updated: "",
        },
        {
          name: "2022 - atualmente",
          description:
            "Aprendendo desenvolvimento fullstack e blockchain. Estou aberto a ofertas de trabalho.",
          buttonlinks: [],
          techs: [],
          updated: "",
        },
      ],
      miscProjects_en: [
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
              href:
                process.env.BASE_URL + "testing_html_css/testing_html_css.html",
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
        /* {
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
        }, */
      ],
      miscProjects_pt_br: [
        {
          name: "Notas Pessoais sobre Web3 Dev",
          description:
            "Minhas notas pessoais em que escrevo o meu entendimento enquanto aprendo sobre blockchain, Solidity, e tópicos relacionados à web3 em geral.",
          buttonlinks: [
            {
              text: "Link (em breve)",
              href: "#",
            },
          ],
          techs: ["solidity", "ethereum", "notion"],
          updated: "(em breve)",
        },
        {
          name: "Tradução de curso de JavaScript",
          description:
            "Forkado de pt.javascript.info, uma iniciativa de tradução de en.javascript.info realizada por falantes do português",
          buttonlinks: [
            {
              text: "Pull Request",
              href: "https://github.com/javascript-tutorial/pt.javascript.info/pull/247",
            },
          ],
          techs: ["javascript"],
          updated: "13 de Ago de 2022",
        },
        {
          name: "Testando HTML/CSS",
          description:
            "Página de teste em que eu implemento alguns dos vários elementos de HTML e CSS.",
          buttonlinks: [
            {
              text: "Link",
              href:
                process.env.BASE_URL + "testing_html_css/testing_html_css.html",
            },
          ],
          techs: ["html", "css"],
          updated: "13 de Ago de 2022",
        },
        {
          name: "Preparação de dados do Excel",
          description:
            "Um algoritmo escrito em VBA (Visual Basic for Applications) que organiza dados exportados por softwares de terceiros em uma tabela organizada do Excel.",
          buttonlinks: [
            {
              text: "Link",
              href: "https://github.com/betofc89/excel-data-preparation",
            },
          ],
          techs: ["vba", "excel"],
          updated: "27 de Jun de 2022",
        },
        /* {
          name: "Monografia de Engenharia Mecânica",
          description:
            "Minha monografia de Engenharia Mecânica. Um sistema hidráulico é simulado no Matlab usando o pacote de redes neurais artificiais.",
          buttonlinks: [
            {
              text: "Link",
              href: "https://github.com/betofc89/tcc-eng-mec",
            },
          ],
          techs: ["matlab", "neural_networks"],
          updated: "19 de Dez de 2018",
        }, */
      ],
    };
  },
  mounted() {
    // console.log(window.innerWidth);
    // console.log(window.innerHeight);

    // console.log("this.showSidenav: " + this.showSidenav);
    /* const memeImage = new Image();
    memeImage.src = require("./assets/img/meme-cortina-clarao.gif");
    memeImage.onload = () => {
      this.memeImageURL = memeImage.src;
      console.log(this.memeImageURL);
      this.memeImageLoaded = true;
    }; */

    this.setTheme(this.getUserThemePreference());
    this.$refs.themeswitcher.toggleSwitch();
    this.$refs.configs.toggleSwitch();

    this.setLanguage(this.detectLanguage());

    // this.changeMemeWidth();
  },

  methods: {
    /* changeMemeWidth() {
      const declaration = document.querySelector(":root").style;
      console.log(
        "setando --width-meme-smartphone para 90% de " +
          window.innerWidth +
          "px."
      );
      declaration.setProperty(
        "--width-meme-smartphone",
        Math.trunc(window.innerWidth * 0.9) + "px"
      );
      // console.log(getComputedStyle(document.querySelector(":root")));
      console.log(
        "--width-meme-smartphone: " +
          getComputedStyle(document.documentElement).getPropertyValue(
            "--width-meme-smartphone"
          )
      );
    }, */

    detectLanguage() {
      // console.log("navigatorLanguages: " + navigatorLanguages());
      if (navigatorLanguages()[0].includes("pt")) {
        return "pt";
      } else {
        return "en";
      }
    },

    setLanguage(lang) {
      let elementsToShow;
      let elementsToHide;
      if (lang == "pt") {
        elementsToShow = document.querySelectorAll(`[lang="pt"]`);
        elementsToHide = document.querySelectorAll(`[lang="en"]`);
      } else {
        elementsToShow = document.querySelectorAll(`[lang="en"]`);
        elementsToHide = document.querySelectorAll(`[lang="pt"]`);
      }
      elementsToShow.forEach((el) => {
        el.style.display = "block";
      });
      elementsToHide.forEach((el) => {
        el.style.display = "none";
      });

      document.getElementById("languagesSelect").value = lang;
    },

    openConfigs() {
      var modal = document
        .getElementById("modalConfigs")
        .getElementsByClassName("modal")
        .item(0);

      // const modalWidth = getComputedStyle(modal).width;
      const modalWidth = "234px";
      // console.log("modalWidth = " + modalWidth);
      modal.style.setProperty("right", "-" + modalWidth);
      this.showConfigs = true;
      window.setTimeout(() => {
        /* modal.style.setProperty(
          "transition",
          "right 400ms cubic-bezier(0, 1, 0, 1)"
        ); */
        // modal.style.setProperty("transition", "right");
        /* modal.style.setProperty(
          "transition",
          "right 777ms cubic-bezier(0.5, 0.5, 0, 1)"
        ); */
        modal.style.setProperty("transition-property", "right");
        modal.style.setProperty("transition-duration", "500ms ");
        modal.style.setProperty(
          "transition-timing-function",
          "cubic-bezier(0.5, 0.5, 0, 1)"
        );
        modal.style.setProperty("right", "0px");
      }, 0);
    },

    closeConfigs() {
      var modal = document
        .getElementById("modalConfigs")
        .getElementsByClassName("modal")
        .item(0);
      const modalWidth = getComputedStyle(modal).width;
      // console.log(getComputedStyle(modal).width);
      modal.style.setProperty("right", "-" + modalWidth);
      /* modal.style.setProperty(
        "transition",
        "right 500ms cubic-bezier(0.5, 0.5, 0, 1)"
      ); */

      modal.style.setProperty("transition-property", "right");
      modal.style.setProperty("transition-duration", "500ms ");
      modal.style.setProperty(
        "transition-timing-function",
        "cubic-bezier(0.5, 0.5, 0, 1)"
      );
      window.setTimeout(() => {
        this.showConfigs = false;
      }, 500);
    },

    setTheme(theme) {
      document.documentElement.className = theme;
    },

    toggleTheme() {
      if (document.documentElement.classList.contains("dark-theme")) {
        this.setTheme("light-theme");
        // Só mostrar meme se o tema prefered for dark
        /* if (this.initialTheme == "dark" && (this.themeChangesToLight == 0 || this.themeChangesToLight % 5 == 0) && this.memeImageLoaded) {
          this.memeClaraoGif();
        } */
        this.themeChangesToLight += 1;
      } else {
        this.setTheme("dark-theme");
      }
      this.$refs.themeswitcher.toggleSwitch();
      this.$refs.configs.toggleSwitch();
    },

    getUserThemePreference() {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        this.initialTheme = "dark";
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },

    /* memeClaraoGif() {
      this.showMemeClaraoGif = true;
      window.setTimeout(() => {
        this.showMemeClaraoGif = false;
      }, 1000);
    }, */
  },
};
</script>

<style>
#modalConfigs > .modal {
  /* transform: translateX(100px); */
}

:root,
:root.light-theme {
  --primary-color: rgb(232, 232, 232);
  --primary-color-square-shadow: rgb(225, 225, 225);
  --font-color: #444;
  --font-color-lighter: #808080;
  --font-color-hover: #999;

  --element-bg-color: rgb(245, 245, 245);
  --element-bg-color-hover: rgb(255, 255, 255);

  --element-header-bg-color: rgb(85, 85, 85);
  --element-header-bg-color-hover: rgb(51, 51, 51);
  --element-header-font-color: rgb(255, 255, 255);

  --box-shadow-alpha: 1;
  --box-shadow-color: rgba(128, 128, 128, var(--box-shadow-alpha));
  --box-shadow-color-no-alpha: rgb(128, 128, 128);
  --box-shadow-x: 0px;
  --box-shadow-y: 0px;
  --box-shadow-blur-radius: 0px;
  --box-shadow-spread-radius: 0px;
  --section-stripe-box-shadow-color: rgba(128, 128, 128, 1);

  --border-color: rgb(169, 169, 169);
  --border-color-lighter: rgb(204, 204, 204);

  --link-access-font-color: rgb(33, 33, 255);
  --link-access-font-color-hover: rgb(255, 255, 255);
  --link-access-border-color: rgb(75, 75, 255);
  --link-access-bg-color-hover: var(--link-access-border-color);
  --link-access-bg-color-active-gradient-color-1: rgb(152, 152, 255);
  --link-access-bg-color-active-gradient-color-2: var(
    --link-access-border-color
  );

  --thematic-gradient-color-1: blue;
  --thematic-gradient-color-2: red;
  --grad-a: 0%;
  --grad-b: 0%;
  --grad-c: 100%;

  --thematic-gradient-color-1-unhovered: rgb(100, 100, 100);
  --thematic-gradient-color-2-unhovered: rgb(211, 211, 211);

  --navbar-bg-color: rgba(210, 210, 210, 1);

  --config-button-bg-color: rgba(255, 255, 255, 1);
  --config-button-shadow-color: rgba(200, 200, 200, 1);

  /* ---------------------------------------------------------------------- */
  /* config modal */

  --backdrop-alpha: 0.6;

  --sun-path-radius: 100px;
  --sun-object-radius: 15px;

  --sun-object-position-x: calc(
    var(--sun-path-radius) * 2 - var(--sun-object-radius)
  );
  --sun-object-position-y: calc(
    var(--sun-path-radius) - var(--sun-object-radius)
  );

  --sun-icon: url("./assets/img/sun-icon.svg");
  --sun-icon-branco: url("./assets/img/sun-icon.svg");
  --sun-icon-bg-color: rgb(253, 221, 115);

  --modal-close-button-bg-color: var(--navbar-bg-color);
  --modal-close-button-bg-color-hover: rgba(220, 220, 220, 1);

  --box-shadow-color-config: rgb(80, 80, 80);

  --border-radius: 0px;

  --config-control-box-shadow: 0 0 2px 2px var(--config-button-shadow-color);
  --slider-knob-box-shadow: 0 0 2px 2px var(--config-button-shadow-color);

  /* ---------------------------------------------------------------------- */
  /* z-index */
  --navbar-z-index: 2;
  --config-button-z-index: 3;
  --modal-backdrop-z-index: 4;
  --modal-window-z-index: 5;

  --width-meme-smartphone: 0px;
}

/* [data-theme="dark"] { */
:root.dark-theme {
  --primary-color: #1b1b1b;
  --primary-color-square-shadow: var(--primary-color);
  --font-color: #fff;
  --font-color-lighter: #808080;
  --font-color-hover: #999;

  --element-bg-color: rgb(52, 52, 52);
  --element-bg-color-hover: rgb(62, 62, 62);

  --element-header-bg-color: rgb(85, 85, 85);
  --element-header-bg-color-hover: rgb(51, 51, 51);
  --element-header-font-color: rgb(255, 255, 255);

  /* --box-shadow-alpha: 1; */
  --box-shadow-color: rgba(16, 16, 16, var(--box-shadow-alpha));
  --box-shadow-color-no-alpha: rgb(16, 16, 16);
  /* --box-shadow-x: 0px; */
  /* --box-shadow-y: 5px; */
  /* --box-shadow-blur-radius: 3px; */
  /* --box-shadow-spread-radius: 0px; */
  --section-stripe-box-shadow-color: rgba(128, 128, 128, 1);

  --border-color: rgb(65, 65, 65);
  --border-color-lighter: rgb(35, 35, 35);

  --link-access-font-color: rgb(122, 122, 255);
  --link-access-font-color-hover: rgb(255, 255, 255);
  --link-access-border-color: rgb(122, 122, 255);
  --link-access-bg-color-hover: var(--link-access-border-color);
  --link-access-bg-color-active-gradient-color-1: rgb(152, 152, 255);
  --link-access-bg-color-active-gradient-color-2: var(
    --link-access-border-color
  );

  --thematic-gradient-color-1: blue;
  --thematic-gradient-color-2: red;

  --thematic-gradient-color-1-unhovered: rgb(100, 100, 100);
  --thematic-gradient-color-2-unhovered: rgb(211, 211, 211);

  --navbar-bg-color: rgba(85, 85, 85, 1);

  --config-button-bg-color: rgba(175, 175, 175, 1);
  --config-button-shadow-color: rgba(48, 48, 48, 1);

  /* ---------------------------------------------------------------------- */
  /* config modal */

  --backdrop-alpha: 0.75;

  /* --sun-path-radius: 100px; */
  /* --sun-object-radius: 15px; */

  /* --sun-object-position-x: calc(
    var(--sun-path-radius) * 2 - var(--sun-object-radius)
  );
  --sun-object-position-y: calc(
    var(--sun-path-radius) - var(--sun-object-radius)
  ); */

  /* --sun-icon: url("../src/assets/img/moon-icon.svg"); */
  /* --sun-icon: url("./assets/img/moon-icon.svg"); */
  --sun-icon: var(--sun-icon-branco);
  --sun-icon-branco: url("./assets/img/moon-icon-branco.svg");
  --sun-icon-bg-color: #7866bb;

  --modal-close-button-bg-color: var(--navbar-bg-color);
  --modal-close-button-bg-color-hover: rgba(115, 115, 115, 0.85);

  --box-shadow-color-config: rgb(8, 8, 8);

  /* --border-radius: 0px; */

  --config-control-box-shadow: 0px 0px 2px 3px rgb(20, 20, 20);
  --slider-knob-box-shadow: 0px 0px 3px 2px rgb(32, 32, 32);
}

[lang="en"] {
  display: none;
}
[lang="pt"] {
}

@media only screen and (max-width: 400px) {
  /* #memeClaraoGif {
    width: var(--width-meme-smartphone);
    height: calc((371 / 498) * var(--width-meme-smartphone) px);
  } */
}

.stop-scrolling {
  /* This class avoids scrolling of the screen. */
  height: 100%;
  overflow: hidden;
}

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
  overscroll-behavior-y: contain;
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

section > p {
  line-height: 1.75rem;
}

/* ------------------------------------- */

a.subtle-link,
span.subtle-link {
  color: var(--font-color);
  text-decoration: none;
  border-bottom: 1px dashed grey;
  cursor: pointer;
  display: inline-block;
}

a.subtle-link:hover,
span.subtle-link:hover {
  color: var(--font-color-hover);
  border-bottom: 1px dashed var(--primary-color);
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

a.flag-link:after {
  /* background-color: var(--font-color); */
  content: "";
  display: inline-flex;
  /* height: 0.6rem;
  width: 0.6rem; */
}

p[lang="en"] > a.flag-link:after {
  background-image: url(./assets/img/brazil-flag-twitter.svg);
  height: 0.8rem;
  width: 0.8rem;
}

p[lang="pt"] > a.flag-link:after {
  background-image: url(./assets/img/gb-flag-twitter.svg);
  height: 0.8rem;
  width: 0.8rem;
}

a.link-no-color {
  color: gray;
  /* text-decoration: none; */
}

/* ------------------------------------- */

h1#page-title {
  padding: 0rem;
  margin: 0;
  transition: 0.2s all ease-in-out;
  letter-spacing: 0.33rem;
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
