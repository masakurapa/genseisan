export default {

  /**
   * ぐるぐる
   */
  shuffle: (state, list) => {
    let i = 0
    const count = list.length
    return setInterval(() => {
      state.shuffle = list[i]
      i = (i === count - 1) ? 0 : i + 1
    }, 100)
  },

  /**
   * 処理まち
   */
  timeout: (state, list, ranking, i, time) => {
    setTimeout(() => {
      clearInterval(state.interval)
      state.shuffle = ''
      state.ranking.push(ranking[i])

      if (i + 1 < ranking.length) {
        state.interval = this.a.shuffle(state, list)
        this.a.timeout(state, list, ranking, i + 1, time)
      } else {
        state.isRunTrial = false
      }
    }, time)
  },

  /**
   * 抽選開始
   */
  createRanking: (trial, members, callback) => {
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
        memList.splice(index, 1)
        count--
      }
    }

    callback(ranking)
  }
}
