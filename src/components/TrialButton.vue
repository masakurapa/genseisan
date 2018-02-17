<template>
  <div>
    <div class="start-button-area">
      <button class="start" @click="START_TRIAL" :disabled="isStartDisabled">START</button>
    </div>

    <div class="reset-button-area">
      <button class="reset" @click="FORM_RESET" :disabled="isResetDisabled">リセット</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import {
  START_TRIAL, FORM_RESET
} from '../vuex/mutation-types'

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.start-button-area {
  margin: 50px 0px 0px 0px
}

.reset-button-area {
  margin: 50px 0px 0px 0px
}

.reset {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  color: #67c5ff;
  border: double 4px #67c5ff;
  border-radius: 3px;
  transition: .4s;
}

.reset:hover {
  background: #fffbef;
}

.reset:disabled {
  background: #c8c8c8;
}

.start {
  display: inline-block;
  text-decoration: none;
  background: #87befd;
  color: #FFF;
  font-size: 30px;
  width: 120px;
  height: 120px;
  line-height: 120px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  box-shadow: 0px 0px 0px 5px #87befd;
  border: dashed 1px #FFF;
  transition: .4s;
}

.start:hover {
  background: #668ad8;
  box-shadow: 0px 0px 0px 5px #668ad8;
}

.start:disabled {
  background: #c8c8c8;
  box-shadow: 0px 0px 0px 5px #c8c8c8;
}
</style>
