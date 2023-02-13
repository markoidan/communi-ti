<template>
 
  <div style="margin: auto; width: 400px" v-if="showBackIcon">
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
