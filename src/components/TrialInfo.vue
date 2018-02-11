<template>
  <div>
    <div>
      試行回数： <input type="text" v-model.trim.number="trial">
    </div>
    <div>
      試行対象： <textarea v-model.trim="members" rows="10" cols="50"></textarea>
    </div>
    <div>
      <button v-on:click="start">抽選スタート！！</button>
      <button v-on:click="reset">リセット</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrialInfo',
  data () {
    return {
      trial: 1000,
      members: '',

      /**
       * 抽選開始
       */
      start: (event) => {
        const members = this.members.split('\n')
        const obj = this.$store.getters.getMemberObject
        const memList = []
        members.forEach((val, i) => {
          const newObj = Object.assign({}, obj)
          newObj.index = i
          newObj.name = val
          memList.push(newObj)
        })

        // ストアのリセット
        this.$store.commit('resetTrialInfo', {members: memList})

        // オブジェクトをコピーしておく
        const tmpMembers = Object.assign([], memList)
        let count = tmpMembers.length

        setInterval(() => {
          if (tmpMembers.length > 0) {
            const index = Math.floor(Math.random() * count)
            const payload = {index: tmpMembers[index].index}
            this.$store.commit('addScore', payload)

            // スコアが試行回数に到達
            if (this.$store.state.members[tmpMembers[index].index].score === this.trial) {
              this.$store.commit('setRanking', payload)
              tmpMembers.splice(index, 1)
              count--
            }
          } else {
            return false
          }
        }, 1)
      },

      /**
       * リセット
       */
      reset: (event) => {
        this.trial = 100000
        this.members = ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
