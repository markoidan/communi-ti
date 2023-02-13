<template>
  <div class="courses">
    <filter-events-row @filter-changed="filterChanged"></filter-events-row>
    <div v-for="course in courses" :key="course.id">
      <CoursePreview @click="redirect(course)" :course="course"></CoursePreview>
      <v-divider class="divider"></v-divider>
    </div>
  </div>
</template>

<script>
import CoursePreview from "../components/CoursePreview.vue";
import FilterEventsRow from "@/components/FilterEventsRow.vue";
import jsonData from "../data.json";
import router from "@/router";
import moment from "moment";

export default {
  name: "CoursesView",
  components: { CoursePreview, FilterEventsRow },
  data() {
    return {
      categoryFilter: [],
      levelFilter: [],
      dateFilter: [],
    };
  },

  computed: {
    courses() {
      let startDate = null;
      let endDate = null;
      if (this.dateFilter.length) {
        startDate = moment(this.dateFilter[0]);
        endDate = moment(this.dateFilter[1]);
      }

      return jsonData.courses.filter((a) => {
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
      console.log("course", course);
      router.push({ name: "course", state: { course } });
    },
  },
  mounted() {
    console.log(this.courses);
  },
};
</script>
<style>
.divider {
  margin: 20px 0;
}
</style>
