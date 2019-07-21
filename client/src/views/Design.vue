<template>
  <v-container fluid>
    <v-layout row>
      <v-flex align-self-center>
        <v-btn to="/design/list">創建問卷</v-btn>
        <v-btn to="/design/question">出題</v-btn>
        <v-btn to="/design/option">建立選項</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <router-view></router-view>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
