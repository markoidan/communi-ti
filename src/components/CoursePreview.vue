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
    </div>
    <div class="date">
      {{ course.date }}
      <span style="margin-left: 10px">
        <font-awesome-icon icon="fa-user-tie" />
        {{ course.attendees.length }}
      </span>
    </div>

    <div class="properties">
      <CourseLevel :level="course.level"></CourseLevel>
      <CourseCategory
        :category="course.category"
        :withText="true"
      ></CourseCategory>
    </div>
    <!-- <div class="description">{{ course.description }}</div> -->
  </div>
</template>

<script>
import SpeakerMetadata from "./SpeakerMetadata.vue";
import CourseCategory from "./CourseCategory.vue";
import CourseLevel from "./CourseLevel.vue";
export default {
  name: "CoursePreview",
  props: {
    course: Object,
    isClosed: Boolean,
  },
  components: {
    SpeakerMetadata,
    CourseCategory,
    CourseLevel,
  },
  mounted() {},
};
</script>

<style scoped>
.preview {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.properties {
  display: flex;
  flex-direction: "row";
  gap: 10px;
}
.date {
  font-size: 14px;
  color: gray;
  font-weight: bold;
}
.name {
  font-weight: bold;
  font-size: 18px;
}
.name span {
  margin-right: 10px;
}
.description {
  color: grey;
}
</style>
