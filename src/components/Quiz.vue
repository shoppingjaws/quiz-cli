<template>
  <div>
    <div>
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
      showModalInfo: false,
      dialog: false
    };
  },
  methods: {},
  created: function() {}
};
</script>

<style>
</style>
