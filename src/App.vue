<template>
  <v-app>
    <v-main>
      <div style="display: flex; flex-direction: row; background-color: black">
        <div style="display: flex; flex-direction: column; margin:auto; padding: 10px 500px;">
          <img src="src/assets/CommunityLogo.png" class="logo" />
          <span
            style="
              color: white;
              font-size: 36px;
              font-family: 'Lato';
              line-height: 36px;
              margin-top: -3px;
              font-weight: bold;
              margin-bottom: 26px;
            "
            >Community</span
          >
        </div>
        <div style="margin: auto 0 auto auto; padding:20px">
          <v-avatar image="src/assets/sveta.jpg"></v-avatar>
          <span style="color: white; margin: 10px; font-family: 'Lato'"
            >Sveta Osherov Gross</span
          >
        </div>
      </div>
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
  height: 40px;
  width: 200px;
}
</style>
