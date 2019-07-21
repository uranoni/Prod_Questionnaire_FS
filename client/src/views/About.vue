<template>
  <div>
    <h1>{{profile.name}}</h1>
    <h1>{{profile.age}}</h1>
    <h1>{{profile.email}}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    profile() {
      return this.$store.state.userProfile;
    }
  }
};
</script>

<style>
</style>
