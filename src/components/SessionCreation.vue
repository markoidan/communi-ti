<template>
  <div class="session-creation">
    <div class="session-creation__first-section">
      <div class="session-creation__session">
        <span>Session name</span>
        <v-text-field
          :label="sessionPlaceholder"
          variant="outlined"
          class="session-creation__session--text"
        ></v-text-field>
      </div>
      <div class="session-creation__categoryAndLevel">
        <div class="session-creation__category">
          <span>Category</span>
          <filter-events :items="categories"></filter-events>
        </div>
        <div class="session-creation__level">
          <session-level />
        </div>
      </div>
    </div>
    <div class="session-creation__second-section">
      <div class="session-creation__dateAndLength">
        <div class="session-creation__date">
          <span>Date</span>
          <filter-events-date class="session-creation__date--data" />
        </div>
        <session-length class="session-creation__length"/>
      </div>
      <div class="session-creation__details">
        <span>Details</span>
        <v-textarea
          :label="detailsPlaceholder"
          variant="outlined"
          class="session-creation__details--text"
        ></v-textarea>
      </div>
    </div>
  </div>
</template>

<script>
import FilterEvents from "../components/FilterEvents.vue";
import SessionLevel from "../components/SessionLevel.vue";
import SessionLength from "../components/SessionLength.vue";
import FilterEventsDate from "../components/FilterEventsDate.vue";
import jsonData from "../data.json";

export default {
  name: "SessionCreation",
  data() {
    return {
      detailsPlaceholder: "Session details ex, why would you join?",
      sessionPlaceholder: "Enter text...",
    };
  },
  components: { FilterEvents, SessionLevel, SessionLength, FilterEventsDate },
  computed: {
    categories() {
      return jsonData.categories;
    },
  },
};
</script>

<style scoped>
.session-creation {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-family: "Lato";
  width: 700px;
}
.session-creation__session {
  display: flex;
  flex-direction: column;
}
.session-creation__first-section {
  border-bottom-color: black;
  border-bottom-style: solid;
  border-bottom-width: thin;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.session-creation__second-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.session-creation__session--text {
  width: 600px;
  padding-top: 10px;
}
.session-creation__categoryAndLevel {
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
}
.session-creation__level {
  display: flex;
  flex-direction: column;
}
.session-creation__dateAndLength {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.session-creation__length{
  padding-left: 50px;
}
.session-creation__date {
  display: flex;
  flex-direction: column;
  padding-top: 40px;
}
.session-creation__date--text {
  width: 300px;
  height: 90px;
  padding-top: 10px;
}
.session-creation__category {
  display: flex;
  flex-direction: column;
}
.session-creation__details {
  display: flex;
  flex-direction: column;
}
.session-creation__details--text {
  width: 600px;
  padding-top: 10px;
}
</style>
