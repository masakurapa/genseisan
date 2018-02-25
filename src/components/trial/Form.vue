<template>
  <div>
    <v-layout justify-center>
      <div class="t-form-title-text">抽選データ</div>
    </v-layout>

    <v-form class="t-input-group">
      <v-subheader>試行回数</v-subheader>
      <v-layout row wrap>
        <v-flex xs7>
          <v-slider
            @input="CHANGE_TRIAL($event)"
            :value="trial.value"
            :min="10000"
            :max="1000000"
            :step="10000"
          ></v-slider>
        </v-flex>
        <v-flex xs3>
          <v-text-field :value="trial.value" disabled></v-text-field>
        </v-flex>
      </v-layout>

      <v-subheader>試行対象（最大15個）</v-subheader>
      <v-layout row wrap>
        <v-flex xs7>
          <v-text-field
            class="input-group--focused t-textarea"
            @keyup="CHANGE_MEMBERS($event.target.value)"
            :value="members.value"
            multi-line
            no-resize
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-subheader>抽選人数</v-subheader>
      <v-layout row wrap>
        <v-flex xs7>
          <v-slider
            @input="CHANGE_NUMBER($event)"
            :value="number.value"
            :min="1"
            :max="number.max"
            :step="1"
          ></v-slider>
        </v-flex>
        <v-flex xs1>
          <v-text-field :value="number.value" disabled></v-text-field>
        </v-flex>
      </v-layout>

      <trial-button></trial-button>
    </v-form>
  </div>
</template>

<script>
import Button from './Button'
import { mapActions, mapGetters } from 'vuex'
import {
  CHANGE_TRIAL, CHANGE_MEMBERS, CHANGE_NUMBER
} from '../../vuex/mutation-types'

export default {
  components: {
    'trial-button': Button
  },
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

<style>
.t-form-title-text {
  font-size: 35px !important;
  font-weight: bold !important;
  margin: 5px 0px 0px 0px !important;
}

.t-input-group {
  margin: 0px 0px 10px 15px !important;
}

.t-textarea {
  padding: 8px !important;
  border: 2px solid #668ad8 !important;
}

/* 不要な余白とボーダーが出るので打ち消す */
.input-group__details {
  display: none !important;
}
</style>
