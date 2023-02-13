<template>
  <div>WishLists</div>
  <v-expansion-panels>
    <v-expansion-panel v-for="(item, index) in wishList" :key="index">
      <v-expansion-panel-title>
        <div class="wish-list-item">
          <span>{{ item.name }}</span>
          <span> {{ item.level }}</span>
          <span>{{ item.category }}</span>
        </div></v-expansion-panel-title
      >
      <v-expansion-panel-text>{{ item.description }}</v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
import { useSessionsStore } from "@/store/sessions.js";
import { mapState } from "pinia";
export default {
  name: "WishLists",
  computed: {
    ...mapState(useSessionsStore, ["wishList"]),
  },
};
</script>
<style>
.wish-list-item {
  display: flex;
  gap: 20px;
}
</style>
