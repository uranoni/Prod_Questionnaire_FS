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
  mounted() {
    this.$store.dispatch("fetchProfile");
  },
  data() {
    return {
      navlist: [
        { name: "回答問題", path: "/answer" },
        { name: "關於我", path: "/about" },
        { name: "設計問卷", path: "/answer" },
        { name: "設計問題", path: "/question" },
        { name: "問卷管理", path: "/manage" },
        { name: "視覺呈現", path: "/answer" },
        { name: "登入", path: "/login" }
      ]
    };
  }
};
</script>
