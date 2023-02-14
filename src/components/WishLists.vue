<template>
  <div v-for="(item, index) in wishList" :key="index">
    <div class="wish-list" @click="item.isOpen = !item.isOpen">
      <span style="padding: 3px 10px">
        <font-awesome-icon icon="fa-solid fa-angle-down" v-if="!item.isOpen" />
        <font-awesome-icon icon="fa-solid fa-angle-up" v-if="item.isOpen" />
      </span>
      <span class="wish-list-name">{{ item.name }}</span>
      <span class="wish-list-item"
        ><CourseLevel :level="item.level"></CourseLevel
      ></span>
      <span class="wish-list-item"
        ><CourseCategory
          :category="item.category"
          :withText="true"
          width="100px"
          height="30px"
        ></CourseCategory>
      </span>
      <span
        class="icon-like"
        style="cursor: pointer"
        @click.stop="like(item)"
        :class="{ 'blue-icon': item.liked }"
      >
        <font-awesome-icon icon="fa-solid fa-thumbs-up" />
        {{ item.likes }}</span
      >
    </div>
    <div v-if="item.isOpen" class="description">
      {{ item.description }}
    </div>
    <v-divider></v-divider>
  </div>
  <v-btn variant="flat" @click="addSession">+ Request a session</v-btn>
</template>
<script>
import { useSessionsStore } from "@/store/sessions.js";
import { mapState } from "pinia";
import CourseCategory from "@/components/CourseCategory.vue";
import CourseLevel from "@/components/CourseLevel.vue";
export default {
  name: "WishLists",
  components: { CourseCategory, CourseLevel },
  computed: {
    ...mapState(useSessionsStore, ["wishList"]),
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
  },
};
</script>
<style scoped>
.wish-list {
  display: flex;
  padding: 20px 0;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-basis: 100px;
}
.wish-list-name {
  flex: 210px 0 1;
}
.wish-list-item {
  flex: 150px 0 1;
}
.description {
  background-color: #fafafa;
  padding: 10px;
}
.icon-like:hover {
}
.blue-icon {
  color: #4267b2;
  font-weight: bold;
}
</style>
