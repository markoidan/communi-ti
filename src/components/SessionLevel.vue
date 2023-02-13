<template>
  <div class="session-level">
    <span>Level</span>
    <v-chip-group mandatory selected-class="text-indigo-darken-2" @update:modelValue="updateLevel">
      <v-chip v-for="tag in levels" :key="tag"  >
        {{ tag }}
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script>
export default {
  name: "SessionLevel",
  data() {
    return {
      levels: ["Beginner", "Intermediate", "Advance"],
    };
  },
  methods: {
    updateLevel($event){
      this.$emit('selectLevel', this.levels[$event])
    }
  }
};
</script>

<style scoped>
.session-level {
  display: flex;
  flex-direction: column;
}
</style>
