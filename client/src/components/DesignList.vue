<template>
  <v-container fluid>
    <v-layout>
      <v-flex class="good">
        <v-btn color="primary" dark @click="showdialog">
          新增問卷清單
          <v-icon dark right>check_circle</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <CreateList :open="show" @changestatus="changestatus" />
    <v-layout>
      <v-flex>
        <template>
          <v-expansion-panel>
            <v-expansion-panel-content
              v-for="(item,i) in ownerlist"
              :key="i"
              expand-icon="mdi-menu-down"
            >
              <template v-slot:header>
                <div>{{item.list_name}}</div>
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
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CreateList from "./CreateList";
export default {
  data() {
    return {
      show: false,
      ownerlist: []
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
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    CreateList
  },
  methods: {
    showdialog() {
      this.show = true;
      console.log(this.show);
    },
    changestatus() {
      this.show = false;
    }
  }
};
</script>

<style>
/* .good {
  height: 500px;
  border: 2px solid #666;
} */
</style>
