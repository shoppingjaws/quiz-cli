import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
//import firebase from "firebase";
Vue.use(Vuex);
const store = new Vuex.Store({
  strict: true,
  state: {
    quizValue: [],
    userID: ""
  },
  // state の更新
  mutations: {
    setState: function(state, value) {
      state.quizValue = value;
    },
    setUserID: function(state, value) {
      state.userID = value;
      //console.log("setUserID", state.userID);
    }
  },
  // state から別の値を計算
  getters: {},
  //外部APIや非同期処理
  actions: {
    initUserID() {
      const url = new URL(location.href);
      this.commit("setUserID", url.searchParams.get("userID"));
    },
    updateState({ commit }) {
      return new Promise(resolve =>
        firebase
          .database()
          .ref("question/current/")
          .on("value", function(obj) {
            //console.log(obj.val());
            commit("setState", obj.val());
            resolve();
          })
      );
    }
  }
});
export default store;
