<template>
  <v-container grid-list-md>
  <v-layout row wrap grid-list-md>

    <v-flex v-for="(hist, i) in history" :key="i" d-flex xs12 sm6 md4>
      <v-card>
        <v-subheader class="t-history-subheader">{{ i + 1 }}回目の抽選結果</v-subheader>
        <v-layout class="t-history-info" row wrap>
          <div>試行回数: {{ hist.trial }}</div>
          <div>抽選人数: {{ hist.number }}</div>
        </v-layout>

        <v-list subheader>
          <v-list-tile class="t-history-list-title" v-for="(item, j) in hist.ranking" :key="j">
            <v-list-tile-avatar>
              <img v-if="j == 0" src="/static/img/crown1.png">
              <img v-else-if="j == 1" src="/static/img/crown2.png">
              <img v-else-if="j == 2" src="/static/img/crown3.png">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['history'])
  }
}
</script>

<style>
.t-history-subheader {
  background-color: #87befd !important;
  color: #FFFFFF !important;
  font-size: 17px !important;
  margin: 0px !important;
  height: 30px !important;
}

.t-history-info {
  font-size: 15px !important;
  height: 25px !important;
  border-bottom: solid 1px #87befd !important;
  padding: 0px 0px 0px 10px !important;
  text-align: left !important;
}

.t-history-info div:nth-child(1) {
  width: 170px !important;
  float: left !important;
}

.t-history-list-title {
  margin: 0px 0px 0px 10% !important;
}
</style>
