<template>
  <div class="app-list list-group">
    <div v-if="totalItems > 0">
      <a
        class="app-list__item list-group-item"
        v-for="data in dataSource"
        @click="onClick(data)"
      >{{data[textProperty]}}</a>
    </div>
    <div v-if="totalItems == 0">
      <h2>No Data Found...</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataSource", "textProperty", "totalItems"],
  methods: {
    onClick(data) {
      this.$emit("itemClicked", data);
    }
  }
};
</script>

<style lang="scss" scoped>
.app-list {
  padding: 15px 0;

  &__item:hover {
    cursor: pointer;
  }
}
</style>
