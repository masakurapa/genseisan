import Vue from 'vue'
import Vuex from 'vuex'
import {
  CHANGE_TRIAL, CHANGE_MEMBERS, START_TRIAL, FORM_RESET
} from './mutation-types'
import trialInfo from './trialInfo'

Vue.use(Vuex)

const state = {
  trial: 1000,
  members: '',
  guruguru: '',
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
  guruguru: state => state.guruguru,
  ranking: state => state.ranking,
  is_ranking: (state) => {
    return typeof state.ranking !== 'undefined' && state.ranking.length > 0
  }
}

const mutations = {
  [CHANGE_TRIAL] (state, trial) {
    state.trial = trial
  },
  [CHANGE_MEMBERS] (state, members) {
    state.members = members
  },
  [START_TRIAL] (state) {
    const splitMembers = state.members.trim().split('\n')
    state.ranking = []

    // ぐるぐるさせる
    state.interval = trialInfo.guruguru(state, splitMembers)

    // ランキングをつける
    const ranking = trialInfo.createRanking(state.trial, splitMembers)

    // 結果表示
    trialInfo.timeout(state, splitMembers, ranking, 0, 3000)
  },

  [FORM_RESET] (state) {
    state.trial = 1000
    state.members = []
    state.ranking = []
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
