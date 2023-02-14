<template>
  <div class="level-icon" :class="category">
    <v-chip variant="plain" :color="levelColor"> {{ level }} </v-chip>
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
          color = "#7fe7c1";
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
.level-icon {
}
</style>
