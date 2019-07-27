<template>
  <div>
    <h1>恭喜填完問卷</h1>
    <br />
    <h2>以下是您的填寫路徑</h2>
    <h3>{{$store.state.nowPath}}</h3>

    <v-app id="inspire">
      <div>
        <div class="d-flex justify-between align-center mb-3">
          <v-btn @click="all">all</v-btn>
          <v-btn @click="none">none</v-btn>
        </div>

        <v-expansion-panel v-model="panel" expand>
          <v-expansion-panel-content v-for="(item,i) in this.$store.state.nowPath" :key="i">
            <template v-slot:header>
              <div>{{item.name}}</div>
            </template>
            <v-card>
              <v-card-text></v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panel: this.$store.state.nowPath,
      items: this.$store.state.nowPath.length
    };
  },
  methods: {
    all() {
      this.panel = [...Array(this.items).keys()].map(_ => true);
    },

    none() {
      this.panel = [];
    }
  }
};
</script>

<style>
</style>
