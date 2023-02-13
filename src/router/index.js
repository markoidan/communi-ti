import { createRouter, createWebHistory } from "vue-router";
import Courses from "@/views/Courses.vue";
import CourseView from "@/components/CourseView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Courses,
  },
  {
    path: "/course/:id",
    name: "course",
    component: CourseView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
