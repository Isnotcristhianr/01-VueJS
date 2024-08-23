import "./presentation/assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./presentation/router";

import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./config/firebaseConfig";

const app = createApp(App);

//firebase
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
});

app.use(createPinia());
app.use(router);

app.mount("#app");
