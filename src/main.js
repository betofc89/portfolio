import { createApp, VueElement } from "vue";
import App from "./App.vue";
import './registerServiceWorker'
// import detectLanguage from "./utils/detectLanguage.js";

const app = createApp(App);
app.mount("#app");

// createApp(App).mount("#app");
