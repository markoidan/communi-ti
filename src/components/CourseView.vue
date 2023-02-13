<template>
  <div class="d-flex align-center flex-column">
    <speaker-metadata :speaker="course.speaker"></speaker-metadata>
  <img src="../assets/600_510511628.webp" alt="hi">
    <v-card
        width="1000"
        title="Details"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ></v-card>

  </div>
  <v-banner
      :sticky="sticky"
      lines="two"
  >
    <template v-slot:text>
      <div>
        TUE, FEB 14 · 3:00 AM IST
      </div>
      <div>
        Spanish Practice Session for All Levels
      </div>
    </template>

    <template v-slot:actions>
      <v-btn color="deep-purple-accent-4">
        Share
      </v-btn>
      <v-btn color="deep-purple-accent-4">
        Attend online
      </v-btn>
    </template>
  </v-banner>
</template>
<script>
import SpeakerMetadata from "@/components/SpeakerMetadata.vue";
import router from "@/router";
export default {
  name: 'CourseView',
  components: {SpeakerMetadata},
  data() {
    return {
      course: {}
    }
  },
  mounted() {
    console.log('this.course', this.course);
    this.course = router.state.course;
  }
}
</script>
<style>

</style>
