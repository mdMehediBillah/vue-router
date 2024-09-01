<template>
  <!-- <SignUpForm /> -->
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
#nav a {
  padding: 5px;
  text-decoration: none;
  color: rgb(208, 208, 209);
}
#nav a.router-link-exact-active {
  color: #ffee00;
}
</style>
