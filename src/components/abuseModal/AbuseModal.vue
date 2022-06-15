<template>
  <div class="modal" :class="{ active: isOpen }" @click="close">
    <div class="content" @click.stop>
      <h3 class="title">Пожаловаться на интерес?</h3>
      <div class="btns">
        <div class="btn ok" @click="close">Да</div>
        <div class="btn no" @click="close">Нет</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AbuseModal",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
@import "./abuseModal";
</style>
