import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Jobs from "@/views/jobs/jobs.vue";
import JobDetails from "@/views/jobs/jobDetails.vue";
import NotFound from "@/views/NotFound.vue";

// Use import.meta.env for environment variables in Vite
const baseUrl = import.meta.env.VITE_BASE_URL || "/"; // Default to '/' if VITE_BASE_URL is not set

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true,
  },
  // redirect
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  // catch all 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  // Correctly use import.meta.env.VITE_BASE_URL as the base
  history: createWebHistory(baseUrl),
  routes,
});

export default router;
