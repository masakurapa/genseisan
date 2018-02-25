import Vue from 'vue'
import Vuex from 'vuex'
import {
  CHANGE_TRIAL, CHANGE_MEMBERS, CHANGE_NUMBER, START_TRIAL, FORM_RESET
} from './mutation-types'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  trial: {
    value: 100000
  },
  members: {
    value: ''
  },
  number: {
    value: 1,
    max: 1
  },
  isRunTrial: false,
  isProgress: false,
  ranking: [],
  history: []
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
  isStartDisabled: (state) => {
    if (state.isRunTrial) {
      return true
    }
    if (state.members.value.length === 0 || state.number.max > 15) {
      return true
    }
    return false
  },
  isResetDisabled: (state) => {
    return state.isRunTrial
  },
  isProgress: (state) => {
    return state.isProgress
  },
  ranking: (state) => {
    if (state.ranking === 'undefined') {
      return []
    }
    return state.ranking
  },
  history: (state) => {
    if (state.history === 'undefined') {
      return []
    }
    return state.history
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
