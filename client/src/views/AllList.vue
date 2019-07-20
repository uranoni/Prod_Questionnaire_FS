<template>
  <v-data-table :headers="headers" :items="questions" hide-actions>
    <template v-slot:items="props">
      <td>{{ props.item.list_name }}</td>
      <td class="text-xs-right">{{ props.item.description }}</td>
      <td class="text-xs-right">{{ props.item.author.name }}</td>
      <td class="text-xs-right">
        <v-btn default @click="goto(props.item._id)">點擊</v-btn>
      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "問卷名稱",

          value: "list_name"
        },
        { text: "描述", value: "description" },
        { text: "作者", value: "author" },
        { text: "連結", value: "link" }
      ],
      //   desserts: [
      //     {
      //       name: "Frozen Yogurt",
      //       description: 159,
      //       author: 6.0,
      //       link: 24
      //     },
      //     {
      //       name: "Ice cream sandwich",
      //       description: 237,
      //       author: 9.0,
      //       link: 37
      //     },
      //     {
      //       name: "Eclair",
      //       description: 262,
      //       author: 16.0,
      //       link: 23
      //     }
      //   ]
      questions: []
    };
  },
  mounted() {
    axios
      .get("list/openlist")
      .then(response => {
        const feedback = response.data;
        this.questions = feedback;
        console.log(feedback);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    goto(id) {
      this.$router.push(`/answer/${id}`);
    }
  }
};
</script>
