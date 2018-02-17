import Vue from 'vue'
import Vuex from 'vuex'
import {
  CHANGE_TRIAL, CHANGE_MEMBERS, CHANGE_NUMBER, START_TRIAL, FORM_RESET
} from './mutation-types'
import trialInfo from './trialInfo'

Vue.use(Vuex)

const state = {
  trial: {
    value: 100000,
    error: ''
  },
  members: {
    value: '',
    error: ''
  },
  number: {
    value: 1,
    max: 1,
    error: ''
  },
  isRunTrial: false,
  shuffle: '',
  interval: null,
  ranking: []
}

const actions = {
  [CHANGE_TRIAL] ({ commit }, trial) {
    commit(CHANGE_TRIAL, trial)
  },
  [CHANGE_MEMBERS] ({ commit }, members) {
    commit(CHANGE_MEMBERS, members)
  },
  [CHANGE_NUMBER] ({ commit }, number) {
    commit(CHANGE_NUMBER, number)
  },
  [START_TRIAL] ({ commit, state }) {
    commit(START_TRIAL)
  },
  [FORM_RESET] ({ commit }) {
    commit(FORM_RESET)
  }
}

const getters = {
  trial: state => state.trial,
  members: state => state.members,
  number: state => state.number,
  shuffle: state => state.shuffle,
  isStartDisabled: (state) => {
    if (state.isRunTrial) {
      return true
    }
    if (state.trial.value.length === 0 || state.trial.error !== '') {
      return true
    }
    if (state.members.value.length === 0 || state.members.error !== '') {
      return true
    }
    return false
  },
  isResetDisabled: (state) => {
    return state.isRunTrial
  },
  ranking: (state) => {
    if (state.ranking === 'undefined') {
      return []
    }
    return state.ranking
  }
}

const mutations = {
  [CHANGE_TRIAL] (state, trial) {
    state.trial.error = ''
    state.trial.value = trial

    if (!/^[0-9]+$/.test(trial)) {
      state.trial.error = '数字だけを入れて'
      return false
    }

    state.trial.value = parseInt(trial)
    if (state.trial.value < 1 || state.trial.value > 1000000) {
      state.trial.error = '1〜1000000を入れて'
    }
  },
  [CHANGE_MEMBERS] (state, members) {
    state.members.error = ''
    state.members.value = members.trim()

    if (state.members.value === '') {
      state.members.error = '入れて'
    } else {
      // numberの上限を変える
      const split = state.members.value.split('\n').filter(v => v.trim())
      state.number.max = split.length

      if (split.length >= 15) {
        state.members.error = '15行以上はやめて'
      }
    }
  },
  [CHANGE_NUMBER] (state, number) {
    state.number.error = ''
    state.number.value = number

    if (!/^[0-9]+$/.test(number)) {
      state.number.error = '数字だけを入れて'
      return false
    }

    state.number.value = parseInt(number)
    if (state.number.value < 1 || state.number.value > state.number.max) {
      state.number.error = `1〜${state.number.max}を入れて`
    }
  },
  [START_TRIAL] (state) {
    state.isRunTrial = true

    const splitMembers = state.members.value.split('\n').filter(v => v.trim())
    state.ranking = []

    // ぐるぐるさせる
    state.interval = trialInfo.shuffle(state, splitMembers)

    // ランキングをつける
    trialInfo.createRanking(state.trial.value, splitMembers, state.number.value, (ranking) => {
      // 結果表示
      trialInfo.timeout(state, splitMembers, ranking, 0, 1000)
    })
  },
  [FORM_RESET] (state) {
    state.trial = {value: 100000, error: ''}
    state.members = {value: '', error: ''}
    state.number = {value: 1, max: 1, error: ''}
    state.shuffle = ''
    state.ranking = []
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
