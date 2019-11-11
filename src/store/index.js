import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
//import firebase from "firebase";
Vue.use(Vuex);
const store = new Vuex.Store({
  strict: true,
  state: {
    quizValue: []
  },
  // state の更新
  mutations: {
    setState: function(state, value) {
      console.debug("setState");
      //URLの引数からuserIDを抜き出して､DBを参照
      //const url = new URL(location.href);
      state.quizValue = value;
    }
  },
  // state から別の値を計算
  getters: {},
  //外部APIや非同期処理
  actions: {
    asyncUpdateState({ commit }) {
      return new Promise(resolve =>
        firebase
          .database()
          .ref("question/current/")
          .on("value", function(obj) {
            console.log("actions");
            commit("setState", obj.val());
            resolve();
          })
      );
    }
  }
});
export default store;
