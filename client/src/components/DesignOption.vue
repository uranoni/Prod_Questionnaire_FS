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
          新增答案選項
          <v-icon dark right>done</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <CreateOption :open="show" @changestatus="changestatus" :listID="select" />
    <v-layout>
      <v-flex>
        <template>
          <v-expansion-panel>
            <v-expansion-panel-content
              v-for="(item,i) in option"
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
import CreateOption from "./CreateOption";
export default {
  components: {
    CreateOption
  },
  data() {
    return {
      show: false,
      select: {},
      ownerlist: [],
      option: []
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
          this.option = res.data.option;
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
