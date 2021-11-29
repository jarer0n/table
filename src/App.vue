<template>
  <div class="container">
    <h1 class="app_title">
      Таблица Vue.js <span>(axios, сортировка, пагинация, поиск)</span>
    </h1>
    <t-table />
  </div>
</template>

<script>
import tTable from "./components/t-table.vue";
export default {
  components: { tTable },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.app_title {
  text-align: center;
  font-size: 2.7rem;
  padding: 4rem 0;
  span {
    font-size: 2.1rem;
  }
}
</style>
