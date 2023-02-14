<template>
  <v-app>
    <v-main>
      <div style="display: flex; flex-direction: row; background-color: black">
        <div
          style="
            display: flex;
            flex-direction: column;
            padding: 10px;
            justify-content: space-between;
          "
        >
          <img src="src/assets/CommunityLogo.png" class="logo" />
          <span
            style="
              color: white;
              font-size: 36px;
              font-family: 'Lato';
              line-height: 36px;
              margin-top: -3px;
              font-weight: bold;
              margin-bottom: 5px;
            "
            >Community</span
          >
        </div>
        <div style="margin: auto 0 auto auto; padding: 20px">
          <v-btn
            rounded
            prepend-icon="mdi-plus"
            variant="text"
            style="margin-right: 20px"
            color="amber-accent-4"
            @click="createSession"
          >
            Create session
          </v-btn>
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
  methods: {
    createSession() {
      this.$router.push({ name: "addSession" });
    },
  },
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
  height: 35px;
  width: 200px;
}
</style>
