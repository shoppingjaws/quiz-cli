<template>
  <div>
    <four-choice />
    <two-choice />
  </div>
</template>

<script>
import FourChoice from "./FourChoice.vue";
import TwoChoice from "./TwoChoice";
import firebase from "firebase";
//import date from "date-utils";
export default {
  name: "Answer",
  data: () => {
    return {
      status: {
        currentQuestionId: 0
      }
    };
  },
  components: {
    FourChoice,
    TwoChoice
  },
  methods: {},
  created: function() {
    console.debug("Answer.created");
    const ref = firebase.database().ref("questions/current");
    ref.on("value", function(snapshot) {
	  console.debug("question is changed", snapshot.val());
	  
    });
  }
};
</script>

<style scoped>
</style>