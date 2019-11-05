<template>
<body>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>
        <b>チキチキ</b>
        忘年会
        <b>大</b>
        クイズ大会
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text icon color="red">
        <v-icon large @click.stop="dialog = true">mdi-information-outline</v-icon>
      </v-btn>
    </v-toolbar>
    <div class="bg">
      <div v-if="isUserExist">
        <div v-if="status === 'quiz'">
          <Quiz />
        </div>
        <div v-else-if="status === 'standby'">
          <StandBy />
        </div>
        <div v-else>
          <StatusNotFound />
        </div>
      </div>
      <div v-else-if="isUserExist == false">
        <UserNotFound />
      </div>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">新人紹介</v-card-title>
          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</body>
</template>

<script>
import Quiz from "@/components/Quiz";
import UserNotFound from "@/components/UserNotFound";
import StatusNotFound from "@/components/StatusNotFound";
import StandBy from "@/components/StandBy";
import firebase from "firebase";
export default {
  name: "App",
  metaInfo: {
    title: "quiz-cli",
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  },
  components: {
    Quiz,
    UserNotFound,
    StatusNotFound,
    StandBy
  },
  data: () => {
    return {
      userID: "",
      dialog: false,
      isUserExist: true,
      status: "standby"
    };
  },
  created: function() {
    var that = this;
    //URLの引数からuserIDを抜き出して､DBを参照
    const url = new URL(location.href);
    that.userID = url.searchParams.get("userID");
    firebase
      .database()
      .ref("users/" + that.userID)
      .once("value", function(obj) {
        if (obj.val() == null) {
          that.isUserExist = false;
        } else {
          that.isUserExist = true;
        }
      });

    firebase
      .database()
      .ref("questions/current/status")
      .on("value", function(obj) {
        that.status = obj.val();
      });
  }
};
</script>

<style >
html {
  height: 100vh;
  overflow: hidden;
}

body {
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.bg {
  width: 100%;
  height: 100vh;
  background-color: #fc693b;
  background-image: repeating-linear-gradient(
    -45deg,
    #ff5722,
    #ff5722 7.5px,
    transparent 0,
    transparent 15px
  );
}
</style>
