<template>
  <div class="speaker-metadata" v-if="speaker">
    <v-avatar :image="speakerImage" :size="iconSize"></v-avatar>
    <div
      class="speaker-metadata__description"
      :class="[{ 'speaker-metadata__description--size': isSmallSize }]"
    >
      <span>{{ speaker.name }}</span>
      <span>{{ speaker.description }}</span>
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
    speaker: Object,
    isSmallSize: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    speakerImage() {
      return `${window.origin}/${this.speaker.pictureUrl}`;
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
.speaker-metadata__description--size {
  font-size: 14px;
}
</style>
