<template>
  <div>
    <h1><img class="title-img" src="./assets/img/title.png"></h1>

    <div class="wrapper">
      <div class="form-area">
        <h2><img class="sub-title-img" src="./assets/img/data.png"></h2>
        <trial-form></trial-form>
      </div>

      <div class="button-area">
        <trial-button></trial-button>
      </div>

      <div class="result-area">
        <h2><img class="sub-title-img" src="./assets/img/result.png"></h2>
        <trial-result></trial-result>
      </div>
    </div>

    <div class="history-area">
       <h2><img class="sub-title-img" src="./assets/img/history.png"></h2>
       <trial-history></trial-history>
    </div>
  </div>
</template>

<script>
import TrialButton from './components/TrialButton'
import TrialForm from './components/TrialForm'
import TrialResult from './components/TrialResult'
import TrialHistory from './components/TrialHistory'

export default {
  components: {
    TrialButton,
    TrialForm,
    TrialResult,
    TrialHistory
  }
}
</script>

<style>
body {
  background: #F5FFFA;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: 'Hannotate SC','Chalkboard SE','ＭＳ 明朝', 'MS Mincho',sans-serif;
}

.wrapper {
  width: 1000px;
  margin: 0 auto;
  overflow: hidden;
}

.form-area {
  width: 400px;
  float: left;
  margin: 0px 0px 0px 0px
}

.button-area {
  width: 150px;
  float: left;
  margin: 80px 0px 0px 0px
}

.result-area {
  width: 450px;
  float: left;
  margin: 0px 0px 0px 0px
}

.title-img {
  width: auto;
  height: 60px;
}

.sub-title-img {
  width: auto;
  height: 40px;
}
</style>
