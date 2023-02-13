<template>
  <div class="courses">
    <h1>Courses 1</h1>
    <div v-for="course in courses" :key="course.id">
      <CoursePreview @click="redirect(course)" :course="course"></CoursePreview>
      <v-divider class="divider"></v-divider>
    </div>
  </div>
</template>

<script>
import CoursePreview from "../components/CoursePreview.vue";
import jsonData from "../data.json";
import router from "@/router";
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
  methods: {
    redirect(course) {
      console.log("course", course);
      router.push({ name: 'course', state: {course} })
    }
  }
};
</script>
<style>
.divider {
  margin: 20px 0;
}
</style>
