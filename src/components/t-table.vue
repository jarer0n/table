<template>
  <table class="t-table">
    <thead>
      <tr>
        <th>Дата</th>
        <th @click="sortByName">Название</th>
        <th>Свободных мест</th>
        <th>Расстояние(км)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="tourItem in paginatedTours" :key="tourItem.name">
        <td>{{ tourItem.data }}</td>
        <td>{{ tourItem.name }}</td>
        <td>{{ tourItem.number }}</td>
        <td>{{ tourItem.distance }}</td>
      </tr>
    </tbody>
  </table>
  <div class="t-table_paginated">
    <t-paginated
      :class="{ active: p === page }"
      @click="changePage(p)"
      v-for="p in pages"
      :key="p"
      >{{ p }}</t-paginated
    >
  </div>
</template>

<script>
import tPaginated from "./t-paginated.vue";
export default {
  components: {
    tPaginated,
  },
  name: "t-table",
  data() {
    return {
      tours: [
        { data: "01.02.2022", name: "Москва", number: "3", distance: 969 },
        {
          data: "21.02.2022",
          name: "Санкт-Петербург",
          number: "7",
          distance: 1683,
        },
        {
          data: "24.01.2022",
          name: "Екатеринбург",
          number: "2",
          distance: 1033,
        },
        { data: "07.03.2022", name: "Сочи", number: "12", distance: 1778 },
        { data: "16.04.2022", name: "Челябинск", number: "4", distance: 906 },
        { data: "11.03.2022", name: "Омск", number: "3", distance: 1833 },
        { data: "09.02.2022", name: "Липецк", number: "2", distance: 756 },
        { data: "10.02.2022", name: "Казань", number: "1", distance: 339 },
        { data: "14.03.2022", name: "Иваново", number: "7", distance: 885 },
      ],
      toursPerPage: 4,
      page: 1,
      reverse: false,
    };
  },
  computed: {
    //! общее кол-во страниц
    pages() {
      return Math.ceil(this.tours.length / this.toursPerPage);
    },
    //! разбиваем на страницы
    paginatedTours() {
      const from = (this.page - 1) * this.toursPerPage;
      const to = from + this.toursPerPage;
      return this.tours.slice(from, to);
    },
  },
  methods: {
    //! Смена страницы
    changePage(p) {
      this.page = p;
    },
    //! Сортировка
    sortByName() {
      if (this.reverse === false) {
        this.tours.sort((a, b) => a.name.localeCompare(b.name));
        this.reverse = !this.reverse;
      } else {
        this.tours.sort((a, b) => b.name.localeCompare(a.name));
        this.reverse = !this.reverse;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.t-table {
  width: 80%;
  margin: 0 auto;
  thead {
    text-align: left;
    th {
      padding: 1rem;
      border: 1px solid #afadad;
      width: 25%;
    }
  }
  tbody {
    td {
      padding: 1rem;
      border: 1px solid #afadad;
    }
  }
  &_paginated {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
}
</style>
