<template>
  <div class="category-icon" :class="category">
    <div class="icon-inner">
      <font-awesome-icon icon="fa-solid fa-desktop" v-if="category == 'tech'" />
      <font-awesome-icon icon="fa-solid fa-gift" v-if="category == 'product'" />
      <font-awesome-icon icon="fa-chess-knight" v-if="category == 'hobbies'" />
      <font-awesome-icon icon="fa-comment-dots" v-if="category == 'other'" />
      <font-awesome-icon icon="fa-palette" v-if="category == 'creative'" />
      {{ category }}
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "CourseCategory",
  props: {
    category: String,
  },
  components: { FontAwesomeIcon },
};
</script>
<style scoped>
.category-icon {
  border-radius: 30px;
  text-align: center;
  width: 100px;
  /* height: 30px; */
  display: inline-block;
}
.icon-inner {
  font-size: 14px;
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
