import {
  CHANGE_TRIAL, CHANGE_MEMBERS, CHANGE_NUMBER, START_TRIAL, FORM_RESET
} from './mutation-types'

/**
 * 結果表示
 */
function putResult (state, list, ranking, i, time) {
  setTimeout(() => {
    ranking.forEach((item) => {
      state.ranking.push(item)
    })

    state.isProgress = false
    state.isRunTrial = false
    // 履歴を保持
    state.history.push({
      trial: state.trial.value,
      number: state.number.value,
      ranking: ranking
    })
  }, time)
}

/**
 * ランキング生成
 */
function createRanking (state, members, callback) {
  // 集計用のオブジェクト
  const obj = {
    index: null,
    name: null,
    score: 0
  }

  const memList = []
  members.forEach((val, i) => {
    const newObj = Object.assign({}, obj)
    newObj.index = i
    newObj.name = val
    memList.push(newObj)
  })

  let count = memList.length
  const ranking = []

  while (count > 0) {
    // ランダムで選出したメンバーのスコアを加算
    const index = Math.floor(Math.random() * count)
    memList[index].score++

    // スコアが試行回数に到達
    if (memList[index].score === state.trial.value) {
      ranking.push(memList[index])
      // ここで抽選人数に達したら終わる
      if (ranking.length === state.number.value) {
        break
      }

      memList.splice(index, 1)
      count--
    }
  }

  callback(ranking)
}

export default {
  /**
   * 試行回数のchangeイベント
   */
  [CHANGE_TRIAL] (state, trial) {
    state.trial.value = parseInt(trial)
  },

  /**
   * 試行対象のchangeイベント
   */
  [CHANGE_MEMBERS] (state, members) {
    state.members.value = members.trim()

    const split = state.members.value.split('\n').filter(v => v.trim())
    state.number.max = split.length === 0 ? 1 : split.length
  },

  /**
   * 抽選人数のchangeイベント
   */
  [CHANGE_NUMBER] (state, number) {
    state.number.value = parseInt(number)
  },

  /**
   * 抽選開始
   */
  [START_TRIAL] (state) {
    state.isRunTrial = true
    state.isProgress = true

    const splitMembers = state.members.value.split('\n').filter(v => v.trim())
    state.ranking = []

    // ランキングをつける
    createRanking(state, splitMembers, (ranking) => {
      // 結果表示
      putResult(state, splitMembers, ranking, 0, 2000)
    })
  },

  /**
   * フォームの初期化
   */
  [FORM_RESET] (state) {
    state.trial = {value: 100000}
    state.members = {value: ''}
    state.number = {value: 1, max: 1}
    state.ranking = []
  }
}
