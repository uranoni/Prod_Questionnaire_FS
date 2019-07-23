<template>
  <v-layout row justify-center>
    <v-dialog :value="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">新增問題</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="問題標題*" required v-model="Qname"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="描述*" type="text" required v-model="description"></v-text-field>
              </v-flex>
              <v-flex>
                <v-checkbox v-model="is_root" :label="`是否為根問題 ${is_root.toString()}`"></v-checkbox>
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
          <v-btn color="blue darken-1" flat @click="create_question">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: "CreateQuestion",
  props: ["open", "listID"],
  data: () => ({
    dialog: false,
    Qname: "",
    description: "",
    is_root: "false"
  }),
  methods: {
    closedialog() {
      this.dialog = false;
      this.$emit("changestatus", false);
    },
    create_question() {
      axios
        .post(
          "question/create",
          {
            Qname: this.Qname,
            description: this.description,
            _id: this.listID,
            is_root: this.is_root
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