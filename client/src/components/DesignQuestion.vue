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
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      select: {},
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
  }
  // methods: {
  //   getThis(val) {
  //     console.log(val);
  //     this.l = val._id;
  //   }
  // }
};
</script>

<style>
</style>
