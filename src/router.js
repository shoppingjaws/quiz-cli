import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Quiz from "./components/Quiz.vue";
import Content from "./components/Content.vue";
import FourChoice from "./components/FourChoice.vue";
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "app",
      component: App
    },
    {
      path: "/Quiz",
      name: "Quiz",
      component: Quiz
    },
    {
      path: "/Answer/Content.vue",
      name: "Content",
      component: Content
    },
    {
      path: "/Answer/FourChoice.vue",
      name: "FourChoice",
      component: FourChoice
    }
  ]
});
