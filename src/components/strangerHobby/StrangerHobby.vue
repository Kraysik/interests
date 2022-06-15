<template>
  <div>
    <Hobby
      name="Интересы друга"
      @getMoreHobby="getHobbies"
      :is-more-hobbies="isMoreHobbies"
      :is-loading="isLoading"
    >
      <div class="stranger-hobby" v-for="hobby in hobbies" :key="hobby.id">
        <div class="text-block">
          <div
            class="add-btn"
            v-if="!hobby.isAdded"
            @click="addToMyList(hobby.id)"
          />

          <div class="text_wrap">
            <div class="text">
              {{ hobby.text }}
            </div>
            <span v-if="hobby.isAdded" class="added-info"
              >Добавлено в ваши увлечения</span
            >
          </div>
        </div>
        <div class="abuse-btn" @click="setAbuseModal">пожаловаться</div>
      </div>
    </Hobby>
    <AbuseModal :is-open="isAbuseModal" @close="setAbuseModal" />
  </div>
</template>

<script>
import Hobby from "@/components/hobby/Hobby";
import { fetchMoreStrangeHobbies } from "../../../api/hobby";
import AbuseModal from "@/components/abuseModal/AbuseModal";

export default {
  name: "StrangerHobby",
  components: { AbuseModal, Hobby },
  data() {
    return {
      hobby: "",
      hobbies: [
        { id: 4, text: "Баскетбол", isAdded: false },
        {
          id: 5,
          text: "Нарезка Photoshop/Fireworks макетов на скорость, в экстремальных условиях, на природе",
          isAdded: false,
        },
      ],
      isAbuseModal: false,
      isMoreHobbies: true,
      isLoading: false,
    };
  },
  methods: {
    addToMyList(id) {
      this.hobbies = this.hobbies.map((hobby) => {
        if (hobby.id === id) hobby.isAdded = true;
        return hobby;
      });

      this.$emit(
        "addHobbyToMyList",
        this.hobbies.find((hobby) => hobby.id === id)
      );
    },

    async getHobbies() {
      try {
        this.isLoading = true;
        const { data } = await fetchMoreStrangeHobbies();
        this.isMoreHobbies = false;

        this.hobbies = [...this.hobbies, ...data];
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },

    setAbuseModal() {
      this.isAbuseModal = !this.isAbuseModal;
    },
  },
};
</script>
