<template>
  <v-container>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">問題標題</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">選項設計</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">連結下個問題(選填)</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-text-field v-model="model" :counter="max" :rules="rules" label="請輸入標題"></v-text-field>
          <v-btn color="primary" @click="e1 = 2">繼續</v-btn>

          <v-btn flat>返回</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-select :items="items" label="Solo field" solo></v-select>
          <v-card class="mb-5">
            <v-img height="125" src="https://picsum.photos/id/1023/3955/2094"></v-img>
          </v-card>
          <h3>選項名稱</h3>
          <v-text-field :counter="max" :rules="rules" label="選項名稱"></v-text-field>
          <h3>選項描述</h3>
          <v-text-field :counter="max" :rules="rules" label="選項描述"></v-text-field>
          <div>
            <v-icon v-text="icon"></v-icon>
            <slot></slot>新增選項
          </div>
          <v-btn color="primary" @click="e1 = 3">繼續</v-btn>

          <v-btn flat>返回</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <h1>針對選項一 森林</h1>
          <v-combobox v-model="select" :items="choose" label="I use chips" multiple chips></v-combobox>
          <h1>針對選項一 岩石區</h1>
          <v-combobox v-model="select1" :items="choose" label="I use chips" multiple chips></v-combobox>
          <v-btn color="primary" @click="e1 = 1">繼續</v-btn>

          <v-btn flat>返回</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-btn color="success">送出問題</v-btn>
    <v-btn color="error">重新設計</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "Question",
  components: {},
  props: {
    icon: {
      type: String,
      default: "$vuetify.icons.edit"
    }
  },
  data: () => ({
    e1: 0,
    items: ["照片", "影片", "文章"],
    select: ["問題2", "問題3"],
    select1: ["問題2", "問題3"],
    choose: ["問題2", "問題3"]
  })
};
</script>

<style>
</style>
