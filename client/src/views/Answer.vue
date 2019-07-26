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
          :nexqueid="option.next_que"
          :title="option.option_name"
          :text="option.description"
          :end="option.is_end"
          src="https://picsum.photos/id/1023/3955/2094"
          @click.native="call(option) , checkNext(option)"
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
        // .get(`list/rootque/${this.$store.state.nowListID}`, {})
        .get(`list/rootque/${this.$route.params.id}`, {})
        .then(response => {
          const res = response.data.question[0];
          console.log(res);
          this.question_id = res._id;
          this.Qname = res.Qname;
          this.description = res.description;
          this.option = res.ans_option;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    axios
      .get(`question/detail/${this.$route.params.id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  created() {
    this.fetchList();
  },
  data: () => {
    return {
      question_id: "",
      Qname: "",
      description: "",
      option: []
    };
  },
  methods: {
    ...mapActions({
      fetchList: "fetchNowList"
    }),
    call(option) {
      // console.log(option);
    },
    checkNext(option) {
      //問題的Item
      var choose_items1 = {
        item_type: "question",
        item_id: this.$route.params.id
      };
      this.$store.commit("addPath", choose_items1);
      // 選項的Item
      var choose_items2 = {
        item_type: "option",
        item_id: option._id
      };
      this.$store.commit("addPath", choose_items1);

      //判斷是否為底
      if (option.is_end == true) {
        const your_chose = {
          list_info: this.$route.params.id,
          choose_item: this.$store.state.nowPath
        };
        this.goEnd(your_chose);
      } else {
        this.goNext(option);
      }
    },
    goNext(val) {
      // console.log(val);
      this.$router.push(`/answer/${val.next_que}`);
    },
    goEnd(your_chose) {
      axios.post(
        "path/create",
        {
          ...your_chose
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("Authorization")
          }
        }
      );
      this.$router.push("/result");
    }
  }
};
</script>

<style>
</style>
