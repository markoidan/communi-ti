<template>
  <div class="courses">
    <filter-events-row></filter-events-row>
    <div v-for="course in courses" :key="course.id">
      <CoursePreview :course="course"></CoursePreview>
      <v-divider class="divider"></v-divider>
    </div>
  </div>
</template>

<script>
import CoursePreview from "../components/CoursePreview.vue";
import FilterEventsRow from "@/components/FilterEventsRow.vue";
import jsonData from "../data.json";
export default {
  name: "CoursesView",
  components: { CoursePreview, FilterEventsRow },
  data() {
    return {};
  },
  computed: {
    courses() {
      return jsonData.courses;
    },
  },
  mounted() {
    console.log(this.courses);
  },
};
</script>
<style>
.divider {
  margin: 20px 0;
}
</style>
