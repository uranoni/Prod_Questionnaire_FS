<template>
  <dir>
    <pre>
    {{list}}
  </pre>
  </dir>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    axios
      .get("/api/list/allItem/5d3141ba7082fc5de46686fd", {})
      .then(response => {
        // console.log(response.data[0]);
        this.list = response.data[0];
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>