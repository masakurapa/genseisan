<template>
  <div>
    <div>
      試行回数： <input type="text" @change="CHANGE_TRIAL($event.target.value)" :value="trial">
    </div>
    <div>
      試行対象： <textarea @change="CHANGE_MEMBERS($event.target.value)" :value="members" rows="10" cols="50"></textarea>
    </div>
    <div>
      <button @click="START_TRIAL">抽選スタート！！</button>
      <button @click="FORM_RESET">リセット</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import {
  CHANGE_TRIAL, CHANGE_MEMBERS, START_TRIAL, FORM_RESET
} from '../vuex/mutation-types'

export default {
  computed: {
    ...mapGetters(['trial', 'members'])
  },
  methods: {
    ...mapActions([
      CHANGE_TRIAL, CHANGE_MEMBERS, START_TRIAL, FORM_RESET
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
