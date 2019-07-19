<template>
  <div>
    <pre>
    {{profile}}
</pre>
  </div>
</template>

<script>
export default {
  computed: {
    profile() {
      console.log(this.$store.state);
      return this.$store.state.userProfile;
    }
  }
};
</script>

<style>
</style>
