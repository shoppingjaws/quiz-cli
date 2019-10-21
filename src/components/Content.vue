<template>
  <div>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-card-text>
        <v-card-title>Q{{questionId}}</v-card-title>
        <p class="display-1 text--primary">{{ questionTitle }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Content",
  data: () => {
    return {
      questionTitle: "hello",
      questionId: ""
    };
  },
  components: {},
  created: function() {
    var that = this;
    firebase
      .database()
      .ref("questions/current")
      .on("value", function(snapshot) {
        that.questionTitle = snapshot.child("title").val();
        that.questionId = snapshot.child("id").val();
      });
  }
};
</script>

<style>
</style>