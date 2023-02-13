<template>
  <div class="preview">
    <div class="date">{{ course.date }}</div>
    {{ course.speaker.name }}
  </div>
</template>

<script>
export default {
  name: "CoursePreview",
  props: {
    course: Object,
  },
  mounted() {
    console.log("course", this.course);
  },
};
</script>

<style scoped>
.date {
  color: gray;
}
</style>
