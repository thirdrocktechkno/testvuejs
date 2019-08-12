<template>
  <div class="users-view container">
    <h1>Github Usernames</h1>
    <app-search @searchedText="onSearchedText($event)"></app-search>
    <app-list
      :dataSource="users"
      :textProperty="'login'"
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
      users: [],
      totalItems: null
    };
  },
  methods: {
    onSearchedText(userName) {
      this.getUserData(userName);
    },
    onItemClicked(user) {
      this.$router.push({ path: `/repositories/${user.login}` });
    },
    getUserData(userName) {
      axios
        .get("https://api.github.com/search/users?q=" + userName)
        .then(result => {
          this.totalItems = result.data.total_count || 0;
          this.users = result.data.items;
        })
        .catch(err => {
          if (err.errors && err.errors.message) {
            alert(err.errors.message);
          } else {
            alert("Something went wrong while getting users...");
          }
        });
    }
  }
};
</script>
