<template>
  <div class="preview">
    <div>
      <SpeakerMetadata
        class="avatar"
        :speaker="course.speaker"
        :iconSize="45"
        isSmallSize:true
      ></SpeakerMetadata>
    </div>

    <div class="name">
      <span>{{ course.name }}</span>
      <CourseCategory :category="course.category"></CourseCategory>
    </div>
    <div class="date">{{ course.date }}</div>
    <div class="description">{{ course.description }}</div>
  </div>
</template>

<script>
import SpeakerMetadata from "./SpeakerMetadata.vue";
import CourseCategory from "./CourseCategory.vue";
export default {
  name: "CoursePreview",
  props: {
    course: Object,
  },
  components: {
    SpeakerMetadata,
    CourseCategory,
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
.name span {
  margin-right: 10px;
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