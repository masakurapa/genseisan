<template>
  <div class="trial-form">
    <div class="input-group">
      <label>試行回数</label>
      <input type="text" @keyup="CHANGE_TRIAL($event.target.value)" :value="trial.value">
      <p class="error">{{ trial.error }}</p>
    </div>
    <div class="input-group">
      <label>試行対象</label>
      <textarea @keyup="CHANGE_MEMBERS($event.target.value)" :value="members.value" rows="10" cols="50"></textarea>
      <p class="error">{{ members.error }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import {
  CHANGE_TRIAL, CHANGE_MEMBERS
} from '../vuex/mutation-types'

export default {
  computed: {
    ...mapGetters(['trial', 'members'])
  },
  methods: {
    ...mapActions([
      CHANGE_TRIAL, CHANGE_MEMBERS
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trial-form {
  font-weight: bold;
}

.error {
  color: #dc143c;
  margin: 0px 0px 0px 85px;
}

.input-group {
  text-align: left;
  margin: 0px 0px 10px 80px;
}

.input-group label {
  margin: 0px 15px 0px 0px;
  vertical-align: top;
}

input {
  border: 2px solid #668ad8;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  color: #000000;
  font-size: 13px;
  padding: 10px;
  height: 35px;
  width: 180px;
}

textarea {
  border: 2px solid #668ad8;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  color: #000000;
  font-size: 13px;
  padding: 10px;
  height: 200px;
  width: 180px;
  resize: none;
}
</style>
