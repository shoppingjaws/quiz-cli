import Vue from "vue";
import VueRouter from "vue-router";
// import Content from "./components/Content.vue";
import FourChoice from "./components/FourChoice.vue";
import TwoChoice from "./components/TwoChoice.vue";
// import Answer from "./components/Answer.vue";
import Home from "./components/Home.vue";
import Quiz from "./components/Quiz.vue";
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      name: "Home",
      component: Home
    },
    {
      path: "Quiz/",
      name: "Quiz",
      component: Quiz,
      children: [
        {
          path: "",
          name: "FourChoice",
          component: FourChoice
        },
        {
          path: "",
          name: "TwoChoice",
          component: TwoChoice
        }
      ]
    }
  ]
});
