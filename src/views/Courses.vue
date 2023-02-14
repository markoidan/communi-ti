<template>
  <CoursesHeader></CoursesHeader>
  <request-session-modal
    :is-open="isRequestSessionModalOpen"
    @close="isRequestSessionModalOpen = false"
  />
  <div class="courses">
    <div class="left">
      <filter-events-row @filter-changed="filterChanged"></filter-events-row>
      <div class="title">Upcoming sessions</div>
      <div class="courses-container">
        <div v-for="(course, index) in courses" :key="index" class="course">
          <CoursePreview
            style="cursor: pointer"
            :course="course"
            @click="redirect(course)"
          ></CoursePreview>
        </div>
      </div>
      <div class="title">Closed sessions</div>
      <div class="courses-container">
        <div
          v-for="closedCourse in completedCourses"
          :key="closedCourse.id"
          class="course"
        >
          <CoursePreview
            :course="closedCourse"
            :isClosed="true"
          ></CoursePreview>
        </div>
      </div>
    </div>
    <div class="right">
      <div>
        <div class="title top-courses">Top sessions</div>
        <TopSessions class="top-sessions"></TopSessions>
      </div>
      <div class="wishlists">
        <div class="title" style="margin-top:40px">Wish Lists</div>
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
import CoursesHeader from "@/components/Header.vue";
import RequestSessionModal from "../components/RequestSessionModal.vue";
import moment from "moment";
import { mapState } from "pinia";
import { useSessionsStore } from "@/store/sessions.js";
export default {
  name: "CoursesView",
  components: {
    CoursePreview,
    FilterEventsRow,
    TopSessions,
    WishLists,
    CoursesHeader,
    RequestSessionModal,
  },
  data() {
    return {
      categoryFilter: [],
      levelFilter: [],
      dateFilter: [],
      isRequestSessionModalOpen: false,
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
            this.levelFilter.indexOf(a.level) > -1) &&
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
      this.$router.push({ name: "session", params: { id: course.id } });
    },
    createSession() {
      this.$router.push({ name: "addSession" });
    },
    requestSession() {
      this.isRequestSessionModalOpen = true;
    },
  },
};
</script>
<style scoped>

.courses {
  overflow: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  height: calc(90vh);
}
.courses-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
}
.course {
 
  /* overflow-y: scroll; */
  width: 330px;
  /* display: inline-block; */
  padding: 20px 20px;
  vertical-align: top;
}
.course:hover {
  background-color: #f0f5ff;
}
.left {
  flex: 2;
  margin: 0 0 0 100px;
}
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 100px 0 0;
}
.top-sessions {
  flex: 1;
}
.wishlists {
  margin-top: 40px;
  flex: 1;
}
.title {
  text-align: left;
  margin: 0 0 20px 0;
  font-size: 20px;
  font-weight: bold;
}
</style>
