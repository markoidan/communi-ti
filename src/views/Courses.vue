<template>
  <div class="courses">
    <h1>Courses</h1>
    <event></event>
  </div>
</template>
<script>
import CoursePreview from "../components/CoursePreview.vue";
export default {
  name: "CoursesView",
  components: [CoursePreview],
};
</script>
