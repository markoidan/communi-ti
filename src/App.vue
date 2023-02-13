<template>
  <v-app>
    <v-main>
      <v-img
        :aspect-ratio="aspectRatio"
        :width="300"
        src="src/assets/logo.jpg"
        cover
      ></v-img>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
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
