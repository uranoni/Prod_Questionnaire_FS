<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">問卷系統</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(nav,idx) in navlist" :to="nav.path" :key="idx" flat>{{nav.name}}</v-btn>
      </v-toolbar-items>

      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="(nav,idx) in navlist" :key="idx">
            <v-list-tile-content>
              <v-btn :to="nav.path" :key="idx" flat>{{nav.name}}</v-btn>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {},
  mounted() {
    const nowToken = localStorage.getItem("Authorization");
    if (nowToken) {
      this.navlist.splice(6, 1, { name: "登出", path: "/logout" });
    } else {
      this.$router.push("/login");
    }
  },
  created() {
    this.fetchProfile();
  },
  data() {
    return {
      navlist: [
        { name: "回答問題", path: "/allList" },
        { name: "關於我", path: "/about" },
        { name: "設計問卷", path: "/design" },
        { name: "佔留" },
        { name: "問卷管理", path: "/manage" },
        { name: "視覺呈現", path: "/answer" },
        { name: "登入", path: "/login" }
      ]
    };
  },
  methods: {
    ...mapActions({
      fetchProfile: "fetchProfile"
    })
  }
};
</script>
