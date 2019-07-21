<template>
  <v-container>
    <v-layout>
      <v-flex x12 md6>
        <h1>{{Qname}}</h1>
        <h3>{{description}}</h3>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs12 md6 v-for="(option,index) in option" :key="index">
        <Card
          :title="option.option_name"
          :text="option.description"
          src="https://picsum.photos/id/1023/3955/2094"
        ></Card>
        <v-spacer></v-spacer>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapActions } from "vuex";
export default {
  name: "Helloworld",
  components: {
    Card
  },
  mounted() {
    if (this.$store.state.nowPath.length == 0) {
      axios
        .get(`list/rootque/${this.$store.state.nowListID}`, {})
        .then(response => {
          const res = response.data.question[0];
          this.Qname = res.Qname;
          this.description = res.description;
          this.option = res.ans_option;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.fetchList();
  },
  data: () => {
    return {
      Qname: "",
      description: "",
      option: []
    };
  },
  methods: {
    ...mapActions({
      fetchList: "fetchNowList"
    })
  }
};
</script>

<style>
</style>
