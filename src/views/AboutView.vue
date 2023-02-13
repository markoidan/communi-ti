<template>
  <div class="about">
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
.about {
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-left: 10px;
  margin-top: 60px;
}
</style>
