<template>
  <Hobby
    name="О себе"
    @getMoreHobby="getHobbies"
    :is-more-hobbies="isMoreHobbies"
    :is-loading="isLoading"
  >
    <template v-slot:input-slot>
      <AppInput
        placeholder="Введите текст"
        v-model="hobby"
        @onEnter="addHobby"
      />
    </template>
    <div
      class="text-block text-block_my"
      v-for="hobby in hobbies"
      :key="hobby.id"
    >
      <div class="delete-btn" @click="deleteHobby(hobby.id)"></div>
      <div class="text_wrap">
        <div class="text">
          {{ hobby.text }}
        </div>
      </div>
    </div>
  </Hobby>
</template>

<script>
import Hobby from "@/components/hobby/Hobby";
import AppInput from "@/components/ui/appInput/AppInput";
import { fetchMoreMyHobbies } from "../../../api/hobby";
export default {
  name: "MyHobby",
  components: { Hobby, AppInput },
  props: {
    extraHobby: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      hobby: "",
      hobbies: [
        { id: 0, text: "Хоккей" },
        {
          id: 1,
          text: "Высокоточная вёрстка под старые версии Microsoft Internet Explorer, начиная с версии 5.01",
        },
      ],
      isMoreHobbies: true,
      isLoading: false,
    };
  },
  methods: {
    addHobby(hobby) {
      this.hobbies.unshift({ id: Date.now(), text: hobby });
      this.hobby = "";
    },

    deleteHobby(id) {
      this.hobbies = this.hobbies.filter((hobby) => hobby.id !== id);
    },

    async getHobbies() {
      try {
        this.isLoading = true;
        const { data } = await fetchMoreMyHobbies();
        this.isMoreHobbies = false;

        this.hobbies = [...this.hobbies, ...data];
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  watch: {
    extraHobby: function (val) {
      this.hobbies.unshift(val);
    },
  },
};
</script>
