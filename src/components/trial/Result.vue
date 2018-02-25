<template>
  <div>
    <v-layout justify-center>
      <div class="t-result-title-text">厳正な抽選結果</div>
    </v-layout>

    <v-list subheader>
      <v-list-tile class="t-list-title" v-for="(item, index) in ranking" :key="index">
        <v-list-tile-avatar>
          <img v-if="index == 0" src="/static/img/crown1.png">
          <img v-else-if="index == 1" src="/static/img/crown2.png">
          <img v-else-if="index == 2" src="/static/img/crown3.png">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-progress-circular v-if="isProgress" indeterminate :size="100" :width="7" color="primary"></v-progress-circular>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['ranking', 'isProgress'])
  }
}
</script>

<style>
.t-result-title-text {
  font-size: 35px;
  font-weight: bold;
  margin: 5px 0px 0px 0px;
}

.t-list-title {
  margin: 0px 0px 0px 10%;
}
</style>
