<template>
  <div id="app">
    <h1>厳正な抽選さん</h1>
    <TrialInfo/>

    <h2>厳正な抽選結果</h2>
    <TrialResult/>
  </div>
</template>

<script>
import TrialInfo from './components/TrialInfo'
import TrialResult from './components/TrialResult'

export default {
  name: 'App',
  components: {
    TrialInfo,
    TrialResult
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
