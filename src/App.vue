<template>
<body>
  <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet" />
  <v-app>
    <v-toolbar>
      <v-toolbar-title>
        <b>
          {{ this.$store.state.quizValue["title"] }}
          <br />
          <small>あなたの名前は{{ this.$store.state.userID }}です</small>
        </b>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text icon color="gray">
        <i class="fas fa-comment-dots fa-2x" @click.stop="messageDialog = true"></i>
      </v-btn>
      <v-btn text icon color="gray">
        <i class="fas fa-info-circle fa-2x" @click.stop="infoDialog = true"></i>
      </v-btn>
    </v-toolbar>
    <div class="bg">
      <div id="commentview"></div>
      <div
        v-if="
            this.$store.state.userID === null ||
              this.$store.state.userID === undefined
          "
      >
        <UserNotFound />
      </div>
      <div v-else-if="this.$store.state.quizValue['quizStatus'] === 'quiz'">
        <Quiz />
      </div>
      <div v-else-if="this.$store.state.quizValue['quizStatus'] === 'standby'">
        <StandBy />
      </div>
      <div v-else>
        <StatusNotFound />
      </div>
      <v-dialog v-model="infoDialog" max-width="90%">
        <Info />
      </v-dialog>
      <v-dialog v-model="messageDialog" max-width="90%">
        <Message />
      </v-dialog>
    </div>
  </v-app>
</body>
</template>

<script>
import Quiz from "@/components/Quiz";
import StatusNotFound from "@/components/StatusNotFound";
import StandBy from "@/components/StandBy";
import Info from "../private/Info";
import UserNotFound from "@/components/UserNotFound";
import CommentStream from "./plugins/commentStream";
import firebase from "firebase";
import Message from "./components/Message";
export default {
  name: "App",
  metaInfo: {
    title: "quiz-cli",
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  },
  components: {
    Message,
    Quiz,
    Info,
    StatusNotFound,
    StandBy,
    UserNotFound
  },
  data: () => {
    return {
      infoDialog: false,
      messageDialog: false,
      messageFlag: false
    };
  },
  computed: {},
  created: function() {
    this.$store.dispatch("initUserID");
    this.$store.dispatch("updateState");
  },
  mounted() {
    var that = this;
    setTimeout(function() {
      that.messageFlag = true;
      // console.log("that.messageFlag:", that.messageFlag);
    }, 2000);
    this.comment();
  },
  methods: {
    comment: function() {
      var that = this;
      var cms = new CommentStream(100, "commentview", "cms");
      firebase
        .database()
        .ref("comment")
        .on("child_added", function(obj) {
          // console.log("obj.val():", obj.val());
          // Firebaseの最初の全データ読み出しを防ぐため
          if (that.messageFlag === true) {
            cms.send(obj.val());
          }
        });
    }
  }
};
</script>

<style>
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
  background-color: #db0031;
  background-image: repeating-linear-gradient(
    -45deg,
    #e43751,
    #e43751 7.5px,
    transparent 0,
    transparent 15px
  );
}
#cms {
  font-size: 30px;
  position: absolute;
  mix-blend-mode: normal;
  z-index: 99;
  margin: 0;
  padding-left: 100%;
  display: inline-block;
  white-space: nowrap;
  animation-name: cms;
  animation-timing-function: linear;
  animation-duration: 10s;
  animation-iteration-count: １;
}
@keyframes cms {
  from {
    transform: translate(0%);
  }
  99%,
  to {
    transform: translate(-100%);
  }
}
</style>
