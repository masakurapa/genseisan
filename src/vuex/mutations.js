import {
  CHANGE_TRIAL, CHANGE_MEMBERS, CHANGE_NUMBER, START_TRIAL, FORM_RESET
} from './mutation-types'

/**
 * ぐるぐる
 */
function shuffle (state, list) {
  let i = 0
  const count = list.length
  return setInterval(() => {
    state.shuffle = list[i]
    i = (i === count - 1) ? 0 : i + 1
  }, 100)
}

/**
 * 処理まち
 */
function timeout (state, list, ranking, i, time) {
  setTimeout(() => {
    clearInterval(state.interval)
    state.shuffle = ''
    state.ranking.push(ranking[i])

    if (i + 1 < ranking.length) {
      state.interval = shuffle(state, list)
      timeout(state, list, ranking, i + 1, time)
    } else {
      state.isRunTrial = false
      // 履歴を保持
      state.history.push({
        trial: state.trial.value,
        number: state.number.value,
        ranking: ranking
      })
    }
  }, time)
}

/**
 * ランキング生成
 */
function createRanking (trial, members, number, callback) {
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
    if (memList[index].score === trial) {
      ranking.push(memList[index])
      // ここで抽選人数に達したら終わる
      if (ranking.length === number) {
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

  /**
   * 試行対象のchangeイベント
   */
  [CHANGE_MEMBERS] (state, members) {
    state.members.error = ''
    state.members.value = members.trim()

    if (state.members.value === '') {
      state.members.error = '入れて'
    } else {
      // numberの上限を変える
      const split = state.members.value.split('\n').filter(v => v.trim())
      state.number.max = split.length

      if (split.length > 15) {
        state.members.error = '15行以上はやめて'
      }
    }
  },

  /**
   * 抽選人数のchangeイベント
   */
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

  /**
   * 抽選開始
   */
  [START_TRIAL] (state) {
    state.isRunTrial = true

    const splitMembers = state.members.value.split('\n').filter(v => v.trim())
    state.ranking = []

    // ぐるぐるさせる
    state.interval = shuffle(state, splitMembers)

    // ランキングをつける
    createRanking(state.trial.value, splitMembers, state.number.value, (ranking) => {
      // 結果表示
      timeout(state, splitMembers, ranking, 0, 1000)
    })
  },

  /**
   * フォームの初期化
   */
  [FORM_RESET] (state) {
    state.trial = {value: 100000, error: ''}
    state.members = {value: '', error: ''}
    state.number = {value: 1, max: 1, error: ''}
    state.shuffle = ''
    state.ranking = []
  }
}
