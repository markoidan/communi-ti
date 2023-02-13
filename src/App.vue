<template>
  <v-app>
    <v-main>
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
  width: 12px;
}

::-webkit-scrollbar-track {
  border-radius: 8px;
  background-color: #95a5a6;
  border: 1px solid #cacaca;
}

::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: #2c3e50;
}
.course-filter {
  width: 100px;
}
</style>
