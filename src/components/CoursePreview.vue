<template>
  <div class="preview">
    
    <SpeakerMetadata
      class="avatar"
      :speaker="course.speaker"
      :iconSize="80"
      isSmallSize:true
    ></SpeakerMetadata>
    <div class="name">{{ course.name }}</div>
    <div class="date">{{ course.date }}</div>
    <div class="description">{{ course.description }}</div>
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
}
.date {
  font-size: 14px;
  color: gray;
  font-weight: bold;
}
.name {
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
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
