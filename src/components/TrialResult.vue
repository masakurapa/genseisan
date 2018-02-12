<template>
  <div v-if="is_ranking">
    <div v-for="(member, index) in ranking" v-bind:key="index">
      {{ member.name }}
    </div>
    <div>{{ guruguru }}</div>
  </div>
  <div v-else>
    <div>{{ guruguru }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['is_ranking', 'ranking', 'guruguru'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
