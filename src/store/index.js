import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
Vue.use(Vuex);
const store = new Vuex.Store({
  strict: true,
  state: {
    title: "",
    quizNum: 0,
    quizTitle: "",
    quizChoice: ["0", "1", "2", "3"],
    quizMode: "",
    userID: "",
    status: "quiz",
    userIdExist: true
  },
  // state の更新
  mutations: {
    setState: function(state, value) {
      console.debug("setState");
      //URLの引数からuserIDを抜き出して､DBを参照
      const url = new URL(location.href);

      state.mainTitle = value["mainTitle"];
      state.quizNum = value["quizNum"];
      state.quizTitle = value["quizTitle"];
      state.userID = url.searchParams.get("userID");
      state.status = value["status"];
      state.quizID = value["quizID"];
      state.quizMode = value["quizMode"];
      state.quizChoice[0] = value["quizChoice1"];
      state.quizChoice[1] = value["quizChoice2"];
      state.quizChoice[2] = value["quizChoice3"];
      state.quizChoice[3] = value["quizChoice4"];
      state.title = value["title"];
    },
    setUserExist: function(state, value) {
      state.userIdExist = value;
    }
  },
  // state から別の値を計算
  getters: {},
  //外部APIや非同期処理
  actions: {
    updateState: function(ctx) {
      console.debug("updateState");
      var updatedState = new Array();
      firebase
        .database()
        .ref("question/current/")
        .on("value", function(obj) {
          updatedState.push(["status", obj.val()["status"]]);
          ctx.commit("setState", obj.val());
        });
    },
    checkUserID: function(ctx) {
      const url = new URL(location.href);
      firebase
        .database()
        .ref("user/" + url.searchParams.get("userID"))
        .on("value", function(obj) {
          if (obj.val() === null) {
            ctx.commit("setUserExist", false);
          } else {
            ctx.commit("setUserExist", true);
          }
        });
      //ctx.commit("userExist");
    },
    vote: function(value) {
      firebase
        .database()
        .ref(
          "vote/" + this.$store.state.userID + "/" + this.$store.state.quizID
        )
        .set(value);
    }
  }
});
export default store;
