<template>
  <div v-if="topCourses">
    <div class="title">Top sessions</div>
    <div v-for="(course, index) in topCourses" :key="course.id">
      <CoursePreview :course="course" @click="redirect(course)"></CoursePreview>
      <v-divider
        class="divider"
        v-if="index != topCourses.length - 1"
      ></v-divider>
    </div>
  </div>
</template>
<script>
import { useSessionsStore } from "@/store/sessions.js";
import CoursePreview from "@/components/CoursePreview.vue";
import { mapState } from "pinia";
export default {
  name: "TopSessions",
  components: { CoursePreview },
  computed: {
    ...mapState(useSessionsStore, ["topCourses"]),
  },
};
</script>

<style>
.title {
  margin: 20px 0;
  font-size: 20px;
  font-weight: bold;
}
</style>
