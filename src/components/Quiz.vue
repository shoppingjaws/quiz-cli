<template>
  <div>
    <div>
      <v-toolbar>
        <v-toolbar-title>
          <b>チキチキ</b>
          忘年会
          <b>大</b>
          クイズ大会
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text icon color="red">
          <v-icon large @click="openInfoPage">mdi-information-outline</v-icon>
        </v-btn>
      </v-toolbar>
      <br />
      <br />
      <div>
        <Content />
        <Answer />
        <modal name="infoModal">
          <Info />
        </modal>
      </div>
    </div>
  </div>
</template>

<script>
import Content from "./Content";
import Answer from "./Answer.vue";
import Info from "./Info.vue";
export default {
  name: "Quiz",
  components: {
    Content,
    Answer,
    Info
  },
  data: () => {
    return {
      databaseRef: null,
      isInfoPageOpened: false
    };
  },
  methods: {
    openInfoPage() {
      this.$modal.show("infoModal");
      console.debug("info page opened");
    },
    closeInfoPage() {
      this.$modal.hide("infoModal");
      console.debug("info page closed");
    }
  },
  created: function() {}
};
</script>

<style>
</style>
