<template>
  <div class="level-icon">
    <v-chip variant="text" :color="levelColor"> {{ level }} </v-chip>
  </div>
</template>
<script>
export default {
  name: "CourseLevel",
  props: {
    level: String,
  },
  computed: {
    levelColor() {
      let color = "";
      switch (this.level) {
        case "Beginner": {
          color = "#3fdba2";
          break;
        }
        case "Intermediate": {
          color = "blue";
          break;
        }
        case "Advance": {
          color = "red";
          break;
        }
      }
      return color;
    },
  },
};
</script>
<style scoped>
</style>
