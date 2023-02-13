<template>
  <div class="preview">
    <div class="date">{{ course.date }}</div>
    <!-- <div class="speaker">{{ course.speaker.name }}</div> -->
    <SpeakerMetadata :speaker="course.speaker"
    ></SpeakerMetadata>
    <div class="name">{{ course.name }}</div>
    <div>{{ course.details }}</div>
  </div>
</template>

<script>
import SpeakerMetadata from "./SpeakerMetadata.vue";
export default {
  name: "CoursePreview",
  props: {
    course: Object,
  },
  components: {
    SpeakerMetadata,
  },
  mounted() {},
};
</script>

<style scoped>
.date {
  color: gray;
  font-weight: bold;
}
.name {
  font-weight: bold;
}
</style>
