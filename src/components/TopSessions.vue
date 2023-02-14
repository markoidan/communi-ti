<template>
  <div v-if="topCourses" class="top-course">
    <div v-for="(course, index) in topCourses" :key="course.id">
      <div style="display: flex; flex-direction: row">
        <div style="padding-top:15px">
          <img src="src/assets/cup-1.jpg" class="logo" v-if="index == 0" />
          <img src="src/assets/cup-2.jpg" class="logo" v-if="index == 1" />
          <img src="src/assets/cup-3.jpg" class="logo" v-if="index == 2" />
        </div>
        <div style="flex: 1">
          <div class="row">
            <b style="padding:5px 5px">{{ course.name }} </b>
            <!-- <span style="font-size: smaller">{{ course.speaker.name }}</span> -->
            <span style="margin: 0 0 0 auto">
              <font-awesome-icon icon="fa-user-tie" />
              <span style="padding-left: 5px">{{
                course.attendees?.length
              }}</span>
            </span>
          </div>
          <div class="row">
            <SpeakerMetadata
              class="avatar"
              :speaker="course.speaker"
              :iconSize="35"
              isSmallSize:true
            ></SpeakerMetadata>
          </div>
          <!-- <div class="row">
            <span class="date">{{ course.date }}</span>
          </div> -->
        </div>
        <span style="padding: 3px 10px">
          <font-awesome-icon
            icon="fa-solid fa-angle-down"
            @click="course.isOpen = !course.isOpen"
            v-if="!course.isOpen"
          />
          <font-awesome-icon
            icon="fa-solid fa-angle-up"
            @click="course.isOpen = !course.isOpen"
            v-if="course.isOpen"
          />
        </span>
      </div>
      <div v-if="course.isOpen" class="description">
        {{ course.description }}
      </div>
      <v-divider
        class="divider"
        v-if="index != topCourses.length - 1"
      ></v-divider>
    </div>
  </div>
</template>
<script>
import { useSessionsStore } from "@/store/sessions.js";
import { mapState } from "pinia";
import SpeakerMetadata from "./SpeakerMetadata.vue";
export default {
  name: "TopSessions",
  computed: {
    ...mapState(useSessionsStore, ["topCourses"]),
  },
  components: { SpeakerMetadata },
};
</script>

<style scoped>
.course {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.title {
  margin: 20px 0;
  font-size: 20px;
  font-weight: bold;
}
.avatar {
  margin-right: 10px;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  line-height: 18px;
}
.divider {
  margin: 20px 0;
}
.description {
  background-color: #fafafa;
  padding: 10px 40px;
  flex: 10;
}
.date {
  color: gray;
}
.logo {
  width: 40px;
  height: 50px;
  margin: 0 20px 0 10px;
}
</style>
