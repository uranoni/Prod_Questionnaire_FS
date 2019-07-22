<template>
  <v-layout row justify-center>
    <v-dialog :value="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">新增問卷</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="問卷標題*" required v-model="list_name"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="描述*" type="text" required v-model="description"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <p class="text-lg-right">
            <small>問卷作者 : {{ $store.state.userProfile.name }}</small>
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="closedialog">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="create_list">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: ["open"],
  data: () => ({
    dialog: false,
    list_name: "",
    description: ""
  }),
  methods: {
    closedialog() {
      this.dialog = false;
      this.$emit("changestatus", false);
    },
    create_list() {
      axios
        .post(
          "list/create",
          {
            list_name: this.list_name,
            description: this.description
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("Authorization")
            }
          }
        )
        .then(Response => {
          console.log(Response);
          this.closedialog();
        })
        .catch(error => {
          console.log(error);
          this.closedialog();
        });
    }
  },
  watch: {
    open(val) {
      this.dialog = val;
      console.log(this.dialog);
    }
  }
};
</script>