<template>
  <div class="trial-form">
    <div class="input-group">
      <label>試行回数</label>
      <input type="range" @input="CHANGE_TRIAL($event.target.value)" :value="trial.value" min="0" max="1000000" step="10000">
      <input type="text" @keyup="CHANGE_TRIAL($event.target.value)" :value="trial.value">
      <p class="error">{{ trial.error }}</p>
    </div>

    <div class="input-group">
    </div>

    <div class="input-group">
      <label>試行対象</label>
      <textarea @keyup="CHANGE_MEMBERS($event.target.value)" :value="members.value"></textarea>
      <p class="error">{{ members.error }}</p>
    </div>

    <div class="input-group">
      <label>抽選人数</label>
      <input type="range" @input="CHANGE_NUMBER($event.target.value)" :value="number.value" min="1" :max="number.max" step="1" list="number-list">
      <input type="text" @keyup="CHANGE_NUMBER($event.target.value)" :value="number.value">
      <p class="error">{{ number.error }}</p>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import {
  CHANGE_TRIAL, CHANGE_MEMBERS, CHANGE_NUMBER
} from '../vuex/mutation-types'

export default {
  computed: {
    ...mapGetters(['trial', 'members', 'number'])
  },
  methods: {
    ...mapActions([
      CHANGE_TRIAL, CHANGE_MEMBERS, CHANGE_NUMBER
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
  margin: 0px 0px 0px 84px;
}

.input-group {
  text-align: left;
  margin: 0px 0px 15px 80px;
}

.input-group label {
  margin: 0px 15px 0px 0px;
  vertical-align: top;
}

.input-range-value {
  vertical-align: top;
  color: #FF6347;
  font-size: 25px;
}

input[type=text] {
  border: 2px solid #668ad8;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  color: #000000;
  font-size: 13px;
  padding: 10px;
  height: 35px;
  width: 180px;
  margin: 0px 0px 0px 84px;
}

textarea {
  border: 2px solid #668ad8;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  color: #000000;
  font-size: 13px;
  padding: 10px;
  height: 150px;
  width: 180px;
  resize: none;
}

input[type=range] {
  height: 34px;
  -webkit-appearance: none;
  margin: 0px 10px 0px 0px;
  width: 180px;
  background-color: #F5FFFA;
}

input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 11px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000;
  background: #74A9D8;
  border-radius: 1px;
  border: 0px solid #010101;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #000031;
  border: 1px solid #00001E;
  height: 26px;
  width: 26px;
  border-radius: 15px;
  background: #FFFFFF;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -8px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #74A9D8;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 11px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000;
  background: #74A9D8;
  border-radius: 1px;
  border: 0px solid #010101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000031;
  border: 1px solid #00001E;
  height: 26px;
  width: 26px;
  border-radius: 15px;
  background: #FFFFFF;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 11px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #74A9D8;
  border: 0px solid #010101;
  border-radius: 2px;
  box-shadow: 1px 1px 1px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #74A9D8;
  border: 0px solid #010101;
  border-radius: 2px;
  box-shadow: 1px 1px 1px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 1px #000031;
  border: 1px solid #00001E;
  height: 26px;
  width: 26px;
  border-radius: 15px;
  background: #FFFFFF;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #74A9D8;
}
input[type=range]:focus::-ms-fill-upper {
  background: #74A9D8;
}
</style>
