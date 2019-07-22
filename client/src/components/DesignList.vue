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
  </v-container>
</template>

<script>
import CreateList from "./CreateList";
export default {
  data() {
    return {
      show: false
    };
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
