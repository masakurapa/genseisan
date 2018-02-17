<template>
  <div class="trial-history">
    <div class="history-group" v-for="(hist, i) in history" v-bind:key="i">
      <p class="history-title">{{ i + 1 }}回目の抽選結果</p>
      <div class="trial-info">
        <div>試行回数: {{ hist.trial }}</div>
        <div>抽選人数: {{ hist.number }}</div>
      </div>

      <ul>
        <li v-for="(member, j) in hist.ranking" v-bind:key="j">
          {{ member.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['history'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trial-history {
  font-size: 20px;
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.history-group {
  width: 300px;
  margin: 0px 20px 25px 0px;
  border: groove 2px #87befd;
  font-weight: bold;
}

.history-title {
  background-color: #87befd;
  color: #FFFFFF;
  margin: 0px;
  height: 30px;
}

.trial-info {
  font-size: 15px;
  height: 25px;
  border-bottom: solid 1px #87befd;
  padding: 0px 0px 0px 10px;
  text-align: left;
}

.trial-info div:nth-child(1) {
  width: 170px;
  float: left;
}

ul {
  margin: 5px 0px 10px 0px;
  padding: 0px;
  list-style: none;
  list-style-position: inside;
}

li {
  font-size: 19px;
  text-align: left;
  background-position: left center;
  background-repeat: no-repeat;
  line-height: 1.2;
  margin: 0px 10px 0px 10px;
  background-size: 20px;
  padding: 0em 0em 2px 3em;
  text-indent: 0em;
  word-wrap: break-word;
  border-bottom: dotted 2px #cecccd;
}

li:nth-child(1) {
  background-image: url('../assets/img/crown1.png');
}

li:nth-child(2) {
  background-image: url('../assets/img/crown2.png');
}

li:nth-child(3) {
  background-image: url('../assets/img/crown3.png');
}
</style>
