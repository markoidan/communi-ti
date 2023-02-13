<template>
  <div class="session-creation-view">
    <session-creation />
  </div>
</template>
<script>
import SessionCreation from "../components/SessionCreation.vue";
export default {
  name: "CoursesView",
  components: { SessionCreation },
  data() {
    return {};
  },
};
</script>
<style scoped>
.session-creation-view {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>
