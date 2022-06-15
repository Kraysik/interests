<template>
  <div class="hobby_block">
    <AppTitle :title="name" />
    <h3 class="hobby_block__title"><span>Хобби</span></h3>
    <div class="content">
      <slot name="input-slot"></slot>

      <div class="hobbies">
        <slot />
      </div>
      <div
        v-if="isMoreHobbies"
        class="more"
        :class="{ loading: isLoading }"
        @click="handleMore"
      >
        Ещё 3 интереса
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from "@/components/ui/app-title/AppTitle";
export default {
  name: "Hobby",
  components: { AppTitle },
  props: {
    name: {
      type: String,
      default: "",
    },
    isMoreHobbies: {
      type: Boolean,
      default: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleMore() {
      this.$emit("getMoreHobby");
    },
  },
};
</script>

<style lang="scss">
@import "./hobby";
</style>
