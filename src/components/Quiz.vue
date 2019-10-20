<template>
  <div>
    <Content />
    <answer />
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
  data: () => ({})
};
</script>

<style scoped>
</style>
