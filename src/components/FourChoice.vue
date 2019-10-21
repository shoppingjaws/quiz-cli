<template>
  <center>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn large color="error" width="150pt">{{ choice1 }}</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="primary" width="150pt">{{ choice2 }}</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="success" width="150pt">{{ choice3 }}</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="warning" width="150pt">{{ choice4 }}</v-btn>
      </div>
    </v-col>
  </center>
</template>

<script>
import firebase from "firebase";
export default {
  name: "FourChoice",
  data: () => {
    return {
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: ""
    };
  },
  created: function() {
    var that = this;
    var dbRef = firebase.database().ref("questions/current");
    console.debug("FourChoice");
    dbRef.on("value", function(snapshot) {
      that.choice1 = snapshot.child("choice1").val();
      that.choice2 = snapshot.child("choice2").val();
      that.choice3 = snapshot.child("choice3").val();
      that.choice4 = snapshot.child("choice4").val();
    });
  }
};
</script>

<style>
</style>