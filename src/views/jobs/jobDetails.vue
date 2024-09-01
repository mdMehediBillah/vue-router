<template>
  <div>
    <button @click="goBack" class="btnBack">Back</button>
    <div>
      <h1>Job Details</h1>
      <div v-if="job" class="job">
        <h2>{{ job.title }}</h2>
        <p>{{ job.description }}</p>
      </div>
      <div v-else>
        <p>Loading job details...</p>
      </div>
    </div>
  </div>
</template>

<script>
import { jobs } from "../../../data/db.js";
// console.log(jobs);
export default {
  props: ["id"], // Get the job id from route params as a prop
  data() {
    return {
      job: null, // Initialize job data as null
    };
  },
  mounted() {
    this.jobs = jobs;
  },
  created() {
    this.fetchJobDetails(); // Fetch job details when component is created
  },
  methods: {
    fetchJobDetails() {
      // Find job by id (convert id to a number if necessary)
      this.job = jobs.find((job) => job.id === parseInt(this.id));
    },
    goBack() {
      this.$router.go(-1); // Go back to the previous page
    },
  },
};
</script>

<style>
.job {
  margin: 20px 0;
  padding: 4px 16px;
  border-radius: 4px;
  background: #434343;
  color: yellow;
}
.btnBack {
  margin: 20px 0;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #434343;
  color: rgb(254, 221, 255);
  cursor: pointer;
}
</style>
