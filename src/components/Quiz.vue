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
          <v-icon large @click="showModalInfo = true">mdi-information-outline</v-icon>
        </v-btn>
      </v-toolbar>
      <br />
      <br />
      <div>
        <Content />
        <Answer />
        <Modal v-if="showModalInfo" @close="showModalInfo = false">
          <h1
            slot="body"
            word-break="none"
          >kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</h1>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import Content from "./Content";
import Answer from "./Answer.vue";
import Modal from "./Modal.vue";
export default {
  name: "Quiz",
  components: {
    Content,
    Answer,
    Modal
  },
  data: () => {
    return {
      showModalInfo: false
    };
  },
  methods: {},
  created: function() {}
};
</script>

<style>
</style>
