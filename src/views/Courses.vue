<template>
  <div class="courses">
    <h1>Events</h1>
    <filter-events-row></filter-events-row>
    <CoursePreview></CoursePreview>
  </div>
</template>
<script>
import CoursePreview from "../components/CoursePreview.vue";
import FilterEventsRow from "@/components/FilterEventsRow.vue";
export default {
  name: "CoursesView",
  components: { CoursePreview, FilterEventsRow },
};
</script>
