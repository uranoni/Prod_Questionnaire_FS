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
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>下一個問題</v-list-tile-title>
              <v-list-tile-sub-title>對應動態跳題</v-list-tile-sub-title>
            </v-list-tile-content>
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
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: "CreateQuestion",
  props: ["open", "listID"],
  data: () => ({
    dialog: false,
    is_end: false
  }),
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
    }
  }
};
</script>