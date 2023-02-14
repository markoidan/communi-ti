<template>
  <v-dialog
    :model-value="isOpen"
    persistent
    width="600px"
    :class="request - session - modal"
  >
    <v-card>
      <v-card-title class="request-session-modal__header">
        <span style="font-weight: 700">Request a session</span>
        <v-btn
          variant="plain"
          @click="closeModal"
          class="request-session-modal__header--button"
        >
          X
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div class="request-session-modal__subject">
          <span>Subject</span>
          <v-text-field
            :label="subjectPlaceholder"
            variant="outlined"
            @update:modelValue="updateSubject"
            class="request-session-modal__subject--text"
          ></v-text-field>
        </div>
        <div style="display: flex">
          <div class="request-session-modal__level">
            <session-level @selectLevel="updateSessionLevel" />
          </div>
          <div style="margin-top: 62px">
            <filter-events
              :items="categories"
              placeholder="Category"
              label="Category"
              @filterChanged="updateCategory"
            ></filter-events>
          </div>
        </div>
        <div class="request-session-modal__focus-area">
          <span>Focus area</span>
          <v-textarea
            :label="focusAreaPlaceholder"
            variant="outlined"
            class="session-creation__focus-area--text"
            @update:modelValue="updateFocusArea"
          ></v-textarea>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <div style="padding: 20px">
          <v-btn variant="flat" color="amber-accent-4" @click="closeModal"
            >Submit</v-btn
          >
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import SessionLevel from "../components/SessionLevel.vue";
import { mapState } from "pinia";
import { useSessionsStore } from "@/store/sessions.js";
import FilterEvents from "../components/FilterEvents.vue";
export default {
  name: "RequestSessionModal",
  data() {
    return {
      focusAreaPlaceholder: "Enter the wanted focus area for the session",
      subjectPlaceholder: "Enter text...",
      check: true,
    };
  },
  computed: {
    ...mapState(useSessionsStore, ["categories"]),
  },
  components: { SessionLevel, FilterEvents },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateCategory(category) {
      let a = Object.values(category.Value)[0];
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.request-session-modal {
  padding: 0;
  width: 600px;
  font-size: 14px !important;
}
.request-session-modal__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: gainsboro;
  border-bottom-style: solid;
  border-bottom-width: thin;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
}
.request-session-modal__header--button {
  padding: 0;
}
.request-session-modal__subject {
  padding-top: 40px;
}
.request-session-modal__subject--text {
  padding-top: 5px;
  width: 505px;
  height: 32px;
}
.request-session-modal__level {
  padding-top: 50px;
}
.request-session-modal__focus-area {
  padding-top: 30px;
}
.v-card-text {
  font-weight: 700;
}
</style>
