<template>
  <div class="category-icon" :class="category" :style="{ width, height }">
    <div class="icon-inner">
      <font-awesome-icon icon="fa-solid fa-desktop" v-if="category == 'tech'" />
      <font-awesome-icon icon="fa-solid fa-gift" v-if="category == 'product'" />
      <font-awesome-icon icon="fa-chess-knight" v-if="category == 'hobbies'" />
      <font-awesome-icon icon="fa-comment-dots" v-if="category == 'other'" />
      <font-awesome-icon icon="fa-palette" v-if="category == 'creative'" />
      <font-awesome-icon
        icon="fa-chess-knight"
        v-if="category == 'marketing'"
      />
      <span v-if="withText" style="padding-left: 7px">{{ category }}</span>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "CourseCategory",
  props: {
    category: String,
    withText: Boolean,
    width: String,
    height: String,
  },
  components: { FontAwesomeIcon },
};
</script>
<style scoped>
.category-icon {
  border-radius: 3px;
  text-align: center;
  vertical-align: middle;
  padding: 0 10px;
  display: inline-block;
}
.icon-inner {
  font-size: 14px;
  margin-top: 3px;
}
.tech {
  background-color: #ffefc1;
}
.product {
  background-color: #bff3e0;
}
.marketing {
  background-color: #e0e7f7;
}
.other {
  background-color: #babccf;
}
.creative {
  background-color: #e4e4e4;
}
.hobbies {
  background-color: #b9d0ff;
}
</style>
