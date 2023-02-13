<template>
  <div class="session-creation">
    <div class="session-creation__session">
      <span>Session name</span>
      <v-text-field :label="sessionPlaceholder"></v-text-field>
    </div>
    <div>
      <v-chip-group mandatory
          selected-class="text-primary">
        <v-chip
            v-for="tag in levels"
            :key="tag"
          >
            {{ tag }}
          </v-chip>
      </v-chip-group>
    </div>
    <div class="session-creation__details">
      <span>Details</span>
      <v-textarea :label="detailsPlaceholder"></v-textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "SessionCreation",
  props: {
    course: Object,
  },
  data() {
    return {
      detailsPlaceholder: "Session details ex, why would you join?",
      sessionPlaceholder: "Enter text...",
      levels : ['Beginner', 'Intermediate', 'Advance']
    };
  },
  components: {},
  mounted() {},
};
</script>

<style scoped>
.session-creation{
    display: flex;
    flex-direction: row;
}

.session-creation__session{
    display: flex;
    flex-direction: row;
}

.session-creation__details{
    display: flex;
    flex-direction: row;
}
</style>
