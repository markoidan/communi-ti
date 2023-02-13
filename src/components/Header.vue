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
  <div style="margin: auto; width: 400px">
    <v-btn prepend-icon="mdi-arrow-left" variant="text" @click="$router.go(-1)">
      Back
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "CoursesHeader",
  methods: {
    createSession() {
      this.$router.push({ name: "addSession" });
    },
    requestSession() {
      this.$router.push({ name: "requestSession" });
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
