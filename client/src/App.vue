<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">問卷系統</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        small
        v-for="(nav,idx) in navlist"
        color="normal"
        :to="nav.path"
        :key="idx"
      >{{nav.name}}</v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      navlist: [
        { name: "回答問題", path: "/answer" },
        { name: "設計問卷", path: "/answer" },
        { name: "設計問題", path: "/question" },
        { name: "調整問卷選項", path: "/answer" },
        { name: "視覺呈現", path: "/answer" }
      ]
    };
  }
};
</script>
