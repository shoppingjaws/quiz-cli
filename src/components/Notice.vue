<template>
  <div>
    <div>
      <br />
      <br />
      <div>
        <v-card class="mx-auto" max-width="90%" outlined>
          <v-card-text>
            <p class="display-1 text--primary">
              {{ this.$store.state.quizValue["quizTitle"] }}
            </p>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  components: {},
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

<style></style>
