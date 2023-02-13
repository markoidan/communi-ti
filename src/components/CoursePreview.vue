<template>
  <div class="preview">
    <div class="date">{{ course.date }}</div>
    <div class="name">{{ course.name }}</div>
    <div class="description">{{ course.description }}</div>
    <SpeakerMetadata
      class="avatar"
      :speaker="course.speaker"
      :iconSize="42"
      isSmallSize:true
    ></SpeakerMetadata>
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
.preview {
  margin: 0 20px;
}
.date {
  font-size: 14px;
  color: gray;
  font-weight: bold;
  padding: 4px 0;
}
.name {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 4px;
}
.description {
  padding-bottom: 10px;
  color: grey;
  line-height: 20px;
}
.avatar {
  margin-bottom: 20px;
}
</style>
