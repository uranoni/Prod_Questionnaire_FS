<template>
  <v-container>
    {{$route.params.id}}
    <v-layout row>
      <v-flex xs12 md5>
        <Card title="森林" text="森林風景區" src="https://picsum.photos/id/1023/3955/2094"></Card>
      </v-flex>
      <v-flex xs12 md2></v-flex>
      <v-flex xs12 md5>
        <Card title="岩石區" text="岩石風景區" src="https://picsum.photos/id/1016/3844/2563"></Card>
      </v-flex>
    </v-layout>

    <br />

    <v-layout row>
      <v-flex xs12 md5>
        <Card title="丘陵" text="丘陵風景區" src="https://picsum.photos/id/1018/3914/2935"></Card>
      </v-flex>
      <v-flex xs12 md2></v-flex>
      <v-flex xs12 md5>
        <Card title="海洋" text="海洋風景區" src="https://picsum.photos/id/1019/5472/3648"></Card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Helloworld",
  components: {
    Card
  },
  data: () => ({})
};
</script>

<style>
</style>
