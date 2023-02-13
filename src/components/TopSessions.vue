<template>
  <div v-if="topCourses">
    <div>Top sessions</div>
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
import jsonData from "../data.json";
import CoursePreview from "@/components/CoursePreview.vue";
export default {
  name: "TopSessions",
  components: { CoursePreview },
  computed: {
    topCourses() {
      var topValues = [...jsonData.courses].sort(
        (a, b) => b.attendees.length - a.attendees.length
      );

      return topValues.slice(0, 5);
    },
  },
};
</script>
