<template>
  <div class="filter-events">
    <v-select
      v-model="selectedItems"
      class="course-filter"
      clearable
      chips
      :label="label"
      :items="items"
      multiple
      variant="underlined"
      @change="selectionChanged($event)"
    >
      ></v-select
    >
  </div>
</template>

<script>
export default {
  name: "FilterEvents",
  props: ["label", "items"],
  data: () => ({
    selectedItems: [],
  }),
  watch: {
    selectedItems(newValue) {
      this.$emit("filterChanged", { Label: this.label, Value: newValue });
    },
  },
};
</script>

<style>
.filter-events {
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
