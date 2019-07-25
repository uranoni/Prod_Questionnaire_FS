<template>
  <v-layout row justify-center>
    <v-dialog :value="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="closedialog">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>建立選項</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="closedialog">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>建立選項時的說明</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>當前問題</v-list-tile-title>
              <v-list-tile-sub-title>建立選項時對應的問題</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-title-content>
              <v-select
                v-model="original_que"
                :items="listque"
                append-outer-icon="help"
                item-text="Qname"
                item-value="_id"
                hide-details
                label="Select"
                single-line
              ></v-select>
            </v-list-title-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>下一個問題</v-list-tile-title>
              <v-list-tile-sub-title>對應動態跳題</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-title-content>
              <v-select
                v-model="next_que"
                :items="listque"
                append-outer-icon="help"
                item-text="Qname"
                item-value="_id"
                hide-details
                label="Select"
                single-line
              ></v-select>
            </v-list-title-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="is_end"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>該選項是否為 結束點</v-list-tile-title>
              <v-list-tile-sub-title>使用者選擇完該選項是否結束問卷</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-layout row>
          <v-flex xs2 md2>
            <v-list-tile-title>選項名稱</v-list-tile-title>
          </v-flex>
          <v-flex xs10 md10>
            <v-text-field label="選項名稱" Regular></v-text-field>
          </v-flex>
        </v-layout>

        <v-flex xs12 md6>請輸入兩組關鍵字(可輸入完使用tab建立關鍵字)</v-flex>
        <v-flex xs12 md6>
          <v-combobox v-model="keyselect" :items="keyselect" label="使用關鍵字" multiple chips></v-combobox>
        </v-flex>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: "CreateQuestion",
  props: ["open", "listid", "listque"],
  data: () => ({
    original_que: {},
    next_que: {},
    dialog: false,
    is_end: false,
    keyselect: [],
    keyitems: []
  }),
  mounted() {
    // console.log(this.listdata);
    // axios
    //   .get(`list/allItem/${this.listID}`)
    //   .then(res => {
    //     this.fetchque = this.res.data.question;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  methods: {
    closedialog() {
      this.dialog = false;
      this.$emit("changestatus", false);
    }
  },
  watch: {
    open(val) {
      this.dialog = val;
      console.log(this.dialog);
    },
    listdata(val) {
      console.log(val);
    }
  }
};
</script>