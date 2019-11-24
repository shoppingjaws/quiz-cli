import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
//import firebase from "firebase";
Vue.use(Vuex);
const store = new Vuex.Store({
  strict: true,
  state: {
    quizValue: [],
    userID: "",
    userPoint: 0
  },
  // state の更新
  mutations: {
    setState: function(state, value) {
      state.quizValue = value;
    },
    setUserID: function(state, value) {
      state.userID = value;
      //console.log("setUserID", state.userID);
    },
    setUserPoint: function(state, value) {
      state.userPoint = value;
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
    },
    updateUserPoint({ commit }) {
      var that = this;
      return new Promise(resolve =>
        firebase
          .database()
          .ref("vote/point/" + that.state.userID)
          .on("value", function(obj) {
            // console.log(obj.val());
            // console.log(that.state.userID);
            commit("setUserPoint", obj.val());
            resolve();
          })
      );
    }
  }
});
export default store;
