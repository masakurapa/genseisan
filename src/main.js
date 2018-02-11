import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    members: [],
    rank: 1
  },
  mutations: {

    /**
     * ステートの初期化
     * @param {*} state   ステート
     * @param {*} payload ペイロード
     */
    resetTrialInfo (state, payload) {
      state.members = payload.members
      state.rank = 1
    },

    /**
     * スコアの更新
     * @param {*} state   ステート
     * @param {*} payload ペイロード
     */
    addScore (state, payload) {
      state.members[payload.index].score++
    },

    /**
     * ランキングを設定
     * @param {*} state   ステート
     * @param {*} payload ペイロード
     */
    setRanking (state, payload) {
      state.members[payload.index].rank = state.rank
      state.rank++
    }
  },
  getters: {
    /**
     * state.membersに詰めるオブジェクトを返す
     */
    getMemberObject (state) {
      return {
        index: null,
        name: null,
        score: 0,
        rank: null
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
