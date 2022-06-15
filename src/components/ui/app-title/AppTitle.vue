<template>
  <h1 class="block_name">{{ title }}</h1>
</template>

<script>
export default {
  name: "AppTitle",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "appTitle";
</style>
