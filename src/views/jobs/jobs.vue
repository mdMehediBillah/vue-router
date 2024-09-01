<template>
  <div>
    <h1>Jobs</h1>
    <p>Welcome to the Jobs page!</p>
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
        <p>{{ job.description }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { jobs } from "../../../data/db.js";
// console.log(jobs);
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    this.jobs = jobs;
  },
};
</script>

<style>
.job {
  margin-bottom: 20px;
  padding: 0 16px;
  /* border: 1px solid #ccc; */
  border-radius: 4px;
  background: #242424;
}
.job h2 {
  margin: 4px auto;
  padding: 4px 0;
}
.job a {
  color: rgb(3, 255, 167);
}
.job a:hover {
  color: #ffee00;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
}
</style>
