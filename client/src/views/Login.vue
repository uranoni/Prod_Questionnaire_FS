<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <v-btn icon large target="_blank" slot="activator">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-icon="email"
                name="login"
                label="Login"
                type="text"
                v-model="email"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                id="password"
                type="password"
                v-model="password"
              ></v-text-field>
              <v-text-field
                prepend-icon="person"
                name="password"
                label="Password"
                id="password"
                type="text"
                v-model="name"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      name: ""
    };
  },
  methods: {
    login() {
      axios
        .post("user/signup", {
          email: this.email,
          password: this.password,
          name: this.name
        })
        .then(response => {
          this.$store.commit("setProfile", response.data);
          const token = response.data.tokens[response.data.tokens.length - 1];
          localStorage.setItem("Authorization", token.token);
          this.$router.push("/about");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>
