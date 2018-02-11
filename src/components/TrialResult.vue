<template>
  <div v-if="this.$store.state.members.length > 0">
    <div v-for="(member, index) in this.$store.state.members" v-bind:key="index">
      ランキング: {{member.rank }} 名前: {{ member.name }} スコア: {{ member.score}}
    </div>
  </div>
  <div v-else>
    no members
  </div>
</template>

<script>
export default {
  name: 'TrialResult',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
