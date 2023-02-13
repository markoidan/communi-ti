<template>
  <div class="courses">
    <div class="left">
      <filter-events-row @filter-changed="filterChanged"></filter-events-row>
      <div class="title">Upcoming sessions</div>
      <div v-for="(course, index) in courses" :key="course.id" class="session">
        <CoursePreview
          :course="course"
          @click="redirect(course)"
        ></CoursePreview>
        <v-divider
          class="divider"
          v-if="index != courses.length - 1"
        ></v-divider>
      </div>
      <div class="title">Closed sessions</div>
      <div v-for="closedCourse in completedCourses" :key="closedCourse.id">
        <CoursePreview :course="closedCourse"></CoursePreview>
        <v-divider
          class="divider"
          v-if="index != completedCourses.length - 1"
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
import router from "@/router";
import moment from "moment";
import { mapState } from "pinia";
import { useSessionsStore } from "@/store/sessions.js";

export default {
  name: "CoursesView",
  components: { CoursePreview, FilterEventsRow, TopSessions, WishLists },
  data() {
    return {
      categoryFilter: [],
      levelFilter: [],
      dateFilter: [],
    };
  },

  computed: {
    ...mapState(useSessionsStore, ["closedCourses", "openCourses"]),
    completedCourses() {
      let startDate = null;
      let endDate = null;
      return this.closedCourses.filter((a) => {
        const compareDate = moment(a.date, "DD/MM/YYYY");
        let isDateBetween = true;
        if (startDate && endDate) {
          isDateBetween = compareDate.isBetween(startDate, endDate);
        }

        if (
          (this.categoryFilter.length == 0 ||
            this.categoryFilter.indexOf(a.category) > -1) &&
          (this.levelFilter.length == 0 ||
            this.levelFilter.indexOf(a.levelFilter) > -1) &&
          isDateBetween
        ) {
          return true;
        } else {
          return false;
        }
      });
    },
    courses() {
      let startDate = null;
      let endDate = null;
      if (this.dateFilter.length) {
        startDate = moment(this.dateFilter[0]);
        endDate = moment(this.dateFilter[1]);
      }

      return this.openCourses.filter((a) => {
        const compareDate = moment(a.date, "DD/MM/YYYY");
        let isDateBetween = true;
        if (startDate && endDate) {
          isDateBetween = compareDate.isBetween(startDate, endDate);
        }

        if (
          (this.categoryFilter.length == 0 ||
            this.categoryFilter.indexOf(a.category) > -1) &&
          (this.levelFilter.length == 0 ||
            this.levelFilter.indexOf(a.levelFilter) > -1) &&
          isDateBetween
        ) {
          return true;
        } else {
          return false;
        }
      });
    },
  },
  methods: {
    filterChanged(filteredItem) {
      this[filteredItem.Label] = filteredItem.Value;
    },
    redirect(course) {
      this.$router.replace({ name: "course", params: { id: course.id } });
    },
  },
};
</script>
<style>
.courses {
  display: flex;
  flex-direction: row;
  height: calc(95vh);
}
.left {
  flex: 2;
  overflow-y: scroll;
  margin-left: 40px;
}
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.top-sessions {
  height: 50%;
  margin: 10px;
  flex: 1;
  overflow-y: scroll;
}
.wishlists {
  height: 50%;
  padding: 40px;
}
.title {
  padding: 20px 0;
  font-size: 20px;
  font-weight: bold;
}
.session:hover {
  background-color: #f0f5ff;
}
</style>
