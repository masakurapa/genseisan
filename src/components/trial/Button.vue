<template>
  <v-layout align-center>
    <v-flex text-xs-center xs12 sm12 md12 lg12 xl12>
      <v-btn @click="START_TRIAL" :disabled="isStartDisabled" large color="primary">START</v-btn>
      <v-btn @click="FORM_RESET" :disabled="isResetDisabled" color="warning">RESET</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import {
  START_TRIAL, FORM_RESET
} from '../../vuex/mutation-types'

export default {
  computed: {
    ...mapGetters(['isStartDisabled', 'isResetDisabled'])
  },
  methods: {
    ...mapActions([
      START_TRIAL, FORM_RESET
    ])
  }
}
</script>

<style>
</style>
