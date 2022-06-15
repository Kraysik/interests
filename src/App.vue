<template>
  <div id="app" class="container">
    <MyHobby :extra-hobby="extraHobby" />
    <StrangerHobby @addHobbyToMyList="handleAddHobbyToMyList" />
  </div>
</template>

<script>
import MyHobby from "@/components/myHobby/MyHobby";
import StrangerHobby from "@/components/strangerHobby/StrangerHobby";
export default {
  name: "App",
  components: {
    StrangerHobby,
    MyHobby,
  },
  data() {
    return {
      extraHobby: {},
    };
  },
  methods: {
    handleAddHobbyToMyList(hobby) {
      this.extraHobby = hobby;
    },
  },
};
</script>

<style lang="scss">
@import "./src/scss/app";
</style>
