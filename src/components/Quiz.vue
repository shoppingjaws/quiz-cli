<template>
  <div>
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
        <Content />
        <Answer />
      </div>
    </div>
  </div>
</template>

<script>
import Content from "./Content";
import Answer from "./Answer.vue";
export default {
  name: "Quiz",
  components: {
    Content,
    Answer
  },
  data: () => {
    return {
      databaseRef: null
    };
  },
  methods: {},
  created: function() {}
};
</script>

<style scoped>
</style>
