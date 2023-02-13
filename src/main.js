import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createPinia } from "pinia";
import "@vuepic/vue-datepicker/dist/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faThumbsUp,
  faAngleDown,
  faAngleUp,
  faDesktop,
  faGift,
  faChessKnight,
  faPalette,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
loadFonts();
library.add(faThumbsUp);
library.add(faAngleDown);
library.add(faAngleUp);
library.add(faDesktop);
library.add(faGift);
library.add(faChessKnight);
library.add(faPalette);
library.add(faCommentDots);
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(vuetify);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
