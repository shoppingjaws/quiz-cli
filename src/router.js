import Vue from "vue";
import VueRouter from "vue-router";
import Quiz from "./components/Quiz.vue";
import Content from "./components/Content.vue";
import FourChoice from "./components/FourChoice.vue";
import TwoChoice from "./components/TwoChoice.vue";
import Answer from "./components/Answer.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/Quiz",
      name: "Quiz",
      component: Quiz
    },
    {
      path: "/Answer",
      name: "Answer",
      component: Answer
    },
    {
      path: "/Two",
      name: "TwoChoice",
      component: TwoChoice
    },
    {
      path: "/Four",
      name: "FourChoice",
      component: FourChoice
    },
    {
      path: "/Content",
      name: "Content",
      component: Content
    }
  ]
});
