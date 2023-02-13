<template>
  <div class="filter-events-row">
    <filter-events
      @filter-changed="filterChanged"
      label="categoryFilter"
      :items="['tech', 'product', 'marketing', 'creative', 'hobbies', 'other']"
    ></filter-events>
    <filter-events
      @filter-changed="filterChanged"
      label="levelFilter"
      :items="['Beginner', 'Intermediate', 'Advance']"
    ></filter-events>

    <filter-events-date
      @filter-changed="filterChanged"
      label="dateFilter"
    ></filter-events-date>
  </div>
</template>

<script>
import FilterEvents from "@/components/FilterEvents.vue";
import FilterEventsDate from "@/components/FilterEventsDate.vue";

export default {
  name: "FilterEventsRow",
  components: { FilterEvents, FilterEventsDate },
  data: () => ({
    date: null,
  }),
  methods: {
    filterChanged(selectedItems) {
      this.$emit("filterChanged", selectedItems);
    },
  },
};
</script>

<style>
.filter-events-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
