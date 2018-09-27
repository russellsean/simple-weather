<template>
  <v-container fluid>
    <pre>{{weather}}</pre>
  </v-container>
</template>

<script>
import { db } from '../main'
export default {
  data() {
    return {
      weather:[],
    }
  },
  firestore () {
    return {
      weather: db.collection('cities')
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
