<template>
  <div v-for="(item, index) in wishList" :key="index">
    <div class="wish-list" @click="item.isOpen = !item.isOpen">
      <span style="padding: 3px 10px">
        <font-awesome-icon icon="fa-solid fa-angle-down" v-if="!item.isOpen" />
        <font-awesome-icon icon="fa-solid fa-angle-up" v-if="item.isOpen" />
      </span>
      <request-session-modal
        :is-open="isRequestSessionModalOpen"
        @close="isRequestSessionModalOpen = false"
      />
      <span class="wish-list-name">
        <CourseCategory
          style="display: inline-block; margin-right: 10px"
          :category="item.category"
          :withText="false"
          width="40px"
          height="30px"
        ></CourseCategory
        ><span style="margin: 0 10px">{{ item.name }}</span>
        <CourseLevel
          style="display: inline-block;"
          :level="item.level"
        ></CourseLevel>
      </span>
      <!-- <span style="flex: 2"> -->
      <!-- </span> -->
      <span class="wish-list-item">
        <span
          class="icon-like"
          style="cursor: pointer"
          @click.stop="like(item)"
          :class="{ 'blue-icon': item.liked }"
        >
          <font-awesome-icon icon="fa-solid fa-thumbs-up" />
          {{ item.likes }}</span
        ></span
      >
    </div>
    <div v-if="item.isOpen" class="description">
      {{ item.description }}
    </div>
    <v-divider class="divider" v-if="index != wishList.length - 1"></v-divider>
  </div>
  <v-btn variant="flat" @click="requestSession" style="margin-top: 30px"
    >+ Request a session</v-btn
  >
</template>
<script>
import { useSessionsStore } from "@/store/sessions.js";
import { mapState } from "pinia";
import CourseCategory from "@/components/CourseCategory.vue";
import CourseLevel from "@/components/CourseLevel.vue";
import RequestSessionModal from "../components/RequestSessionModal.vue";
export default {
  name: "WishLists",
  components: { CourseCategory, CourseLevel ,RequestSessionModal},
  computed: {
    ...mapState(useSessionsStore, ["wishList"]),
  },
  data() {
    return {
      isRequestSessionModalOpen: false,
    };
  },
  methods: {
    like(item) {
      if (!item.liked) {
        item.likes++;
        item.liked = true;
      } else {
        item.likes--;
        item.liked = false;
      }
    },
    addSession() {
      this.$router.push({ name: "addSession" });
    },
    requestSession() {
      this.isRequestSessionModalOpen = true;
    },
  },
};
</script>
<style scoped>
.wish-list {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 10px;
}
.wish-list-name {
  flex: 2;
}
.wish-list-item {
  margin: 0;
}
.description {
  background-color: #fafafa;
  padding: 10px 40px;
}

.blue-icon {
  color: #4267b2;
  font-weight: bold;
}
.divider {
  margin: 20px 0;
}
</style>
