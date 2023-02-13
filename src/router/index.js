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
  {
    path: "/add-session",
    name: "addSession",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/request-session",
    name: "requestSession",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
