<template>
  <div
    style="margin: auto"
    v-if="showBackIcon"
    :class="{
      'move-back-button': moveBackButton,
      'back-button': !moveBackButton,
    }"
  >
    <v-btn prepend-icon="mdi-arrow-left" variant="text" @click="$router.go(-1)">
      Back
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "CoursesHeader",
  data: () => ({
    showBackIcon: false,
  }),
  methods: {
    createSession() {
      this.$router.push({ name: "addSession" });
    },
    requestSession() {
      this.$router.push({ name: "requestSession" });
    },
  },
  watch: {
    $route: function () {
      if (window.location.pathname == "/") {
        this.showBackIcon = false;
      } else {
        this.showBackIcon = true;
      }

      if (window.location.pathname == "/add-session") {
        this.moveBackButton = true;
      } else {
        this.moveBackButton = false;
      }
    },
  },
};
</script>
<style scoped>
.logo {
  height: 75px;
  width: 170px;
}
.move-back-button {
  width: 624px;
}
.back-button {
  width: 400px;
}
</style>
