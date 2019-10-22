import Vue from "vue";
import App from "./App.vue";
import "es6-promise/auto";
//import router from "./router";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
Vue.config.productionTip = false;
var config = require("../private/firebase");
console.debug(config.firebaseKey);
firebase.initializeApp(config.firebaseKey);

new Vue({
  //router,
  vuetify,
  render: h => h(App)
}).$mount("#app");