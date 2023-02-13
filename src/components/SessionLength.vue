<template>
  <div class="session-length">
    <span>Length</span>
    <v-slider
      class="session-length__range"
      :ticks="length"
      min="15"
      max="60"
      :step="15"
      show-ticks="always"
      tick-size="4"
    >
    </v-slider>
  </div>
</template>

<script>
export default {
  name: "SessionLength",
  data() {
    return {
      length: [15, 30, 45, 60],
    };
  },
};
</script>

<style scoped>
.session-length {
  display: flex;
  flex-direction: column;
}
.session-length__range {
  width: 300px;
  padding-top: 20px;
}
</style>
