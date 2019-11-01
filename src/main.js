import Vue from "vue";
import App from "./App.vue";
import "es6-promise/auto";
import vmodal from "vue-js-modal";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import BootstrapVue from "bootstrap-vue";
import VueMeta from "vue-meta";
Vue.config.productionTip = false;
Vue.use(vuetify);
Vue.use(vmodal);
Vue.use(BootstrapVue);
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
});

var config = require("../private/firebase");
console.debug(config.firebaseKey);
firebase.initializeApp(config.firebaseKey);

new Vue({
  //router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
