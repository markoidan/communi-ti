<template>
  <div class="courses">
    <div class="left">
      <filter-events-row></filter-events-row>
      <div class="title">Active courses</div>
      <div v-for="(course, index) in courses" :key="course.id">
        <CoursePreview :course="course"></CoursePreview>
        <v-divider
          class="divider"
          v-if="index != courses.length - 1"
        ></v-divider>
      </div>
      <div class="title">Closed courses</div>
      <div v-for="closedCourse in closedCourses" :key="closedCourse.id">
        <CoursePreview :course="closedCourse"></CoursePreview>
        <v-divider
          class="divider"
          v-if="index != closedCourses.length - 1"
        ></v-divider>
      </div>
    </div>
    <div class="right">
      <div class="top-sessions">
        <TopSessions></TopSessions>
      </div>
      <div class="wishlists">
        <WishLists></WishLists>
      </div>
    </div>
  </div>
</template>

<script>
import CoursePreview from "@/components/CoursePreview.vue";
import FilterEventsRow from "@/components/FilterEventsRow.vue";
import TopSessions from "@/components/TopSessions.vue";
import WishLists from "@/components/WishLists.vue";
import jsonData from "../data.json";
export default {
  name: "CoursesView",
  components: { CoursePreview, FilterEventsRow, TopSessions, WishLists },
  data() {
    return {};
  },
  computed: {
    courses() {
      return jsonData.courses;
    },
    closedCourses() {
      return jsonData.closedCourses;
    },
  },
  methods: {},
};
</script>
<style>
.courses {
  display: flex;
  flex-direction: row;
}
.left {
  width: 60%;
  margin: 40px;
}
.right {
  width: 30%;
  display: flex;
  flex-direction: column;
}
.top-sessions {
  height: 50%;
  margin: 40px;
}
.wishlists {
  height: 50%;
  margin: 40px;
}
.divider {
  margin: 20px 0;
}
.title {
  margin: 20px 0;
  font-size: 20px;
  font-weight: bold;
}
</style>
