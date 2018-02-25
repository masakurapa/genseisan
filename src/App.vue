<template>
  <v-app class="t-application">

    <v-toolbar tabs style="background: #F5FFFA">
      <v-layout justify-center>
        <div class="t-main-title-text">厳正な抽選さん</div>
      </v-layout>

      <v-tabs slot="extension" centered v-model="tabs">
        <v-tabs-slider color="blue"></v-tabs-slider>
        <v-tab class="t-tab">厳正な抽選</v-tab>
        <v-tab class="t-tab">抽選履歴</v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <trial-contents></trial-contents>
      </v-tab-item>
      <v-tab-item>
        <trial-history></trial-history>
      </v-tab-item>
    </v-tabs-items>
  </v-app>
</template>

<script>
import Contents from './components/trial/Contents'
import History from './components/trial/History'

export default {
  components: {
    'trial-contents': Contents,
    'trial-history': History
  },

  data () {
    return {
      tabs: null
    }
  }
}
</script>

<style>
.t-application {
  background: #F5FFFA !important;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: 'Hannotate SC','Chalkboard SE','ＭＳ 明朝', 'MS Mincho',sans-serif;
}

.t-main-title-img {
  width: auto;
  height: 50px;
}

.t-main-title-text {
  font-size: 45px;
  font-weight: bold;
}

.t-tab {
  width: 50%;
  max-width: 400px;
}
</style>
