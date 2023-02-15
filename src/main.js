import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";

import HomeView from "./views/HomeView.vue";
import AiView from "./views/AiView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: "/",
    },
    {
      component: AiView,
      path: "/ai",
    },
  ],
});

// createApp(App).use(router);
// createApp(App).mount("#app");
// Funkar inte........ varför???

// const app = createApp(App);
// app.use(router);
// app.mount("#app");
// Funkar.......................

createApp(App).use(router).mount("#app");
//Funkar.........................
