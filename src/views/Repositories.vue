<template>
  <div class="repositories-view container">
    <h1>{{userName}}'s Repositories</h1>
    <app-list
      :dataSource="repositories"
      :textProperty="'name'"
      :totalItems="totalItems"
      @itemClicked="onItemClicked($event)"
    ></app-list>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userName: "",
      repositories: [],
      totalItems: null
    };
  },
  created() {
    this.userName = this.$route.params.userName;
    this.getUserRepositories();
  },
  methods: {
    onItemClicked(project) {
      this.$router.push({ path: `/repositories/${project.id}/readme` });
    },
    getUserRepositories() {
      axios
        .get(`https://api.github.com/users/${this.userName}/repos`)
        .then(result => {
          this.totalItems = result.data.length || 0;
          this.repositories = result.data;
        })
        .catch(err => {
          if (err.errors && err.errors.message) {
            alert(err.errors.message);
          } else {
            alert("Something went wrong while getting user's repositories...");
          }
        });
    }
  }
};
</script>
