<template>
  <div v-if="topCourses" class="top-course">
    <div v-for="(course, index) in topCourses" :key="course.id">
      <span style="padding: 3px 10px">
        <font-awesome-icon
          icon="fa-solid fa-angle-down"
          @click="course.isOpen = !course.isOpen"
          v-if="!course.isOpen"
        />
        <font-awesome-icon
          icon="fa-solid fa-angle-up"
          @click="course.isOpen = !course.isOpen"
          v-if="course.isOpen"
        />
      </span>
      <v-avatar
        :image="course.speaker.pictureUrl"
        :size="30"
        class="avatar"
      ></v-avatar>
      <span>{{ course.name }}</span>
      <div v-if="course.isOpen" class="description">{{ course.description }}</div>
      <v-divider
        class="divider"
        v-if="index != topCourses.length - 1"
      ></v-divider>
    </div>
  </div>
</template>
<script>
import { useSessionsStore } from "@/store/sessions.js";
import { mapState } from "pinia";
export default {
  name: "TopSessions",
  computed: {
    ...mapState(useSessionsStore, ["topCourses"]),
  },
};
</script>

<style scoped>
.title {
  margin: 20px 0;
  font-size: 20px;
  font-weight: bold;
}
.avatar {
  margin-right: 10px;
}
.top-course {
  display: flex;
  flex-direction: column;
}
.divider {
  margin: 20px 0;
}
.description {
  background-color: #fafafa;
  padding: 10px 0 0 30px;
}
</style>
