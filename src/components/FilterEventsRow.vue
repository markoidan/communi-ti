<template>
  <div class="filter-events-row">
    <filter-events
      @filter-changed="filterChanged"
      label="Category"
      :items="['tech', 'product', 'marketing', 'creative', 'hobbies', 'other']"
    ></filter-events>
    <filter-events
      @filter-changed="filterChanged"
      label="Level"
      :items="['Beginner', 'Intermediate', 'Advance']"
    ></filter-events>
    <Datepicker
      placeholder="Select Date"
      v-model="date"
      range
      input-class-name="dp-custom-input"
    ></Datepicker>
  </div>
</template>

<script>
import FilterEvents from "@/components/FilterEvents.vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  name: "FilterEventsRow",
  components: { FilterEvents, Datepicker },
  data: () => ({
    date: null,
  }),
  methods: {
    filterChanged(selectedItems) {
      console.log(selectedItems);
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
.dp-custom-input {
  border: none;
  border-bottom: 1px solid #ababab;
}
</style>
