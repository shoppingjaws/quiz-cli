<template>
  <v-app>
    <div class="bg">
      <div>
        <v-toolbar>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>
            <b>チキチキ</b>
            忘年会
            <b>大</b>
            クイズ大会
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br />
        <br />
        <div>
          <Quiz></Quiz>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import Quiz from "@/components/Quiz";
// import Home from "./components/Home";
export default {
  name: "App",
  components: {
    // Home
    Quiz
  },
  data: () => ({})
};
</script>
<style scoped>
/* TODO: Upgrade CSS https://deshinon.com/2019/03/06/background-oshare-kopipe/ */

.bg {
  width: 100%;
  height: 3150px;
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
