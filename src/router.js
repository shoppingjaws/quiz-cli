import Vue from "vue";
import VueRouter from "vue-router";
import Content from "./components/Content.vue";
import FourChoice from "./components/FourChoice.vue";
import TwoChoice from "./components/TwoChoice.vue";
import Answer from "./components/Answer.vue";
import Quiz from "./components/Quiz.vue";
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/Quiz",
      name: "Quiz",
      component: Quiz,
      children: [
        {
          path: "",
          name: "Answer",
          component: Answer,
          children: [
            {
              path: "Two",
              name: "TwoChoice",
              component: TwoChoice
            },
            {
              path: "Four",
              name: "FourChoice",
              component: FourChoice
            },
            {
              path: "",
              name: "Content",
              component: Content
            }
          ]
        }
      ]
    }
  ]
});
