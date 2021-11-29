<template>
  <div class="t-paginated">
    <slot />
  </div>
</template>

<script>
export default {
  name: "t-paginated",
};
</script>

<style lang="scss" scoped>
.t-paginated {
  padding: 1.2rem;
  border: 1px solid grey;
  margin-right: 1rem;
  &:last-child {
    margin: 0;
  }
  &:hover {
    background: lighten($color: rgb(70, 70, 247), $amount: 3%);
    color: #f7f7f7;
  }
}
.t-paginated.active {
  background: rgb(70, 70, 247);
  color: #f7f7f7;
  border: 1px solid rgb(70, 70, 247);
}
</style>
