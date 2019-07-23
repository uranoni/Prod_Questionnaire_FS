<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 d-flex>
        <v-select
          v-model="select"
          :hint="`${select.list_name}`"
          :items="ownerlist"
          item-text="list_name"
          item-value="_id"
          label="Select"
          persistent-hint
          return-object
          outline
        ></v-select>
        <h1>{{select._id}}</h1>
      </v-flex>
      <v-flex class="good">
        <v-btn color="primary" dark @click="showdialog">
          新增問題
          <v-icon dark right>done</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <CreateQuestion :open="show" @changestatus="changestatus" :listID="select" />
    <v-layout>
      <v-flex>
        <template>
          <v-expansion-panel>
            <v-expansion-panel-content
              v-for="(item,i) in questions"
              :key="i"
              expand-icon="mdi-menu-down"
            >
              <template v-slot:header>
                <div>{{item.Qname}}</div>
                <v-spacer></v-spacer>
                <v-icon v-if="item.is_root == true">done</v-icon>
              </template>
              <v-card>
                <v-card-text class="grey lighten-3">{{item.description}}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CreateQuestion from "./CreateQuestion";
export default {
  components: {
    CreateQuestion
  },
  data() {
    return {
      show: false,
      select: {},
      ownerlist: [],
      questions: []
    };
  },
  mounted() {
    axios
      .get("list/ownerlist", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Authorization")
        }
      })
      .then(res => {
        this.ownerlist = res.data;
        console.log(this.ownerlist);
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    // items() {
    //   const newarray = this.ownerlist.map(i => {
    //     return i.list_name;
    //   });
    //   return newarray;
    // },
    // itemindex() {
    //   const index = this.ownerlist.map(i => {
    //     return i._id;
    //   });
    //   return index;
    // }
  },
  methods: {
    showdialog() {
      this.show = true;
      console.log(this.show);
    },
    changestatus() {
      this.show = false;
    }
  },
  watch: {
    select(val) {
      axios
        .get(`list/allItem/${val._id}`)
        .then(res => {
          console.log(res);
          this.questions = res.data.question;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>
