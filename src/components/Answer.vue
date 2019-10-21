<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Answer",
  data: () => {
    return {
      status: {
        currentQuestionId: 0
      }
    };
  },

  methods: {},
  created: function() {
    var that = this;
    var dbRef = firebase.database().ref("questions/current");
    console.debug("Answer.created");
    dbRef.on("value", function(snapshot) {
      console.debug("question is changed", snapshot.val());
      dbRef.once("value").then(function(snapshot) {
        if (snapshot.child("questionType").val() == 2) {
          that.$router.replace({ name: "TwoChoice" }, () => {}, () => {});
        } else if (snapshot.child("questionType").val() == 4) {
          that.$router.replace({ name: "FourChoice" }, () => {}, () => {});
        }
      });
    });
  }
};
</script>

<style scoped>
</style>