import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;
var config = require("../private/firebase");
console.log(config.firebaseAPIKey);
firebase.initializeApp(config.firebaseAPIKey);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
