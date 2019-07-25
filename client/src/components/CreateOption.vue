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
            <v-btn dark flat @click="createOption">Save</v-btn>
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
            <v-text-field label="選項名稱" Regular v-model="optionTitle"></v-text-field>
          </v-flex>
        </v-layout>
        <v-flex xs12 md6>請輸入兩組關鍵字(可輸入完使用tab建立關鍵字)</v-flex>
        <v-flex xs12 md6>
          <v-combobox v-model="keyselect" :items="keyselect" label="使用關鍵字" multiple chips></v-combobox>
        </v-flex>
        <v-flex xs12 sm6 d-flex>
          <v-select v-model="selectdata" :items="mediaType" label="媒體型態"></v-select>
        </v-flex>
        <Media />
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import Media from "./Media";
export default {
  name: "CreateQuestion",
  components: {
    Media
  },
  props: ["open", "listid", "listque"],
  data: () => ({
    optionTitle: "",
    original_que: {},
    next_que: {},
    dialog: false,
    is_end: false,
    keyselect: [],
    keyitems: [],
    mediaType: ["video", "picture", "article"],
    selectdata: ""
  }),
  mounted() {},
  methods: {
    closedialog() {
      this.dialog = false;
      this.$emit("changestatus", false);
    },
    createOption() {
      axios
        .post("option/create", {
          option_name: this.optionTitle,
          original_que: this.original_que,
          next_que: this.next_que,
          list_id: this.listid,
          is_end: this.is_end,
          keywords: this.keyselect,
          media_type: this.selectdata
        })
        .then(response => {
          this.closedialog();
          console.log(response);
        })
        .catch(err => {
          console.log(err);
          this.closedialog();
        });
    }
  },
  watch: {
    open(val) {
      this.dialog = val;
      console.log(this.dialog);
    },
    //next que和original que為監看當前id

    next_que(val) {
      console.log(val);
    },
    // 監看清單資料
    listdata(val) {
      console.log(val);
    },
    // 監看選擇value
    selectdata(val) {
      console.log(val);
    }
  }
};
</script>