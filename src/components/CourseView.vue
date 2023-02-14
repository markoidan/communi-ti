<template>
  <div class="course-view">
    <div>
      <div class="course-view-header">
        <div style="display: flex; gap: 8px">
          <CourseCategory
            :category="course.category"
            :withText="false"
          ></CourseCategory>
          <div class="course-view-header-text">{{ course.name }}</div>
          <div style="flex: 1; text-align: right">
            <CourseLevel :level="course.level"></CourseLevel>
          </div>
        </div>
      </div>
      <div class="course-view-location-time">
        <div style="margin-right: 8px">
          <v-img :width="14" src="../../src/assets/calendar.svg" cover></v-img>
        </div>
        <div class="course-view-header-date" style="margin-right: 34px">
          {{ course.date }}
        </div>
        <div class="course-view-header-date" style="margin-right: 34px">|</div>
        <div style="margin-right: 8px">
          <v-img :width="14" src="../../src/assets/location.svg" cover></v-img>
        </div>
        <div class="course-view-header-date">{{ course.location }}</div>
      </div>

      <v-divider
        style="width: 80%; margin: auto; margin-bottom: 42px"
      ></v-divider>

      <div class="course-view-content">
        <SpeakerMetadata
          class="avatar"
          :speaker="course.speaker"
          :iconSize="42"
          isSmallSize:true
        ></SpeakerMetadata>
        <div class="content-about-name">About {{ course?.speaker?.name }}</div>
        <div class="content-about-data">
          Typography is the art and technique of arranging type to make written
          language legible, readable and appealing when displayed (Wikipedia).
          It refers to choosing type face, font size, color, spaces between text
          blocks / lines / letters. Having a good typography is essential for
          helping users read content effortlessly by creating hierarchies and by
          organising pages properly. Good typography increases usability.
        </div>
        <div class="content-session-details">Session details</div>
        <div class="content-session-time">
          <div>
            <v-img
              :width="14"
              src="../../src/assets/timeBack.svg"
              cover
            ></v-img>
          </div>
          <div class="content-session-time-length">{{ course.time }}</div>
        </div>
        <div class="content-description">
          {{ course.description }}
        </div>
      </div>

      <div
        style="
          width: 400px;
          margin: auto;
          font-family: 'Lato';
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
          margin-top: 20px;
        "
      >
        {{ course.name }}
      </div>
      <div class="course-view-location-time-bottom">
        <div style="margin-right: 8px">
          <v-img :width="14" src="../../src/assets/clock.svg" cover></v-img>
        </div>
        <div class="course-view-header-date-bottom" style="margin-right: 34px">
          {{ course.date }}
        </div>
        <div class="course-view-header-date-bottom" style="margin-right: 34px">
          |
        </div>
        <div style="margin-right: 8px">
          <v-img :width="14" src="../../src/assets/location.svg" cover></v-img>
        </div>
        <div class="course-view-header-date">{{ course.location }}</div>

        <div style="margin-left: 30px; margin-top: -9px">
          <v-btn style="margin-right:28px" prepend-icon="mdi-share-variant-outline"> </v-btn>
          <v-btn variant="flat" color="amber-accent-4"> Submit </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SpeakerMetadata from "@/components/SpeakerMetadata.vue";
import CourseCategory from "./CourseCategory.vue";
import CourseLevel from "./CourseLevel.vue";
import { mapState } from "pinia";
import { useSessionsStore } from "@/store/sessions.js";

export default {
  name: "CourseView",
  components: { SpeakerMetadata, CourseCategory, CourseLevel },
  data() {
    return {
      course: {},
    };
  },
  computed: {
    ...mapState(useSessionsStore, ["openCourses"]),
    levelColor() {
      let color = "";
      switch (this.course.level) {
        case "Beginner": {
          color = "#BFF3E0";
          break;
        }
        case "Intermediate": {
          color = "blue";
          break;
        }
        case "Advance": {
          color = "red";
          break;
        }
      }
      return color;
    },
  },
  mounted() {
    this.course = this.openCourses.filter((a) => {
      return a.id == this.$route.params.id;
    })[0];
  },
};
</script>
<style>
.course-view {
  display: flex;
  flex-direction: column;
}
.course-view-header {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: auto;
  margin-top: 12px;
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
}
.course-view-header-text {
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
}
.course-view-location-time {
  width: 400px;
  margin: auto;
  margin-top: 12px;
  line-height: 12px;
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-bottom: 42px;
}
.course-view-location-time-bottom {
  margin-left: 753px;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-bottom: 42px;
}
.course-view-header-date {
  line-height: 12px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}
.course-view-header-date-bottom {
  line-height: 12px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}
.course-view-content {
  display: flex;
  flex-direction: column;
  margin-top: 43px;
  width: 400px;
  margin: auto;
}
.content-about-name {
  margin-top: 18px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
}
.content-about-data {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
}
.content-session-details {
  margin-top: 48px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
}
.content-session-time {
  margin-top: 1px;
  display: flex;
  gap: 8px;
}
.content-session-time-length {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #7a7a7a;
}
.content-description {
  margin-top: 10px;
}
</style>
