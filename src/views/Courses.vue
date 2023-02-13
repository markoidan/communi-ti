<template>
  <div class="courses">
    <h1>Courses 1</h1>
    <CoursePreview
      v-for="course in courses"
      :key="course.id"
      :course="course"
    ></CoursePreview>
  </div>
</template>

<script>
import CoursePreview from "../components/CoursePreview.vue";
import jsonData from "../data.json";
export default {
  name: "CoursesView",
  components: { CoursePreview },
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
