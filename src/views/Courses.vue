<template>
  <div class="courses">
    <h1>Courses 1</h1>
    <CoursePreview></CoursePreview>
  </div>
</template>

<script>
import CoursePreview from "../components/CoursePreview.vue";
export default {
  name: "CoursesView",
  components: { CoursePreview },
};
</script>
