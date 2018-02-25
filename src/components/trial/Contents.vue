<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm9 md6>
        <v-card>
          <trial-form></trial-form>
        </v-card>
      </v-flex>

      <v-flex d-flex xs12 sm9 md5>
        <v-card>
          <trial-result></trial-result>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Form from './Form'
import Result from './Result'

export default {
  components: {
    'trial-form': Form,
    'trial-result': Result
  }
}
</script>
