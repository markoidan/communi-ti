<template>
  <v-app>
    <v-main>
      <img src="src/assets/CommunityLogo.jpg" class="logo" />
      <CoursesHeader></CoursesHeader>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import CoursesHeader from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    CoursesHeader,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
::-webkit-scrollbar-track {
}
::-webkit-scrollbar-thumb {
}
.course-filter {
  width: 100px;
}
.logo {
  height: 75px;
  width: 170px;
}
</style>
