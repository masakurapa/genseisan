<template>
  <div class="result">
    <ul class="result-group" v-if="ranking.length > 0">
      <li v-for="(member, index) in ranking" v-bind:key="index">
        {{ member.name }}
      </li>
    </ul>
    <ul><li>{{ shuffle }}</li></ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['ranking', 'shuffle'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result {
  font-size: 30px;
}

ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
  list-style-position: inside;
}

li {
  text-align: left;
  background-position: left center;
  background-repeat: no-repeat;
  line-height: 1.6;
  margin-left: 50px;
  background-size: 40px;
  padding-left: 3em;
  text-indent: 0em;
  word-wrap: break-word;
}

.result-group li:nth-child(1) {
  background-image: url('../assets/img/crown1.png');
}

.result-group li:nth-child(2) {
  background-image: url('../assets/img/crown2.png');
}

.result-group li:nth-child(3) {
  background-image: url('../assets/img/crown3.png');
}
</style>
