<template>
  <div class="speaker-metadata">
    <v-avatar image="src/assets/avatar.png" :size="iconSize"></v-avatar>
    <div class="speaker-metadata__description">
      <span>{{ name }}</span>
      <span>{{ description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Speaker-Metadata",
  props: {
    iconSize: {
      type: Number,
      default: 45,
    },
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
};
</script>
<style scoped>
.speaker-metadata {
  display: flex;
  flex-direction: row;
}
.speaker-metadata__description {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
</style>
