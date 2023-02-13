<template>
  <div class="filter-events">
    <Datepicker
      placeholder="Select Date"
      v-model="date"
      range
      input-class-name="dp-custom-input"
    ></Datepicker>
  </div>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  name: "FilterEventsDate",
  components: { Datepicker },
  props: ["label", "items"],
  data: () => ({
    date: [],
  }),
  watch: {
    date(newValue) {
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
