<template>
  <div id="app">
    <h1>厳正な抽選さん</h1>
    <trial-form></trial-form>

    <h2>厳正な抽選結果</h2>
    <trial-result></trial-result>
  </div>
</template>

<script>
import TrialForm from './components/TrialForm'
import TrialResult from './components/TrialResult'

export default {
  components: {
    TrialForm,
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
