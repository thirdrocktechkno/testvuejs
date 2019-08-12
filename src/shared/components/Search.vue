<template>
  <div class="app-search container">
    <div class="app-search form-group row">
      <input
        type="text"
        class="form-control col-sm-8"
        placeholder="Search Github Username..."
        v-model="searchedText"
      />
      <button type="button" class="btn btn-primary col-sm-2" @click="onSearch">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchedText: ""
    };
  },
  methods: {
    onSearch() {
      this.$emit("searchedText", this.searchedText);
    }
  }
};
</script>

<style lang="scss" scoped>
.app-search {
  .btn {
    margin-left: 15px;
  }
}
</style>
