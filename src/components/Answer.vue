<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";
//import date from "date-utils";
export default {
  name: "Answer",
  data: () => {
    return {
      status: {
        currentQuestionId: 0,
        databaseRef: null
      }
    };
  },

  methods: {},
  created: function() {
    console.debug("Answer.created");
    this.databaseRef = firebase.database().ref("questions/current");
    this.databaseRef.on("value", function(snapshot) {
      console.debug("question is changed", snapshot.val());
      if (snapshot.child("questionType").val() == 2) {
        console.debug("current-DB is changed");
        //TODO beforeRouteUpdateかもしれん
        this.$router.replace({ name: "TwoChoice" });
      } else if (snapshot.child("questionType").val() == 4) {
        this.$router.replace({ name: "FourChoice" });
      }
    });
  }
};
</script>

<style scoped>
</style>