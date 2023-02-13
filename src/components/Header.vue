<template>
  <img src="src/assets/CommunityLogo.jpg" class="logo" />
  <v-btn
    class="session-creation__create--button"
    color="amber-accent-4"
    @click="createSession"
  >
    Create session
  </v-btn>
  <v-btn @click="requestSession">Request session</v-btn>
    <request-session-modal :is-open="isRequestSessionModalOpen" @close="isRequestSessionModalOpen = false" />
  <div style="margin: auto; width: 400px">
    <v-btn prepend-icon="mdi-arrow-left" variant="text" @click="$router.go(-1)">
      Back
    </v-btn>
  </div>
</template>
<script>
import RequestSessionModal from "../components/RequestSessionModal.vue";

export default {
  name: "CoursesHeader",
  components: { RequestSessionModal },
  data() {
    return {
      isRequestSessionModalOpen: false,
    };
  },
  methods: {
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
.logo {
  height: 75px;
  width: 170px;
}
</style>
