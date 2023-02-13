<template>
  <div class="session-creation">
    <div class="session-creation__first-section">
      <div class="session-creation__session">
        <span>Session name</span>
        <v-text-field
          :label="sessionPlaceholder"
          variant="outlined"
          @update:modelValue="updateSessionName"
          class="session-creation__session--text"
        ></v-text-field>
      </div>
      <div class="session-creation__categoryAndLevel">
        <div class="session-creation__category">
          <span>Category</span>
          <filter-events
            :items="categories"
            @filterChanged="updateCategory"
          ></filter-events>
        </div>
        <div class="session-creation__level">
          <session-level @selectLevel="updateSessionLevel" />
        </div>
      </div>
    </div>
    <div class="session-creation__second-section">
      <div class="session-creation__dateAndLength">
        <div class="session-creation__date">
          <span>Date</span>
          <filter-events-date
            @filterChanged="updateDate"
            class="session-creation__date--data"
          />
        </div>
        <session-length
          @selectLength="updateSessionLength"
          class="session-creation__length"
        />
      </div>
      <div class="session-creation__details">
        <span>Details</span>
        <v-textarea
          :label="detailsPlaceholder"
          variant="outlined"
          class="session-creation__details--text"
          @update:modelValue="updateDetails"
        ></v-textarea>
      </div>
    </div>
    <div class="session-creation__create">
      <v-checkbox
        @click="createAnother()"
        class="session-creation__create--checkbox"
        label="Create another"
        color="indigo-darken-3"
      ></v-checkbox>
      <v-btn
        class="session-creation__create--button"
        color="amber-accent-4"
        @click="createSession"
      >
        Create
      </v-btn>
    </div>
  </div>
</template>

<script>
import FilterEvents from "../components/FilterEvents.vue";
import SessionLevel from "../components/SessionLevel.vue";
import SessionLength from "../components/SessionLength.vue";
import FilterEventsDate from "../components/FilterEventsDate.vue";
import { useSessionsStore } from "@/store/sessions.js";
import { mapActions, mapState } from "pinia";

export default {
  name: "SessionCreation",
  data() {
    return {
      detailsPlaceholder: "Session details ex, why would you join?",
      sessionPlaceholder: "Enter text...",
      isWantToCreateAnother: false,
      session: {
        description: "",
        id: null,
        speaker: {
          name: "Sveta Osherov Gross",
          pictureUrl: "src/assets/Sveta.jpg",
          description: "Digital Marketing Strategy",
        },
        date: "01/03/23 8:00",
        name: "",
        location: "Gordon",
        details: "",
        category: "",
        level: "",
        length: 0,
        attendees: [],
      },
      details: "",
    };
  },
  components: { FilterEvents, SessionLevel, SessionLength, FilterEventsDate },
  computed: {
    ...mapState(useSessionsStore, ["categories"]),
  },
  methods: {
    ...mapActions(useSessionsStore, ["addSession"]),
    createAnother() {
      this.isWantToCreateAnother = true;
    },
    createSession() {
      this.addSession(this.session);
      if (!this.isWantToCreateAnother) {
        this.$router.push("/");
      } else {
        this.isWantToCreateAnother = false;
        this.session = {
          description: "",
          id: null,
          speaker: {
            name: "Sveta Osherov Gross",
            pictureUrl: "src/assets/Sveta.jpg",
            description: "Digital Marketing Strategy",
          },
          date: "01/03/23 8:00",
          name: "",
          location: "Gordon",
          details: "",
          category: "",
          level: "",
          length: 0,
          attendees: [],
        };
      }
    },
    updateDetails($event) {
      this.session.details = $event;
    },
    updateSessionName($event) {
      this.session.name = $event;
    },
    updateSessionLevel($event) {
      this.session.level = $event;
    },
    updateSessionLength($event) {
      this.session.length = $event;
    },
    updateCategory(category) {
      this.session.category = Object.values(category.Value)[0];
    },
    updateDate(date) {
      const getSpecificDate = date.Value[0].toString().split("GMT");
      this.session.date = getSpecificDate[0];
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
.session-creation__length {
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
.session-creation__create {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.session-creation__create--checkbox {
  color: black;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
}
.session-creation__create--checkbox .v-label {
  opacity: 1;
}
.session-creation__create--button {
  font-weight: bold;
}
</style>
