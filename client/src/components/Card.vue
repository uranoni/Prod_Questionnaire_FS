<template>
  <v-card max-width="500px" max-height="400px">
    <v-img :src="imgsrc" aspect-ratio="2.75"></v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{title}}</h3>
        <div>{{ text }}</div>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="orange">選擇</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    src: String
  },
  data: () => ({}),
  computed: {
    imgsrc() {
      return this.src;
    }
  }
};
</script>

<style scoped>
</style>

