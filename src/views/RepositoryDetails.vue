<template>
  <div class="repositories-details-view container">
    <h1>ReadMe File</h1>
    <div v-html="readMeFile" class="repositories-details-view__readme"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      readMeFile: ""
    };
  },
  created() {
    this.getReadMeFile(this.$route.params.repositoryId);
  },
  methods: {
    getReadMeFile(repositoryId) {
      axios
        .get(`https://api.github.com/repositories/${repositoryId}/readme`)
        .then(result => {
          this.readMeFile = atob(result.data.content);
        })
        .catch(err => {
          if (err.errors && err.errors.message) {
            alert(err.errors.message);
          } else {
            alert("Something went wrong while getting project ReadMe file...");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.repositories-details-view {
  &__readme {
    white-space: pre-wrap;
  }
}
</style>
