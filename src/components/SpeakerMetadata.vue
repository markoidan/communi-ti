<template>
    <div class="speaker-metadata">
        <v-avatar image="../assets/avatar.jpg" :size="iconSize"></v-avatar>
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
      default: 45
    },
    name: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    }
  }
}