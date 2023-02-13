<template>
  <v-app>
    <v-main>
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
</style>
