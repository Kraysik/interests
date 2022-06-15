<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="value"
    @input="handleInput"
    @keydown.enter="onEnter"
  />
</template>

<script>
export default {
  name: "AppInput",
  props: {
    placeholder: {
      type: String,
      default: "Введите текст",
    },
    value: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    handleInput(evt) {
      this.$emit("input", evt.target.value);
    },
    onEnter(evt) {
      this.$emit("onEnter", evt.target.value);
    },
  },
};
</script>

<style lang="scss">
@import "./appInput";
</style>
