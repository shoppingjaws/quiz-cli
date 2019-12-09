<template>
  <div>
    <div v-if="this.$store.state.quizValue['quizMode'] === 'TwoChoice'">
      <TwoChoice />
    </div>
  </div>
</template>

<script>
import TwoChoice from "./TwoChoice";
export default {
  name: "Answer",
  data: () => {
    return {};
  },
  components: {
    TwoChoice
  },
  methods: {},
  created: function() {}
};
</script>

<style scoped></style>
