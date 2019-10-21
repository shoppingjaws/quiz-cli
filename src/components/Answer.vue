<template>
  <div>
    <component :is="currentQuestion"></component>
  </div>
</template>

<script>
import TwoChoice from "./TwoChoice";
import FourChoice from "./FourChoice";
import firebase from "firebase";
export default {
  name: "Answer",
  data: () => {
    return {
      currentQuestionId: 0,
      currentQuestion: ""
    };
  },
  components: {
    TwoChoice,
    FourChoice
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
          that.currentQuestion = "TwoChoice";
        } else if (snapshot.child("questionType").val() == 4) {
          that.currentQuestion = "FourChoice";
        }
      });
    });
  }
};
</script>

<style scoped>
</style>